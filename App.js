import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./firebase";

function HomeScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCrendetials) => {
        const user = userCrendetials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((userCrendetials) => {
        const user = userCrendetials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.input}
        ></TextInput>
        <TextInput
          value={pass}
          onChangeText={(text) => setPass(text)}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
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
