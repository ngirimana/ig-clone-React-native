import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
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
