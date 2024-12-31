import React from "react";
import { Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogListHeader from "../utils/BlogListHeader";
import InputItem from "../components/InputItems";

const EditPostScreen = () => {
  const navigation = useNavigation();
  return (
    <>
    <BlogListHeader />
      <InputItem title={"Title:"} />
      <InputItem title={"Content:"} />
      <Button title="Save" onPress={() => navigation.navigate("GetAll")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default EditPostScreen;
