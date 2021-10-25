import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
} from "native-base";
import { Footerka } from "./Footerka.js";
import Login from './Login';
import Logout from './Logout';

export const PlusScreen = ({ navigation }) => {

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>

        <Center flex={1} space={3} ><Text color="white" >Plus</Text></Center>
      <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
