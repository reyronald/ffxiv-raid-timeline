import { Job, TimelineBossEvent, TimelinePlayerEvent } from "../types";
import * as P1S from "./P1S";
import * as P2S from "./P2S";
import * as P3S from "./P3S";
import * as P4S from "./P4S";
import * as P4Sp2 from "./P4Sp2";

export const TimelineObjects = { P1S, P2S, P3S, P4S };

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
  // [P4S.zoneID]: {
  //   zoneID: P4S.zoneID,
  //   zoneName: P4S.zoneName,
  //   bossEvents: P4S.BossEvents,
  //   playerEventsByJob: {
  //     SCH: P4S.SCHEvents,
  //   },
  // },
  [P4Sp2.zoneID]: {
    zoneID: P4Sp2.zoneID,
    zoneName: P4Sp2.zoneName,
    bossEvents: P4Sp2.BossEvents,
    playerEventsByJob: {
      SCH: P4Sp2.SCHEvents,
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
