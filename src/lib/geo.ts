import { PROVINCES, type Province } from '../content/data.ts'

// Nearest province centre. Rough near borders, but it runs on the phone and sends nothing anywhere.
export function nearestProvince(lat: number, lng: number): Province | null {
  let best: Province | null = null
  let bestD = Infinity
  for (const p of PROVINCES) {
    const dLat = p[2] - lat
    const dLng = (p[3] - lng) * Math.cos((lat * Math.PI) / 180)
    const d = dLat * dLat + dLng * dLng
    if (d < bestD) {
      bestD = d
      best = p
    }
  }
  // About 3 degrees away means they are probably outside the Philippines.
  return bestD < 9 ? best : null
}
