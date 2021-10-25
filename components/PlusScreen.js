import React from "react";
import { NativeBaseProvider, Box, Text, Center } from "native-base";
import { Footerka } from "./Footerka.js";
import ApiCalendar from "react-google-calendar-api";
import DoubleButton from "./DoubleButton";

export const PlusScreen = ({ navigation }) => {
  console.log("ApiCalendar.sign= ", ApiCalendar.sign);
  if (ApiCalendar.sign)
    ApiCalendar.listUpcomingEvents(10)
      .then(({result}) => {
        console.log("CALENDAR = ", result.items);
      });



      

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#1F0F1F" safeAreaTop>
        <Center flex={1} space={3}>
<DoubleButton />
          <Text color="white">Plus</Text>
        </Center>
        <Footerka />
      </Box>
    </NativeBaseProvider>
  );
};
