import React from "react";
import {
  Text,
  Icon,
  Center,
  Circle,
} from "native-base";
import {
  MaterialIcons,
} from "@expo/vector-icons";

export const LogoBig = () => {
  return (
    <Center flex={1} space={3}>
      <Circle size="52vw" bg="purple.600" alignItems="center">
        <Circle size="50vw" bg="purple.800" alignItems="center">
          <Text color="white" fontSize="30">
            beHappy!
          </Text>
          <Text color="white" fontSize="20">
            <Icon as={<MaterialIcons name="check" />} color="white" />
            studio
          </Text>
        </Circle>
      </Circle>
    </Center>
  );
};
