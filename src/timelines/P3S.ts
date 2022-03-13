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
    tankBuster: true,
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
    start: getSecondsFromString("1:11"),
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
    tankBuster: true,
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
    tankBuster: true,
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
    cast: "long",
    ...getStartAndDuration("3:34", "3:44"),
  },
  {
    actionName: "Fireglide #1",
    cast: "instant",
    start: getSecondsFromString("3:45"),
  },
  {
    actionName: "Fireglide #2",
    cast: "instant",
    start: getSecondsFromString("3:47"),
  },
  {
    actionName: "Flames of Undeath",
    cast: "instant",
    start: getSecondsFromString("4:20"),
  },

  // Fountain of Fire
  {
    actionName: "Dead Rebirth",
    cast: "long",
    ...getStartAndDuration("4:34", "4:44"),
  },
  {
    actionName: "Heat of Condemnation",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("4:45", "4:50"),
  },
  {
    actionName: "Fledgling Flight (teeth)",
    cast: "long",
    ...getStartAndDuration("4:59", "5:01"),
  },
  {
    actionName: "(markers appear)",
    cast: "long",
    ...getStartAndDuration("5:04", "5:10"),
  },
  {
    actionName: "Ashen Eye",
    cast: "long",
    ...getStartAndDuration("5:15", "5:18"),
  },
  {
    actionName: "Experimental Gloryplume",
    cast: "long",
    ...getStartAndDuration("5:24", "5:28"),
  },
  {
    actionName: "Fountain of Fire",
    cast: "long",
    ...getStartAndDuration("5:54", "6:00"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("6:26", "6:31"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("6:33", "6:38"),
  },
  {
    actionName: "Heat of Condemnation",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("6:44", "6:49"),
  },

  // Firestorms (nados)
  {
    actionName: "Firestorms of Asphodelos (big damage)",
    cast: "long",
    ...getStartAndDuration("6:59", "7:04"),
  },
  {
    actionName: "Flames of Asphodelos (pizza)",
    cast: "long",
    ...getStartAndDuration("7:07", "7:10"),
  },
  {
    actionName: "Experimental Ashplume",
    cast: "long",
    ...getStartAndDuration("7:12", "7:17"),
  },
  {
    actionName: "Flames #1 (slice)",
    cast: "instant",
    start: getSecondsFromString("7:18"),
  },
  {
    actionName: "Ashplume",
    cast: "instant",
    start: getSecondsFromString("7:24"),
  },
  {
    actionName: "Flames of Asphodelos (pizza)",
    cast: "long",
    ...getStartAndDuration("7:26", "7:28"),
  },
  {
    actionName: "Flames #2 (slice)",
    cast: "instant",
    start: getSecondsFromString("7:36"),
  },
  {
    actionName: "Storms of Asphodelos (nados bait)",
    cast: "long",
    ...getStartAndDuration("7:39", "7:47"),
  },
  {
    actionName: "Darkblaze Twister",
    cast: "long",
    ...getStartAndDuration("7:49", "7:52"),
  },
  {
    actionName: "Searing Breeze",
    cast: "long",
    ...getStartAndDuration("7:57", "7:59"),
  },
  {
    actionName: "Breeze #1",
    cast: "instant",
    start: getSecondsFromString("8:00"),
  },
  {
    actionName: "Breeze #2",
    cast: "instant",
    start: getSecondsFromString("8:02"),
  },

  {
    actionName: "Experimental Ashplume",
    cast: "long",
    ...getStartAndDuration("8:04", "8:09"),
  },
  {
    actionName: "Dark Twister",
    cast: "instant",
    start: getSecondsFromString("8:12"),
  },
  {
    actionName: "Burning Twister",
    cast: "instant",
    start: getSecondsFromString("8:14"),
  },
  {
    actionName: "Ashplume",
    cast: "instant",
    start: getSecondsFromString("8:17"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("8:18", "8:23"),
  },

  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("7:15"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("7:21"),
  },
  {
    actionName: "Blazing Rain",
    cast: "instant",
    start: getSecondsFromString("7:31"),
  },

  // Post-Firestorms
  {
    actionName: "Death's Toll",
    cast: "long",
    ...getStartAndDuration("8:30", "8:36"),
  },
  {
    actionName: "Fledgling Flight",
    cast: "long",
    ...getStartAndDuration("8:40", "8:42"),
  },
  {
    actionName: "Life's Agonies",
    cast: "long",
    ...getStartAndDuration("8:45", "9:08"),
  },
  {
    actionName: "Experimental Gloryplume",
    cast: "long",
    ...getStartAndDuration("9:16", "9:21"),
  },
  {
    actionName: "Ashplume",
    cast: "instant",
    start: getSecondsFromString("9:29"),
  },
  {
    actionName: "Trail of Condemnation",
    cast: "long",
    ...getStartAndDuration("9:35", "9:41"),
  },

  // End
  {
    actionName: "Devouring Brand",
    cast: "long",
    ...getStartAndDuration("9:41", "9:53"),
  },
  {
    actionName: "Experimental Fireplume",
    cast: "long",
    ...getStartAndDuration("9:56", "10:00"),
  },
  {
    actionName: "Searing Breeze",
    cast: "long",
    ...getStartAndDuration("10:08", "10:11"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("10:26", "10:30"),
  },
  {
    actionName: "Scorched Exaltation",
    cast: "long",
    ...getStartAndDuration("10:33", "10:37"),
  },

  // Enrage
  {
    actionName: "Final Exaltation (ENRAGE)",
    cast: "long",
    ...getStartAndDuration("10:40", "10:50"),
  },
];

export const SCHEvents: TimelinePlayerEvent[] = [
  // Biolysis
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("0:02"),
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("0:32"),
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("1:02"),
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("1:32"),
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("2:02"),
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("2:32"),
  },
  // No biolysis at 3:02 because of adds downtime
  {
    actionName: "Biolysis",
    type: "gcd",
    start: getSecondsFromString("3:31"),
  },

  // Dissipation
  {
    actionName: "Dissipation",
    type: "ogcd",
    start: getSecondsFromString("0:03"),
  },
  {
    actionName: "Dissipation",
    type: "ogcd",
    start: getSecondsFromString("3:04"),
  },
  {
    actionName: "Dissipation",
    type: "ogcd",
    start: getSecondsFromString("6:05"),
  },
  {
    actionName: "Dissipation",
    type: "ogcd",
    start: getSecondsFromString("9:06"),
  },

  // Sacred Soil
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    start: getSecondsFromString("3:25"),
  },
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    start: getSecondsFromString("4:18"),
  },
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    start: getSecondsFromString("6:29"),
  },

  // Succor
  {
    actionName: "Succor",
    type: "gcd",
    start: getSecondsFromString("3:26"),
  },
  {
    actionName: "Succor",
    type: "gcd",
    start: getSecondsFromString("3:28"),
  },
  {
    actionName: "Succor",
    type: "gcd",
    start: getSecondsFromString("4:22"),
  },

  // Sprint
  {
    actionName: "Sprint",
    type: "ogcd",
    start: getSecondsFromString("0:34"),
  },
  {
    actionName: "Sprint",
    type: "ogcd",
    start: getSecondsFromString("2:36"),
  },

  // Protraction
  {
    actionName: "Protraction",
    type: "ogcd",
    start: getSecondsFromString("0:20"),
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    start: getSecondsFromString("1:34"),
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    start: getSecondsFromString("2:28"),
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    start: getSecondsFromString("3:56"),
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    start: getSecondsFromString("6:46"),
  },

  // Expedient
  {
    actionName: "Expedient",
    type: "ogcd",
    start: getSecondsFromString("1:03"),
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    start: getSecondsFromString("3:32"),
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    start: getSecondsFromString("5:26"),
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    start: getSecondsFromString("8:10"),
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    start: getSecondsFromString("10:20"),
  },

  // Fey Blessing
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    start: getSecondsFromString("1:13"),
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    start: getSecondsFromString("3:38"),
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    start: getSecondsFromString("5:42"),
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    start: getSecondsFromString("7:50"),
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    start: getSecondsFromString("9:03"),
  },

  // Recitation
  {
    actionName: "Recitation",
    type: "ogcd",
    start: getSecondsFromString("1:37"),
  },
  {
    actionName: "Recitation",
    type: "ogcd",
    start: getSecondsFromString("3:40"),
  },
  {
    actionName: "Recitation",
    type: "ogcd",
    start: getSecondsFromString("8:50"),
  },
  {
    actionName: "Recitation",
    type: "ogcd",
    start: getSecondsFromString("10:24"),
  },

  // Indomitability
  {
    actionName: "Indomitability",
    type: "ogcd",
    start: getSecondsFromString("1:46"),
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    start: getSecondsFromString("3:50"),
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    start: getSecondsFromString("9:00"),
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    start: getSecondsFromString("10:31"),
  },

  // Fey Illumination
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    start: getSecondsFromString("1:06"),
  },
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    start: getSecondsFromString("3:36"),
  },
  // todo 5:36 -> 735
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    start: getSecondsFromString("7:35"),
  },

  // Whispering Dawn
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    start: getSecondsFromString("1:08"),
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    start: getSecondsFromString("3:49"),
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    start: getSecondsFromString("7:54"),
  },

  // Summon Seraph
  {
    actionName: "Summon Seraph",
    type: "ogcd",
    start: getSecondsFromString("2:39"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("2:42"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("2:54"),
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    start: getSecondsFromString("4:39"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("4:41"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("4:46"),
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    start: getSecondsFromString("6:59"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("7:02"),
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    start: getSecondsFromString("7:13"),
  },

  {
    actionName: "Summon Seraph (needed?)",
    type: "ogcd",
    start: getSecondsFromString("9:19"),
  },
  {
    actionName: "Consolation (needed?)",
    type: "ogcd",
    start: getSecondsFromString("9:22"),
  },
  {
    actionName: "Consolation (needed?)",
    type: "ogcd",
    start: getSecondsFromString("9:32"),
  },

  // Fey Union
  {
    actionName: "Fey Union",
    type: "ogcd",
    start: getSecondsFromString("3:58"),
  },

  // Excogitation
  {
    actionName: "Excogitation",
    type: "ogcd",
    start: getSecondsFromString("3:07"),
  },

  // Lustrate
  {
    actionName: "Lustrate",
    type: "ogcd",
    start: getSecondsFromString("3:11"),
  },

  // Adloquium
  {
    actionName: "Adloquium",
    type: "gcd",
    start: getSecondsFromString("2:53"),
  },

  // Deployment Tactics
  {
    actionName: "Deployment Tactics",
    type: "ogcd",
    start: getSecondsFromString("2:58"),
  },

  // Chain Stratagem
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    start: getSecondsFromString("2:11"),
  },

  // Energy Drain
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:13"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:15"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:17"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:22"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:24"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("2:26"),
  },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    start: getSecondsFromString("3:14"),
  },

  // Aetherflow
  {
    actionName: "Aetherflow",
    type: "ogcd",
    start: getSecondsFromString("0:18"),
  },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    start: getSecondsFromString("1:19"),
  },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    start: getSecondsFromString("2:20"),
  },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    start: getSecondsFromString("3:21"),
  },

  // Place
  {
    actionName: "Place",
    type: "ogcd",
    start: getSecondsFromString("0:51"),
  },
  {
    actionName: "Place",
    type: "ogcd",
    start: getSecondsFromString("3:45"),
  },

  // {
  //   actionName: "placeholder (mitigation)",
  //   type: "ogcd",
  //   start: getSecondsFromString("8:06"),
  // },
];
