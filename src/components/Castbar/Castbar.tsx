import clsx from "clsx";
import { TimelineBossEvent } from "../../types";
import { getDuration } from "../../utils";

import "./Castbar.css";

type Props = {
  event: TimelineBossEvent;
};

export function Castbar({ event, event: { actionName, tankBuster } }: Props) {
  const duration = getDuration(event);
  return (
    <div className="castbar">
      <div
        className={clsx(
          "castbar--progress",
          tankBuster && "castbar--tankBuster"
        )}
        style={{ ["--duration" as any]: duration }}
      />

      {actionName}
    </div>
  );
}
