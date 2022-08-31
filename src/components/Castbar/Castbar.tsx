import clsx from "clsx";
import { TimelineBossEvent } from "../../types";
import { getDuration } from "../../utils";

import "./Castbar.css";

type Props = {
  event: TimelineBossEvent;
};

export function Castbar({ event, event: { actionName, type } }: Props) {
  const duration = getDuration(event);
  return (
    <div className="castbar">
      <div
        className={clsx(
          "castbar--progress",
          type === "tb" && "castbar--tankBuster",
          type === "rw" && "castbar--raidwide"
        )}
        style={{ ["--duration" as any]: duration }}
      />

      {actionName}
    </div>
  );
}
