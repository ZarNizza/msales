import React from "react";
import { NativeBaseProvider, Box,} from "native-base";
import { LogoBig } from "./LogoBig.js";
import { Kvadratiki } from "./Kvadratiki.js";
import { Footerka } from "./Footerka.js";

export const HomeScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <LogoBig />
        <Kvadratiki />
        <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
