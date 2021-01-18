import * as React from "react";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/AuthProvider";

export default function Logout() {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <Button
      title="Log Out"
      onPress={() => {
        Alert.alert("Log Out", null, [
          {
            text: "Yes, Log Out",
            style: "destructive",
            onPress: () => {
              signOut();
              navigation.navigate("LogIn");
            },
          },
          { text: "Cancel", style: "cancel" },
        ]);
      }}
    />
  );
}