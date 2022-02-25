import { useState, useEffect } from "react";
import { WebSocketMessage } from "./types";

export function useWebSocket() {
  const [zoneName, setZoneName] = useState<string | null>(null);
  const [isCombatActive, setIsCombatActive] = useState(false);

  useEffect(() => {
    const socket = new WebSocket(`ws://127.0.0.1:10501/BeforeLogLineRead`);

    // Connection opened
    socket.addEventListener("error", function (event) {
      console.log("error", event);
    });

    // Connection opened
    socket.addEventListener("open", function (event) {
      console.log("Hello Server!", event);
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      const parsed: WebSocketMessage = JSON.parse(event.data);
      // console.log(parsed);

      if (parsed.msgtype === "ChangeZone") {
        console.log(parsed);
        setZoneName(parsed.msg.zoneName);
      }

      if (parsed.msgtype === "Chat") {
        const logParams = parsed.msg.split("|");
        const [lineId] = logParams;
      }

      if (parsed.msgtype === "CombatData") {
        setIsCombatActive(parsed.msg.isActive === "true");
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  return { zoneName, isCombatActive };
}
