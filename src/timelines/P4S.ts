import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1009;
export const zoneName = "Asphodelos: The Fourth Circle (Savage)";

export const BossEvents: TimelineBossEvent[] = [
  // Bloodrake
  {
    actionName: "Decollation",
    timestamp: ["0:10", "0:14"],
  },
  {
    actionName: "Bloodrake",
    timestamp: ["0:19", "0:22"],
  },
  {
    actionName: "Aetheric Chlamys",
    timestamp: ["0:26", "0:29"],
  },
  {
    actionName: "Bloodrake",
    timestamp: ["0:34", "0:37"],
  },
  {
    actionName: "Director's Belone",
    timestamp: ["0:42", "0:47"],
  },
  {
    actionName: "Inversive Chlamys",
    timestamp: ["0:56", "1:03"],
  },
  {
    actionName: "Decollation",
    timestamp: ["1:08", "1:12"],
  },
  {
    actionName: "Elegant Evisceration",
    timestamp: ["1:17", "1:21"],
    tankBuster: true,
  },
  {
    actionName: "Elegant Evisceration #2",
    timestamp: ["1:25"],
    tankBuster: true,
  },

  // Pinax
  {
    actionName: "Setting the Scene",
    timestamp: ["1:36", "1:39"],
  },
  {
    actionName: "Pinax",
    timestamp: ["1:48", "1:53"],
  },
  {
    actionName: "Pinax #1",
    timestamp: ["1:54", "2:03"],
  },
  {
    actionName: "#1 (hit)",
    timestamp: ["2:03"],
  },
  {
    actionName: "Pinax #2",
    timestamp: ["1:57", "2:06"],
  },
  {
    actionName: "#2 (hit)",
    timestamp: ["2:06"],
  },
  {
    actionName: "Pinax #3",
    timestamp: ["2:07", "2:16"],
  },
  {
    actionName: "#3 (hit)",
    timestamp: ["2:16"],
  },
  {
    actionName: "Cardinal Shift",
    timestamp: ["2:11", "2:19"],
  },
  {
    actionName: "Pinax #4",
    timestamp: ["2:18", "2:27"],
  },
  {
    actionName: "#4 (hit)",
    timestamp: ["2:27"],
  },
  {
    actionName: "Elegant Evisceration",
    timestamp: ["2:31", "2:36"],
    tankBuster: true,
  },
  {
    actionName: "Elegant Evisceration #2",
    timestamp: ["2:40"],
    tankBuster: true,
  },

  // Orbs + Towers
  {
    actionName: "Bloodrake",
    timestamp: ["2:44", "2:47"],
  },
  {
    actionName: "Setting the Scene",
    timestamp: ["2:55", "2:58"],
  },
  {
    actionName: "Vengeful Belone",
    timestamp: ["3:07", "3:11"],
  },
  {
    actionName: "Elemental Belone",
    timestamp: ["3:15", "3:19"],
  },
  {
    actionName: "Bloodrake",
    timestamp: ["3:24", "3:27"],
  },
  {
    actionName: "Belone Burst (orbs)",
    timestamp: ["3:32", "3:36"],
  },
  {
    actionName: "Periaktoi",
    timestamp: ["3:46", "3:50"],
  },
  {
    actionName: "Bloodrake",
    timestamp: ["3:59", "4:02"],
  },
  {
    actionName: "Belone Coils",
    timestamp: ["4:06", "4:09"],
  },
  {
    actionName: "Inversive Chlamys",
    timestamp: ["4:13", "4:21"],
  },
  {
    actionName: "(tower burst)",
    timestamp: ["4:21"],
  },
  {
    actionName: "Aetheric Chlamys",
    timestamp: ["4:23", "4:27"],
  },
  {
    actionName: "Bloodrake",
    timestamp: ["4:31", "4:35"],
  },
  {
    actionName: "Belone Coils",
    timestamp: ["4:40", "4:43"],
  },
  {
    actionName: "Director's Belone",
    timestamp: ["4:53", "4:57"],
  },
  {
    actionName: "Inversive Chlamys",
    timestamp: ["5:07", "5:13"],
  },
  {
    actionName: "Decollation",
    timestamp: ["5:18", "5:23"],
  },
  {
    actionName: "Elegant Evisceration",
    timestamp: ["5:27", "5:32"],
    tankBuster: true,
  },
  {
    actionName: "Elegant Evisceration #2",
    timestamp: ["5:36"],
    tankBuster: true,
  },

  // Pinax
  {
    actionName: "Setting the Scene",
    timestamp: ["5:47", "5:50"],
  },
  {
    actionName: "Pinax",
    timestamp: ["5:59", "6:03"],
  },
  {
    actionName: "Pinax #1",
    timestamp: ["6:05", "6:14"],
  },
  {
    actionName: "Pinax #2",
    timestamp: ["6:08", "6:17"],
  },
  {
    actionName: "Pinax #3",
    timestamp: ["6:18", "6:27"],
  },
  {
    actionName: "Cardinal Shift",
    timestamp: ["6:21", "6:30"],
  },
  {
    actionName: "Pinax #4",
    timestamp: ["6:29", "6:38"],
  },
  {
    actionName: "Decollation",
    timestamp: ["6:38", "6:42"],
  },
  {
    actionName: "Decollation",
    timestamp: ["6:47", "6:52"],
  },
  {
    actionName: "Decollation",
    timestamp: ["6:56", "7:01"],
  },
  {
    actionName: "ENRAGE",
    timestamp: ["7:05"],
  },
];

// https://xivanalysis.com/fflogs/9aLnf76zrcJXPFjZ/16/7
export const SCHEvents: TimelinePlayerEvent[] = [
  // #region Biolysis
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["0:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["0:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["1:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["1:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["2:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["2:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["3:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["3:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["4:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["4:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["5:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["5:30"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["6:00"],
  },
  {
    actionName: "Biolysis",
    type: "gcd",
    timestamp: ["6:30"],
  },
  // #endregion Biolysis

  // #region Chain Stratagem
  // buff window lasts 17 seconds
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    timestamp: ["0:07"],
  },
  // #endregion Chain Stratagem

  // #region Dissipation
  {
    actionName: "Dissipation",
    type: "ogcd",
    timestamp: ["0:01"],
  },
  {
    actionName: "Dissipation",
    type: "ogcd",
    timestamp: ["3:03"],
  },
  {
    actionName: "Dissipation",
    type: "ogcd",
    timestamp: ["6:06"],
  },
  // #endregion Dissipation

  // #region Expedient (120s cooldown)
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["0:20"],
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["3:33"],
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["5:22"],
  },
  // #endregion Expedient

  // #region Fey Illumination 120s cooldown
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["0:51"],
  },
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["3:39"],
  },
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["6:04"],
  },
  // #endregion

  // #region Seraph (120s cooldown)
  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["0:48"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["0:55"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["1:05"],
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["3:44"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["3:47"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["3:55"],
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["6:45"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["6:48"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["6:56"],
  },
  // #endregion Seraph

  // #region Sacred Soil (30s cooldown)
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["2:45"],
  },
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["4:31"],
  },
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["6:35"],
  },

  // #region Protraction
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["1:17"],
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["2:31"],
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["5:27"],
  },
  // #endregion Protraction

  // #region Fey Blessing
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["0:40"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["2:42"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["4:22"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["5:24"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["6:40"],
  },
  // #endregion Fey Blessing

  // #region Recitation (90s) + Indom (30s)
  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["1:57"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["2:09"],
  },

  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["3:36"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["3:43"],
  },

  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["6:11"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["6:20"],
  },
  // #endregion Recitation

  // #region Whispering Dawn
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["0:58"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["2:20"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["4:02"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["5:37"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["6:52"],
  },
  // #endregion Whispering Dawn

  // Sprint
  {
    actionName: "Sprint",
    type: "ogcd",
    timestamp: ["6:14"],
  },

  // Place
  {
    actionName: "Place",
    type: "ogcd",
    timestamp: ["0:43"],
  },
];
