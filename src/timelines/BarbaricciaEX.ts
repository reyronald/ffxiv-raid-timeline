import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1072;
export const zoneName = "Barbariccia";

export const BossEvents: TimelineBossEvent[] = [
  {
    actionName: "Void Aero IV",
    timestamp: ["0:09", "0:14"],
    type: "rw",
  },
  {
    actionName: "raidwide",
    timestamp: ["0:22"],
    type: "rw",
  },
  {
    actionName: "Savage Barbery",
    timestamp: ["0:25", "0:31"],
  },
  {
    actionName: "Hair Raid",
    timestamp: ["0:39", "0:44"],
  },
  {
    actionName: "lightparty raidwide",
    timestamp: ["0:49"],
    type: "rw",
  },
  {
    actionName: "raidwide",
    timestamp: ["0:52"],
    type: "rw",
  },
  {
    actionName: "Savage Barbery",
    timestamp: ["0:54", "1:00"],
  },
  {
    actionName: "Hair Raid",
    timestamp: ["1:07", "1:12"],
  },
  {
    actionName: "raidwide",
    timestamp: ["1:17"],
    type: "rw",
  },
  {
    actionName: "Void Aero IV",
    timestamp: ["1:20", "1:24"],
    type: "rw",
  },
  {
    actionName: "Void Aero III (swap)",
    timestamp: ["1:27", "1:31"],
    type: "tb",
  },
  {
    actionName: "raidwide",
    timestamp: ["1:40"],
    type: "rw",
  },
  {
    actionName: "Teasing Tangles",
    timestamp: ["1:42", "1:46"],
  },
  {
    actionName: "Secret Breeze",
    timestamp: ["1:55", "1:58"],
  },
  {
    actionName: "Void Aero IV",
    timestamp: ["2:06", "2:11"],
    type: "rw",
  },
  {
    actionName: "raidwide",
    timestamp: ["2:18"],
    type: "rw",
  },
  {
    actionName: "Curling Iron",
    timestamp: ["2:21", "2:25"],
  },
  {
    actionName: "(untargetable)",
    timestamp: ["2:40"],
  },
  {
    actionName: "(land)",
    timestamp: ["2:51"],
    type: "rw",
  },
  {
    actionName: "Tethers",
    timestamp: ["2:53"],
  },
  {
    actionName: "#1",
    timestamp: ["2:56"],
  },
  {
    actionName: "#2",
    timestamp: ["2:58"],
  },
  {
    actionName: "#3",
    timestamp: ["3:00"],
  },
  {
    actionName: "#4",
    timestamp: ["3:02"],
  },
  {
    actionName: "Tank buster (shared)",
    timestamp: ["3:04", "3:13"],
    type: "tb",
  },
  {
    actionName: "Center baits",
    timestamp: ["3:15", "3:20"],
  },
  {
    actionName: "Buddies",
    timestamp: ["3:24", "3:31"],
  },

  {
    actionName: "Tethers",
    timestamp: ["3:34"],
  },
  {
    actionName: "#1",
    timestamp: ["3:36"],
  },
  {
    actionName: "#2",
    timestamp: ["3:38"],
  },
  {
    actionName: "#3",
    timestamp: ["3:40"],
  },
  {
    actionName: "#4",
    timestamp: ["3:42"],
  },
  {
    actionName: "Knuckle Drum",
    timestamp: ["3:44", "3:51"],
    type: "rw",
  },
  {
    actionName: "Puddles",
    timestamp: ["3:56"],
  },
  {
    actionName: "#1",
    timestamp: ["3:58"],
  },
  {
    actionName: "#2",
    timestamp: ["4:00"],
  },
  {
    actionName: "#3",
    timestamp: ["4:02"],
  },
  {
    actionName: "#4",
    timestamp: ["4:04"],
  },
  {
    actionName: "Flares + Stack",
    timestamp: ["4:05", "4:11"],
  },
  {
    actionName: "(flare)",
    timestamp: ["4:12"],
    type: "tb",
  },
  {
    actionName: "(stack)",
    timestamp: ["4:14"],
    type: "rw",
  },

  {
    actionName: "Tethers",
    timestamp: ["4:17"],
  },
  {
    actionName: "#1",
    timestamp: ["4:19"],
  },
  {
    actionName: "#2",
    timestamp: ["4:21"],
  },
  {
    actionName: "#3",
    timestamp: ["4:23"],
  },
  {
    actionName: "#4",
    timestamp: ["4:25"],
  },

  {
    actionName: "Tangles",
    timestamp: ["4:26", "4:35"],
  },
  {
    actionName: "(center AoE)",
    timestamp: ["4:42"],
  },
  {
    actionName: "Knuckle Drum",
    timestamp: ["4:53", "5:01"],
    type: "rw",
  },

  // Phsae Change
  {
    actionName: "Phase Change",
    timestamp: ["5:06", "5:14"],
  },

  {
    actionName: "Entanglement (playstation)",
    timestamp: ["5:22", "5:25"],
  },
  {
    actionName: "Secret Breeze",
    timestamp: ["5:31", "5:35"],
  },
  {
    actionName: "Savage Barbery",
    timestamp: ["5:41", "5:46 "],
  },
  {
    actionName: "Hair Raid",
    timestamp: ["5:54", "5:59"],
  },
  {
    actionName: "Void Aero IV",
    timestamp: ["6:09", "6:13"],
    type: "rw",
  },
  {
    actionName: "Void Aero III",
    timestamp: ["6:15", "6:20"],
    type: "tb",
  },
  {
    actionName: "Entanglement (playstation)",
    timestamp: ["6:31", "6:34"],
  },
  {
    actionName: "raidwide",
    timestamp: ["6:49"],
    type: "rw",
  },
  {
    actionName: "Savage Barbery",
    timestamp: ["6:51", "6:55"],
  },
  {
    actionName: "Hair Raid",
    timestamp: ["7:01", "7:06"],
  },
  {
    actionName: "raidwide",
    timestamp: ["7:11"],
    type: "rw",
  },
  {
    actionName: "Void Aero IV",
    timestamp: ["7:15", "7:21"],
    type: "rw",
  },
  {
    actionName: "raidwide",
    timestamp: ["7:28"],
    type: "rw",
  },
  {
    actionName: "Curling Iron (phase change)",
    timestamp: ["7:30", "7:35"],
  },

  // Phase 4
  {
    actionName: "Tethers",
    timestamp: ["7:47"],
  },
  {
    actionName: "#1",
    timestamp: ["7:49"],
  },
  {
    actionName: "#2",
    timestamp: ["7:51"],
  },
  {
    actionName: "#3",
    timestamp: ["7:53"],
  },
  {
    actionName: "#4",
    timestamp: ["7:55"],
  },

  {
    actionName: "Knuckle Drum",
    timestamp: ["7:58", "8:06"],
    type: "rw",
  },
  {
    actionName: "Puddles",
    timestamp: ["8:09"],
  },
  {
    actionName: "#1",
    timestamp: ["8:11"],
  },
  {
    actionName: "#2",
    timestamp: ["8:13"],
  },
  {
    actionName: "#3",
    timestamp: ["8:15"],
  },
  {
    actionName: "#4",
    timestamp: ["8:17"],
  },

  {
    actionName: "Center Bait",
    timestamp: ["8:19", "8:20"],
  },

  {
    actionName: "Tethers",
    timestamp: ["8:21"],
  },
  {
    actionName: "#1",
    timestamp: ["8:22"],
  },
  {
    actionName: "#2",
    timestamp: ["8:23"],
  },
  {
    actionName: "#3",
    timestamp: ["8:24"],
  },
  {
    actionName: "#4",
    timestamp: ["8:25"],
  },

  {
    actionName: "Center AoE",
    timestamp: ["8:29", "8:33"],
  },

  {
    actionName: "Spreads (with kb)",
    timestamp: ["8:34", "8:42"],
  },

  {
    actionName: "Tethers",
    timestamp: ["8:43"],
  },
  {
    actionName: "#1",
    timestamp: ["8:44"],
  },
  {
    actionName: "#2",
    timestamp: ["8:45"],
  },
  {
    actionName: "#3",
    timestamp: ["8:46"],
  },
  {
    actionName: "#4",
    timestamp: ["8:47"],
  },

  {
    actionName: "Tornados",
    timestamp: ["8:54", "9:04"],
  },
  {
    actionName: "Tank buster (double)",
    timestamp: ["9:05", "9:10"],
    type: "tb",
  },
  {
    actionName: "Tornados",
    timestamp: ["9:11", "9:24"],
  },
  {
    actionName: "Flares + Stack",
    timestamp: ["9:26", "9:32"],
  },

  {
    actionName: "hit",
    timestamp: ["9:33"],
    type: "rw",
  },
  {
    actionName: "Knuckle Drum",
    timestamp: ["9:39", "9:46"],
    type: "rw",
  },
  {
    actionName: "Phase Change",
    timestamp: ["9:51", "9:59"],
  },
  {
    actionName: "phys rw",
    timestamp: ["10:05"],
    type: "rw",
  },
  {
    actionName: "Entanglement (playstation)",
    timestamp: ["10:06", "10:10"],
  },
  {
    actionName: "Secret Nreeze",
    timestamp: ["10:17", "10:20"],
  },
  {
    actionName: "Savage Barbery",
    timestamp: ["10:27", "10:32"],
  },
  {
    actionName: "Hair Raid",
    timestamp: ["10:40", "10:44"],
  },
  {
    actionName: "rw",
    timestamp: ["10:45"],
    type: "rw",
  },
  {
    actionName: "Void Aero IV",
    timestamp: ["10:55", "10:58"],
    type: "rw",
  },
  {
    actionName: "Maelstrom (ENRAGE)",
    timestamp: ["11:04", "11:13"],
  },
];

export const SCHEvents: TimelinePlayerEvent[] = [];

export const BRDevents: TimelinePlayerEvent[] = [
  {
    actionName: "Iron Jaws",
    type: "gcd",
    timestamp: ["0:45"],
  },
  {
    actionName: "Iron Jaws",
    type: "gcd",
    timestamp: ["1:30"],
  },
];
