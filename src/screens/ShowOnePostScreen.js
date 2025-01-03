import React from "react";
import { Text, StyleSheet } from "react-native";
import BlogListHeader from "../utils/BlogListHeader";
import ShowOnePost from "../components/ShowPostDetails";

const GetPostScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <>
      <BlogListHeader iconName="pen" library="FontAwesome5" />
      <ShowOnePost id={id} />
    </>
  );
};
const styles = StyleSheet.create({});

export default GetPostScreen;
