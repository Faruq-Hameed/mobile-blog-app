import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { usePostContext } from "../context/BlogContext";
import { useMyCallbacks } from "../hooks/useMyCallbacks";

const ShowOnePost = ({ id }) => {
  const { state } = usePostContext();
  const { toSaveScreen } = useMyCallbacks();
  const post = state.find((post) => post.id === id);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toSaveScreen({ id })}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.title}>{post.id}</Text>
      </TouchableOpacity>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    flex: 0.3,
    paddingHorizontal: 5,
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  content: {
    fontSize: 20,
  },
});

export default ShowOnePost;
