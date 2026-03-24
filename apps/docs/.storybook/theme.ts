import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  brandTitle: "Design System",
  brandUrl: "https://github.com/yourusername/design-system",
  brandTarget: "_blank",

  colorPrimary: "#7c3aed",
  colorSecondary: "#7c3aed",

  appBg: "#fafafa",
  appContentBg: "#ffffff",
  appBorderColor: "#e5e5e5",
  appBorderRadius: 8,

  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Fira Code", ui-monospace, monospace',

  textColor: "#171717",
  textMutedColor: "#737373",

  barTextColor: "#737373",
  barSelectedColor: "#7c3aed",
  barBg: "#ffffff",
  barHoverColor: "#7c3aed",

  inputBg: "#ffffff",
  inputBorder: "#e5e5e5",
  inputTextColor: "#171717",
  inputBorderRadius: 6,
});
