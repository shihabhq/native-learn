import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am in Home page</Text>
      <Link
        style={{
          color: "#fff",
          textDecorationColor: "underline",
          fontSize: 24,
        }}
        href={"/"}
      >
        Go to Home page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
