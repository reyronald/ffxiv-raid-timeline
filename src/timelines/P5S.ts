import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1082;
export const zoneName = "P5S";

export const BossEvents: TimelineBossEvent[] = [
  {
    actionName: "Sonic Howl",
    timestamp: ["0:10", "0:14"],
    type: "rw",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["0:17", "0:21"],
    type: "rw",
  },
  {
    actionName: "Topaz Stones",
    timestamp: ["0:25", "0:29"],
    type: "normal",
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["0:51", "0:56"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["0:59", "1:03"],
    type: "tb",
  },
  {
    actionName: "Towers",
    timestamp: ["1:17", "1:25"],
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["1:29", "1:33"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["1:37", "1:41"],
    type: "tb",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["1:51", "1:55"],
    type: "rw",
  },
  {
    actionName: "Topaz Stones",
    timestamp: ["1:59", "2:02"],
    type: "normal",
  },
  {
    actionName: "Double Rush",
    timestamp: ["2:07", "2:13"],
    type: "normal",
  },
  {
    actionName: "(rush)",
    timestamp: ["2:15"],
    type: "rw",
  },
  {
    actionName: "Sonic Howl",
    timestamp: ["2:22", "2:25"],
    type: "rw",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["2:35", "2:39"],
    type: "rw",
  },
  {
    actionName: "Topaz Cluster",
    timestamp: ["2:42", "2:45"],
    type: "normal",
  },
  {
    actionName: "#1",
    timestamp: ["2:57"],
    type: "normal",
  },
  {
    actionName: "#2",
    timestamp: ["2:59"],
    type: "normal",
  },
  {
    actionName: "#3",
    timestamp: ["3:02"],
    type: "normal",
  },
  {
    actionName: "#4",
    timestamp: ["3:04"],
    type: "normal",
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["3:08", "3:12"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["3:15", "3:19"],
    type: "tb",
  },
  {
    actionName: "Venom Squall (spread) / Surge (light parties)",
    timestamp: ["3:26", "3:31"],
  },
  {
    actionName: "drop",
    timestamp: ["3:35"],
    type: "rw",
  },
  {
    actionName: "bait center then spread",
    timestamp: ["3:39"],
    type: "normal",
  },
  {
    actionName: "drop",
    timestamp: ["3:45"],
    type: "rw",
  },
  {
    actionName: "Tail to Claw",
    timestamp: ["3:46", "3:52"],
    type: "normal",
  },
  {
    actionName: "Devour Start",
    timestamp: ["4:00", "4:03"],
    type: "normal",
  },
  {
    actionName: "jump #1",
    timestamp: ["4:16"],
    type: "normal",
  },
  {
    actionName: "Tower",
    timestamp: ["4:25", "4:30"],
  },
  {
    actionName: "Sonic Howl",
    timestamp: ["4:41", "4:45"],
    type: "rw",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["4:48", "4:52"],
    type: "rw",
  },
  {
    actionName: "Topaz Stones",
    timestamp: ["4:54", "4:58"],
  },
  {
    actionName: "Venom Pool",
    timestamp: ["5:01", "5:05"],
  },
  {
    actionName: "poison drop",
    timestamp: ["5:10"],
    type: "rw",
  },
  {
    actionName: "Raging Claw / Searing Ray",
    timestamp: ["5:13", "5:17"],
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["5:27", "5:31"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["5:34", "5:38"],
    type: "tb",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["5:47", "5:52"],
    type: "rw",
  },
  {
    actionName: "Topaz Stones",
    timestamp: ["5:55", "6:02"],
  },
  {
    actionName: "Venom Squall (spread) / Surge (lp)",
    timestamp: ["6:09", "6:13"],
    type: "normal",
  },
  {
    actionName: "drop",
    timestamp: ["6:18"],
    type: "rw",
  },
  {
    actionName: "bait",
    timestamp: ["6:21"],
  },
  {
    actionName: "Tower",
    timestamp: ["6:35", "6:39"],
    type: "normal",
  },
  {
    actionName: "Tail to Claw",
    timestamp: ["6:39", "6:44"],
    type: "normal",
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["6:52", "6:57"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["6:59", "7:04"],
    type: "tb",
  },
  {
    actionName: "Sonic Howl",
    timestamp: ["7:11", "7:15"],
    type: "rw",
  },
  {
    actionName: "Ruby Glow",
    timestamp: ["7:18", "7:22"],
    type: "rw",
  },
  {
    actionName: "Topaz Stones",
    timestamp: ["7:25", "7:28"],
  },
  {
    actionName: "Venom Pool",
    timestamp: ["7:31", "7:35"],
  },
  {
    actionName: "drop",
    timestamp: ["7:40"],
    type: "rw",
  },
  {
    actionName: "Double Rush",
    timestamp: ["7:47", "7:52"],
  },
  {
    actionName: "hit",
    timestamp: ["7:55"],
    type: "rw",
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["7:58", "8:03"],
    type: "tb",
  },
  {
    actionName: "Toxic Crunch",
    timestamp: ["8:05", "8:09"],
    type: "tb",
  },
  {
    actionName: "Sonic Howl",
    timestamp: ["8:18", "8:23"],
    type: "rw",
  },
  {
    actionName: "Venom Surge (light parties) / Squall (spread)",
    timestamp: ["8:27", "8:31"],
  },
  {
    actionName: "drop",
    timestamp: ["8:36"],
    type: "rw",
  },
  {
    actionName: "bait center",
    timestamp: ["8:39"],
  },
  {
    actionName: "drop",
    timestamp: ["8:45"],
    type: "rw",
  },
  {
    actionName: "Tail to Claw",
    timestamp: ["8:46", "8:51"],
  },
  {
    actionName: "Venomous Mass (swap)",
    timestamp: ["8:59", "9:04"],
    type: "tb",
  },
];

/**
 * 
  {
    actionName: "",
    timestamp: ["8:00", "8:00"],
    type: "normal",
  },
 */

export const SCHEvents: TimelinePlayerEvent[] = [];
