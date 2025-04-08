export function calculateProgress(max, current) {
    return ((max - current) / max) * 100;
  }