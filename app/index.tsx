import { useRouter } from "expo-router";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import GuardImage from "../assets/images/Guard.png";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={GuardImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>SecureShift</Text>

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => router.push("/login")} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => router.push("/register")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});
