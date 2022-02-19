import clsx from "clsx";
import formatDuration from "format-duration";
import { useEffect } from "react";

import { Castbar } from "./components/Castbar/Castbar";
import { PlayerAction } from "./components/PlayerAction/PlayerAction";
import { P2STimeline } from "./timelines/P2S";
import { useTimer } from "./useTimer";
import { useToggler } from "./useToggler";
import { useWebSocket } from "./useWebSocket";
import { eventId, getLastEventFinishTime } from "./utils";

import "./App.css";

const lastEventFinishTime = getLastEventFinishTime(P2STimeline);

const params = new URLSearchParams(window.location.search);
const overlay = params.has("overlay") && params.get("overlay") !== "false";

if (overlay) {
  document.body.classList.add("in-overlay");
}

function App() {
  const [playing, playOrStop] = useToggler();
  const seconds = useTimer({ start: playing });

  const { zoneName, isCombatActive } = useWebSocket();

  useEffect(() => {
    if (isCombatActive && !playing) {
      playOrStop();
    }
    if (!isCombatActive && playing) {
      playOrStop();
    }
  }, [isCombatActive]);

  return (
    <main
      className={clsx(
        "App",
        playing && "App--animate",
        overlay && "App--overlay"
      )}
    >
      <div
        className="timelines"
        style={{
          ["--lastEventFinishTime" as any]: lastEventFinishTime,
        }}
      >
        <div id="player-actions" className="timeline">
          {P2STimeline.map(
            (event) =>
              event.source === "player" && (
                <div
                  key={eventId(event)}
                  className="Action--position"
                  style={{
                    ["--event-start" as any]: event.start,
                  }}
                >
                  <PlayerAction key={eventId(event)} event={event} />
                </div>
              )
          )}
        </div>

        <div id="boss-actions" className="timeline timeline--boss">
          {P2STimeline.map(
            (event) =>
              event.source === "boss" && (
                <div
                  key={eventId(event)}
                  className="Action--position"
                  style={{
                    ["--event-start" as any]: event.start,
                  }}
                >
                  <Castbar event={event} />
                </div>
              )
          )}
        </div>

        <div id="legend" className="legend">
          {Array.from({ length: lastEventFinishTime }).map((_, i) => (
            <div key={i} data-timestamp={formatDuration(i * 1000)}></div>
          ))}
        </div>
      </div>

      {!overlay && (
        <div id="controls" className="controls">
          <h1>
            {formatDuration(seconds * 1000)} {zoneName}
          </h1>

          <button onClick={playOrStop}>{playing ? "⏹ stop" : "▶ start"}</button>
        </div>
      )}
    </main>
  );
}

export default App;
