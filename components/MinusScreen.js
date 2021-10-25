import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
} from "native-base";
import { Footerka } from "./Footerka.js";


export const MinusScreen = ({ navigation }) => {
let  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('qq')
    } catch(e) {
      console.log("del err!!!");
      alert("del error");
    }
  console.log("ok, deleted");
    alert("OK, deleted");
  }
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <Center flex={1} space={3} ><Text>Minus</Text></Center>
      <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
