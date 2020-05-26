import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#5C47D6",
  colorSecondary: "#241C54",

  // UI
  appBg: "#241C54",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "silver",
  textInverseColor: "white",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "white",
  barBg: "#241C54",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Whispir Marketplace",
  brandUrl: "https://www.whispir.com/",
  brandImage: "https://www.whispir.com.au/assets/img/logo-white.svg"
});