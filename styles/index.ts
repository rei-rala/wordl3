import { StyleByCoincidence } from "../types";

export const colors = {
  success: "var(--color-success)",
  warn: "var(--color-warn)",
  alert: "var(--color-alert)",
  sky: "var(--color-sky)",
  theme: "var(--theme-color)",
  font: "var(--color-font)",
  gray: "var(--border-color)",
}

export const cStyle: StyleByCoincidence = {
  bkgColor: {
    FULL: colors.success,
    PARTIAL: colors.warn,
    NONE: colors.gray,
    EMPTY: colors.theme,
  },
  color: {
    FULL: colors.theme,
    PARTIAL: colors.theme,
    NONE: colors.font,
    EMPTY: colors.font,
  },
};