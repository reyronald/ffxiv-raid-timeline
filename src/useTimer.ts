import React, { useEffect } from "react";
import { useInterval } from "./useInterval";

type Props = {
  start: boolean;
};

export function useTimer({ start }: Props) {
  const [seconds, setSeconds] = React.useState(0);

  useInterval(() => {
    if (start) {
      setSeconds((s) => s + 1);
    }
  }, 1000);

  useEffect(() => {
    if (!start) {
      setSeconds(0);
    }
  }, [start]);

  return seconds;
}
