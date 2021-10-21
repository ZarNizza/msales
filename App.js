import React from "react";
import { NativeBaseProvider, Text, Box, Button } from "native-base";
// import { StorageManager } from "native-base";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
// import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default () => {

  return (
    <NativeBaseProvider >
        <Box flex={1} bg="#eee" alignItems="center" justifyContent="center">
          <Button bg="yellow.500">
            <Text> Йо-хо-хо! </Text>
          </Button>
        </Box>
    </NativeBaseProvider>
  );
};
