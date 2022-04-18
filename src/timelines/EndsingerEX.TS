import { TimelineBossEvent, TimelinePlayerEvent } from "../types";

export const zoneID = 1;
export const zoneName = "Endsinger";

export const BossEvents: TimelineBossEvent[] = [
  {
    actionName: "Elegeia Unforgotten",
    timestamp: ["0:06", "0:11"],
  },
  {
    actionName: "Elegeia Unforgotten",
    timestamp: ["0:24", "0:29"],
  },
  {
    actionName: "Katasterismoi",
    timestamp: ["0:43", "0:46"],
  },
  {
    actionName: "Grip of Despair",
    timestamp: ["0:49", "0:54"],
  },
  {
    actionName: "Elenchos",
    timestamp: ["0:59", "1:04"],
  },
  {
    actionName: "Telos",
    timestamp: ["1:08", "1:13"],
  },
  {
    actionName: "Hubris (double tb)",
    timestamp: ["1:19", "1:23"],
    tankBuster: true,
  },
  {
    actionName: "Elegeia Unforgotten",
    timestamp: ["1:31", "1:36"],
  },
  {
    actionName: "Eironeia (lp stack)",
    timestamp: ["1:48", "1:53"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["1:59", "2:01"],
  },
  {
    actionName: "Elenchos",
    timestamp: ["2:19", "2:24"],
  },
  {
    actionName: "Twinsong's Aporrhoia (5head)",
    timestamp: ["2:31", "2:33"],
  },
  {
    actionName: "Aporrhoia Unforgotten #1",
    timestamp: ["2:40", "2:44"],
  },
  {
    actionName: "Aporrhoia Unforgotten #2",
    timestamp: ["2:50", "2:54"],
  },
  {
    actionName: "Aporrhoia Unforgotten #3",
    timestamp: ["2:58", "3:03"],
  },
  {
    actionName: "Theological Fatalism",
    timestamp: ["3:09", "3:11"],
  },
  {
    actionName: "Elenchos + Eironeia (lp stack)",
    timestamp: ["3:18", "3:23"],
  },
  {
    actionName: "Hubris (double tb)",
    timestamp: ["3:28", "3:33"],
    tankBuster: true,
  },
  {
    actionName: "Despair Unforgotten #1",
    timestamp: ["3:41", "3:44"],
  },
  {
    actionName: "Despair Unforgotten #2",
    timestamp: ["3:54", "3:57"],
  },
  {
    actionName: "Elenchos",
    timestamp: ["4:03", "4:08"],
  },
  {
    actionName: "Despair Unforgotten #3",
    timestamp: ["4:11", "4:14"],
  },
  {
    actionName: "Theological Fatalism",
    timestamp: ["4:29", "4:31"],
  },
  {
    actionName: "Telomania",
    timestamp: ["4:44", "4:49"],
  },
  {
    actionName: "Endsong's Aporrhoia",
    timestamp: ["5:10", "5:12"],
  },
  {
    actionName: "Endsong",
    timestamp: ["5:18", "5:21"],
  },
  {
    actionName: "Endsong #1",
    timestamp: ["5:30", "5:31"],
  },
  {
    actionName: "Endsong #2",
    timestamp: ["5:39", "5:40"],
  },
  {
    actionName: "Endsong #3 + Elenchos",
    timestamp: ["5:47", "5:52"],
  },
  {
    actionName: "Telos",
    timestamp: ["5:57", "6:02"],
  },
  {
    actionName: "Hubris",
    timestamp: ["6:08", "6:12"],
    tankBuster: true,
  },
  {
    actionName: "Elegeia Unforgotten",
    timestamp: ["6:22", "6:27"],
  },
  {
    actionName: "(boom)",
    timestamp: ["6:39"],
  },
  {
    actionName: "Eironeia",
    timestamp: ["6:40", "6:43"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["6:47", "6:50"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["6:56", "6:59"],
  },
  {
    actionName: "(boom #1)",
    timestamp: ["7:01"],
  },
  {
    actionName: "(boom #2)",
    timestamp: ["7:08"],
  },
  {
    actionName: "(boom #3) + Katasterismoi",
    timestamp: ["7:11", "7:14"],
  },
  {
    actionName: "(boom #4)",
    timestamp: ["7:19"],
  },
  {
    actionName: "Elenchos",
    timestamp: ["7:21", "7:26"],
  },
  {
    actionName: "Telomania",
    timestamp: ["7:31", "7:36"],
  },
  {
    actionName: "Twinsong's Aporrhoia",
    timestamp: ["7:57", "8:00"],
  },
  {
    actionName: "Aporrhoia Unforgotten #1",
    timestamp: ["8:06", "8:10"],
  },
  {
    actionName: "Aporrhoia Unforgotten #2",
    timestamp: ["8:15", "8:19"],
  },
  {
    actionName: "Aporrhoia Unforgotten #3",
    timestamp: ["8:24", "8:29"],
  },
  {
    actionName: "Theological Fatalism",
    timestamp: ["8:34", "8:37"],
  },
  {
    actionName: "Elenchos + Eironeia (lp stack)",
    timestamp: ["8:46", "8:51"],
  },
  {
    actionName: "Hubris",
    timestamp: ["8:55", "8:59"],
    tankBuster: true,
  },
  {
    actionName: "Endsong's Aporrhoia",
    timestamp: ["9:07", "9:10"],
  },
  {
    actionName: "Endsong",
    timestamp: ["9:15", "9:18"],
  },
  {
    actionName: "Endsong #1",
    timestamp: ["9:27", "9:28"],
  },
  {
    actionName: "Endsong #1",
    timestamp: ["9:36", "9:37"],
  },
  {
    actionName: "Elenchos",
    timestamp: ["9:44", "9:50"],
  },
  {
    actionName: "Telos",
    timestamp: ["9:54", "9:59"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["10:10", "10:12"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["10:20", "10:22"],
  },
  {
    actionName: "(boom #1)",
    timestamp: ["10:25"],
  },
  {
    actionName: "(boom #2)",
    timestamp: ["10:31"],
  },
  {
    actionName: "(boom #3)",
    timestamp: ["10:35"],
  },
  {
    actionName: "(boom #4)",
    timestamp: ["10:41"],
  },
  {
    actionName: "Telos",
    timestamp: ["10:42", "10:46"],
  },
  {
    actionName: "Fatalism",
    timestamp: ["10:56", "11:00"],
  },
  {
    actionName: "Apocalypse (ENRAGE)",
    timestamp: ["11:23"],
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
  //   {
  //     actionName: "Protraction",
  //     type: "ogcd",
  //     timestamp: ["1:26"],
  //   },
  // #endregion Protraction

  // #region Fey Illumination
  //   {
  //     actionName: "Fey Illumination",
  //     type: "ogcd",
  //     timestamp: [""],
  //   },

  // #endregion

  // #region Whispering Dawn
  //   {
  //     actionName: "Whispering Dawn",
  //     type: "ogcd",
  //     timestamp: ["1:06"],
  //   },
  // #endregion Whispering Dawn

  // #region Expedient
  //   {
  //     actionName: "Expedient",
  //     type: "ogcd",
  //     timestamp: ["1:40"],
  //   },
  // #endregion Expedient

  // #region Recitation + Indomitability
  //   {
  //     actionName: "Recitation",
  //     type: "ogcd",
  //     timestamp: ["1:46"],
  //   },
  //   {
  //     actionName: "Indomitability",
  //     type: "ogcd",
  //     timestamp: ["1:57"],
  //   },
  // #endregion

  // #region Seraph
  //   {
  //     actionName: "Summon Seraph",
  //     type: "ogcd",
  //     timestamp: ["1:39"],
  //   },
  //   {
  //     actionName: "Consolation",
  //     type: "ogcd",
  //     timestamp: ["1:43"],
  //   },
  //   {
  //     actionName: "Consolation",
  //     type: "ogcd",
  //     timestamp: ["1:56"],
  //   },

  // #endregion

  // #region Fey Blessing
  //   {
  //     actionName: "Fey Blessing",
  //     type: "ogcd",
  //     timestamp: ["2:51"],
  //   },
  // #endregion Fey Blessing

  // #region Sacred Soil
  //   {
  //     actionName: "Sacred Soil",
  //     type: "ogcd",
  //     timestamp: ["2:05"],
  //   },
  // #endregion

  // #region Succor
  //   {
  //     actionName: "Succor",
  //     type: "ogcd",
  //     timestamp: ["4:25"],
  //   },
  // #endregion

  // #region Adloquium
  //   {
  //     actionName: "Adloquium",
  //     type: "ogcd",
  //     timestamp: ["6:18"],
  //   },
  //   {
  //     actionName: "Deployment Tactics",
  //     type: "ogcd",
  //     timestamp: ["6:22"],
  //   },
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

  // Potions
  {
    actionName: "Grade 6 Tincture of Mind",
    type: "ogcd",
    timestamp: ["4:35"],
  },
];
