// Draws the shareable preparedness card (1080 × 1920, Instagram Story size) on a canvas, on the phone itself.
// Colors come from the @theme tokens at runtime, so the card always matches the site.

export type CardGroup = { title: string; done: number; total: number }
export type CardData = {
  score: number
  groups: CardGroup[]
  label: string
  line: string
  // The tabo mascot as SVG markup; var(--color-*) references are resolved here.
  taboSvg: string
}

const W = 1080
const H = 1920
const FONT = '"Bricolage Grotesque Variable", system-ui, sans-serif'

function token(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--color-${name}`)
    .trim()
}

function loadSvg(svg: string): Promise<HTMLImageElement> {
  // Markup read from the page has no xmlns, which an <img> needs to decode it.
  const resolved = svg
    .replace(/var\(--color-([a-z-]+)\)/g, (_, n) => token(n))
    .replace(
      '<svg',
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="250"',
    )
  const img = new Image()
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(resolved)
  return img.decode().then(() => img)
}

function wrap(ctx: CanvasRenderingContext2D, text: string, max: number) {
  const lines: string[] = []
  let cur = ''
  for (const word of text.split(' ')) {
    const next = cur ? `${cur} ${word}` : word
    if (ctx.measureText(next).width > max && cur) {
      lines.push(cur)
      cur = word
    } else cur = next
  }
  if (cur) lines.push(cur)
  return lines
}

// Die-cut sticker lettering, as .sticker-type does it on the site: maroon drop, maroon ring, cream fill.
function sticker(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  size: number,
) {
  const line = token('line')
  ctx.font = `800 ${size}px ${FONT}`
  ctx.lineJoin = 'round'
  ctx.lineWidth = size * 0.07
  ctx.strokeStyle = line
  ctx.fillStyle = line
  const drop = size * 0.06
  ctx.strokeText(text, x + drop, y + drop)
  ctx.fillText(text, x + drop, y + drop)
  ctx.strokeText(text, x, y)
  ctx.fillStyle = token('cream')
  ctx.fillText(text, x, y)
}

function checker(ctx: CanvasRenderingContext2D, y: number) {
  for (let x = 0; x < W; x += 56) {
    ctx.fillStyle = token('line')
    ctx.fillRect(x, y, 28, 28)
    ctx.fillStyle = token('cream')
    ctx.fillRect(x + 28, y, 28, 28)
  }
}

function box(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fill: string,
  shadow: number,
  border: number,
) {
  const line = token('line')
  ctx.fillStyle = line
  ctx.beginPath()
  ctx.roundRect(x + shadow, y + shadow, w, h, r)
  ctx.fill()
  ctx.fillStyle = fill
  ctx.strokeStyle = line
  ctx.lineWidth = border
  ctx.beginPath()
  ctx.roundRect(x, y, w, h, r)
  ctx.fill()
  ctx.stroke()
}

export async function drawCard(canvas: HTMLCanvasElement, d: CardData) {
  await document.fonts.load(`800 100px ${FONT}`)
  const tabo = await loadSvg(d.taboSvg)
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  const cream = token('cream')

  // Post-red grid field with checker strips top and bottom.
  ctx.fillStyle = token('post')
  ctx.fillRect(0, 0, W, H)
  ctx.fillStyle = 'rgb(255 255 255 / 0.08)'
  for (let i = 0; i < W; i += 48) ctx.fillRect(i, 0, 2, H)
  for (let i = 0; i < H; i += 48) ctx.fillRect(0, i, W, 2)
  checker(ctx, 0)
  checker(ctx, H - 28)

  // Wordmark with the tabo.
  ctx.drawImage(tabo, 320, 92, 150, 188)
  ctx.textAlign = 'left'
  sticker(ctx, 'El Niño', 508, 185, 76)
  sticker(ctx, 'Ready', 508, 258, 76)

  // Score.
  ctx.textAlign = 'center'
  sticker(ctx, `${d.score}%`, W / 2, 565, 300)
  ctx.fillStyle = cream
  ctx.font = `800 54px ${FONT}`
  ctx.fillText('handa sa El Niño', W / 2, 675)

  // One bar per checklist group.
  d.groups.forEach((g, i) => {
    const y = 760 + i * 76
    ctx.fillStyle = cream
    ctx.font = `800 36px ${FONT}`
    ctx.textAlign = 'left'
    ctx.fillText(g.title, 96, y + 30)
    ctx.textAlign = 'right'
    ctx.fillText(`${g.done}/${g.total}`, 984, y + 30)
    box(ctx, 332, y, 536, 34, 17, cream, 4, 4)
    if (g.done > 0) {
      ctx.save()
      ctx.beginPath()
      ctx.roundRect(332, y, 536, 34, 17)
      ctx.clip()
      ctx.fillStyle = token('sun')
      ctx.fillRect(332, y, (536 * g.done) / g.total, 34)
      ctx.restore()
      ctx.strokeStyle = token('line')
      ctx.lineWidth = 4
      ctx.beginPath()
      ctx.roundRect(332, y, 536, 34, 17)
      ctx.stroke()
    }
  })

  // The joke, on a tilted white sticker with its own label.
  ctx.save()
  ctx.translate(W / 2, 1365)
  ctx.rotate((-2 * Math.PI) / 180)
  ctx.font = `700 44px ${FONT}`
  const lines = wrap(ctx, d.line, 730)
  const h = 110 + lines.length * 56
  box(ctx, -405, -h / 2, 810, h, 36, '#fff', 8, 5)
  ctx.textAlign = 'left'
  ctx.fillStyle = token('plum')
  ctx.font = `800 28px ${FONT}`
  ctx.fillText(d.label.toUpperCase().split('').join(' '), -365, -h / 2 + 60)
  ctx.fillStyle = token('line')
  ctx.font = `700 44px ${FONT}`
  lines.forEach((l, i) => ctx.fillText(l, -365, -h / 2 + 118 + i * 56))
  ctx.restore()

  // Footer with the link.
  ctx.textAlign = 'center'
  ctx.fillStyle = cream
  ctx.font = `700 38px ${FONT}`
  ctx.fillText('Generate your own El Niño', W / 2, 1597)
  ctx.fillText('preparedness checklist thru', W / 2, 1647)
  box(ctx, 276, 1686, 528, 112, 56, cream, 6, 5)
  ctx.fillStyle = token('line')
  ctx.font = `800 56px ${FONT}`
  ctx.fillText('elninoready.org', W / 2, 1762)
}

export function cardBlob(canvas: HTMLCanvasElement) {
  return new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject()), 'image/png'),
  )
}
