import { Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TryFreeButton from "../pages/TryFreeButton";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useStore } from "../Zustand";

const Header = () => {
  const Links = [
    { link: "How its work?" },
    { link: "meals " },
    { link: "Testimonails " },
    { link: "pricing " },
  ];

  const { hamburger, handleHamburger } = useStore();
  return (
    <SimpleGrid
      columns="2"
      w="full"
      minH="5rem"
      paddingInline="2rem"
      fontWeight="bold"
      bg="#fff"
    >
      <Flex align="center" textTransform="uppercase">
        Ibad Ahmed Khan
      </Flex>

      {/* Desktop Menu */}
      <Flex
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
        align="center"
        justify="space-around"
        textTransform="capitalize"
      >
        {Links.map((item, index) => (
          <Link key={index} fontWeight="bold">
            {item.link}
          </Link>
        ))}
        <TryFreeButton name={"Try for free"} />
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
          <Link key={index} fontWeight="bold">
            {item.link}
          </Link>
        ))}
        <TryFreeButton name={"Try for free"} />
      </Flex>
    </SimpleGrid>
  );
};

export default Header;
