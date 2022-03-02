const COLORS = {
  THEME: "var(--theme-color)",
  THEME_SECONDARY: "var(--theme-color-secondary)",
  THEME_TERTIARY: "var(--theme-color-tertiary)",
  SUCCESS: "var(--color-success)",
  WARN: "var(--color-warn)",
  ALERT: "var(--color-alert)",
  SKY: "var(--color-sky)",
  FONT: "var(--color-font)",
  BORDER: "var(--color-border)",
  DISABLED: "var(--color-disabled)",
  GRADIENT_BKG_PORTRAIT: "var(--GRADIENT-BKG-PORTRAIT)",
  GRADIENT_BKG_LANDSCAPE: "var(--GRADIENT-BKG-LANDSCAPE)",
}

const SIZES = {
  LETTER_SQUARE: "var(--size-letter-square)",
  KEYBOARD_KEY: "var(--size-keyboard-key)",
  GLOBAL_MAX_WIDTH: "var(--GLOBAL-MAX-WIDTH)",

  FRAME_HEIGHT: "var(--frame-height)",
  FRAME_HEIGHT_LANDSCAPE: "var(--frame-height-landscape)",

  KEYBOARD_HEIGHT: "var(--keyboard-height)",
  KEYBOARD_HEIGHT_LANDSCAPE: "var(--keyboard-height-landscape)",
  NAVBAR_HEIGHT: "var(--navbar-height)",
  FOOTER_HEIGHT: "var(--footer-height)",
}

const ANIMATIONS = {
  LETTER_POP: "var(--anim-letter-pop)",
  FADE_IN: "var(--anim-fadeIn)",
  POPUP_APPEAR: "var(--anim-popup-appear)",
  SHAKE: "var(--anim-shake)",
  PULSE: "var(--anim-pulse)",
  DURATION: "var(--anim-duration)",
  DURATION_MS_INT: 400,
}



const THEME = {
  COLORS,
  SIZES,
  ANIMATIONS,
}


export default THEME