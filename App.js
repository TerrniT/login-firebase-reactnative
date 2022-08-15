import * as React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen Hooray!</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        ></TextInput>
      </View>
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
  container: {
    justifyContent:'center', 
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#333",
  },
  text: {
    color: "white",
  },
  input
});
