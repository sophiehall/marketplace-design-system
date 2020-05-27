import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "./assets";
import { PrimaryButton } from "./Buttons";


const ModalWrapper = styled.div`
    width: 620px;
    height: 659px;
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const SignUpHeader = styled.h1`
    font-size: ${typeScale.header2};
    margin-top: 30px;
    margin-bottom: 0;
`;

const SignUpText = styled.p`
    font-size: ${typeScale.body};
    max-width: 60%;
    text-align: center;
    margin-bottom: 32px;
`;

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 32px;
    top: 32px;
    width: 24px;
    height: 24px;
    padding: 0;
`

export const SignUpModal = ({ showModal, setShowModal }) => {
     const animation = useSpring({
         opacity: showModal ? 1 : 0,
         transform: setShowModal ? `translateY(0)` : `translateY(-200%)`
     });
return (
    <animated.div style={animation}>
        <ModalWrapper>
            <SignUpHeader>Thank You!</SignUpHeader>
            <SignUpText>We have sent a temporary passsword to the email address that you provided</SignUpText>
            <img src={Illustrations.SignUp}
            alt="Sign up for an account"
            aria-hidden="true"
            />
            <PrimaryButton>Continue</PrimaryButton>
            <CloseModalButton aria-label="Close modal">
                <CloseIcon />
            </CloseModalButton>
        </ModalWrapper>
    </animated.div>
    );
};
