import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const prevScrollPosRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPosRef.current < currentScrollPos && !isHidden) {
        setIsHidden(true);
      } else if (prevScrollPosRef.current > currentScrollPos && isHidden) {
        setIsHidden(false);
      }
      prevScrollPosRef.current = currentScrollPos;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  const handleClick = (anchor) => {
    const id = `#${anchor}-section`;
    console.log(id);
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="60px"
      backgroundColor="#18241b"
      display="flex"
      justifyContent="space-between"
      transition="transform 0.3s"
      transform={isHidden ? "translateY(-200px)" : "translateY(0)"}
      color="white"
      margin="0"
    >
      <HStack
        px={12}
        py={4}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <nav>
          {socials.map((social) => {
            return (
              <Link key={social.icon.iconName} href={social.url}>
                <FontAwesomeIcon
                  icon={social.icon}
                  size="lg"
                  style={{ marginRight: "15px" }}
                />
              </Link>
            );
          })}
        </nav>
        <nav>
          <HStack spacing={6} fontSize="1x">
            <Link onClick={() => handleClick("contactme")}>Contact Me</Link>
            <Link onClick={() => handleClick("projects")}>Projects</Link>
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};
export default Header;
