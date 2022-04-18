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
