import React from "react";
import { Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="start" wrap="wrap" padding="1rem" bg="teal.500" color="white">
      <Link as={ReactRouterLink} to="/" px={2} py={1} rounded={"md"}>
        Home
      </Link>
      <Spacer />
      <Link as={ReactRouterLink} to="/retention" px={2} py={1} rounded={"md"}>
        Retention
      </Link>
    </Flex>
  );
};

export default Navigation;
