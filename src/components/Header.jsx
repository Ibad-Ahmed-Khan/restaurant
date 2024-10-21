import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TryFreeButton from "../pages/TryFreeButton";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useStore } from "../Zustand";
import { Link } from "react-scroll";
import Logo from "./Logo";

const Header = () => {
  const Links = [
    { to: "HowToWork", link: "How its work?" },
    { to: "meals", link: "meals " },
    { to: "Testimonails", link: "Testimonails " },
    { to: "pricing", link: "pricing " },
  ];

  const { hamburger, handleHamburger } = useStore();

  const totalOffset = -70;

  return (
    <SimpleGrid
      columns="2"
      w="full"
      alignItems="center"
      justifyContent="center"
      minH="5rem"
      paddingInline="2rem"
      fontWeight="bold"
      bg="#fdf2e9"
    >
      <Flex
        align="center"
        justify="center"
        textTransform="uppercase"
        _hover={{ color: "#e67e22" }}
        w="10rem"
        zIndex="222"
      >
        <Link
          _hover={{ color: "#e67e22", textDecoration: "none" }} // Add textDecoration to remove the default underline
          w="10rem"
          to="logo"
          smooth={true}
          offset={totalOffset}
          duration={500}
          style={{ color: "inherit" }} // Ensure the link inherits the color from the parent
        >
          <Logo />
        </Link>
      </Flex>

      {/* Desktop Menu */}
      <Flex
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
        align="center"
        justify="space-around"
        textTransform="capitalize"
      >
        {Links.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            offset={totalOffset}
            duration={500}
            spy={true}
            cursor="pointer"
          >
            <Box cursor="pointer" _hover={{ color: "#e67e22" }}>
              {item.link}
            </Box>
          </Link>
        ))}
        <Link to="contact" smooth={true} offset={totalOffset} duration={500}>
          <TryFreeButton name={"Try for free"} />
        </Link>
      </Flex>

      {/* Mobile Menu Icon */}
      <Flex align="center" justify="end">
        <HamburgerIcon
          transform={hamburger ? "scale(0,0)" : "scale(1, 1)"}
          transformOrigin="right"
          transition="opacity 0.4s ease, transform 0.4s ease"
          onClick={handleHamburger}
          pos="absolute"
          fontSize="xl"
          zIndex="10000000000000"
          display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        />
        <CloseIcon
          pos="fixed"
          zIndex="10000000000000"
          transform={hamburger ? "scale(1,1)" : "scale(0, 0)"}
          transformOrigin="right"
          transition="opacity 0.4s ease, transform 0.4s ease"
          onClick={handleHamburger}
          display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        />
      </Flex>

      {/* Mobile Menu with Crystal Blur */}
      <Flex
        transform={hamburger ? "scale(1,1)" : "scale(0, 1)"}
        transformOrigin="right"
        opacity={hamburger ? "1" : "0"}
        transition="opacity 0.4s ease, transform 0.4s ease"
        backdropFilter="blur(15px)" // Crystal blur effect
        bg="rgba(255, 255, 255, 0.1)" // Transparent background
        w="full"
        minH="full"
        pos="fixed"
        top="0"
        left="0"
        display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        flexDir="column"
        align="center"
        justify="center"
        gap="2rem" // Consistent spacing between links
        textTransform="capitalize"
        zIndex="overlay"
      >
        {Links.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            offset={totalOffset}
            duration={500}
            spy={true}
            cursor="pointer"
            onClick={handleHamburger}
          >
            {item.link}
          </Link>
        ))}
        <Link
          to="contact"
          smooth={true}
          offset={totalOffset}
          duration={500}
          spy={true}
          onClick={handleHamburger}
        >
          <TryFreeButton name={"Try for free"} />
        </Link>
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
