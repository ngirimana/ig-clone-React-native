import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;
