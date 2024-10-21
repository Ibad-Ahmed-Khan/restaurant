import { Box, Flex, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Sponser from "./components/Sponser";
import HowWorks from "./pages/HowWorks";
import Meals from "./pages/Meals";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex
      flexDir="column"
      lineHeight="2rem"
      bg="#fff"
      fontFamily="Poppins, sans-serif"
    >
      <Flex align="center" justify="center" pos="sticky" top="0" zIndex="9999">
        <Header />
      </Flex>
      <VStack flexDir="column" spacing="8">
        <Home />
        <Sponser />
        <HowWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </VStack>
    </Flex>
  );
}

export default App;
