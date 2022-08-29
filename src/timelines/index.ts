import { Timeline } from "../types";
import * as P1S from "./P1S";
import * as P2S from "./P2S";
import * as P3S from "./P3S";
import * as P4S from "./P4S";
import * as P4Sp2 from "./P4Sp2";
import * as EndsingerEX from "./EndsingerEX";
import * as BarbaricciaEX from "./BarbaricciaEX";

export const TimelineObjects = {
  P1S,
  P2S,
  P3S,
  P4S,
  EndsingerEX,
  BarbaricciaEX,
};

type TimelinesByZoneID = Partial<Record<number, Timeline | Timeline[]>>;

export const Timelines: TimelinesByZoneID = {
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
      PLD: P3S.PLDEvents,
    },
  },
  [P4S.zoneID]: [
    {
      zoneID: P4S.zoneID,
      zoneName: P4S.zoneName,
      bossEvents: P4S.BossEvents,
      playerEventsByJob: {
        SCH: P4S.SCHEvents,
      },
    },
    {
      zoneID: P4Sp2.zoneID,
      zoneName: P4Sp2.zoneName,
      bossEvents: P4Sp2.BossEvents,
      playerEventsByJob: {
        SCH: P4Sp2.SCHEvents,
      },
    },
  ],
  [EndsingerEX.zoneID]: {
    zoneID: EndsingerEX.zoneID,
    zoneName: EndsingerEX.zoneName,
    bossEvents: EndsingerEX.BossEvents,
    playerEventsByJob: {
      SCH: EndsingerEX.SCHEvents,
    },
  },
  [BarbaricciaEX.zoneID]: {
    zoneID: BarbaricciaEX.zoneID,
    zoneName: BarbaricciaEX.zoneName,
    bossEvents: BarbaricciaEX.BossEvents,
    playerEventsByJob: {
      SCH: BarbaricciaEX.SCHEvents,
      BRD: BarbaricciaEX.BRDevents,
    },
  },
};

export function getTimelines(zoneID: number | null): Timeline | Timeline[] {
  if (zoneID) {
    const timelines = Timelines[zoneID];
    if (timelines) {
      return timelines;
    }
  }

  return {
    zoneID: 0,
    zoneName: "",
    bossEvents: [],
    playerEventsByJob: {},
  };
}
