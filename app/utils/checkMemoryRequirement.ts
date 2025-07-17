export function checkMemoryRequirement(memoryString?: string): number | null {
    if (!memoryString) return null;

    const match = memoryString.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : null;
}