import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text >I am inside Home Page</Text>
      <Link href={"/"}>Go to Home page</Link>
    </View>
  );
};

export default ContactScreen;

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
