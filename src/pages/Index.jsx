import React from "react";
import { Box, Flex, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Text, SimpleGrid, Progress, VStack, Spacer } from "@chakra-ui/react";
import { FaUserFriends, FaClock, FaTachometerAlt } from "react-icons/fa";

const Index = () => {
  // Example data for retention and session time
  const metrics = {
    retentionRate: 85, // in percent
    sessionTime: "5m 30s", // average session time
    growthRate: 3, // in percent
  };

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Product Metrics Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="full">
          {/* Retention Rate */}
          <Stat>
            <Flex alignItems="center">
              <Box as={FaUserFriends} size="24px" mr={2} />
              <StatLabel>Retention Rate</StatLabel>
            </Flex>
            <StatNumber>{metrics.retentionRate}%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Since last month
            </StatHelpText>
          </Stat>

          {/* Average Session Time */}
          <Stat>
            <Flex alignItems="center">
              <Box as={FaClock} size="24px" mr={2} />
              <StatLabel>Average Session Time</StatLabel>
            </Flex>
            <StatNumber>{metrics.sessionTime}</StatNumber>
            <StatHelpText>Per active user</StatHelpText>
          </Stat>

          {/* Growth Rate */}
          <Stat>
            <Flex alignItems="center">
              <Box as={FaTachometerAlt} size="24px" mr={2} />
              <StatLabel>Growth Rate</StatLabel>
            </Flex>
            <StatNumber>{metrics.growthRate}%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Since last month
            </StatHelpText>
          </Stat>
        </SimpleGrid>

        <Spacer />

        {/* Retention and Session Time Progress */}
        <VStack spacing={5} align="stretch" width="full">
          <Box>
            <Text mb={1}>Retention Rate Goal: 90%</Text>
            <Progress colorScheme="green" size="lg" value={metrics.retentionRate} max={100} />
          </Box>
          <Box>
            <Text mb={1}>Average Session Time Goal: 10 mins</Text>
            {/* This is a placeholder value for the progress bar, assuming 5m 30s is roughly 55% of the 10 min goal */}
            <Progress colorScheme="blue" size="lg" value={55} max={100} />
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
