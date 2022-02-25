import { Job, TimelineBossEvent, TimelinePlayerEvent } from "../types";
import * as P2S from "./P2S";

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
  [P2S.zoneID]: {
    zoneID: P2S.zoneID,
    zoneName: P2S.zoneName,
    bossEvents: P2S.BossEvents,
    playerEventsByJob: {
      SCH: P2S.SCHEvents,
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
