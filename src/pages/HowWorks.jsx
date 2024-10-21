import { Box, Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import App1 from "../assets/app-screen-1.png";
import App2 from "../assets/app-screen-2.png";
import App3 from "../assets/app-screen-3.png";

const HowWorks = () => {
  const Array = [
    {
      id: 1,
      img: App1,
      title: "Tell us what you like (and what not)",
      description:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    },
    {
      id: 3,
      img: App2,
      title: "Approve your weekly meal plan",
      description:
        "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    },
    {
      id: 3,
      img: App3,
      title: "Receive meals at convenient time",
      description:
        "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    },
  ];

  return (
    <Flex id="HowToWork" flexDir="column" minH="100vh" p="2rem" gap="2rem">
      <Flex flexDir="column">
        <Text fontSize="lg" color="#e67e22" fontWeight="600">
          HOW IT WORKS
        </Text>
        <Heading fontFamily="Poppins, sans-serif">
          Your daily dose of health in 3 simple steps
        </Heading>
      </Flex>
      <Flex flexDir="column" gap="2rem">
        {Array.map((item, index) => {
          return (
            <Flex
              key={index}
              align="center"
              justify="space-between"
              gap="1rem"
              flexDir={{
                base: "column",
                md: "column",
                lg: `${index % 2 == 1 ? "row-reverse" : "row"}`,
                xl: `${index % 2 == 1 ? "row-reverse" : "row"}`,
              }}
            >
              <VStack
                align="start"
                w={{ base: "full", md: "full", lg: "40%", xl: "40%" }}
              >
                <Text fontSize="3rem" fontWeight="bolder" color="gray.300">
                  0{index + 1}
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="700"
                  fontFamily="Poppins, sans-serif"
                >
                  {item.title}{" "}
                </Text>
                <Text fontSize="1.1rem" color="gray.700">
                  {item.description}
                </Text>
              </VStack>
              <Flex
                align="center"
                justify="center"
                w={{ base: "full", md: "full", lg: "40%", xl: "40%" }}
                pos="relative"
                paddingBlock="2rem"
              >
                <Flex
                  minW={{
                    base: "21rem",
                    md: "21rem",
                    lg: "23rem",
                    xl: "23rem",
                  }}
                  minH={{
                    base: "21rem",
                    md: "21rem",
                    lg: "23rem",
                    xl: "23rem",
                  }}
                  bg="#fdf2e9"
                  pos="absolute"
                  borderRadius="50%"
                />
                <Flex
                  minW={{
                    base: "18rem",
                    md: "18rem",
                    lg: "20rem",
                    xl: "20rem",
                  }}
                  minH={{
                    base: "18rem",
                    md: "18rem",
                    lg: "20rem",
                    xl: "20rem",
                  }}
                  bg="#fae5d3"
                  pos="absolute"
                  borderRadius="50%"
                />
                <Img
                  objectFit="cover"
                  zIndex="1"
                  maxW={{
                    base: "18rem",
                    md: "18rem",
                    lg: "20rem",
                    xl: "20rem",
                  }}
                  maxH={{
                    base: "18rem",
                    md: "18rem",
                    lg: "20rem",
                    xl: "20rem",
                  }}
                  src={item.img}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default HowWorks;
