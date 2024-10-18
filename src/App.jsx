import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Sponser from "./components/Sponser";
import HowWorks from "./pages/HowWorks";
import Meals from "./pages/Meals";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Flex
      flexDir="column"
      minW="100vw"
      minH="100vh"
      lineHeight="2rem"
      fontFamily="Poppins, sans-serif"
    >
      <Flex align="center" justify="center" pos="sticky" top="0" zIndex="9999">
        <Header />
      </Flex>
      <VStack flexDir="column" spacing="8" paddingBlock="1rem">
        <Home />
        <Sponser />
        <HowWorks />
        <Meals />
        <Testimonials />
        <Pricing />
      </VStack>
    </Flex>
  );
}

export default App;
