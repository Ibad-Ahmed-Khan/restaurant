import { Flex, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Test1 from "../assets/test1.jpg";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";
import Test4 from "../assets/test4.jpg";

import Food1 from "../assets/food/gallery-1.jpg";
import Food2 from "../assets/food/gallery-2.jpg";
import Food3 from "../assets/food/gallery-3.jpg";
import Food4 from "../assets/food/gallery-4.jpg";
import Food5 from "../assets/food/gallery-5.jpg";
import Food6 from "../assets/food/gallery-6.jpg";
import Food7 from "../assets/food/gallery-7.jpg";
import Food8 from "../assets/food/gallery-8.jpg";
import Food9 from "../assets/food/gallery-9.jpg";
import Food10 from "../assets/food/gallery-10.jpg";
import Food11 from "../assets/food/gallery-11.jpg";
import Food12 from "../assets/food/gallery-12.jpg";

const Testimonials = () => {
  const Arr1 = [
    {
      img: Test1,
      description:
        "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical. ",
      name: "— Dave Bryson",
    },
    {
      img: Test2,
      description:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore! ",
      name: "— Ben Hadley",
    },
    {
      img: Test3,
      description:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      name: "— Steve Miller",
    },
    {
      img: Test4,
      description:
        "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
      name: "— Hannah Smith",
    },
  ];

  const Arr2 = [
    Food1,
    Food2,
    Food3,
    Food4,
    Food5,
    Food6,
    Food7,
    Food8,
    Food9,
    Food10,
    Food11,
    Food12,
  ];

  return (
    <Flex
      flexDirection="column"
      w="full"
      minH="110vh"
      bg="#fdf2e9"
      align="center"
      justify="center"
      paddingBlock="2rem"
      paddingInline="2rem"
    >
      <SimpleGrid columns={{ base: "1", md: "1", lg: "2", xl: "2" }} gap="2rem">
        <Flex flexDir="column" align="center" justify="space-evenly" gap="2rem">
          <Flex flexDir="column" w="full">
            <Text> TESTIMONIALS</Text>
            <Heading fontFamily="Poppins, sans-serif">
              Once you trie it, you can't go back.
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: "1", md: "1", lg: "2", xl: "2" }}
            gap="2rem"
          >
            {Arr1.map((item, index) => {
              return (
                <Flex flexDir="column" gap="1rem" key={index} w="20rem">
                  <Img src={item.img} w="4rem" borderRadius="50%" />
                  <Text>{item.description} </Text>
                  <Text color="gray.600">{item.name} </Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Flex>
        <Flex align="center" justify="end">
          <SimpleGrid columns="3" gap="1rem">
            {Arr2.map((item, index) => {
              return <Img key={index} w="12rem" src={item} />;
            })}
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

export default Testimonials;
