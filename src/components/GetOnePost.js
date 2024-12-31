import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetOnePost = ({ item }) => {
    const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Add")}
      >
      <Text style={styles.title}>{item.title}</Text>

      </TouchableOpacity>
      <Text style={styles.content}>{item.content}</Text>
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

export default GetOnePost;
