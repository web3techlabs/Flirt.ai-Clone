import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WingmanScreen from "./WingmanScreen";
import ChatResponseScreen from "./ChatResponseScreen";
import Onboarding from "./Onboarding";
import Onboardinit from "./Onboardinit";
import Onboardsec from "./Onboardsec";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Bebas Neue": require("./assets/fonts/BebasNeue-Regular.ttf"),
    "Poppins-600": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboardinit">
        <Stack.Screen
          name="Onboardinit"
          component={Onboardinit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboardsec"
          component={Onboardsec}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Wingman"
          component={WingmanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CasualResponse"
          children={(props) => (
            <ChatResponseScreen
              {...props}
              backgroundColor="#4D5FFF"
              responseType="Casual"
            />
          )}
          options={{
            headerTitle: "CASUAL RESPONSE",
            headerStyle: { backgroundColor: "#424BA1" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="FunnyResponse"
          children={(props) => (
            <ChatResponseScreen
              {...props}
              backgroundColor="#00C164"
              responseType="Funny"
            />
          )}
          options={{
            headerTitle: "FUNNY RESPONSE",
            headerStyle: { backgroundColor: "#00934C" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="FlirtyResponse"
          children={(props) => (
            <ChatResponseScreen
              {...props}
              backgroundColor="#00C164"
              responseType="Playful"
            />
          )}
          options={{
            headerTitle: "RIZZ YOUR TEXT",
            headerStyle: { backgroundColor: "#00934C" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
