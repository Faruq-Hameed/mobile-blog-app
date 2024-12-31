import React, { use, useEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import Posts from "../db/Posts";

import BlogListHeader from "../utils/BlogListHeader";
import BlogList from "../components/BlogList";
import { usePostContext } from "../context/BlogContext";

const AllPostsScreen = () => {
  const {data} = usePostContext()
  return (
    <>
      <BlogListHeader iconName="plus" library="Feather" />
      <BlogList posts={data}/>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
});

export default AllPostsScreen;
