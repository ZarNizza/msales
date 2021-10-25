import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
} from "native-base";
import { Footerka } from "./Footerka.js";


export const SetupScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <Center flex={1} space={3} ><Text>Setup</Text></Center>
      <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
