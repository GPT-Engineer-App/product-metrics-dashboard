import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";

const Retention = () => {
  const dailyCohorts = [];
  const monthlyCohorts = [];

  return (
    <VStack spacing={8} p={8}>
      <Heading as="h2" size="lg">
        Retention Cohorts
      </Heading>
      <Box width="full">
        <Text fontSize="xl" mb={4}>
          Daily Cohorts
        </Text>
        {}
      </Box>
      <Box width="full">
        <Text fontSize="xl" mb={4}>
          Monthly Cohorts
        </Text>
        {}
      </Box>
    </VStack>
  );
};

export default Retention;
