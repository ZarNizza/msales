import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
} from "native-base";
import { Footerka } from "./Footerka.js";


export const StatScreen = ({ navigation }) => {
let  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('qq')
      if(value !== null) {
        console.log("get val= ", value);
      }
    } catch(e) {
      console.log("get Error!!!");
      alert("StorageError", e);
    }
  }
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <Center flex={1} space={3} ><Text>Stat</Text></Center>
      <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
