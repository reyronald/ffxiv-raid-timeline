import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1009;
export const zoneName = "Asphodelos: The Fourth Circle (Savage)";

export const BossEvents: TimelineBossEvent[] = [
  // #region Act 1
  {
    actionName: "Searing Stream",
    timestamp: ["0:10", "0:15"],
    type: "rw",
  },
  {
    actionName: "Akanthai: Act 1",
    timestamp: ["0:26", "0:30"],
  },
  {
    actionName: "Searing Stream",
    timestamp: ["0:35", "0:39"],
    type: "rw",
  },
  {
    actionName: "Wreath of Thorns",
    timestamp: ["0:46", "0:54"],
  },
  {
    actionName: "Fire IV x2",
    timestamp: ["0:57"],
  },
  {
    actionName: "Thunder III x8",
    timestamp: ["1:00"],
  },
  {
    actionName: "Fire IV x2",
    timestamp: ["1:03"],
  },
  {
    actionName: "Farsight / Nearsight",
    timestamp: ["1:04", "1:09"],
    type: "tb",
  },
  // #endregion Act 1

  // #region Act 2
  {
    actionName: "Akanthai: Act 2",
    timestamp: ["1:17", "1:22"],
  },
  {
    actionName: "Demigod Double",
    timestamp: ["1:26", "1:31"],
    type: "tb",
  },
  {
    actionName: "Wrath of Thorns",
    timestamp: ["1:36", "1:41"],
  },
  {
    actionName: "Dark Design",
    timestamp: ["1:45", "1:50"],
  },
  {
    actionName: "Fire IV x2",
    timestamp: ["1:54"],
  },
  {
    actionName: "Fire IV x2",
    timestamp: ["2:01"],
  },
  {
    actionName: "Ultimate Impulse",
    timestamp: ["2:02", "2:09"],
    type: "rw",
  },
  // #endregion

  // #region Act 3
  {
    actionName: "Akanthai: Act 3",
    timestamp: ["2:17", "2:22"],
  },
  {
    actionName: "Wreath of Thorns",
    timestamp: ["2:26", "2:34"],
  },
  {
    actionName: "Kothornos Kicks",
    timestamp: ["2:38", "2:42"],
  },
  {
    actionName: "Kothornos Quake x3 + Thunder III x4",
    timestamp: ["2:47"],
  },
  {
    actionName: "Water IV",
    timestamp: ["2:50"],
  },
  {
    actionName: "Kothornos Kicks + Thunder III x4",
    timestamp: ["2:53"],
  },
  {
    actionName: "Kothornos Quake x3",
    timestamp: ["2:57"],
  },
  {
    actionName: "Farsight / Nearsight",
    timestamp: ["3:01", "3:06"],
    type: "tb",
  },
  {
    actionName: "Heart Stake",
    timestamp: ["3:16", "3:21"],
    type: "tb",
  },
  // #endregion

  // #region Act 4
  {
    actionName: "Akahnthai: Act 4",
    timestamp: ["3:29", "3:33"],
  },
  {
    actionName: "Searing Stream",
    timestamp: ["3:38", "3:42"],
    type: "rw",
  },
  {
    actionName: "Wreath of Thorns",
    timestamp: ["3:47", "3:52"],
  },
  {
    actionName: "Searing Stream",
    timestamp: ["3:55", "4:00"],
    type: "rw",
  },
  // ...
  {
    actionName: "Ulitmate Impulse",
    timestamp: ["4:28", "4:35"],
    type: "rw",
  },
  {
    actionName: "Searing Stream",
    timestamp: ["4:45", "4:49"],
    type: "rw",
  },
  // #endregion Act 4

  // #region Finale
  {
    actionName: "Akanthai: Finale",
    timestamp: ["4:54", "4:58"],
  },
  {
    actionName: "Wreath of Thorns",
    timestamp: ["5:03", "5:07"],
  },
  {
    actionName: "Fleeting Impulse",
    timestamp: ["5:11", "5:16"],
  },
  {
    actionName: "Imp. #1",
    timestamp: ["5:17"],
  },
  {
    actionName: "#2",
    timestamp: ["5:18.42"],
  },
  {
    actionName: "#3",
    timestamp: ["5:19.84"],
  },
  {
    actionName: "#4",
    timestamp: ["5:21.26"],
  },
  {
    actionName: "#5",
    timestamp: ["5:22.68"],
  },
  {
    actionName: "#6",
    timestamp: ["5:24.10"],
  },
  {
    actionName: "#7",
    timestamp: ["5:25.52"],
  },
  {
    actionName: "#8",
    timestamp: ["5:27"],
  },
  {
    actionName: "Aero III x8",
    timestamp: ["5:28"],
  },
  {
    actionName: "Wreath of Thorns",
    timestamp: ["5:30", "5:34"],
  },
  {
    actionName: "Light. #1",
    timestamp: ["5:35"],
  },
  {
    actionName: "#2",
    timestamp: ["5:36.42"],
  },
  {
    actionName: "#3",
    timestamp: ["5:37.84"],
  },
  {
    actionName: "#4",
    timestamp: ["5:39.26"],
  },
  {
    actionName: "#5",
    timestamp: ["5:40.68"],
  },
  {
    actionName: "#6",
    timestamp: ["5:42.10"],
  },
  {
    actionName: "#7",
    timestamp: ["5:43.52"],
  },
  {
    actionName: "#8",
    timestamp: ["5:45"],
  },
  {
    actionName: "Farsight / Nearsight",
    timestamp: ["5:46", "5:51"],
    type: "tb",
  },
  {
    actionName: "Searing Stream",
    timestamp: ["6:00", "6:04"],
    type: "rw",
  },
  {
    actionName: "Demigod Double",
    timestamp: ["6:09", "6:13"],
    type: "tb",
  },
  // #endregion Finale

  // #region Curtain Call
  {
    actionName: "Akanthai: Curtain Call",
    timestamp: ["6:22", "6:27"],
  },

  {
    actionName: "Thunder III",
    timestamp: ["6:39"],
  },
  // ...
  {
    actionName: "Hell's Sting",
    timestamp: ["6:37", "6:40"],
  },
  {
    actionName: "2nd hit",
    timestamp: ["6:43"],
  },
  {
    actionName: "Hell's Sting",
    timestamp: ["6:57", "7:00"],
  },
  {
    actionName: "2nd hit",
    timestamp: ["7:03"],
  },
  // ...
  {
    actionName: "Ultimate Impulse",
    timestamp: ["7:13", "7:19"],
    type: "rw",
  },
  // ...
  {
    actionName: "Hell's Sting",
    timestamp: ["7:27", "7:30"],
  },
  {
    actionName: "2nd hit",
    timestamp: ["7:33"],
  },
  {
    actionName: "Hell's Sting",
    timestamp: ["7:47", "7:50"],
  },
  {
    actionName: "2nd hit",
    timestamp: ["7:53"],
  },
  // ...
  {
    actionName: "Ultimate Impulse",
    timestamp: ["8:03", "8:09"],
    type: "rw",
  },
  {
    actionName: "Ultimate Impulse (ENRAGE)",
    timestamp: ["8:14", "8:24"],
    type: "rw",
  },
  // #endregion Curtain Call
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
    timestamp: ["6:03"],
  },
  // #endregion Dissipation

  // #region Chain Stratagem
  // buff window lasts 17 seconds
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    timestamp: ["0:07"],
  },
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    timestamp: ["2:08"],
  },
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    timestamp: ["4:15"],
  },
  {
    actionName: "Chain Stratagem",
    type: "ogcd",
    timestamp: ["6:20"],
  },
  // #endregion

  // TODO complete
  // #region Protraction
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["1:26"],
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["3:19"],
  },
  {
    actionName: "Protraction",
    type: "ogcd",
    timestamp: ["5:47"],
  },
  // #endregion Protraction

  // #region Fey Illumination
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["1:36"],
  },
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["3:56"],
  },
  {
    actionName: "Fey Illumination",
    type: "ogcd",
    timestamp: ["6:50"],
  },
  // #endregion

  // #region Whispering Dawn
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["0:38"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["1:38"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["2:40"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["3:41"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["4:47"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["5:52"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["6:57"],
  },
  {
    actionName: "Whispering Dawn",
    type: "ogcd",
    timestamp: ["7:59"],
  },
  // #endregion Whispering Dawn

  // #region Expedient
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["1:40"],
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["4:12"],
  },
  {
    actionName: "Expedient",
    type: "ogcd",
    timestamp: ["7:39"],
  },
  // #endregion Expedient

  // #region Recitation + Indomitability
  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["1:46"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["1:57"],
  },

  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["4:22"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["4:28"],
  },

  {
    actionName: "Recitation",
    type: "ogcd",
    timestamp: ["6:47"],
  },
  {
    actionName: "Indomitability",
    type: "ogcd",
    timestamp: ["6:53"],
  },
  // #endregion

  // #region Seraph
  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["1:39"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["1:43"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["1:56"],
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["3:47"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["3:53"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["4:01"],
  },

  {
    actionName: "Summon Seraph",
    type: "ogcd",
    timestamp: ["7:22"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["7:25"],
  },
  {
    actionName: "Consolation",
    type: "ogcd",
    timestamp: ["7:34"],
  },
  // #endregion

  // #region Fey Blessing
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["1:11"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["2:51"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["4:10"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["5:31"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["6:44"],
  },
  {
    actionName: "Fey Blessing",
    type: "ogcd",
    timestamp: ["7:46"],
  },
  // #endregion Fey Blessing

  // #region Excogitation
  {
    actionName: "Excogitation",
    type: "ogcd",
    timestamp: ["3:10"],
  },
  // #endregion

  // #region Sacred Soil
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["2:05"],
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
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["7:07"],
  },
  {
    actionName: "Sacred Soil",
    type: "ogcd",
    timestamp: ["7:57"],
  },
  // #endregion

  // #region Lustrate
  {
    actionName: "Lustrate",
    type: "ogcd",
    timestamp: ["3:23"],
  },
  // #endregion

  // #region Succor
  // {
  //   actionName: "Succor",
  //   type: "ogcd",
  //   timestamp: ["4:25"],
  // },
  {
    actionName: "Succor",
    type: "ogcd",
    timestamp: ["7:44"],
  },
  // #endregion

  // #region Adloquium
  {
    actionName: "Adloquium",
    type: "ogcd",
    timestamp: ["1:24"],
  },
  {
    actionName: "Deployment Tactics",
    type: "ogcd",
    timestamp: ["1:33"],
  },
  {
    actionName: "Adloquium",
    type: "ogcd",
    timestamp: ["6:18"],
  },
  {
    actionName: "Deployment Tactics",
    type: "ogcd",
    timestamp: ["6:22"],
  },
  // #endregion

  // Sprint
  {
    actionName: "Sprint",
    type: "ogcd",
    timestamp: ["2:42"],
  },

  // Place
  {
    actionName: "Place",
    type: "ogcd",
    timestamp: ["0:43"],
  },
  {
    actionName: "Place",
    type: "ogcd",
    timestamp: ["3:48"],
  },
  {
    actionName: "Place",
    type: "ogcd",
    timestamp: ["6:40"],
  },

  // Surecast
  {
    actionName: "Surecast",
    type: "ogcd",
    timestamp: ["2:43"],
  },

  // Potions
  {
    actionName: "Grade 6 Tincture of Mind",
    type: "ogcd",
    timestamp: ["7:48"],
  },

  // Aetherflow
  {
    actionName: "Aetherflow",
    type: "ogcd",
    timestamp: ["1:14"],
  },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    timestamp: ["2:16"],
  },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    timestamp: ["3:18"],
  },
  // 4:20
  {
    actionName: "Aetherflow",
    type: "ogcd",
    timestamp: ["5:22"],
  },

  // Buff window
  {
    actionName: "Broil IV",
    type: "gcd",
    timestamp: ["4:14"],
  },
  // {
  //   actionName: "Broil IV",
  //   type: "gcd",
  //   timestamp: ["4:16.32"],
  // },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    timestamp: ["4:17.82"],
  },
  // {
  //   actionName: "Broil IV",
  //   type: "gcd",
  //   timestamp: ["4:18.64"],
  // },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    timestamp: ["4:20.14"],
  },
  // {
  //   actionName: "Ruin II",
  //   type: "gcd",
  //   timestamp: ["4:20.96"],
  // },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    timestamp: ["4:22.70"],
  },
  // {
  //   actionName: "Broil IV",
  //   type: "gcd",
  //   timestamp: ["4:23.28"],
  // },
  {
    actionName: "Aetherflow",
    type: "ogcd",
    timestamp: ["4:24.78"],
  },
  // {
  //   actionName: "Broil IV",
  //   type: "gcd",
  //   timestamp: ["4:25.60"],
  // },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    timestamp: ["4:27.10"],
  },
  // {
  //   actionName: "Broil IV",
  //   type: "gcd",
  //   timestamp: ["4:27.92"],
  // },
  {
    actionName: "Energy Drain",
    type: "ogcd",
    timestamp: ["4:29.42"],
  },
];
