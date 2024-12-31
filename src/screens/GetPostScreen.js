import React from "react";
import { Text, StyleSheet } from "react-native";
import BlogListHeader from "../utils/BlogListHeader";
import GetOnePost from "../components/GetOnePost";

const GetPostScreen = ({ route }) => {
  const { post } = route.params;
  return (
    <>
      <BlogListHeader iconName="pen" library="FontAwesome5"/>
      <GetOnePost item={post} />
    </>
  );
};
const styles = StyleSheet.create({});

export default GetPostScreen;
