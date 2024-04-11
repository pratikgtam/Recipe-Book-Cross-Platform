import * as React from "react";
import ProfileScreen from "./src/components/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipesScreen from "./src/components/RecipeScreen";

import LoginScreen from "./src/components/LoginScreen";
import NotificationScreen from "./src/components/Notifications";
import ContactUsScreen from "./src/components/ContactUs";
import ProfileDetailScreen from "./src/components/Profile";
import Signup from "./src/components/SignupScreen";
import Login from "./src/components/LoginScreen";
import TabNavigator from "./src/navigation/TabNavigator";

function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Contact" component={ContactUsScreen} />
        <Stack.Screen name="My Profile" component={ProfileDetailScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
