import { useReducer, useEffect, act } from "react";
import { Alert } from "react-native";

export const postReducer = (state, action) => {

  switch (action.type) {
    case "add_post":
      //useful for editing
      const allPosts = [...state]
      const index =!action.payload.id? -1: allPosts.findIndex(post =>post.id === action.payload.id)
      //check if it is an edit action and the id was found
      if(index > -1){ 
        allPosts[index] = action.payload //replace the existing post element with the new data
      }
      else {
        allPosts.push(
            { ...action.payload, id: Math.floor(Math.random() * 99999)
          }
        )
      }
      Alert.alert("Success:", "Post added successfully");
      return allPosts;
    case "delete_post":
      Alert.alert("Success:", "Post deleted successfully");
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
  
};
