import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Archive, Dogs, Home, Personal } from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackScreensList = {
  Home: undefined;
  Archive: undefined;
  Personal: undefined;
  Dogs: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Archive"
            component={Archive}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dogs"
            component={Dogs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Personal"
            component={Personal}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
