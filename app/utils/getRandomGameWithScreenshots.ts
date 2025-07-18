export function getRandomGameWithScreenshots<T extends { screenshots?: unknown[] }>(
  array: T[],
  count: number
): T[] {
  const filtered = array.filter((item) => Array.isArray(item.screenshots) && item.screenshots.length > 0);

  if (count > filtered.length) {
    throw new Error("A quantidade solicitada excede o número de itens com screenshots.");
  }

  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
