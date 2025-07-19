export function formatDate(date: { seconds: number } | string | number | Date): string {
  try {
    const d = new Date(
      typeof date === 'object' && date !== null && 'seconds' in date
        ? (date as { seconds: number }).seconds * 1000
        : date
    );
    return d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
