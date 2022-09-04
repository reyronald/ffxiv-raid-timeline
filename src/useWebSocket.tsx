import { useState, useEffect, useRef } from "react";
import { WebSocketMessage } from "./types";

export function useWebSocket() {
  const [zoneID, setZoneID] = useState<number | null>(null);
  const [zoneName, setZoneName] = useState<string | null>(null);
  const [isCombatActive, setIsCombatActive] = useState(false);

  const combatActiveTimestampRef = useRef<number | null>(null);

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

    // https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md
    // Listen for messages
    socket.addEventListener("message", onMessage);

    function onMessage(event: MessageEvent<any>) {
      const parsed: WebSocketMessage = JSON.parse(event.data);

      // console.log(parsed);

      if (parsed.msgtype === "ChangeZone") {
        console.log(parsed);
        setZoneID(parsed.msg.zoneID);
        setZoneName(parsed.msg.zoneName);
      }

      if (parsed.msgtype === "Chat") {
        const logParams = parsed.msg.split("|");
        const [lineId] = logParams;

        if (lineId === "20") {
          const match = parsed.msg.match(
            /^(?<type>(?:20))\|(?<timestamp>(?:[^|]*))\|(?<sourceId>(?:[^|]*))\|(?<source>(?:[^|]*))\|(?<id>(?:[^|]*))\|(?<ability>(?:[^|]*))\|(?<targetId>(?:[^|]*))\|(?<target>(?:[^|]*))\|(?<castTime>(?:[^|]*))\|(?<x>(?:[^|]*))\|(?<y>(?:[^|]*))\|(?<z>(?:[^|]*))\|(?<heading>(?:[^|]*))\|/
          );
          if (match) {
            const groups = match.groups as unknown as NetworkAbility;
            // console.log(groups.ability, groups);
          }
        }

        if (lineId === "21" || lineId === "22") {
          const match = parsed.msg.match(
            /^(?<type>(?:2[12]))\|(?<timestamp>(?:[^|]*))\|(?<sourceId>(?:[^|]*))\|(?<source>(?:[^|]*))\|(?<id>(?:[^|]*))\|(?<ability>(?:[^|]*))\|(?<targetId>(?:[^|]*))\|(?<target>(?:[^|]*))\|(?<flags>(?:[^|]*))\|(?<damage>(?:[^|]*))\|(?:[^|]*\|){14}(?<targetCurrentHp>(?:[^|]*))\|(?<targetMaxHp>(?:[^|]*))\|(?<targetCurrentMp>(?:[^|]*))\|(?<targetMaxMp>(?:[^|]*))\|(?:[^|]*\|){2}(?<targetX>(?:[^|]*))\|(?<targetY>(?:[^|]*))\|(?<targetZ>(?:[^|]*))\|(?<targetHeading>(?:[^|]*))\|(?<currentHp>(?:[^|]*))\|(?<maxHp>(?:[^|]*))\|(?<currentMp>(?:[^|]*))\|(?<maxMp>(?:[^|]*))\|(?:[^|]*\|){2}(?<x>(?:[^|]*))\|(?<y>(?:[^|]*))\|(?<z>(?:[^|]*))\|(?<heading>(?:[^|]*))\|(?<sequence>(?:[^|]*))\|/
          );
          if (match) {
            const groups = match.groups as unknown as NetworkAbility;
            // console.log(groups.ability, groups);
          }
        }
      }

      if (parsed.msgtype === "CombatData") {
        setIsCombatActive((prev) => {
          const currentMessageIsActive = parsed.msg.isActive === "true";

          const now = Date.now();

          if (prev && !currentMessageIsActive) {
            if (combatActiveTimestampRef.current == null) {
              combatActiveTimestampRef.current = now;
            } else {
              if (now - combatActiveTimestampRef.current > 14000) {
                combatActiveTimestampRef.current = null;
                return false;
              }
            }
          } else {
            combatActiveTimestampRef.current = null;
            return currentMessageIsActive;
          }

          return prev;
        });
      }
    }

    // window.__app.onMessage = (isActive: boolean) => {
    //   onMessage({
    //     data: `{ "msgtype": "CombatData", "msg": { "isActive": "${isActive.toString()}" } }`,
    //   });
    // };

    return () => {
      socket.close();
    };
  }, []);

  return { zoneID, zoneName, isCombatActive };
}

type NetworkStartsCasting = {};

type NetworkAbility = {
  ability: string;
  currentHp: string;
  currentMp: string;
  damage: string;
  flags: string;
  heading: string;
  id: string;
  maxHp: string;
  maxMp: string;
  sequence: string;
  source: string;
  sourceId: string;
  target: string;
  targetCurrentHp: string;
  targetCurrentMp: string;
  targetHeading: string;
  targetId: string;
  targetMaxHp: string;
  targetMaxMp: string;
  targetX: string;
  targetY: string;
  targetZ: string;
  timestamp: string;
  type: string;
  x: string;
  y: string;
  z: string;
};
