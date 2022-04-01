import querystring from "querystring";
import clsx from "clsx";
import formatDuration from "format-duration";
import { useState, useEffect } from "react";
import {
  XIVAPISearchSuccessResponse,
  Job,
  ActionSearchResponse,
  Timeline,
} from "../../types";
import { useTimer } from "../../useTimer";
import { eventId, getLastEventFinishTime, getStart } from "../../utils";
import { Castbar } from "../Castbar/Castbar";
import { PlayerAction } from "../PlayerAction/PlayerAction";

import "./TimelineUI.css";

type AnimationPlayState = "stopped" | "running" | "paused";

type TimelineProps = {
  overlay: boolean;
  zoneName: string | null;
  isCombatActive: boolean;
  timelines: Timeline | Timeline[];
};

export function TimelineUI({
  overlay,
  zoneName,
  isCombatActive,
  timelines,
}: TimelineProps) {
  const [animationPlayState, setAnimationPlayState] =
    useState<AnimationPlayState>("stopped");

  useEffect(() => {
    if (isCombatActive && animationPlayState !== "running") {
      setAnimationPlayState("running");
    }
    if (!isCombatActive && animationPlayState === "running") {
      setAnimationPlayState("stopped");
    }
  }, [isCombatActive]);

  const [timelineIndex, setTimelineIndex] = useState(0);

  const { bossEvents, playerEventsByJob } = Array.isArray(timelines)
    ? timelines[timelineIndex]
    : timelines;

  const jobsInTimeline = Object.keys(playerEventsByJob) as Job[];

  const [firstJobInTimeline] = jobsInTimeline;
  const [selectedJob, setSelectedJob] = useState(jobsInTimeline[0]);
  useEffect(() => {
    if (firstJobInTimeline) {
      setSelectedJob(firstJobInTimeline);
    }
  }, [firstJobInTimeline]);

  const seconds = useTimer({ start: animationPlayState === "running" });

  const datetime = formatDuration(seconds * 1000);
  const playerEvents = playerEventsByJob[selectedJob] || [];
  const lastEventFinishTime = getLastEventFinishTime(bossEvents);

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

      <div className="Timeline--controls">
        <div className="Timeline--info">
          <div className="Timeline--time-and-zone">
            <time dateTime={datetime}>{datetime}</time> {zoneName}
          </div>

          {Array.isArray(timelines) && timelines.length > 1 && (
            <select
              id="phase"
              name="phase"
              value={timelineIndex}
              onChange={(e) =>
                setTimelineIndex(Number.parseInt(e.currentTarget.value, 10))
              }
            >
              {timelines.map((_, i) => (
                <option key={i} value={i}>
                  Phase {i + 1}
                </option>
              ))}
            </select>
          )}

          {jobsInTimeline.length > 1 && (
            <select
              id="job"
              name="job"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.currentTarget.value as Job)}
            >
              {jobsInTimeline.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          {!overlay && (
            <>
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
            </>
          )}
        </div>
      </div>
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
