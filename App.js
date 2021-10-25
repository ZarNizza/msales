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
  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/calendar.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '101635466215-ahjvqp4b7k5a5fp482v7cnd5074li5bb.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   hostedDomain: 'localhost', // specifies a hosted domain restriction
  //   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //   accountName: 'shtoorman.sam@gmail.com', // [Android] specifies an account name on the device that should be used
  //   });
  //   signIn = async () => {
  //     try {
  //       await GoogleSignin.hasPlayServices();
  //       const userInfo = await GoogleSignin.signIn();
  //       this.setState({ userInfo });
  //     } catch (error) {
  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //         // user cancelled the login flow
  //         console.log("err SIGN_IN_CANCELLED");
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //         // operation (e.g. sign in) is in progress already
  //         console.log("err IN_PROGRESS");

  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //         // play services not available or outdated
  //         console.log("err PLAY_SERVICES_NOT_AVAILABLE");

  //       } else {
  //         // some other error happened
  //         console.log("some err... ");

  //       }
  //     }
  //   };

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
