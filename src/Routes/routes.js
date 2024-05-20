import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./navigationServices";
import { Home, ProductDetails } from "../screens";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [time, setTime] = useState(false);


  //calling funtion to get data from local storage
  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 3000);
  }, []);


  return (
    <>
      {time && (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              animationEnabled: true,
            }}
          >
            <Stack.Screen
              name={"Home"}
              component={Home}
              options={{ headerShown: false, animation: "none" }}
            />
            <Stack.Screen
              name={"ProductDetails"}
              component={ProductDetails}
              options={{ headerShown: false, animation: "none" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default AuthStack;
