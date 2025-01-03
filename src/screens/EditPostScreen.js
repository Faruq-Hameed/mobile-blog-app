import React from "react";
import { Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BlogListHeader from "../utils/BlogListHeader";
import InputItem from "../components/InputItems";

const EditPostScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, edit, source } = route.params;
  return (
    <>
      <BlogListHeader />
      <InputItem title={"Title:"} />
      <InputItem title={"Content:"} />
      <Button title="Save" onPress={() => navigation.navigate("ShowAll")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default EditPostScreen;
