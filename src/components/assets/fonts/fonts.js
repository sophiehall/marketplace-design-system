export default  `

/* Motivo Regular Fonts */
@font-face {
  font-family: 'Motivo Regular';
  font-style: normal;
  font-weight: 400;
  src: url("./Fonts/motivo-regular.woff") format('woff'),
  url("./Fonts/motivo-regular.woff2") format('woff');
}

.motivo-regular {
  font-family: 'Motivo Regular';
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  /* Support for IE. */
  font-feature-settings: 'liga';
}
`;
