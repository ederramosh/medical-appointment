type FirestoreTimestamp = { seconds: number };

export function formatDate(date: FirestoreTimestamp | string | number | Date): string {
  try {
    const isTimestamp = (d: unknown): d is FirestoreTimestamp =>
      typeof d === 'object' && d !== null && 'seconds' in d && typeof (d as any).seconds === 'number';

    const d = new Date(isTimestamp(date) ? date.seconds * 1000 : date);
    return d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
