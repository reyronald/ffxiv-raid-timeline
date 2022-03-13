import { Job, TimelineBossEvent, TimelinePlayerEvent } from "../types";
import * as P1S from "./P1S";
import * as P2S from "./P2S";
import * as P3S from "./P3S";

export const TimelineObjects = { P1S, P2S, P3S };

type Timeline = Record<
  number,
  {
    zoneID: number;
    zoneName: string;
    bossEvents: TimelineBossEvent[];
    playerEventsByJob: Record<Job, TimelinePlayerEvent[]>;
  }
>;

export const Timelines: Timeline = {
  [P1S.zoneID]: {
    zoneID: P1S.zoneID,
    zoneName: P1S.zoneName,
    bossEvents: P1S.BossEvents,
    playerEventsByJob: {
      SCH: P1S.SCHEvents,
    },
  },
  [P2S.zoneID]: {
    zoneID: P2S.zoneID,
    zoneName: P2S.zoneName,
    bossEvents: P2S.BossEvents,
    playerEventsByJob: {
      SCH: P2S.SCHEvents,
    },
  },
  [P3S.zoneID]: {
    zoneID: P3S.zoneID,
    zoneName: P3S.zoneName,
    bossEvents: P3S.BossEvents,
    playerEventsByJob: {
      SCH: P3S.SCHEvents,
    },
  },
};

export function getTimeline(zoneID: number | null, job: Job) {
  if (zoneID) {
    const timeline = Timelines[zoneID];

    if (timeline) {
      const { zoneName, bossEvents, playerEventsByJob } = timeline;
      const playerEvents = playerEventsByJob[job] || [];
      return {
        zoneName,
        bossEvents,
        playerEvents,
      };
    }
  }

  return {
    zoneName: null,
    bossEvents: [],
    playerEvents: [],
  };
}
