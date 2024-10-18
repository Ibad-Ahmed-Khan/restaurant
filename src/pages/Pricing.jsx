import { Flex, Heading, Text, VStack, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import TryFreeButton from "./TryFreeButton";
import PricingBottom from "../components/pricingBottom";

const Pricing = () => {
  const cards = [
    {
      title: "STARTER",
      price: "399",
      description: "per month. That's just $13 per meal!",
      bg: "#fff",
      best: "",
      details: [
        { text: "1 meal per day", value: true },
        { text: "Order from 11am to 9pm", value: true },
        { text: "Delivery is free", value: true },
        { text: "", value: false }, // Empty feature
      ],
    },
    {
      title: "COMPLETE",
      price: "649",
      description: "per month. That's just $11 per meal!",
      bg: "#fdf2e9",
      best: "best value",
      details: [
        { text: "2 meals per day", value: true },
        { text: "Order 24/7", value: true },
        { text: "Delivery is free", value: true },
        { text: "Get access to latest recipes", value: true },
      ],
    },
  ];

  return (
    <Flex flexDir="column" align="center" paddingInline="2rem">
      <Flex flexDir="column" mb="2rem">
        <Text>PRICING</Text>
        <Heading fontFamily="Poppins, sans-serif" fontWeight="bold">
          Eating well without breaking your bank
        </Heading>
      </Flex>
      <Flex
        gap="2rem"
        flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
      >
        {cards.map((item, index) => {
          return (
            <VStack
              justify="center"
              key={index}
              boxShadow="xl"
              minW="24rem"
              paddingBlock="2rem"
              borderRadius="lg"
              spacing="1rem"
              bg={item.bg}
              pos="relative"
              overflow="hidden"
            >
              <Text
                textAlign="center"
                pos="absolute"
                top="1rem"
                pl="1.5rem"
                right="-9rem"
                w="full"
                fontWeight="bolder"
                fontSize="xs"
                bg="#ffd43b"
                transform="rotate(45deg)"
                textTransform="uppercase"
              >
                {item.best}
              </Text>
              <Text fontWeight="bold" fontSize="xl" color="#e67e22">
                {item.title}
              </Text>
              <Flex align="end" justify="end" gap="0.5rem">
                <Text fontSize="xl" fontWeight="bold">
                  $
                </Text>
                <Text fontSize="4xl" fontWeight="bold">
                  {item.price}
                </Text>
              </Flex>
              <Text>{item.description}</Text>
              <Flex flexDir="column" gap="1rem">
                {item.details.map((detail, idx) => (
                  <Flex key={idx} align="center" gap="1rem">
                    {detail.value ? (
                      <>
                        <Icon
                          fontSize="1.6rem"
                          as={MdOutlineCheck}
                          color="#e67e22"
                        />
                        <Text>{detail.text}</Text>
                      </>
                    ) : (
                      <Icon
                        fontSize="1.6rem"
                        as={MdOutlineClose}
                        color="#e67e22"
                      />
                    )}
                  </Flex>
                ))}
                <TryFreeButton name="Start eating well" />
              </Flex>
            </VStack>
          );
        })}
      </Flex>
      <Text mt="2rem">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </Text>
      <PricingBottom />
    </Flex>
  );
};

export default Pricing;
