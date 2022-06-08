import { useState } from 'react';

export default function useArray<T>(initValue: T[]) {
  const [value, setValue] = useState(initValue);
  return {
    value,
    clear: () => setValue([]),
    add: (item: T) => setValue([...value, item]),
    removeIndex: (index: number) => {
      const copy = [...value];
      setValue(copy.splice(index, 1));
    },
  };
}
