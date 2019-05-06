import React from "react";

import { Container } from "./styles";

const Footer = () => (
  <Container>
    © {new Date().getFullYear()} JavaScript Zagreb. All Rights Reserved.
  </Container>
);

export default Footer;
