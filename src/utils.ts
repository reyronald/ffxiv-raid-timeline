import { TimelineEvent } from "./types";

export function getSecondsFromString(durationStr: string) {
  const result = durationStr.match(/(?<minutesStr>\d+):(?<secondsStr>\d+)/);
  if (result?.groups) {
    const { minutesStr, secondsStr } = result.groups;
    const minutes = Number.parseInt(minutesStr, 10);
    const seconds = Number.parseInt(secondsStr, 10);
    const duration = minutes * 60 + seconds;
    return duration;
  }
  throw new Error("Could not parse " + durationStr);
}

export function getStartAndDuration(startStr: string, endStr: string) {
  const start = getSecondsFromString(startStr);
  const end = getSecondsFromString(endStr);
  const duration = end - start;
  return { start, duration };
}

export function eventId(event: TimelineEvent) {
  return `${event.actionName}--${event.start}`;
}

export function getDuration(event: TimelineEvent) {
  const eventDuration = "duration" in event ? event.duration : 0;
  return eventDuration;
}

export function getLastEventFinishTime(timeline: TimelineEvent[]) {
  if (timeline.length === 0) {
    return 0;
  }

  const lastEvent = timeline.reduce((prev, current) => {
    const currentDuration = getDuration(current);
    const prevDuration = getDuration(prev);
    if (current.start + currentDuration > prev.start + prevDuration) {
      return current;
    }
    return prev;
  });

  const lastDuration = getDuration(lastEvent);
  const lastEventFinishTime = lastEvent.start + lastDuration;
  return lastEventFinishTime;
}
