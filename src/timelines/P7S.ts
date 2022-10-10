import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1086;
export const zoneName = "P7S";

interface P7BossEvents extends TimelineBossEvent {
  actionName:
    | "Spark of Life"
    | "Dispersed Aero II (double)"
    | "Blades of Attis"
    | "Immortal's Obol"
    | "Forbidden Fruit"
    | "Holy III (lp)"
    | "Bough of Attis"
    | "Condensed Aero II (shared)"
    | "Inviolate Bonds"
    | "Roots of Attis"
    | "Multicast"
    | "Inviolate Purgation"
    | "Light of Life"
    | "Glare"
    | "Famine's Harvest"
    | "Death's Harvest"
    | "War's Harvest"

    // Others
    | "hit"
    | "hit (lp)";
}

export const BossEvents: P7BossEvents[] = [
  {
    actionName: "Spark of Life",
    timestamp: ["0:07", "0:11"],
    type: "rw",
  },
  {
    actionName: "Dispersed Aero II (double)",
    timestamp: ["0:18", "0:24"],
    type: "tb",
  },
  {
    actionName: "Blades of Attis",
    timestamp: ["0:30", "0:32"],
    type: "normal",
  },
  {
    actionName: "Immortal's Obol",
    timestamp: ["0:36", "0:43"],
    type: "rw",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["0:54", "0:57"],
    type: "normal",
  },
  {
    actionName: "Holy III (lp)",
    timestamp: ["1:06", "1:09"],
  },
  {
    actionName: "Bough of Attis",
    timestamp: ["1:13", "1:18"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["1:19"],
    type: "rw",
  },
  {
    actionName: "Condensed Aero II (shared)",
    timestamp: ["1:24", "1:30"],
    type: "tb",
  },
  {
    actionName: "Spark of Life",
    timestamp: ["1:36", "1:41"],
    type: "rw",
  },
  {
    actionName: "Inviolate Bonds",
    timestamp: ["1:47", "1:50"],
    type: "normal",
  },
  {
    actionName: "Bough of Attis",
    timestamp: ["1:55", "2:00"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["2:01"],
    type: "rw",
  },
  {
    actionName: "hit",
    timestamp: ["2:13"],
    type: "rw",
  },
  {
    actionName: "Roots of Attis",
    timestamp: ["2:14", "2:17"],
    type: "normal",
  },
  {
    actionName: "Condensed Aero II (shared)",
    timestamp: ["2:29", "2:35"],
    type: "tb",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["2:41", "2:44"],
    type: "normal",
  },
  {
    actionName: "Multicast",
    timestamp: ["2:52", "2:54"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["3:05"],
    type: "rw",
  },
  {
    actionName: "Roots of Attis",
    timestamp: ["3:10", "3:12"],
    type: "normal",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["3:20", "3:23"],
    type: "normal",
  },
  {
    actionName: "Holy III (lp)",
    timestamp: ["3:33", "3:35"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["3:42"],
    type: "rw",
  },
  {
    actionName: "Bough of Attis",
    timestamp: ["3:54", "3:59"],
    type: "normal",
  },
  {
    actionName: "Dispersed Aero II (double)",
    timestamp: ["4:10", "4:16"],
    type: "tb",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["4:20", "4:24"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["4:45"],
    type: "rw",
  },
  {
    actionName: "Blades of Attis",
    timestamp: ["4:50", "4:53"],
    type: "normal",
  },
  {
    actionName: "Multicast",
    timestamp: ["4:57", "4:59"],
    type: "normal",
  },
  // TODO check this
  {
    actionName: "hit (lp)",
    timestamp: ["5:08"],
    type: "rw",
  },
  {
    actionName: "Dispersed Aero II (double)",
    timestamp: ["5:16", "5:21"],
    type: "tb",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["5:28", "5:31"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["5:54"],
    type: "rw",
  },
  {
    actionName: "Spark of Life",
    timestamp: ["5:57", "6:01"],
    type: "rw",
  },
  {
    actionName: "Immortal's Obol",
    timestamp: ["6:09", "6:15"],
    type: "rw",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["6:20", "6:23"],
    type: "normal",
  },
  {
    actionName: "Inviolate Purgation",
    timestamp: ["6:30", "6:34"],
    type: "normal",
  },
  {
    actionName: "Light of Life",
    timestamp: ["6:40", "7:07"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["6:46"],
    type: "rw",
  },
  {
    actionName: "hit",
    timestamp: ["7:01"],
    type: "rw",
  },
  {
    actionName: "hit",
    timestamp: ["7:09"],
    type: "rw",
  },
  {
    actionName: "Light of Life",
    timestamp: ["7:13", "7:39"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["7:16"],
    type: "rw",
  },
  {
    actionName: "hit",
    timestamp: ["7:31"],
    type: "rw",
  },
  {
    actionName: "hit",
    timestamp: ["7:40"],
    type: "rw",
  },
  {
    actionName: "Forbidden Fruit",
    timestamp: ["7:51", "7:54"],
    type: "normal",
  },
  {
    actionName: "Roots of Attis",
    timestamp: ["8:02", "8:04"],
    type: "normal",
  },
  {
    actionName: "Glare",
    timestamp: ["8:07", "8:12"],
    type: "normal",
  },
  {
    actionName: "Famine's Harvest",
    timestamp: ["8:23", "8:26"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["8:48"],
    type: "rw",
  },
  {
    actionName: "Death's Harvest",
    timestamp: ["8:55", "8:58"],
  },
  {
    actionName: "hit",
    timestamp: ["9:20"],
    type: "rw",
  },
  {
    actionName: "War's Harvest",
    timestamp: ["9:28", "9:31"],
  },
  {
    actionName: "hit",
    timestamp: ["9:54"],
    type: "rw",
  },
  {
    actionName: "Spark of Life",
    timestamp: ["10:01", "10:05"],
    type: "rw",
  },
  {
    actionName: "Holy III (lp)",
    timestamp: ["10:13", "10:15"],
  },
  {
    actionName: "Bough of Attis",
    timestamp: ["10:19", "10:24"],
    type: "normal",
  },
  {
    actionName: "hit",
    timestamp: ["10:25"],
    type: "rw",
  },
  {
    actionName: "Spark of Life",
    timestamp: ["10:37", "10:41"],
    type: "rw",
  },
  {
    actionName: "Spark of Life",
    timestamp: ["10:50", "10:54"],
    type: "rw",
  },
];

/*
    {
        actionName: '',
        timestamp: ['10:00', '10:00'],
        type: 'normal'
    },
*/

export const BRDEvents: TimelinePlayerEvent[] = [
  // Troubadour
  // #region
  {
    actionName: "Troubadour",
    timestamp: ["1:58"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["3:30"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["5:02"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["7:29"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["9:52"],
    type: "gcd",
  },
  // #endregion

  // Potions
  {
    actionName: "Grade 7 Tincture of Dexterity",
    type: "gcd",
    timestamp: ["2:00"],
  },
  {
    actionName: "Grade 7 Tincture of Dexterity",
    type: "gcd",
    timestamp: ["8:20"],
  },
];

export const PLDEventsReprisalAoE: TimelinePlayerEvent[] = [
  // #region Reprisal
  {
    actionName: "Reprisal",
    timestamp: ["0:08"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["1:35"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["3:00"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["4:40"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["5:52"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["7:00"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["8:44"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["10:00"],
    type: "gcd",
  },
  // #endregion Reprisal

  // #region Passage of Arms
  // Recast 120s
  {
    actionName: "Passage of Arms",
    timestamp: ["1:38"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["5:58"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["10:01"],
    type: "gcd",
  },
  // #endregion

  // #region Divine Veil
  // Recast 90s
  {
    actionName: "Divine Veil",
    timestamp: ["0:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["1:59"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["3:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["5:00"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["6:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["8:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["10:10"],
    type: "gcd",
  },
  // #endregion

  // #region Rampart
  // Recast 90s
  {
    actionName: "Rampart",
    timestamp: ["0:19"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["2:29"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["5:16"],
    type: "gcd",
  },
  // #endregion

  // #region Sentinel
  // Recast 120s
  {
    actionName: "Sentinel",
    timestamp: ["1:24"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["4:10"],
    type: "gcd",
  },
  // #endregion

  {
    actionName: "(no more hallowed ground)",
    timestamp: ["2:10"],
    type: "ogcd",
  },

  {
    actionName: "Hallowed Ground",
    timestamp: ["0:19.7"],
    type: "ogcd",
  },
  {
    actionName: "Hallowed Ground",
    timestamp: ["1:24.7"],
    type: "ogcd",
  },
  {
    actionName: "Hallowed Ground",
    timestamp: ["9:16"],
    type: "gcd",
  },

  // Potions
  {
    actionName: "Grade 7 Tincture of Strength",
    type: "gcd",
    timestamp: ["2:00"],
  },
  {
    actionName: "Grade 7 Tincture of Strength",
    type: "gcd",
    timestamp: ["8:00"],
  },
];

export const PLDEventsReprisalTB: TimelinePlayerEvent[] = [
  // #region Reprisal
  {
    actionName: "Reprisal",
    timestamp: ["0:17"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["1:22"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["2:27"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["4:08"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["5:14"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["7:07"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["9:13"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["10:22"],
    type: "gcd",
  },
  // #endregion Reprisal

  // #region Passage of Arms
  // Recast 120s
  {
    actionName: "Passage of Arms",
    timestamp: ["1:38"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["5:58"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["10:01"],
    type: "gcd",
  },
  // #endregion

  // #region Divine Veil
  // Recast 90s
  {
    actionName: "Divine Veil",
    timestamp: ["0:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["1:59"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["3:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["5:00"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["6:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["8:30"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["10:10"],
    type: "gcd",
  },
  // #endregion

  // #region Rampart
  // Recast 90s
  {
    actionName: "Rampart",
    timestamp: ["0:19"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["2:29"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["5:16"],
    type: "gcd",
  },
  // #endregion

  // #region Sentinel
  // Recast 120s
  {
    actionName: "Sentinel",
    timestamp: ["1:24"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["4:10"],
    type: "gcd",
  },
  // #endregion

  {
    actionName: "(no more hallowed ground)",
    timestamp: ["2:10"],
    type: "ogcd",
  },

  {
    actionName: "Hallowed Ground",
    timestamp: ["0:19.7"],
    type: "ogcd",
  },
  {
    actionName: "Hallowed Ground",
    timestamp: ["1:24.7"],
    type: "ogcd",
  },
  {
    actionName: "Hallowed Ground",
    timestamp: ["9:16"],
    type: "gcd",
  },

  // Potions
  {
    actionName: "Grade 7 Tincture of Strength",
    type: "gcd",
    timestamp: ["2:00"],
  },
  {
    actionName: "Grade 7 Tincture of Strength",
    type: "gcd",
    timestamp: ["8:20"],
  },
];
