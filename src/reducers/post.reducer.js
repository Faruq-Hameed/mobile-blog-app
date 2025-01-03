import { useReducer, useEffect, act } from "react";
import { Alert } from "react-native";

export const postReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      Alert.alert("Success:", "Post added successfully");
      return [
        ...state, {
          ...action.payload,
          id: Math.floor(Math.random() * 99999)
        }
      ];
    case "edit_post":

      const result = state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return result;
    case "delete_post":
      Alert.alert("Success:", "Post deleted successfully");
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
};
