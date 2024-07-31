import { useMemo, useState } from "react";

type InitialState = boolean | (() => boolean);

export function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState);
  const handleValue = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [],
  );
  return [value, handleValue] as const;
}
