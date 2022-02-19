export type TimelineEvent = {
  actionName: string;
} & (
  | {
      source: "player";
      type: "gcd" | "ogcd";
      start: number;
    }
  | {
      source: "boss";
      cast: "long";
      start: number;
      duration: number;
      tankBuster?: boolean;
    }
  | {
      source: "boss";
      cast: "instant";
      start: number;
      tankBuster?: boolean;
    }
);

export type TimelinePlayerEvent = Extract<TimelineEvent, { source: "player" }>;

export type TimelineBossEvent = Extract<TimelineEvent, { source: "boss" }>;

export type XIVAPIResponse = {
  Pagination: {
    Page: number;
    PageNext: null | number;
    PagePrev: null | number;
    PageTotal: number;
    Results: number;
    ResultsPerPage: number;
    ResultsTotal: number;
  };
  Results: Array<{
    ID: number;
    Icon: string;
    Name: string;
  }>;
  SpeedMs: number;
};

// https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
export type WebSocketMessage =
  | {
      type: "broadcast";
      msgtype: "Chat";
      msg: string;
    }
  | {
      type: "broadcast";
      msgtype: "ChangeZone";
      msg: {
        type: "ChangeZone";
        zoneID: number;
        zoneName: string;
      };
    }
  | {
      type: "broadcast";
      msgtype: "SendCharName";
      msg: {
        type: "ChangePrimaryPlayer";
        charID: number;
        charName: string;
      };
    }
  | {
      type: "broadcast";
      msgtype: "CombatData";
      msg: {
        type: "CombatData";
        isActive: "false" | "true";
        Combatant: {
          YOU: {
            DURATION: string; // "6"
            duration: string; // "00:06"
            Job: string;
            name: string;
          };
        };
        Encounter: {
          CurrentZoneName: string;
          DURATION: string; // "6"
          duration: string; // "00:06"
          title: string;
        };
      };
    };
