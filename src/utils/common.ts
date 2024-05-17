type MemoizedFunction<T> = (...args: any[]) => T;

export function memoize<T>(fn: MemoizedFunction<T>): MemoizedFunction<T> {
  const cache: Map<string, T> = new Map();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key)!;
  };
}

export function checkUniqueValues(obj: Record<string, string>): void {
  const values = Object.values(obj);
  const uniqueValues = new Set(values);
  if (values.length !== uniqueValues.size) {
    throw new Error(
      "Duplicate value found in service list: " + JSON.stringify(values)
    );
  }
}
