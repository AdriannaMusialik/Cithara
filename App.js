import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./providers/AuthProvider";

import { LogIn } from "./components/LogIn";
import MainHomePage from "./components/HomePage/MainHomePage";
import MainCalendarPage from "./components/CalendarPage/MainCalendarPage";
import AddPractice from "./components/AddPractice/AddPractice"


<script src="http://localhost:8097"></script>

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='LogIn'>
          <Stack.Screen
            name="Log In"
            component={LogIn}
          />
          <Stack.Screen
            name="MainHomePage"
            component={MainHomePage}
          />
          <Stack.Screen
            name="MainCalendarPage"
            component={MainCalendarPage}
          />
          <Stack.Screen
            name="Add Practice"
            component={AddPractice}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
