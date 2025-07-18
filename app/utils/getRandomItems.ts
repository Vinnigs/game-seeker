export function getRandomItems<T>(array: T[], count: number): T[] {
    if (count > array.length) {
        throw new Error("A quantidade solicitada excede o tamanho do array.");
    }

    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
