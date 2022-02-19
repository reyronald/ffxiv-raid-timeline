import clsx from "clsx";
import { useEffect, useState } from "react";
import { TimelinePlayerEvent, XIVAPIResponse } from "../../types";

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
    } else if (actionName === "Surecast") {
      // https://xivapi.com/i/000000/000869.png
      const path = "/i/000000/000869.png";
      setIcon(path);
      iconCache.set(actionName, Promise.resolve(path));
    } else {
      // e.g. https://xivapi.com/search?indexes=Action&string=Expedient
      const promise = fetch(
        `https://xivapi.com/search?indexes=Action&string=${actionName}`
      )
        .then((r) => r.json())
        .then((response: XIVAPIResponse) => response.Results[0].Icon);
      iconCache.set(actionName, promise);

      promise.then((path: string) => setIcon(path));
    }
  }, [actionName]);

  const iconUrl = icon ? `https://xivapi.com${icon}` : null;

  return iconUrl;
}
