import { useNavigation } from "@react-navigation/native";
import { usePostContext } from "../context/BlogContext";
import { Alert } from "react-native";

/**
 * Custom hook that provides navigation and post management callbacks
 * @returns {Object} Object containing navigation and post management functions
 */
export const useMyCallbacks = () => {
  const navigation = useNavigation();
  const { dispatch } = usePostContext();

  /**
   * Navigates to Add screen for creating or editing a post
   * @param {Object} params - Navigation parameters
   * @param {string|number} [params.id] - Post ID for editing, if not provided assumes new post
   */
  const toSaveScreen = ({ id }) => {
    if (!id) {
      return navigation.navigate("Add"); //i.e if the action is to edit a post of the given id
    }
    return navigation.navigate("Add", { id });
  };

  /**
   * Saves a new post or updates existing post and navigates to ShowAll screen
   * @param {Object} post - Post data
   * @param {string} post.title - Title of the post
   * @param {string} post.content - Content of the post
   * @param {string|number} [post.id] - ID of the post if editing
   */
  const savePost = async ({ title, content, id })=> {
    try {
      if (!id) {
        await dispatch({ type: "add_post", payload: { title, content, id } });
      } else {
        await dispatch({ type: "edit_post", payload: { title, content, id } });
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  /**
   * Deletes a post and navigates to ShowAll screen
   * @param {Object} params - Delete parameters
   * @param {string|number} params.id - ID of the post to delete
   */
  const deletePost = ({ id }) => {
    dispatch({ type: "delete_post", payload: { id } });
    navigation.navigate("ShowAll");
  };

  /**
   * Navigates to ShowOne screen to display a single post
   * @param {string|number} id - ID of the post to show
   */
  const toShowOnePost = (id) => navigation.navigate("ShowOne", { id });

  return { toSaveScreen, savePost, deletePost, toShowOnePost };
};
