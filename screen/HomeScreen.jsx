import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default HomeScreen;
