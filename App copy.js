import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./components/HomeScreen"
import { PlusScreen } from "./components/PlusScreen"


export default function App() {
  const [selected, setSelected] = React.useState(1);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ selected: selected, setSelected: setSelected}} />
      <Stack.Screen name="Plus" component={PlusScreen} options={{ selected: selected, setSelected: setSelected}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
