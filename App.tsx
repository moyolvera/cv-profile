import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { LogBox } from "react-native";
import { Archive, Dogs, Home, Personal } from "./src/screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import COMMON_STYLES from "./src/theme/theme";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

export type RootStackScreensList = {
  Home: undefined;
  Archive: undefined;
  Personal: undefined;
  Dogs: undefined;
};

const Stack = createNativeStackNavigator<RootStackScreensList>();

function App() {
  const [isNavigationReady, setNavigationIsReady] = React.useState(false);
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, []);

  const onNavigationReady = React.useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error);
    } finally {
      setNavigationIsReady(true);
    }
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={COMMON_STYLES.flex}>
      <SafeAreaProvider>
        <NavigationContainer onReady={onNavigationReady}>
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
    </GestureHandlerRootView>
  );
}

export default App;
