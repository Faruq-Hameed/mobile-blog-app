import React from "react";
import { Text, View, FlatList } from "react-native";
import Icon from "./Icon";
import Posts from "../db/Posts";
import BlogReturnItem from "./BlogReturnItem";

const BlogList = ({ posts, onPressDelete }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(posts) => posts.title}
      renderItem={({ item }) => <BlogReturnItem item={item} />}
    />
  );
};

export default BlogList;
