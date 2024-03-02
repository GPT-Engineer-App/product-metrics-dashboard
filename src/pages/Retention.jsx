import React, { useState, useEffect } from "react";
import { Box, VStack, Heading, Text, Progress } from "@chakra-ui/react";

const Retention = () => {
  const day0Cohort = 100;
  const [dailyRetention, setDailyRetention] = useState([]);

  useEffect(() => {
    const retentionData = [];
    for (let day = 1; day <= 30; day++) {
      const rate = day === 30 ? 55 : (55 / 30) * day;
      retentionData.push({
        day,
        retentionRate: Math.round((rate / 100) * day0Cohort),
      });
    }
    setDailyRetention(retentionData);
  }, []);

  return (
    <VStack spacing={8} p={8}>
      <Heading as="h2" size="lg">
        Retention Cohorts
      </Heading>
      <Box width="full">
        <Text fontSize="xl" mb={4}>
          Daily Cohorts
        </Text>
        <VStack spacing={4}>
          {dailyRetention.map((data) => (
            <Box key={data.day} p={2} shadow="md" borderWidth="1px">
              <Text>
                Day {data.day}: {data.retentionRate}%
              </Text>
              <Progress colorScheme="green" size="sm" value={data.retentionRate} />
            </Box>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Retention;
