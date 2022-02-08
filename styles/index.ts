enum COLORS {
  THEME = "var(--theme-color)",
  SUCCESS = "var(--color-success)",
  WARN = "var(--color-warn)",
  ALERT = "var(--color-alert)",
  SKY = "var(--color-sky)",
  FONT = "var(--color-font)",
  BORDER = "var(--color-border)",
  DISABLED = "var(--color-disabled)",
}

enum SIZES {
  LETTER_SQUARE = "var(--size-letter-square)",
  LETTER = "var(--size-letter)",
}

enum ANIMATIONS {
  LETTER_POP = "var(--anim-letter-pop)",
  DURATION_MS = "var(--anim-duration)",
}

const THEME = {
  COLORS: COLORS,
  SIZES: SIZES,
  ANIMATIONS: ANIMATIONS,
}

export default THEME