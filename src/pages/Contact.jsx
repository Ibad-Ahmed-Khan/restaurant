import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Img1 from "../assets/food/contact-img.webp";

const Contact = () => {
  return (
    <Flex
      p="2rem"
      id="contact"
      flexDir={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "row",
        xl: "row",
      }}
      color="#45260a"
      align="center"
      justify="center"
      bg="#e98e3d"
      borderRadius="xl"
      maxW={{
        base: "90%",
        md: "90%",
        lg: "80%",
        xl: "80%",
      }}
    >
      <Flex
        p={{
          base: "3rem",
          md: "3rem",
          lg: "3rem",
          xl: "3rem",
        }}
        w="full"
        align="center"
        justify="center"
        flexDir="column"
      >
        <Flex gap="2rem" flexDir="column">
          <Heading fontFamily="Poppins, sans-serif">
            Get your first meal for free!
          </Heading>
          <Text>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </Text>
        </Flex>
        <SimpleGrid
          columns={{
            base: "1",
            md: "1",
            lg: "2",
            xl: "2",
          }}
          gap="2rem"
          pt="4rem"
        >
          <Flex flexDir="column">
            <Text>Full name</Text>
            <Input bg="#fff" placeholder="Your name" />
          </Flex>
          <Flex flexDir="column">
            <Text>Email address</Text>
            <Input bg="#fff" placeholder="Me@example.com" />
          </Flex>
          <Flex flexDir="column">
            <Text> Where did you hear from us?</Text>
            <Select bg="#fff">
              <option value="">test1</option>
              <option value="">test2</option>
              <option value="">test3</option>
              <option value="">test4</option>
            </Select>
          </Flex>
          <Flex flexDir="column">
            <Text transform="scale(0)">aaaa</Text>
            <Button color="#fff" bg="#45260a">
              Sign Up Now
            </Button>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Flex position="relative">
        <Img
          w="40rem"
          borderLeftRadius={{ base: "xl", lg: "none" }}
          borderTopRightRadius="xl"
          bg="#e98e3d"
          borderBottomRightRadius={{ lg: "xl" }}
          src={Img1}
          zIndex="1"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="#e98e3d"
          opacity="0.4"
          // mixBlendMode="multiply" // Blend mode applied here
          borderLeftRadius={{ base: "xl", lg: "none" }}
          borderTopRightRadius="xl"
          borderBottomRightRadius={{ lg: "xl" }}
          // border="10px solid red"
          zIndex="1"
        />
      </Flex>
    </Flex>
  );
};

export default Contact;
