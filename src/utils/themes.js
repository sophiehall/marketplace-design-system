import { primaryPurple, secondaryPurple, neutral, error, warning, success } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primaryPurple[100],
  primaryHoverColor: secondaryPurple[100],
  primaryActiveColor: secondaryPurple[100],
  primaryFocusColor: primaryPurple[200],
  secondaryColor: secondaryPurple[100],
  secondaryActiveColor: neutral[600],
  tertiaryColor: neutral[100],
  tertiaryActiveColor: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  disabledColor: neutral[300],
  textOnDisabledColor: neutral[400],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  primaryFont: primaryFont,
  status: {
    warningColor: warning[100],
    warningHoverColor: warning[200],
    warningActiveColor: warning[300],
    errorColor: error[100],
    errorHoverColor: error[200],
    errorActiveColor: error[300],
    successColor: success[100],
    successHoverColor: success[200],
    successActiveColor: success[300]
    }
};

export const darkTheme = {
  primaryColor: secondaryPurple[100],
  primaryHoverColor: neutral[600],
  primaryActiveColor: neutral[600],
  primaryFocusColor: neutral[600],
  secondaryColor: secondaryPurple[100],
  secondaryActiveColor: neutral[600],
  tertiaryColor: neutral[100],
  tertiaryActiveColor: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[600],
  disabledColor: neutral[300],
  textOnDisabledColor: neutral[400],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  primaryFont: primaryFont,
  status: {
    warningColor: warning[100],
    warningHoverColor: warning[200],
    warningActiveColor: warning[300],
    errorColor: error[100],
    errorHoverColor: error[200],
    errorActiveColor: error[300],
    successColor: success[100],
    successHoverColor: success[200],
    successActiveColor: success[300]
    }
};