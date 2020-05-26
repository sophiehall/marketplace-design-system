import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
    width: 100%;
    height:100%;
`
export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden="true">
        <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M23 5.01429L20.9857 3L13 10.9857L5.01429 3L3 5.01429L10.9857 13L3 20.9857L5.01429 23L13 15.0143L20.9857 23L23 20.9857L15.0143 13L23 5.01429Z" fill="#111118"/>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="20" height="20">
        <path id="Path_2" fill-rule="evenodd" clip-rule="evenodd" d="M23 5.01429L20.9857 3L13 10.9857L5.01429 3L3 5.01429L10.9857 13L3 20.9857L5.01429 23L13 15.0143L20.9857 23L23 20.9857L15.0143 13L23 5.01429Z" fill="white"/>
        </mask>
    </CloseIconWrapper>
)
