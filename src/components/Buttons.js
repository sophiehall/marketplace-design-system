import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.body};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.warningHoverColor};
            color: ${props => props.theme.textColorOnPrimary};
        }

        &:active {
            background-color: ${props => props.theme.status.warningActiveColor};
        }
    `,
    error: () => `
        background-color: ${props => props.theme.status.errorColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.errorHoverColor};
            color: ${props => props.theme.textColorOnPrimary};
        }

        &:active {
            background-color: ${props => props.theme.status.errorActiveColor};
        }
    `,
    success: () => `
        background-color: ${props => props.theme.status.successColor};
        color: ${props => props.theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${props => props.theme.status.successHoverColor};
            color:${props => props.theme.textColorOnPrimary};
        }

        &:active {
            background-color: ${props => props.theme.status.successActiveColor};
        }
    `
    }


const Button = styled.button`
    border-radius: 22px;
    padding: 12px 24px;
    font-size: ${typeScale.body};
    min-width: 200px;
    cursor: pointer;
    margin: 24px;
    font-family: ${props => props.theme.primaryFont};

    &:focus-within {
        box-shadow: 0 0 2px 4px ${props => props.theme.primaryFocusColor};
        border-radius: 22px;
        padding: 12px 24px;
        outline: 0;
      }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColor};

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${props => props.theme.disabledColor};
        color: ${props => props.theme.textOnDisabledColor};
        cursor: not-allowed;
     } 
    
     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    color: ${props => props.theme.textColor};

    &:hover {
        background-color: ${props => props.theme.secondaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${props => props.theme.disabledColor};
        color: ${props => props.theme.textOnDisabledColor};
        cursor: not-allowed;
     } 

     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background-color: ${props => props.theme.tertiaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${props => props.theme.disabledColor};
        color: ${props => props.theme.textOnDisabledColor};
        cursor: not-allowed;
     } 

     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const GhostButton = styled(Button)`
    background-color: none;
    border: 1.5px solid ${props => props.theme.textColorInverted};
    color: ${props => props.theme.textColorInverted};

    &:hover {
        background-color: none;
        border: 1.5px solid ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.primaryActiveColor};
    }

    &:active {
        background-color: none;
        border: 1.5px solid ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.primaryActiveColor};
    }

    &:disabled {
        background-color: none;
        border: 1.5px solid ${props => props.theme.disabledColor};
        color: ${props => props.theme.disabledColor};
        cursor: not-allowed;
     } 

     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
