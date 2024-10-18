import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

import one from "../assets/stickers/1.png";
import two from "../assets/stickers/2.png";
import three from "../assets/stickers/3.png";
import four from "../assets/stickers/4.png";
import five from "../assets/stickers/5.png";

const Sponser = () => {
  const Stickers = [one, two, three, four, five];
  return (
    <VStack align="center" justify="center" minH="40vh">
      <Text>AS FEATURED IN</Text>
      <Flex align="center" justify="center" flexWrap="wrap" gap="2rem" w="100%">
        {Stickers.map((item, index) => {
          return (
            <Flex
              align="center"
              justify="center"
              w="10rem"
              h="10rem"
              key={index}
            >
              <Img
                cursor="pointer"
                filter="grayscale(100%)"
                _hover={{ filter: "grayscale(0%)" }}
                src={item}
              />
            </Flex>
          );
        })}
      </Flex>
    </VStack>
  );
};

export default Sponser;
