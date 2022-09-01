import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <FooterContainer>
      <Anchor href="https://www.facebook.com/bethelhem.zewge.58" target="_blank">
        <BsFacebook />
      </Anchor>
      <Anchor href="https://instagram.com/kuku_bz?igshid=YmMyMTA2M2Y=" target="_blank">
        <BsInstagram />
      </Anchor>
      <Anchor href="https://www.linkedin.com/in/bethelhem-yilma-5b760b198" target="_blank">
        <BsLinkedin />
      </Anchor>
      <p>
        Copyright protected{" "}
        <span>
          <a>Bethelhem Yilma</a>
        </span>
      </p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`

width: 100%;
  margin: 2rem 0 0 0;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(35deg, #7f7c82, #9d9d9d);

  a {
    margin: 0 1rem 1.5rem 0;
    cursor: pointer;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const Anchor = styled.a`
  margin-right: 1.3rem;
  cursor: pointer;
  font-size: 1.1rem;

  &.hover {
    color: linear-gradient(to right, #ffddcc, #ffbbcc) !important;
  }

  &.active {
    color: linear-gradient(to right, #ffddcc, #ffbbcc);
  }
`;

export default Footer;
