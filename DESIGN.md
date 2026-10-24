# DESIGN.md — El Niño Ready

Direction: **Locker Land** (lockerland.com.au, `opl-locker-land` in the taste-skill study), picked by lea on
2026-10-24. A retro post-office look: post red and cream fields, maroon outlines and hard maroon shadows,
die-cut sticker lettering, a fan of tilted cards as the hero navigation, checker strips between sections.
Tokens live in `src/index.css` `@theme`. The older dark tokens (canvas, surface, primary...) are unused leftovers.

## Colors

| Token    | Value   | Role                                                               |
| -------- | ------- | ------------------------------------------------------------------ |
| post     | #dc1928 | Post red. Hero, checklist, FAQ and footer fields; drought status   |
| cream    | #fdf3db | Text on red, die-cut card borders, sticker fill                    |
| paper    | #fdf3db | Light section ground (province check, timeline, footer)            |
| line     | #952625 | Maroon. Every outline, hard shadow, heading on cream; hotline band |
| ink-warm | #2b1a14 | Body text on cream and white                                       |
| soft     | #6b4a40 | Secondary notes                                                    |
| sun      | #e0a912 | Mustard. Primary button, checklist card, below-normal status       |
| heat     | #d46831 | Burnt orange. Dry-condition status, Questions card                 |
| slate    | #5b7a94 | Slate blue. Timeline card, tabo arch, Tubig header                 |
| sky      | #9fc0d6 | Near-normal status                                                 |
| pink     | #f2a28f | The tabo mascot, Sunog header                                      |
| plum     | #a63c93 | Joke-sticker labels only                                           |

## Typography

Bricolage Grotesque (variable, self-hosted) for display and body; display at 800 with tight tracking.
Caveat 700 only for the "created by lea" signature. Big headlines use `.sticker-type`: cream fill, a maroon
text-shadow ring and a hard maroon drop.

## Shape

Pills for buttons, tabs and FAQ rows; 22–28px radius on cards. Borders 3px (6px cream on hero cards).
Shadows are flat offsets in maroon (4–8px), never blurred. Buttons press into their shadow on click.

## Patterns

- Hero: sticker headline, then a fan of five tilted cards (Timeline, Checklist, My province arch, Questions, Hotlines).
- Sticky cream pill sub-nav. Checker strips (`.checker`) between sections. Faint cream grid on red (`.grid-field`).
- Each section gets one tilted white joke sticker (`Banat`) with its own label. The checklist items stay joke-free.
