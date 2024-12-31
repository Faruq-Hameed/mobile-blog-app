import React, { useReducer, useState } from "react";
import { Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogListHeader from "../utils/BlogListHeader";
import InputItem from "../components/InputItems";
import { usePostContext } from "../context/BlogContext";

const AddBlogScreen = () => {
  const navigation = useNavigation()
const [title, setTitle] = useState("")
const [content, setContent] = useState("")
  const {  dispatch } = usePostContext();
  return (
    <>
      <BlogListHeader />
      <InputItem title={"Title:"} input={title} onTextEdit={(texts) => setTitle(texts)} />
      <InputItem
        title={"Content:"}
        input={content}
        onTextEdit={(texts) => setContent(texts)}
      />
      <Button
        title="Save"
        onPress={
          () => {
            dispatch({type: "add_post", payload: {title, content}});
             return navigation.navigate("GetAll")
          }

          // () =>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default AddBlogScreen;
