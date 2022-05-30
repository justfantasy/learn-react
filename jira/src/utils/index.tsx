export function isFalsy(value: any) {
  return value === 0 ? true : !value;
}

export function filterFalsyObject(obj: object) {
  const target = { ...obj };
  Object.keys(target).forEach((key) => {
    if (isFalsy(target[key as keyof Object])) {
      delete target[key as keyof Object];
    }
  });
  return target;
}

export function debounce(func: Function, delay: number) {
  let timer: number;

  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

export default {};
