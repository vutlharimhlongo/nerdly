import React from "react";
import { Button, Flex, Icon, Stack, Text, Image } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";

const PersonalHome: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="white"
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 20px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/redditPersonalHome.png)"
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p="20px">
        {/* <Flex align="center" mb={2}>
          <Image
            src="/images/nerdlysquare.svg"
            height="30px"
            borderRadius="50%"
            borderStyle="solid"
            borderWidth="2px"
            borderColor="gray.400"
            marginRight="10px"
          />
          <Text fontWeight={600}>Home</Text>
        </Flex> */}
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Dive into their interests, hobbies and passions.
          </Text>
          <Button height="30px">Create Post</Button>
          <Button variant="outline" height="30px">
            Create group
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;
