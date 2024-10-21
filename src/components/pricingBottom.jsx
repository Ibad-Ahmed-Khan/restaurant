import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { FaAppleAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdPause } from "react-icons/md";
import { RiInfinityLine } from "react-icons/ri";

const PricingBottom = () => {
  const data = [
    {
      img: <RiInfinityLine />,
      title: "Never cook again!",
      description:
        "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      img: <FaAppleAlt />,
      title: "Local and organic",
      description:
        "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      img: <FaLeaf />, // Leaf icon
      title: "No waste",
      description:
        "All our partners only use reusable containers to package all your meals.",
    },
    {
      img: <MdPause />, // Pause icon
      title: "Pause anytime",
      description:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];

  return (
    <Flex
      flexDir="row"
      justify="space-between"
      flexWrap="wrap"
      gap="2rem"
      p="2rem"
    >
      {data.map((item, index) => (
        <Flex
          flexDir="column"
          w={{
            base: "full",
            md: "full",
            lg: "20rem",
            xl: "20rem",
          }}
          //   align="center"
          // justify="center"
          key={index}
          borderRadius="lg"
          paddingBlock="2rem"
        >
          <Flex
            align="center"
            justify="center"
            bg="#fdf2e9"
            w="4rem"
            h="4rem"
            borderRadius="50%"
          >
            <Icon
              as={item.img.type} // Dynamically render the correct icon
              boxSize="2rem"
              color="#e67e22"
            />
          </Flex>
          <Text fontWeight="bolder" mt="1rem" fontSize="xl">
            {item.title}
          </Text>

          <Text color="gray.600">{item.description}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PricingBottom;
