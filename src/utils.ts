import { TimelineEvent } from "./types";

export function getSecondsFromString(durationStr: string) {
  const result = durationStr.match(
    /(?<minutesStr>\d+):(?<secondsStr>\d+.?\d+)/
  );
  if (result?.groups) {
    const { minutesStr, secondsStr } = result.groups;
    const minutes = Number.parseInt(minutesStr, 10);
    const seconds = Number.parseFloat(secondsStr);
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

    if (!endInput) {
      return 0;
    }

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

    // if (current.actionName.includes("ENRAGE")) {
    //   console.log({
    //     currentDuration,
    //     currentStart,
    //     prevDuration,
    //     prevStart,
    //   });
    // }

    if (currentStart + currentDuration > prevStart + prevDuration) {
      return current;
    }
    return prev;
  });

  const x = getDuration(timeline.at(-1)!);

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

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function exponentialBackoff<TResponse>(args: {
  fn: () => Promise<TResponse>;
  shouldRetry: (r: TResponse) => boolean;
  retryCount: number;
}) {
  const { fn, shouldRetry, retryCount } = args;

  let count = 0;
  const result = await (async function execute(): Promise<TResponse> {
    const response = await fn();
    const retrying = shouldRetry(response);

    if (retrying && count++ < retryCount) {
      await delay(400 * count);
      return execute();
    }

    return response;
  })();

  return result;
}
