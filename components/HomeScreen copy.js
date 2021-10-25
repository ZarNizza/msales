import React, {useState} from "react";
import { NativeBaseProvider, Box } from "native-base";
import { LogoBig } from "./LogoBig.js";
import { Kvadratiki } from "./Kvadratiki.js";
import { Footerka } from "./Footerka.js";
import Login from "./Login.js";
import Logout from "./Logout.js";

export const HomeScreen = ({ navigation }) => {
  const [logged, setLogged] = useState(false);

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        {logged ? "" : <Login setLogged={setLogged} />}
        {logged ? <Logout setLogged={setLogged} /> : ""}
        <LogoBig />
        <Kvadratiki />
        <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
