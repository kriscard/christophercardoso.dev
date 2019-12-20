import React from 'react'
import styled from "styled-components"
import { Github, LinkedinSquare, Twitter, Instagram } from "styled-icons/boxicons-logos"
import { FacebookCircle } from "styled-icons/remix-fill"
import { Angellist } from "styled-icons/fa-brands"

import Emoji from "../images/emoji"


const FooterContainer = styled.div`
  position: right;
  width: 100%;
  height: 30%;
  padding: 10px 0;
`

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 95%;
  border-top: 0.3px solid rgba(51,51,51,0.5);
  margin: auto;
  padding: 16px 0;

  @media (max-width: 991px) {
    align-items: center;
    flex-direction: column;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 25%;
`;

const FooterText = styled.div`
  color: #333333;
`;

const GithubIcon = styled(Github)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`
const LinkedinIcon = styled(LinkedinSquare)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`
const TwitterIcon = styled(Twitter)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`
const InstagramIcon = styled(Instagram)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`
const FacebookIcon = styled(FacebookCircle)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`
const AngellistIcon = styled(Angellist)`
  color: #01BEAE;
  transition: color 0.2s ease;

  &:hover, &:focus {
    color: #333333;
  }
`

const Footer = () => (
  <FooterContainer>
    <FooterStyle>

      <FooterText>
        Built with
            <Emoji symbol=" ❤️" label="love" />
        by Christopher Cardoso © {new Date().getFullYear()}
      </FooterText>
      <FooterLinks >
        <a
          href="https://github.com/kriscard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size="35" />
        </a>
        <a
          href="https://www.linkedin.com/in/christophercardoso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size="35" />
        </a>
        <a
          href="https://twitter.com/kris_card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon size="35" />
        </a>
        <a
          href="https://www.instagram.com/kriscard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size="35" />
        </a>
        <a
          href="https://www.facebook.com/cardoso.christopher"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon size="35" />
        </a>
        <a
          href="https://angel.co/christopher-cardoso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AngellistIcon size="35" />
        </a>
      </FooterLinks>
    </FooterStyle>
  </FooterContainer>
)

export default Footer
