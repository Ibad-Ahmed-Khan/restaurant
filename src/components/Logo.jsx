import { Flex } from "@chakra-ui/react";
import React from "react";
import { RiInfinityLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Flex
      align="center"
      justify="center"
      fontSize="1.5rem"
      textTransform="uppercase"
      fontWeight="600"
      letterSpacing="2px"
      cursor="pointer"
      _hover={{ color: "#e67e22" }}
    >
      omnif <RiInfinityLine color="#e67e22" fontSize="3rem" />d
    </Flex>
  );
};

export default Logo;
