import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1150;
export const zoneName = "P10S";

interface P10BossEvents extends TimelineBossEvent {
  actionName:
    | "Ultima"
    | "Soul Grasp"
    | "Dividing Wings"
    | "Steel Web"
    | "Holy / Circles of Pandaemonium"
    | "Wicked Step"
    | "Entrangling Web"
    | "Pandaemoniac Pillars"
    | "Pandemoniac Meltdown"
    | "Touchdown"
    | "Demoniac Bonds"
    | "Pandemoniac Turrets"
    | "Pandemoniac Ray"
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
    | "Pandemoniac Web"
    | "Parted Plumes"
    | "knockback"
    | "bonds 1"
    | "bonds 2"
    | "";
}

export const BossEvents: P10BossEvents[] = [
  {
    actionName: "Ultima",
    timestamp: ["00:08", "00:13"],
    type: "rw",
  },
  {
    actionName: "Soul Grasp",
    timestamp: ["00:17", "00:22"],
    type: "tb",
  },
  {
    actionName: "Dividing Wings",
    timestamp: ["00:31", "00:34"],
  },
  {
    actionName: "Steel Web",
    timestamp: ["00:37", "00:39"],
    type: "rw",
  },
  {
    actionName: "Steel Web",
    timestamp: ["00:49"],
    type: "rw",
  },
  {
    actionName: "Holy / Circles of Pandaemonium",
    timestamp: ["00:54", "00:57"],
  },
  {
    actionName: "Wicked Step",
    timestamp: ["01:02", "01:07"],
    type: "tb",
  },
  {
    actionName: "Entrangling Web",
    timestamp: ["01:14", "01:17"],
  },
  {
    actionName: "Pandaemoniac Pillars",
    timestamp: ["01:30", "01:36"],
    type: "rw",
  },
  {
    actionName: "Holy / Circles of Pandaemonium",
    timestamp: ["01:38", "01:41"],
  },
  {
    actionName: "Silkspit",
    timestamp: ["01:45", "01:47"],
    type: "rw",
  },
  {
    actionName: "Silkspit",
    timestamp: ["01:57"],
    type: "rw",
  },
  {
    actionName: "Demoniac Bonds",
    timestamp: ["01:58", "02:01"],
  },
  {
    actionName: "Pandemoniac Meltdown",
    timestamp: ["02:06", "02:12"],
    type: "rw",
  },
  {
    actionName: "Touchdown",
    timestamp: ["02:15", "02:23"],
    type: "rw",
  },
  {
    actionName: "",
    timestamp: ["02:27"],
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
    actionName: "Demoniac Bonds",
    timestamp: ["03:00", "03:03"],
  },
  {
    actionName: "Pandemoniac Turrets",
    timestamp: ["03:08", "03:13"],
  },
  {
    actionName: "1",
    timestamp: ["03:25"],
  },
  {
    actionName: "2",
    timestamp: ["03:30"],
  },
  {
    actionName: "3",
    timestamp: ["03:34"],
  },
  {
    actionName: "4",
    timestamp: ["03:39"],
  },
  {
    actionName: "",
    timestamp: ["03:43"],
  },
  {
    actionName: "",
    timestamp: ["03:45"],
  },
  {
    actionName: "Pandemoniac Ray",
    timestamp: ["03:47", "03:52"],
  },
  {
    actionName: "",
    timestamp: ["03:55"],
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
    actionName: "Entrangling Web",
    timestamp: ["04:44", "04:46"],
  },
  {
    actionName: "Silkspit",
    timestamp: ["04:55", "04:57"],
    type: "rw",
  },
  {
    actionName: "Demoniac Bonds",
    timestamp: ["05:03", "05:06"],
  },
  {
    actionName: "",
    timestamp: ["05:08"],
    type: "rw",
  },
  {
    actionName: "Pandaemoniac Pillars",
    timestamp: ["05:10", "05:15"],
  },
  {
    actionName: "Holy / Circles of Pandaemonium",
    timestamp: ["05:17", "05:21"],
  },
  {
    actionName: "Pandemoniac Ray",
    timestamp: ["05:24", "05:27"],
  },
  {
    actionName: "",
    timestamp: ["05:28"],
    type: "rw",
  },
  {
    actionName: "",
    timestamp: ["05:32"],
    type: "rw",
  },
  {
    actionName: "Dividing Wings",
    timestamp: ["05:34", "05:36"],
  },
  {
    actionName: "Steel Web",
    timestamp: ["05:40", "05:43"],
  },
  {
    actionName: "Touchdown",
    timestamp: ["05:48", "05:54"],
  },
  {
    actionName: "",
    timestamp: ["05:55"],
    type: "rw",
  },
  {
    actionName: "Pandemoniac Meltdown",
    timestamp: ["06:09", "06:14"],
    type: "rw",
  },
  {
    actionName: "Soul Grasp",
    timestamp: ["06:18", "06:23"],
    type: "tb",
  },
  {
    actionName: "Dividing Wings",
    timestamp: ["06:40", "06:42"],
  },
  {
    actionName: "Pandemoniac Web",
    timestamp: ["06:46", "06:48"],
  },
  {
    actionName: "",
    timestamp: ["06:57"],
    type: "rw",
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
    actionName: "Ultima",
    timestamp: ["07:53", "07:58"],
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
    actionName: "Entrangling Web",
    timestamp: ["08:38", "08:40"],
  },

  {
    actionName: "Parted Plumes",
    timestamp: ["08:59", "09:01"],
  },
  {
    actionName: "Pandemoniac Ray",
    timestamp: ["09:09", "09:13"],
  },
  {
    actionName: "Holy / Circles of Pandaemonium",
    timestamp: ["09:17", "09:20"],
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
    actionName: "Pandaemoniac Pillars",
    timestamp: ["09:39", "09:45"],
  },
  {
    actionName: "Holy / Circles of Pandaemonium",
    timestamp: ["09:47", "09:50"],
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
  {
    actionName: "Reprisal",
    timestamp: ["09:30"],
    type: "gcd",
  },

  /**
   * Divine Veil
   */
  {
    actionName: "Divine Veil",
    timestamp: ["00:31"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["02:16"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["05:14"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["07:05"],
    type: "gcd",
  },
  {
    actionName: "Divine Veil",
    timestamp: ["09:12"],
    type: "gcd",
  },

  /**
   * Passage of Arms
   */
  {
    actionName: "Passage of Arms",
    timestamp: ["00:11"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["02:37"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["02:37"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["07:22"],
    type: "gcd",
  },
  {
    actionName: "Passage of Arms",
    timestamp: ["10:25"],
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
    timestamp: ["02:46"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["04:29"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["07:13"],
    type: "gcd",
  },
  {
    actionName: "Rampart",
    timestamp: ["10:17"],
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
  {
    actionName: "Sentinel",
    timestamp: ["10:18"],
    type: "gcd",
  },

  /**
   * Bulwark
   */
  {
    actionName: "Bulwark",
    timestamp: ["01:17"],
    type: "gcd",
  },
  {
    actionName: "Bulwark",
    timestamp: ["02:47"],
    type: "gcd",
  },
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
    actionName: "Sheltron",
    timestamp: ["01:06"],
    type: "gcd",
  },
  {
    actionName: "Sheltron",
    timestamp: ["01:18"],
    type: "gcd",
  },
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
    actionName: "Hallowed Ground",
    timestamp: ["00:21"],
    type: "gcd",
  },
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

  /**
   * Other tank
   */
  {
    actionName: "Reprisal",
    timestamp: ["01:05"],
    type: "ogcd",
    opacity: true,
  },
  {
    actionName: "Reprisal",
    timestamp: ["02:34"],
    type: "ogcd",
    opacity: true,
  },
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
  {
    actionName: "Reprisal",
    timestamp: ["10:20"],
    type: "ogcd",
    opacity: true,
  },
];
