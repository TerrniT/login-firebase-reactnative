import * as React from "react";
import { View, Text, KeyboardAvoidingView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Home Screen Hooray!</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <KeyboardAvoidingView 
      style={styles.loginScreen}
      behavior="padding"
      >
      <Text style={styles.loginScreenText}>Login Screen Hooray!</Text>
    </KeyboardAvoidingView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: "#333",
    padding: 8,
   
  },
  loginScreenText: {
    color: "white",
  },
  homeScreen: {
    flex: 1,
    backgroundColor: "#333",
    padding: 8,
   
  },
  homeScreenText: {
    color: "#334343",
  },
});
