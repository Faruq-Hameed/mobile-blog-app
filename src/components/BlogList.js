import React from "react";
import { Text, View, FlatList } from "react-native";
import Icon from "./Icon";
import Posts from "../db/Posts";
import BlogReturnItem from "./BlogReturnItem";
import { usePostContext } from "../context/BlogContext";

const BlogList = () => {
    const { state } = usePostContext();
  return (
    <FlatList
      data={state}
      keyExtractor={(posts) => posts.id}
      renderItem={({ item }) => <BlogReturnItem item={item} />}
    />
  );
};

export default BlogList;
