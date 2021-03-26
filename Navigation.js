import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}
