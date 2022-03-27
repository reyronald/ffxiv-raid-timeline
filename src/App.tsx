import clsx from "clsx";

import { TimelineUI } from "./components/TimelineUI/TimelineUI";
import { useWebSocket } from "./useWebSocket";
import { TimelineObjects, getTimelines } from "./timelines";

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

  const timelines = getTimelines(resolvedZoneID);

  const zoneNameFromStore =
    timelines && "zoneName" in timelines
      ? timelines.zoneName
      : timelines && "zoneName" in timelines[0]
      ? timelines[0].zoneName
      : "";
  const zoneName = zoneNameFromACT || zoneNameFromStore;

  return (
    <main className={clsx("App", overlay && "App--overlay")}>
      <TimelineUI
        overlay={overlay}
        zoneName={zoneName}
        isCombatActive={isCombatActive}
        timelines={timelines}
      />
    </main>
  );
}

export default App;
