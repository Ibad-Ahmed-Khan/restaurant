import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Logo from "./Logo";
import { Link } from "react-scroll";

const Footer = () => {
  const totalOffset = -70;

  const data = [
    {
      title: (
        <Link
          _hover={{ color: "#e67e22" }}
          to="logo"
          smooth={true}
          offset={totalOffset}
          duration={500}
          style={{ color: "inherit" }}
        >
          <Logo />
        </Link>
      ),
      flexDir: "row",
      fs: "1.5rem",
      description: [
        {
          icon: <FaInstagram />,
          iconLink: "https://www.instagram.com",
          color: "#E1306C", // Instagram's official color
        },
        {
          icon: <FaFacebook />,
          iconLink: "https://www.facebook.com",
          color: "#1877F2", // Facebook's official color
        },
        {
          icon: <FaTwitter />,
          iconLink: "https://www.twitter.com",
          color: "#1DA1F2", // Twitter's official color
        },
      ],

      description2: "Copyright © 2024 by Omnifood, Inc. All rights reserved.",
    },
    {
      title: "Contact us",
      flexDir: "column",
      fs: "1rem",
      description: [
        "623 Harrison St., 2nd Floor, San Francisco, CA 94107",
        "321-123-1234",
        "hello@omnifood.com",
      ],
    },
    {
      title: "Account",
      flexDir: "column",
      fs: "1rem",
      description: ["Create an account", "Sign in", "iOS app", "Android app"],
    },
    {
      title: "Company",
      flexDir: "column",
      fs: "1rem",
      description: [
        "About Omnifood",
        "For Business",
        "Cooking partners",
        "Careers",
      ],
    },
    {
      title: "Resources",
      flexDir: "column",
      fs: "1rem",
      description: ["Recipe directory", "Help center", "Privacy & terms"],
    },
  ];

  return (
    <Flex
      align="center"
      justify="center"
      flexWrap="wrap"
      gap={{ base: "1rem", lg: "4rem" }}
    >
      {data.map((item, index) => {
        return (
          <Flex
            paddingInline="2rem"
            minW="14rem"
            maxW="14rem"
            minH={{ base: "18rem", lg: "20rem" }}
            flexDir="column"
            key={index}
            color="gray.600"
            gap={{ base: "1.5rem", lg: "2rem" }}
          >
            <Heading
              fontSize="1.1rem"
              fontFamily="Poppins, sans-serif"
              fontWeight="700"
            >
              {item.title}
            </Heading>

            {index === 0 ? (
              <Flex flexDir={item.flexDir} gap="1rem">
                {item.description.map((iconItem, index2) => (
                  <Box
                    key={index2}
                    // as="a"
                    href={iconItem.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    cursor="pointer"
                    color={iconItem.color}
                    filter="grayscale(100%)"
                    _hover={{
                      filter: "grayscale(0%)",
                      transform: "scale(1.4) rotate(25deg)",
                    }}
                    transition=" all .25s ease-in-out  "
                    fontSize={item.fs}
                  >
                    {iconItem.icon}
                  </Box>
                ))}
              </Flex>
            ) : (
              <Flex flexDir={item.flexDir} gap="1rem">
                {item.description.map((descItem, index2) => (
                  <Text
                    key={index2}
                    cursor="pointer"
                    fontSize={item.fs}
                    _hover={{
                      color: "orange.500",
                      textDecoration: "underline",
                    }}
                  >
                    {descItem}
                  </Text>
                ))}
              </Flex>
            )}

            {/* Footer copyright message */}
            {item.description2 && <Text>{item.description2}</Text>}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Footer;
