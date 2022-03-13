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

export function eventId(event: TimelineEvent) {
  const start = Array.isArray(event.timestamp)
    ? event.timestamp[0]
    : event.timestamp;
  return `${event.actionName}--${start}`;
}

export function getDuration(event: TimelineEvent) {
  if (Array.isArray(event.timestamp)) {
    const [startInput, endInput] = event.timestamp;

    const start =
      typeof startInput === "number"
        ? startInput
        : typeof startInput === "string"
        ? getSecondsFromString(startInput)
        : 0;

    const end =
      typeof endInput === "number"
        ? endInput
        : typeof endInput === "string"
        ? getSecondsFromString(endInput)
        : 0;

    return end - start;
  }

  return 0;
}

export function getStart(event: TimelineEvent) {
  const start = Array.isArray(event.timestamp)
    ? event.timestamp[0]
    : event.timestamp;

  if (typeof start === "number") {
    return start;
  }

  const startSeconds = getSecondsFromString(start);
  return startSeconds;
}

export function getLastEventFinishTime(timeline: TimelineEvent[]) {
  if (timeline.length === 0) {
    return 0;
  }

  const lastEvent = timeline.reduce((prev, current) => {
    const currentDuration = getDuration(current);
    const currentStart = getStart(current);
    const prevDuration = getDuration(prev);
    const prevStart = getStart(prev);

    if (currentStart + currentDuration > prevStart + prevDuration) {
      return current;
    }
    return prev;
  });

  const lastEventStart = getStart(lastEvent);

  const lastDuration = getDuration(lastEvent);
  const lastEventFinishTime = lastEventStart + lastDuration;
  return lastEventFinishTime;
}

export function getTimelineFromTSV(tsv: string) {
  const arrayStr = tsv
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [start, ending, actionName] = line.split("\t");

      if (start) {
        return `
          {
            actionName: "${actionName}",
            cast: "long",
            ...getStartAndDuration("${start}", "${ending}"),
          },
        `.trim();
      }

      return `
      {
        actionName: "${actionName}",
        cast: "instant",
        start: getSecondsFromString("${ending}"),
      },
    `.trim();
    });

  return arrayStr;
}
