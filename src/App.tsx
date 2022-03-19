import clsx from "clsx";

import { Timeline } from "./components/Timeline/Timeline";
import { useWebSocket } from "./useWebSocket";
import { TimelineObjects, getTimeline } from "./timelines";

import "./App.css";

const params = new URLSearchParams(window.location.search);

const overlay = params.has("overlay") && params.get("overlay") !== "false";

if (overlay) {
  document.body.classList.add("in-overlay");
}

const defaultZone = TimelineObjects.P4S.zoneID;

function App() {
  const { zoneID, zoneName: zoneNameFromACT, isCombatActive } = useWebSocket();

  const resolvedZoneID = overlay
    ? zoneID
    : Number.parseInt(params.get("zoneID") || "0", 10) || defaultZone;

  const {
    zoneName: zoneNameFromStore,
    bossEvents,
    playerEvents,
  } = getTimeline(resolvedZoneID, "SCH");

  const zoneName = zoneNameFromACT || zoneNameFromStore;

  return (
    <main className={clsx("App", overlay && "App--overlay")}>
      <Timeline
        overlay={overlay}
        zoneName={zoneName}
        isCombatActive={isCombatActive}
        playerEvents={playerEvents}
        bossEvents={bossEvents}
      />
    </main>
  );
}

export default App;
