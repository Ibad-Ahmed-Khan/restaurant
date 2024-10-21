import { Box, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Meal1 from "../assets/meal-1.jpg";
import Meal2 from "../assets/meal-2.jpg";
import { MdOutlineCheck } from "react-icons/md";
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-scroll";

const Meals = () => {
  const totalOffset = -70;

  const Arr = [
    {
      img: Meal1,
      type: [{ 1: "VEGETARIAN", 2: "" }],
      title: "Japanese Gyozas",
      calories: "650",
      NutriScore: "74",
      rating: "4.8",
    },
    {
      img: Meal2,
      type: [{ 1: "VEGAN", 2: "PALEO" }],
      title: "Avocado Salad",
      calories: "400",
      NutriScore: "92",
      rating: "4.8",
    },
  ];

  const Boxes = [
    { value: "Vegetarian" },
    { value: "Vegan" },
    { value: "Gluten-free" },
    { value: "Pescaterian" },
    { value: "Lactose-free" },
    { value: "Keto" },
    { value: "Paleo" },
    { value: "Low FODMAP" },
    { value: "Kid-friendly" },
  ];

  return (
    <VStack
      id="meals"
      align="center"
      justify="center"
      w="full"
      minH="100vh"
      p="2rem"
    >
      <Text fontSize="lg" fontWeight="600" color="#e67e22">
        MEALS
      </Text>
      <Heading fontFamily="Poppins, sans-serif">
        Omnifood AI chooses from 5,000+ recipes
      </Heading>
      <Flex
        w="full"
        align="center"
        justify="space-evenly"
        gap="2rem"
        flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
        textTransform="capitalize"
        paddingBlock="3rem"
      >
        {Arr.map((item, index) => (
          <Flex
            key={index}
            flexDir="column"
            w="20rem"
            minH="30rem"
            boxShadow="xl"
            borderRadius="xl"
            overflow="hidden"
            pb="2rem"
          >
            <Img src={item.img} borderTopRadius="xl" />
            <VStack align="start" ml="2rem">
              <Flex textTransform="uppercase" paddingBlock="2rem">
                {item.type.map((item2, index2) => (
                  <Flex key={index2} align="center" justify="center" gap="1rem">
                    <Text
                      borderRadius="lg"
                      fontSize="0.7rem"
                      fontWeight="bolder"
                      paddingInline="1rem"
                      bg="#51cf66"
                    >
                      {item2[1]}
                    </Text>
                    {item2[2] && (
                      <Text
                        borderRadius="lg"
                        fontSize="0.7rem"
                        fontWeight="bolder"
                        paddingInline="1rem"
                        bg="#ffd43b"
                      >
                        {item2[2]}
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
              <Text fontWeight="bold" mb="1rem" fontSize="1.4rem">
                {item.title}
              </Text>
              <VStack color="gray" align="start">
                <Flex align="center" gap="1rem" fontSize="1.2rem">
                  <FaFireFlameCurved color="#e67e22" fontSize="1.4rem" />
                  <Text>calories {item.calories}</Text>
                </Flex>
                <Flex align="center" gap="1rem" fontSize="1.2rem">
                  <GiKnifeFork color="#e67e22" fontSize="1.4rem" />
                  <Text>NutriScore {item.NutriScore}</Text>
                </Flex>
                <Flex align="center" gap="1rem" fontSize="1.2rem">
                  <IoIosStarOutline color="#e67e22" fontSize="1.4rem" />
                  <Text>rating {item.rating}</Text>
                </Flex>
              </VStack>
            </VStack>
          </Flex>
        ))}
        <VStack align="start" maxW="20rem" minH="30rem">
          <Text fontSize="1.5rem" fontWeight="bold">
            Works with any diet
          </Text>
          <Flex
            flexDir="column"
            justify="space-between"
            minW="full"
            minH="28rem"
          >
            {Boxes.map((item, index) => (
              <Flex
                align="center"
                gap="1rem"
                key={index}
                fontSize="1.1rem"
                color="gray.600"
              >
                <MdOutlineCheck fontSize="1.6rem" color="#e67e22" />
                <Text>{item.value}</Text>
              </Flex>
            ))}
          </Flex>
        </VStack>
      </Flex>
      <Flex w="80%">
        <Link
          to="logo"
          smooth={true}
          offset={totalOffset}
          duration={500}
          style={{ color: "inherit" }}
        >
          <Box
            color="#e67e22"
            fontSize="1.1rem"
            cursor="pointer"
            _hover={{
              ".line": {
                border: "1px solid transparent",
              },
            }}
          >
            See all recipes →
            <Box className="line" border="1px solid #e67e22" />
          </Box>
        </Link>
      </Flex>
    </VStack>
  );
};

export default Meals;
