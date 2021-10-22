import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./components/HomeScreen.js";
import { PlusScreen } from "./components/PlusScreen.js";
import { MinusScreen } from "./components/MinusScreen.js";
import { AlarmScreen } from "./components/AlarmScreen.js";
import { StatScreen } from "./components/StatScreen.js";
import { SetupScreen } from "./components/SetupScreen.js";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plus" component={PlusScreen} />
        <Stack.Screen name="Minus" component={MinusScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="Stat" component={StatScreen} />
        <Stack.Screen name="Setup" component={SetupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
