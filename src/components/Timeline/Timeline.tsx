import querystring from "querystring";
import clsx from "clsx";
import formatDuration from "format-duration";
import { useState, useEffect } from "react";
import {
  TimelinePlayerEvent,
  TimelineBossEvent,
  XIVAPISearchSuccessResponse,
  Job,
  ActionSearchResponse,
} from "../../types";
import { useTimer } from "../../useTimer";
import { eventId, getLastEventFinishTime, getStart } from "../../utils";
import { Castbar } from "../Castbar/Castbar";
import { PlayerAction } from "../PlayerAction/PlayerAction";

import "./Timeline.css";

type AnimationPlayState = "stopped" | "running" | "paused";

type TimelineProps = {
  overlay: boolean;
  zoneName: string | null;
  isCombatActive: boolean;
  playerEvents: TimelinePlayerEvent[];
  bossEvents: TimelineBossEvent[];
};

export function Timeline({
  overlay,
  zoneName,
  isCombatActive,
  playerEvents,
  bossEvents,
}: TimelineProps) {
  const lastEventFinishTime = getLastEventFinishTime(bossEvents);

  const [animationPlayState, setAnimationPlayState] =
    useState<AnimationPlayState>("stopped");

  const seconds = useTimer({ start: animationPlayState === "running" });

  useEffect(() => {
    if (isCombatActive && animationPlayState !== "running") {
      setAnimationPlayState("running");
    }
    if (!isCombatActive && animationPlayState === "running") {
      setAnimationPlayState("stopped");
    }
  }, [isCombatActive]);

  const datetime = formatDuration(seconds * 1000);

  return (
    <div
      className={clsx(
        "Timeline",
        animationPlayState === "running" && "Timeline--animation",
        animationPlayState === "paused" &&
          "Timeline--animation Timeline--animation__paused"
      )}
      style={{
        ["--lastEventFinishTime" as any]: lastEventFinishTime,
      }}
    >
      <div className="Timeline--row Timeline--player">
        {playerEvents.map((event) => (
          <div
            key={eventId(event)}
            className="Timeline--event-position"
            style={{
              ["--event-start" as any]: getStart(event),
            }}
          >
            <PlayerAction key={eventId(event)} event={event} />
          </div>
        ))}
      </div>

      <div className="Timeline--row Timeline--boss">
        {bossEvents.map((event) => (
          <div
            key={eventId(event)}
            className="Timeline--event-position"
            style={{
              ["--event-start" as any]: getStart(event),
            }}
          >
            <Castbar event={event} />
          </div>
        ))}
      </div>

      <div id="legend" className="Timeline--legend">
        {Array.from({ length: lastEventFinishTime }).map((_, i) => (
          <div key={i} data-timestamp={formatDuration(i * 1000)}></div>
        ))}
      </div>

      {!overlay && (
        <div className="Timeline--controls">
          <div className="Timeline--time-and-zone">
            <time dateTime={datetime}>{datetime}</time> {zoneName}
          </div>

          <button
            onClick={() =>
              setAnimationPlayState((prev) =>
                prev === "running" ? "paused" : "running"
              )
            }
          >
            {animationPlayState === "running" ? "⏸ Pause" : "▶ Play"}
          </button>

          <button
            onClick={() => setAnimationPlayState("stopped")}
            disabled={animationPlayState === "stopped"}
          >
            ⏪ Restart
          </button>
        </div>
      )}
    </div>
  );
}

function useJobActions(job: Job) {
  const [actions, setActions] =
    useState<XIVAPISearchSuccessResponse<ActionSearchResponse> | null>(null);

  useEffect(() => {
    async function getActions(job: Job) {
      const qs = querystring.stringify({
        filters: [
          `ClassJob.ClassJobCategory.${job}=1`,
          `ClassJobCategory.${job}=1`,
          "ActionCategory.ID|=[2;4]",
        ].join(","),
        indexes: "Action",
        columns:
          "ID,Name,Description,Icon,Url,UrlType,Recast100ms,MaxCharges,ActionCategory.ID,ActionCategory.Name,ClassJobLevel",
      });
      const response = await fetch(`https://xivapi.com/search?${qs}`);
      const body: XIVAPISearchSuccessResponse<ActionSearchResponse> =
        await response.json();
      setActions(body);
    }

    getActions(job);
  }, []);

  return actions;
}
