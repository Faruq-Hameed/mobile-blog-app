import React, { useEffect, useReducer, useState } from "react";
import { Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BlogListHeader from "../utils/BlogListHeader";
import InputItem from "../components/InputItems";
import { usePostContext } from "../context/BlogContext";
import { useMyCallbacks } from "../hooks/useMyCallbacks";

const AddBlogScreen = () => {
  const { state } = usePostContext();
  const route = useRoute();
  const { savePost } = useMyCallbacks();

  const id = route.params?.id;
  const initialState = {
    title: "",
    content: "",
  }
  //if id is passed that means this component was called using edit navigation
    if (id) {
      const post = state.find((post) => post.id === id);
      initialState.title = post.title;
      initialState.content = post.content;
    }
    const [title, setTitle] = useState(initialState.title);
    const [content, setContent] = useState(initialState.content);
    const titleLabel = id ? "New Title :" : "Title :";
    const contentLabel = id ? "New Content :" : "Content :";
    return (
      <>
        {/* <BlogListHeader /> */}
        <InputItem
          title={titleLabel}
          input={title}
          onTextEdit={(texts) => setTitle(texts)}
        />
        <InputItem
          title={contentLabel}
          input={content}
          onTextEdit={(texts) => setContent(texts)}
        />
        <Button
          title="Save"
          onPress={() => {
            savePost({ title, content, id });
          }}
        />
      </>
    );
};

const styles = StyleSheet.create({});

export default AddBlogScreen;
