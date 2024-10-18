import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useStore } from "../Zustand";

const TryFreeButton = ({ name }) => {
  return (
    <Button color="#fff" bg="#e67e22" h="3rem" borderRadius="xl">
      {name}
    </Button>
  );
};

export default TryFreeButton;
