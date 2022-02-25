import clsx from "clsx";
import formatDuration from "format-duration";
import { useState, useEffect } from "react";
import { TimelinePlayerEvent, TimelineBossEvent } from "../../types";
import { useTimer } from "../../useTimer";
import { useWebSocket } from "../../useWebSocket";
import { eventId, getLastEventFinishTime } from "../../utils";
import { Castbar } from "../Castbar/Castbar";
import { PlayerAction } from "../PlayerAction/PlayerAction";

import "./Timeline.css";

type AnimationPlayState = "stopped" | "running" | "paused";

type TimelineProps = {
  zoneName: string | null;
  isCombatActive: boolean;
  playerEvents: TimelinePlayerEvent[];
  bossEvents: TimelineBossEvent[];
};

export function Timeline({
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
              ["--event-start" as any]: event.start,
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
              ["--event-start" as any]: event.start,
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
          Play/Pause
        </button>

        <button
          onClick={() => setAnimationPlayState("stopped")}
          disabled={animationPlayState === "stopped"}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
