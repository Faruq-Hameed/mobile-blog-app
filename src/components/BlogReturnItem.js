import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import Icon from "./Icon";
import { usePostContext } from "../context/BlogContext";
import { useMyCallbacks } from "../hooks/useMyCallbacks";

const BlogReturnItem = ({ item }) => {
  const { deletePost, toShowOnePost } = useMyCallbacks();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => toShowOnePost(item.id)} //post id
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
      <Icon
        library="AntDesign"
        name="delete"
        onPress={() => deletePost({ id: item.id })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    height: 50,
    marginHorizontal: 5,
  },

  item: {
    flex: 1,
  },
});

export default BlogReturnItem;
