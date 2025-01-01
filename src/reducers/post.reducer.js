import { useReducer, useEffect } from "react";
import { Alert } from "react-native";

export const postReducer = (state, action) => {

  switch (action.type) {
    case "add_post":
      const isTitleExist = state.find(
        (post) => post.title === action.payload.title
      );
      if (isTitleExist) {
        Alert.alert("Error:", "Title already exists");
        return state;
      }
      Alert.alert("Success:", "Post added successfully");
      return [
        ...state,
        { ...action.payload, id: Math.floor(Math.random() * 999999) },
      ];
    case "delete_post":

      if (!action.payload.id) return state; //if ordinary icon was clicked
      Alert.alert("Success:", "Post deleted successfully");
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};
