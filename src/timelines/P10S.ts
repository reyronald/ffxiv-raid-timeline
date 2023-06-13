import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1086;
export const zoneName = "P10S";

interface P10BossEvents extends TimelineBossEvent {
  actionName:
    | "Soul Grasp"
    | "Wicked Step"
    | "Pandemoniac Meltdown"
    | "Ultima"
    | "Silkspit"
    | "Harrowing Hell"
    | "Harrowing Hell (ENRAGE)"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "knockback"
    | "bonds 1"
    | "bonds 2"
    | "";
}

export const BossEvents: P10BossEvents[] = [
  {
    actionName: "Pandemoniac Meltdown",
    timestamp: ["02:06", "02:12"],
    type: "rw",
  },
  {
    actionName: "Ultima",
    timestamp: ["02:33", "02:38"],
    type: "rw",
  },
  {
    actionName: "Soul Grasp",
    timestamp: ["02:43", "02:48"],
    type: "tb",
  },
  {
    actionName: "Ultima",
    timestamp: ["04:03", "04:07"],
    type: "rw",
  },

  {
    actionName: "Soul Grasp",
    timestamp: ["04:12", "04:17"],
    type: "tb",
  },
  {
    actionName: "Wicked Step",
    timestamp: ["04:30", "04:36"],
    type: "tb",
  },
  {
    actionName: "Pandemoniac Meltdown",
    timestamp: ["06:10", "06:14"],
    type: "rw",
  },
  {
    actionName: "Soul Grasp",
    timestamp: ["06:18", "06:23"],
    type: "tb",
  },
  {
    actionName: "Harrowing Hell",
    timestamp: ["07:10", "07:16"],
    type: "rw",
  },
  {
    actionName: "1",
    timestamp: ["07:18"],
    type: "rw",
  },
  {
    actionName: "2",
    timestamp: ["07:20"],
    type: "rw",
  },
  {
    actionName: "3",
    timestamp: ["07:22"],
    type: "rw",
  },
  {
    actionName: "4",
    timestamp: ["07:23.75"],
    type: "rw",
  },
  {
    actionName: "5",
    timestamp: ["07:25.5"],
    type: "rw",
  },
  {
    actionName: "6",
    timestamp: ["07:26.5"],
    type: "rw",
  },
  {
    actionName: "7",
    timestamp: ["07:27.5"],
    type: "rw",
  },
  {
    actionName: "knockback",
    timestamp: ["07:32"],
    type: "rw",
  },
  {
    actionName: "bonds 1",
    timestamp: ["07:37"],
    type: "rw",
  },
  {
    actionName: "bonds 2",
    timestamp: ["07:40"],
    type: "rw",
  },

  {
    actionName: "Soul Grasp",
    timestamp: ["08:04", "08:09"],
    type: "tb",
  },
  {
    actionName: "Wicked Step",
    timestamp: ["08:25", "08:31"],
    type: "tb",
  },
  {
    actionName: "Silkspit",
    timestamp: ["09:24", "09:27"],
    type: "rw",
  },
  {
    actionName: "",
    timestamp: ["09:37"],
    type: "rw",
  },
  {
    actionName: "Pandemoniac Meltdown",
    timestamp: ["09:54", "09:59"],
    type: "rw",
  },

  {
    actionName: "Harrowing Hell",
    timestamp: ["10:16", "10:21"],
    type: "rw",
  },
  {
    actionName: "Harrowing Hell (ENRAGE)",
    timestamp: ["10:22", "10:39"],
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

export const PLDEvents: TimelinePlayerEvent[] = [
  /**
   * Reprisal
   */
  {
    actionName: "Reprisal",
    timestamp: ["00:04"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["02:06"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["04:01"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["05:06"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["06:10"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["07:25"],
    type: "gcd",
  },

  /**
   * Divine Veil
   */
  {
    actionName: "Divine Veil",
    timestamp: ["02:16"],
    type: "gcd",
  },

  /**
   * Passage of Arms
   */
  {
    actionName: "Passage of Arms",
    timestamp: ["02:37"],
    type: "gcd",
  },

  /**
   * Rampart
   */
  {
    actionName: "Rampart",
    timestamp: ["01:02"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["02:47"],
    type: "gcd",
  },

  /**
   * Sentinel
   */
  {
    actionName: "Sentinel",
    timestamp: ["04:14"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["07:14"],
    type: "gcd",
  },

  /**
   * Bulwark
   */
  {
    actionName: "Bulwark",
    timestamp: ["04:33"],
    type: "gcd",
  },
  {
    actionName: "Bulwark",
    timestamp: ["06:20"],
    type: "gcd",
  },
  {
    actionName: "Bulwark",
    timestamp: ["08:06"],
    type: "gcd",
  },

  /**
   * Oath gauge
   */
  {
    actionName: "Intervention",
    timestamp: ["02:48"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["02:49"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["03:37"],
    type: "gcd",
  },
  {
    actionName: "Intervention",
    timestamp: ["04:16"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["04:35"],
    type: "gcd",
  },
  {
    actionName: "Intervention",
    timestamp: ["06:22"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["06:23"],
    type: "gcd",
  },
  {
    actionName: "Intervention",
    timestamp: ["08:08"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["08:30"],
    type: "gcd",
  },

  /**
   * Misc
   */
  {
    actionName: "Sprint",
    timestamp: ["03:36"],
    type: "gcd",
  },

  ///--

  {
    actionName: "Divine Veil",
    timestamp: ["07:05"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["07:13"],
    type: "gcd",
  },
  {
    actionName: "Sentinel",
    timestamp: ["07:14"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["07:22"],
    type: "gcd",
  },
  {
    actionName: "Reprisal",
    timestamp: ["07:25"],
    type: "gcd",
  },

  // Other tank
  {
    actionName: "Reprisal",
    timestamp: ["04:34"],
    type: "ogcd",
    opacity: true,
  },
  {
    actionName: "Reprisal",
    timestamp: ["08:28"],
    type: "ogcd",
    opacity: true,
  },
];
