import { TimelineBossEvent, TimelinePlayerEvent } from "../types";
import { getSecondsFromString, getStartAndDuration } from "../utils";

export const zoneID = 1003;
export const zoneName = "Asphodelos: The First Circle (Savage)";

export const BossEvents: TimelineBossEvent[] = [
  {
    actionName: "Heavy Hand",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("0:09", "0:14"),
  },
  {
    actionName: "Aetherial Shackles",
    cast: "long",
    ...getStartAndDuration("0:20", "0:23"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("0:27", "0:32"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("0:42"),
  },
  {
    actionName: "Gaoler's Flail",
    cast: "long",
    ...getStartAndDuration("0:46", "0:58"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("1:01"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("1:02"),
  },
  {
    actionName: "Pitiless Flail of Purgation/Grace",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("1:07", "1:12"),
  },
  {
    actionName: "True Flare/Holy",
    cast: "instant",
    start: getSecondsFromString("1:16"),
  },
  {
    actionName: "Gaoler's Flail",
    cast: "long",
    ...getStartAndDuration("1:20", "1:32"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("1:34"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("1:35"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("1:40", "1:45"),
  },
  {
    actionName: "Intemperance",
    cast: "long",
    ...getStartAndDuration("1:57", "1:59"),
  },
  {
    actionName: "Intemperate Torment",
    cast: "long",
    ...getStartAndDuration("2:04", "2:14"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("2:16"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("2:17", "2:22"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("2:27"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("2:27", "2:32"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("2:38"),
  },
  {
    actionName: "Pitiless Flail of Purgation/Grace",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("2:43", "2:48"),
  },
  {
    actionName: "True Flare/Holy",
    cast: "instant",
    start: getSecondsFromString("2:53"),
  },
  {
    actionName: "Shining Cells",
    cast: "long",
    ...getStartAndDuration("3:02", "3:09"),
  },
  {
    actionName: "Gaoler's Flail + Aetherflail",
    cast: "long",
    ...getStartAndDuration("3:17", "3:29"),
  },

  {
    actionName: "Powerful Light",
    cast: "instant",
    start: getSecondsFromString("3:29"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("3:31"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("3:32"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("3:32"),
  },
  {
    actionName: "Pitiless Flail of Purgation/Grace",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("3:39", "3:45"),
  },
  {
    actionName: "True Flare/Holy",
    cast: "instant",
    start: getSecondsFromString("3:49"),
  },
  {
    actionName: "Gaoler's Flail + Aetherflail",
    cast: "long",
    ...getStartAndDuration("3:52", "4:04"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("4:04"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("4:06"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("4:07"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("4:07"),
  },
  {
    actionName: "Shackles of Time",
    cast: "long",
    ...getStartAndDuration("4:12", "4:16"),
  },
  {
    actionName: "Heavy Hand",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("4:21", "4:26"),
  },
  {
    actionName: "Inevitable Light/Fire",
    cast: "instant",
    start: getSecondsFromString("4:30"),
  },
  {
    actionName: "Slam Shut",
    cast: "long",
    ...getStartAndDuration("4:32", "4:39"),
  },
  {
    actionName: "Fourfold Shackles",
    cast: "long",
    ...getStartAndDuration("4:52", "4:55"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("5:04"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("5:09"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("5:14"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("5:19"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("5:24", "5:29"),
  },
  {
    actionName: "Intemperance",
    cast: "long",
    ...getStartAndDuration("5:40", "5:42"),
  },
  {
    actionName: "Intemperate Torment",
    cast: "long",
    ...getStartAndDuration("5:48", "5:58"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("5:59"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("6:10"),
  },
  {
    actionName: "Gaoler's Flail",
    cast: "long",
    ...getStartAndDuration("6:02", "6:14"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("6:17"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("6:18"),
  },
  {
    actionName: "Painful Flux",
    cast: "instant",
    start: getSecondsFromString("6:21"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("6:25", "6:30"),
  },
  {
    actionName: "Shining Cells",
    cast: "long",
    ...getStartAndDuration("6:41", "6:48"),
  },
  {
    actionName: "Aetherial Shackles",
    cast: "long",
    ...getStartAndDuration("6:56", "6:59"),
  },
  {
    actionName: "Aetherchain",
    cast: "long",
    ...getStartAndDuration("7:05", "7:10"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("7:11"),
  },
  {
    actionName: "Aetherchain",
    cast: "long",
    ...getStartAndDuration("7:13", "7:18"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("7:18"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("7:19"),
  },
  {
    actionName: "Chain Pain",
    cast: "instant",
    start: getSecondsFromString("7:21"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("7:23", "7:28"),
  },
  {
    actionName: "Shackles of Time",
    cast: "long",
    ...getStartAndDuration("7:36", "7:40"),
  },
  {
    actionName: "Pitiless Flail of Purgation/Grace",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("7:42", "7:47"),
  },
  {
    actionName: "True Flare/Holy",
    cast: "instant",
    start: getSecondsFromString("7:51"),
  },
  {
    actionName: "Inevitable Light/Fire",
    cast: "instant",
    start: getSecondsFromString("7:55"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("8:00", "8:05"),
  },
  {
    actionName: "Gaoler's Flail + Aetherflail",
    cast: "long",
    ...getStartAndDuration("8:14", "8:27"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("8:27"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("8:28"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("8:29"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("8:30"),
  },
  {
    actionName: "Gaoler's Flail + Aetherflail",
    cast: "long",
    ...getStartAndDuration("8:32", "8:45"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("8:45"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("8:46"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("8:47"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("8:48"),
  },
  {
    actionName: "Gaoler's Flail + Aetherflail",
    cast: "long",
    ...getStartAndDuration("8:50", "9:02"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("9:02"),
  },
  {
    actionName: "Flail 1",
    cast: "instant",
    start: getSecondsFromString("9:04"),
  },
  {
    actionName: "Flail 2",
    cast: "instant",
    start: getSecondsFromString("9:05"),
  },
  {
    actionName: "Powerful Light/Fire",
    cast: "instant",
    start: getSecondsFromString("9:06"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("9:16", "9:21"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("9:25", "9:30"),
  },
  {
    actionName: "Warder's Wrath",
    cast: "long",
    ...getStartAndDuration("9:34", "9:39"),
  },
  {
    actionName: "Lethe",
    cast: "long",
    ...getStartAndDuration("9:46", "9:58"),
  },
];

export const SCHEvents: TimelinePlayerEvent[] = [];
