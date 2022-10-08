import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  TimelinePlayerEvent,
  XIVAPISearchResponse,
  XIVAPISearchSuccessResponse,
} from "../../types";
import { exponentialBackoff } from "../../utils";

import "./PlayerAction.css";

type Props = {
  event: TimelinePlayerEvent;
};

export function PlayerAction({ event }: Props) {
  const iconUrl = useActionIcon(event.actionName);

  return (
    <div
      className={clsx(
        "PlayerAction",
        event.type === "ogcd" && "PlayerAction--ogcd"
      )}
      title={iconUrl ? undefined : event.actionName}
    >
      {iconUrl && (
        <img
          alt={event.actionName}
          title={event.actionName}
          src={iconUrl}
          width={40}
          height={40}
        />
      )}
    </div>
  );
}

const iconCache = new Map<string, Promise<string>>();

function useActionIcon(actionName: string) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const cachedIconPromise = iconCache.get(actionName);
    if (cachedIconPromise) {
      cachedIconPromise.then(setIcon);
      return;
    }

    if (actionName === "Sprint") {
      // https://xivapi.com/i/000000/000104.png
      const path = "/i/000000/000104.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else if (actionName === "Place") {
      // https://xivapi.com/i/000000/000527.png
      const path = "/i/000000/000527.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else if (actionName === "Swiftcast") {
      // https://xivapi.com/i/000000/000866.png
      const path = "/i/000000/000866.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else if (actionName.includes("Tincture of Dexterity")) {
      // https://xivapi.com/i/020000/020709.png
      const path = "/i/020000/020709.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else if (actionName.includes("Tincture of Strength")) {
      // https://xivapi.com/i/020000/020710.png
      const path = "/i/020000/020710.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else {
      // e.g. https://xivapi.com/search?string=Surecast&indexes=Action,Item&columns=ID,Icon,Name,Url,UrlType,Patch,ClassJobTargetID,IsPvP
      const promise = exponentialBackoff<
        XIVAPISearchResponse<{
          ID: number;
          Icon: string;
          Name: string;
          Patch: number;
          ClassJobLevel: number;
          IsPvP: 0 | 1;
        }>
      >({
        fn: () => {
          const url = `https://xivapi.com/search?string=${actionName}&indexes=Action,Item&columns=ID,Icon,Name,Url,UrlType,Patch,ClassJobLevel,IsPvP`;
          return fetch(url).then((r) => r.json());
        },
        shouldRetry: (r) => "Error" in r && r.ExCode === 429,
        retryCount: 3,
      }).then((response) => {
        if ("Error" in response && response.Error) {
          console.log(response);
          return "";
        }

        if ("Results" in response) {
          // Pick the action from the most recent Patch
          // to filter out deprecated, obsolete, or reeworked actions
          const results = response.Results.filter(
            (r) => r.Icon !== "/i/000000/000405.png"
          )
            .filter((r) => !r.IsPvP)
            .filter((r) => r.ClassJobLevel > 0)
            .sort((a, b) => b.Patch - a.Patch);
          const [result] = results;
          if (result) {
            return result.Icon;
          }
          console.info(`Got no results XIVAPI results for "${actionName}"`);
          return "";
        }

        console.error(response);

        throw new Error("Error getting response from XIVApi");
      });

      iconCache.set(actionName, promise);

      promise.then((path: string) => setIcon(path));
    }
  }, [actionName]);

  const iconUrl = icon ? `https://xivapi.com${icon}` : null;

  return iconUrl;
}
