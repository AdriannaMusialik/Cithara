import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "./components/Authentication/LogIn";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Registration from "./components/Authentication/Registration";
import MainHomePage  from "./components/HomePage/MainHomePage";
import MainCalendarPage from "./components/CalendarPage/MainCalendarPage";
import AddPractice from "./components/AddPractice/AddPractice";
import DictionaryMainPage from "./components/PracticePlayDictionary/DictionaryMainPage";
import DictionaryAddPractice from "./components/PracticePlayDictionary/DictionaryAddPractice";

<script src="http://localhost:8097"></script>

const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="LogIn" 
            component={LogIn} 
          />
          <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPassword} 
          />
          <Stack.Screen 
            name="Registration" 
            component={Registration} 
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
            name="AddPractice"
            component={AddPractice}
          />
           <Stack.Screen
            name="DictionaryMainPage"
            component={DictionaryMainPage}
          />
           <Stack.Screen
            name="DictionaryAddPractice"
            component={DictionaryAddPractice}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
