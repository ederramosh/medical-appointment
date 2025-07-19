export function formatDate(date: any) {
    try {
      const d = new Date(date?.seconds ? date.seconds * 1000 : date);
      return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch {
      return '';
    }
  }