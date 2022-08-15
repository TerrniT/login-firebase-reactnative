import * as React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
  },
  text: {
    color: "white",
  },
  input: {
    color: "#123533",
    backgroundColor: "#909090",
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#787878",
    padding: 15,
    borderRadius: 9,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#12de32",
    borderColor: "#123533",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
  buttonOutlineText: {
    color: "#778899",
    fontWeight: "700",
    fontSize: 14,
  },
});
