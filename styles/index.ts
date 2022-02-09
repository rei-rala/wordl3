enum COLORS {
  THEME = "var(--theme-color)",
  THEME_SECONDARY = "var(--theme-color-secondary)",
  SUCCESS = "var(--color-success)",
  WARN = "var(--color-warn)",
  ALERT = "var(--color-alert)",
  SKY = "var(--color-sky)",
  FONT = "var(--color-font)",
  BORDER = "var(--color-border)",
  DISABLED = "var(--color-disabled)",
  GRADIENT_BKG = "var(--COMP-GRADIENT-BKG)"
}

enum SIZES {
  LETTER_SQUARE_MIN = "var(--size-letter-square-min)",
  LETTER_SQUARE = "var(--size-letter-square)",
  LETTER = "var(--size-letter)",
  NAVBAR_HEIGHT = "var(--navbar-height)",
  GLOBAL_MAX_WIDTH = "var(--GLOBAL-MAX-WIDTH)",
}

enum ANIMATIONS {
  LETTER_POP = "var(--anim-letter-pop)",
  FADE_IN_BACKGROUND = "var(--anim-fadeInBackground)",
  FLIP = "var(--anim-flip)",
  PULSE = "var(--anim-pulse)",
  DURATION_MS = "var(--anim-duration)",
}

const THEME = {
  COLORS: COLORS,
  SIZES: SIZES,
  ANIMATIONS: ANIMATIONS,
}

export default THEME