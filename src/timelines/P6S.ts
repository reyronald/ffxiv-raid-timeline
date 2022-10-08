import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1084;
export const zoneName = "P6S";

interface P6BossEvents extends TimelineBossEvent {
  actionName:
    | "Dark IV"
    | "Chelic Synergy"
    | "Aetheric Polyominoid"
    | "Unholy Darkness"
    | "Exocleaver"
    | "Pathogenic Cells"
    | "Aetherial Exchange"
    | "Exchange of Agonies"
    | "Choros Ixou"
    | "Synergy (double)"
    | "Transmission"
    | "Polyominoid Sigma"
    | "Dark Dome"
    | "Dark Ashes (spread)"
    | "Cachexia"
    | "Dual Predation"
    | "Ptera Ixou"
    | "Aetheric Polyominoid"
    | "Dark Sphere"
    | "Dark IV (ENRAGE)"

    // others
    | "hit"
    | "lp"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8";
}

export const BossEvents: P6BossEvents[] = [
  {
    actionName: "Dark IV",
    timestamp: ["0:09", "0:13"],
    type: "rw",
  },
  {
    actionName: "Chelic Synergy",
    timestamp: ["0:21", "0:27"],
    type: "tb",
  },
  {
    actionName: "Aetheric Polyominoid",
    timestamp: ["0:37", "0:41"],
  },
  {
    actionName: "Unholy Darkness",
    timestamp: ["0:44", "0:48"],
  },
  {
    actionName: "Exocleaver",
    timestamp: ["0:50", "0:53"],
  },
  {
    actionName: "lp",
    timestamp: ["0:57"],
    type: "rw",
  },
  {
    actionName: "Pathogenic Cells",
    timestamp: ["1:03", "1:10"],
  },
  {
    actionName: "1",
    timestamp: ["1:12"],
  },
  {
    actionName: "2",
    timestamp: ["1:14"],
  },
  {
    actionName: "3",
    timestamp: ["1:16"],
  },
  {
    actionName: "4",
    timestamp: ["1:18"],
  },
  {
    actionName: "5",
    timestamp: ["1:20"],
  },
  {
    actionName: "6",
    timestamp: ["1:22"],
  },
  {
    actionName: "7",
    timestamp: ["1:24"],
  },
  {
    actionName: "8",
    timestamp: ["1:26"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["1:34", "1:36"],
  },
  {
    actionName: "Exchange of Agonies",
    timestamp: ["1:39", "1:43"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["1:46", "1:50"],
  },
  {
    actionName: "hit",
    timestamp: ["1:51"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["1:54"],
  },
  {
    actionName: "Synergy (double)",
    timestamp: ["2:01", "2:08"],
    type: "tb",
  },
  {
    actionName: "Dark IV",
    timestamp: ["2:16", "2:20"],
    type: "rw",
  },
  {
    actionName: "Transmission",
    timestamp: ["2:28", "2:32"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["2:40", "2:45"],
  },
  {
    actionName: "2",
    timestamp: ["2:49"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["2:55", "2:57"],
  },
  {
    actionName: "Polyominoid Sigma",
    timestamp: ["3:01", "3:04"],
  },
  {
    actionName: "Dark Dome",
    timestamp: ["3:10", "3:14"],
  },
  {
    actionName: "hit",
    timestamp: ["3:19"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["3:26", "3:28"],
  },
  {
    actionName: "Exchange of Agonies",
    timestamp: ["3:32", "3:35"],
  },
  {
    actionName: "Exocleaver",
    timestamp: ["3:39", "3:42"],
  },
  {
    actionName: "lp",
    timestamp: ["3:43"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["3:46"],
  },
  {
    actionName: "Chelic Synergy",
    timestamp: ["3:52", "3:58"],
    type: "tb",
  },
  {
    actionName: "Dark IV",
    timestamp: ["4:06", "4:10"],
    type: "rw",
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["4:18", "4:20"],
  },
  {
    actionName: "Polyominoid Sigma",
    timestamp: ["4:24", "4:28"],
  },
  {
    actionName: "Unholy Darkness",
    timestamp: ["4:31", "4:34"],
  },
  {
    actionName: "lp",
    timestamp: ["4:40"],
    type: "rw",
  },
  {
    actionName: "Dark Ashes (spread)",
    timestamp: ["4:49", "4:55"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["4:57", "5:01"],
  },
  {
    actionName: "hit",
    timestamp: ["5:02"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["5:05"],
  },
  {
    actionName: "Cachexia",
    timestamp: ["5:13", "5:17"],
  },
  {
    actionName: "Dual Predation",
    timestamp: ["5:28", "5:33"],
  },
  {
    actionName: "1",
    timestamp: ["5:34"],
  },
  {
    actionName: "2",
    timestamp: ["5:37"],
  },
  {
    actionName: "3",
    timestamp: ["5:39"],
  },
  {
    actionName: "4",
    timestamp: ["5:43"],
  },
  {
    actionName: "5",
    timestamp: ["5:46"],
  },
  {
    actionName: "Ptera Ixou",
    timestamp: ["5:50", "5:55"],
  },
  {
    actionName: "Synergy (double)",
    timestamp: ["6:05", "6:10"],
    type: "tb",
  },
  {
    actionName: "Dark IV",
    timestamp: ["6:18", "6:23"],
    type: "rw",
  },
  {
    actionName: "Aetheric Polyominoid",
    timestamp: ["6:30", "6:33"],
  },
  {
    actionName: "Dark Sphere",
    timestamp: ["6:36", "6:40"],
  },
  {
    actionName: "1",
    timestamp: ["6:47"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["6:51"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["6:59", "7:01"],
  },
  {
    actionName: "Exchange of Agonies",
    timestamp: ["7:05", "7:08"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["7:12", "7:15"],
  },
  {
    actionName: "1",
    timestamp: ["7:16"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["7:19"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["7:26", "7:28"],
  },
  {
    actionName: "Polyominoid Sigma",
    timestamp: ["7:31", "7:34"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["7:42", "7:46"],
  },
  {
    actionName: "2",
    timestamp: ["7:50"],
  },
  {
    actionName: "Synergy (double)",
    timestamp: ["7:57", "8:03"],
    type: "tb",
  },
  {
    actionName: "Dark IV",
    timestamp: ["8:11", "8:15"],
    type: "rw",
  },
  {
    actionName: "Cachexia",
    timestamp: ["8:26", "8:28"],
  },
  {
    actionName: "Transmission",
    timestamp: ["8:31", "8:35"],
  },
  {
    actionName: "Aetherial Exchange",
    timestamp: ["8:41", "8:43"],
  },
  {
    actionName: "Polyominoid Sigma",
    timestamp: ["8:47", "8:49"],
  },
  {
    actionName: "Ptera Ixou",
    timestamp: ["8:58 ", "9:03"],
  },
  {
    actionName: "Aetheric Polyominoid",
    timestamp: ["9:13", "9:17"],
  },
  {
    actionName: "Dark Dome",
    timestamp: ["9:22", "9:25"],
  },
  {
    actionName: "hit",
    timestamp: ["9:30"],
  },
  {
    actionName: "Aetheric Polyominoid",
    timestamp: ["9:38", "9:41"],
  },
  {
    actionName: "Choros Ixou",
    timestamp: ["9:47", "9:51"],
  },
  {
    actionName: "2",
    timestamp: ["9:55"],
  },
  {
    actionName: "Chelic Synergy",
    timestamp: ["10:00", "10:06"],
    type: "tb",
  },
  {
    actionName: "Dark IV",
    timestamp: ["10:15", "10:19"],
    type: "rw",
  },
  {
    actionName: "Dark IV (ENRAGE)",
    timestamp: ["10:29", "10:41"],
    type: "rw",
  },
  // https://www.youtube.com/watch?v=IV29SDZ54nM&ab_channel=woops
];

/*
    {
        actionName: '',
        timestamp: ['7:00', '7:00'],
        type: 'normal'
    },
*/

export const BRDEvents: TimelinePlayerEvent[] = [
  // Troubadour
  // #region
  // Recast 90s
  {
    actionName: "Troubadour",
    timestamp: ["0:44"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["2:16"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["4:29"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["7:04"],
    type: "gcd",
  },
  {
    actionName: "Troubadour",
    timestamp: ["10:15"],
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
    timestamp: ["8:00"],
  },
];

export const PLDEvents: TimelinePlayerEvent[] = [
  // #region Iron Will
  {
    actionName: "Iron Will",
    timestamp: ["0:41"],
    type: "gcd",
  },
  // #endregion Iron Will

  // #region Reprisal
  {
    actionName: "Reprisal",
    timestamp: ["0:20"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["2:00"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["4:05"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["6:04"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["8:10"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["10:12"],
    type: "gcd",
  },
  // #endregion

  // #region Passage of Arms
  // Recast 120s
  {
    actionName: "Passage of Arms",
    timestamp: ["0:10"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["2:17"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["6:20"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["10:16"],
    type: "gcd",
  },
  // #endregion

  // #region Divine Veil
  // Recast 90s
  {
    actionName: "Divine Veil",
    timestamp: ["0:34"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["3:23"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["6:52"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["9:55"],
    type: "gcd",
  },
  // 8:22
  // #endregion

  // #region Rampart
  // Recast 90s
  {
    actionName: "Rampart",
    timestamp: ["1:57"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["6:01"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["7:55"],
    type: "gcd",
  },
  // #endregion

  // #region Sentinel
  // Recast 120s
  {
    actionName: "Sentinel",
    timestamp: ["1:59"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["5:58"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["8:00"],
    type: "gcd",
  },
  // #endregion

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
