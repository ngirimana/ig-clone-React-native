import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
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
