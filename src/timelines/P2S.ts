import { TimelineEvent } from "../types";
import { getStartAndDuration, getSecondsFromString } from "../utils";

const zoneID = 9;
const zoneName = "";

export const P2STimeline: TimelineEvent[] = [
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("0:11", "0:16"),
  },
  {
    actionName: "Doubled Impact",
    source: "boss",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("0:21", "0:26"),
  },
  {
    actionName: "Sewage Deluge",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("0:33", "0:38"),
  },
  {
    actionName: "Cataract",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("0:53", "1:02"),
  },
  {
    actionName: "Coherence (Leap)",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("1:10", "1:22"),
  },
  {
    actionName: "Coherence (Laser)",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("1:25"),
  },
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("1:33", "1:38"),
  },
  {
    actionName: "Ominous Bubbling",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("1:42", "1:45"),
  },
  {
    actionName: "Shockwave",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("1:48", "1:56"),
  },
  {
    actionName: "Ominous Bubbling (detonation)",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("1:59"),
  },
  {
    actionName: "Predatory Avarice",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("2:10", "2:14"),
  },
  {
    actionName: "Cataract",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("2:24", "2:32"),
  },
  {
    actionName: "Deadly Current",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("2:36"),
  },
  {
    actionName: "Channeling Flow",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("2:47", "2:52"),
  },
  {
    actionName: "Great Typhoon + Crash",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("3:07", "3:08"),
  },
  {
    actionName: "Doubled Impact (shared)",
    source: "boss",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("3:17", "3:22"),
  },
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("3:27", "3:32"),
  },
  {
    actionName: "Sewage Deluge",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("3:44", "3:49"),
  },
  {
    actionName: "Shockwave",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("3:59", "4:07"),
  },
  {
    actionName: "Kampeos Harma",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("4:11", "4:19"),
  },
  {
    actionName: "△ ☐ 1",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("4:20"),
  },
  {
    actionName: "△ ☐ 2",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("4:22"),
  },
  {
    actionName: "△ ☐ 3",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("4:24"),
  },
  {
    actionName: "△ ☐ 4",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("4:26"),
  },
  {
    actionName: "Doubled Impact",
    source: "boss",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("4:37", "4:42"),
  },
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("4:46", "4:51"),
  },
  {
    actionName: "Channeling Overflow",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:00", "5:05"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:09", "5:12"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:14", "5:19"),
  },
  {
    actionName: "Great Typhoon + Crash",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("5:20"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:24", "5:27"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:29", "5:34"),
  },
  {
    actionName: "Great Typhoon + Crash",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("5:35"),
  },
  {
    actionName: "Cataract",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("5:38", "5:46"),
  },
  {
    actionName: "Predatory Avarice",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:01", "6:05"),
  },
  {
    actionName: "Dissociation",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:07", "6:11"),
  },
  {
    actionName: "Deadly Current",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("6:29"),
  },
  {
    actionName: "Cataract",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:21", "6:30"),
  },
  {
    actionName: "Dissociation",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:39", "6:43"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:51", "6:56"),
  },
  {
    actionName: "Dissociation",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:52", "7:00"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:57", "7:00"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:59", "7:02"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("6:59", "7:02"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("7:01", "7:04"),
  },
  {
    actionName: "Tainted Flood",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("7:04", "7:09"),
  },
  {
    actionName: "Coherence (Leap)",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("7:06", "7:19"),
  },
  {
    actionName: "Coherence (Laser)",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("7:22"),
  },
  {
    actionName: "Doubled Impact (shared)",
    source: "boss",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("7:29", "7:34"),
  },
  {
    actionName: "Murkpy Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("7:37", "7:42"),
  },
  {
    actionName: "Sewage Deluge",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("7:55", "8:00"),
  },
  {
    actionName: "Channeling Overflow",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("8:11", "8:16"),
  },
  {
    actionName: "Great Typhoon + Crash",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("8:32"),
  },
  {
    actionName: "Coherence (Leap)",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("8:22", "8:35"),
  },
  {
    actionName: "Coherence (Laser)",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("8:37"),
  },
  {
    actionName: "Great Typhoon + Crash",
    source: "boss",
    cast: "instant",
    start: getSecondsFromString("8:47"),
  },
  {
    actionName: "Dissociation",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("8:55", "8:59"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:07", "9:12"),
  },
  {
    actionName: "Dissociation",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:08", "9:16"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:13", "9:16"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:15", "9:18"),
  },
  {
    actionName: "Sewage Eruption",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:17", "9:20"),
  },
  {
    actionName: "Ominous Bubbling",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:20", "9:24"),
  },
  {
    actionName: "Shockwave",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:27", "9:35"),
  },
  {
    actionName: "Ominous Bubbling",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:30", "9:38"),
  },
  {
    actionName: "Doubled Impact",
    source: "boss",
    cast: "long",
    tankBuster: true,
    ...getStartAndDuration("9:44", "9:49"),
  },
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("9:56", "10:01"),
  },
  {
    actionName: "Murky Depths",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("10:07", "10:12"),
  },
  {
    actionName: "Sewage Deluge (ENRAGE)",
    source: "boss",
    cast: "long",
    ...getStartAndDuration("10:16", "10:26"),
  },
];

export const P2S_SCH: TimelineEvent[] = [
  // Biolysis
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("0:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("0:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("1:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("1:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("2:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("2:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("3:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("3:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("4:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("4:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("5:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("5:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("6:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("6:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("7:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("7:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("8:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("8:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("9:01"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("9:31"),
  },
  {
    actionName: "Biolysis",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("10:01"),
  },

  // Adloquium
  {
    actionName: "Adloquium",
    source: "player",
    type: "gcd",
    start: getSecondsFromString("4:22"),
  },
  {
    actionName: "Deployment Tactics",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:34"),
  },

  // Dissipation
  {
    actionName: "Dissipation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("3:15"),
  },
  {
    actionName: "Dissipation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("6:16"),
  },
  // @todo
  // {
  //   actionName: "Dissipation",
  //   source: "player",
  //   type: "ogcd",
  //   start: getSecondsFromString("9:17"),
  // },

  // Whispering Dawn
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("0:40"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:57"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("3:12"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:20"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("5:35"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:40"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:50"),
  },
  {
    actionName: "Whispering Dawn",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:51"),
  },

  // Protraction
  {
    actionName: "Protraction",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("3:21"),
  },
  {
    actionName: "Protraction",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:40"),
  },
  {
    actionName: "Protraction",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:32"),
  },
  {
    actionName: "Protraction",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:49"),
  },

  // Fey Blessing
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:36"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("2:40"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("3:52"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("5:21"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:22"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:42"),
  },
  {
    actionName: "Fey Blessing",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:42"),
  },

  // Expedient
  {
    actionName: "Expedient",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("0:33"),
  },
  {
    actionName: "Expedient",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("3:32"),
  },
  {
    actionName: "Expedient",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:46"),
  },
  {
    actionName: "Expedient",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:30"),
  },

  // Summon Seraph
  {
    actionName: "Summon Seraph",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:13"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:18"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:26"),
  },
  {
    actionName: "Summon Seraph",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:36"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:38"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:55"),
  },
  {
    actionName: "Summon Seraph",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:56"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:58"),
  },
  {
    actionName: "Consolation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("10:03"),
  },

  // Fey Illumination
  {
    actionName: "Fey Illumination",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:50"),
  },
  {
    actionName: "Fey Illumination",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("5:17"),
  },
  {
    actionName: "Fey Illumination",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:28"),
  },

  // Recitation
  {
    actionName: "Recitation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:54"),
  },
  {
    actionName: "Recitation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:48"),
  },
  {
    actionName: "Recitation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:04"),
  },
  {
    actionName: "Recitation",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:32"),
  },

  // Indomitability
  {
    actionName: "Indomitability",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("2:03"),
  },
  {
    actionName: "Indomitability",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:51"),
  },
  {
    actionName: "Indomitability",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:10"),
  },
  {
    actionName: "Indomitability",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:36"),
  },

  // Sacred Soil
  {
    actionName: "Sacred Soil",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("7:16"),
  },

  // Surecast
  {
    actionName: "Surecast",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("1:52"),
  },
  {
    actionName: "Surecast",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:04"),
  },

  // Sprint
  {
    actionName: "Sprint",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:08"),
  },
  {
    actionName: "Sprint",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:24"),
  },

  // Place
  {
    actionName: "Place",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("8:02"),
  },

  // Potions
  {
    actionName: "Grade 6 Tincture of Mind",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("4:32"),
  },
  {
    actionName: "Grade 6 Tincture of Mind",
    source: "player",
    type: "ogcd",
    start: getSecondsFromString("9:04"),
  },
];
