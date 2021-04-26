import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Matoso</Text>
          <Text
            color="gray.300"
            fontSize="small"> matoso.lucas@hotmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Matoso" src="https://github.com/matosolucas.png" />
    </Flex>
  );
}