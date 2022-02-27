export type TimelinePlayerEvent = {
  actionName: string;
  type: "gcd" | "ogcd";
  start: number;
};

export type TimelineBossEvent =
  | {
      actionName: string;
      cast: "long";
      start: number;
      duration: number;
      tankBuster?: boolean;
    }
  | {
      actionName: string;
      cast: "instant";
      start: number;
      tankBuster?: boolean;
    };

export type TimelineEvent = TimelinePlayerEvent | TimelineBossEvent;

export type Job = "SCH";

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

// https://xivapi.com/search?filters=ClassJob.ClassJobCategory.SCH=1,ClassJobCategory.SCH=1,ActionCategory.ID|=[2;4]&indexes=Action&columns=ID,Name,Description,Icon,Url,UrlType,Recast100ms,MaxCharges,ActionCategory.ID,ActionCategory.Name,ClassJobLevel
/*
    ID
    Name
    Description
    Icon
    Url
    UrlType
    Recast100ms
    MaxCharges
    */
