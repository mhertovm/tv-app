export function secondsToTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const hStr = hours > 0 ? `${hours}h` : '';
    const mStr = `${minutes}m`;

    return `${hStr} ${mStr}`;
}