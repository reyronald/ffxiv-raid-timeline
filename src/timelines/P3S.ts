import { TimelineBossEvent, TimelinePlayerEvent } from "../types";
import { getSecondsFromString, getStartAndDuration } from "../utils";

export const zoneID = 1007;
export const zoneName = "Asphodelos: The Third Circle (Savage)";

export const BossEvents: TimelineBossEvent[] = [
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("0:09", "0:14"),
  },
  {
    actionName: "Heat of Condemnation",
    cast: "long",
    ...getStartAndDuration("0:17", "0:24"),
  },
  {
    actionName: "Experimental Fireplume",
    cast: "long",
    ...getStartAndDuration("0:29", "0:34"),
  },
  {
    actionName: "Left/Right Cinderwing",
    cast: "long",
    ...getStartAndDuration("0:40", "0:45"),
  },
  {
    actionName: "Darkened Fire",
    cast: "long",
    ...getStartAndDuration("0:53", "0:59"),
  },
  {
    actionName: "Brightened Fire",
    cast: "long",
    ...getStartAndDuration("1:04", "1:09"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:10"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:12"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:13"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:14"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:15"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:16"),
  },
  {
    actionName: "Brightened Fire",
    cast: "instant",
    start: getSecondsFromString("1:17"),
  },
  {
    actionName: "Heat of Condemnation",
    cast: "long",
    ...getStartAndDuration("1:30", "1:38"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("1:39", "1:44"),
  },
  {
    actionName: "Devouring Brand",
    cast: "long",
    ...getStartAndDuration("1:52", "1:55"),
  },
  {
    actionName: "Experimental Fireplume",
    cast: "long",
    ...getStartAndDuration("1:57", "2:02"),
  },
  {
    actionName: "Searing Breeze",
    cast: "long",
    ...getStartAndDuration("2:09", "2:12"),
  },
  {
    actionName: "Searing Breeze",
    cast: "long",
    ...getStartAndDuration("2:12", "2:15"),
  },
  {
    actionName: "Left/Right Cinderwing",
    cast: "long",
    ...getStartAndDuration("2:15", "2:20"),
  },
  {
    actionName: "Heat of Condemnation",
    cast: "long",
    ...getStartAndDuration("2:23", "2:30"),
  },
  {
    actionName: "Experimental Fireplume",
    cast: "long",
    ...getStartAndDuration("2:32", "2:37"),
  },
  {
    actionName: "Trail of Condemnation",
    cast: "long",
    ...getStartAndDuration("2:46", "2:52"),
  },
  {
    actionName: "Sparks of Condemnation",
    cast: "instant",
    start: getSecondsFromString("2:53"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:01"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:09"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:17"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:25"),
  },
  {
    actionName: "Flames of Undeath",
    cast: "instant",
    start: getSecondsFromString("3:29"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:33"),
  },
  {
    actionName: "Fireglide Sweep",
    cast: "instant",
    start: getSecondsFromString("3:36"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("3:41"),
  },
];

export const SCHEvents: TimelinePlayerEvent[] = [];
