import { useNavigation } from "@react-navigation/native";
import { usePostContext } from "../context/BlogContext";

export const useMyCallbacks = () => {
  const navigation = useNavigation();
  const { dispatch } = usePostContext();

  /**callback to navigate to AddPostScreen the icon is pressed
   * @Navigation navigate to AddPostScreen
   */
  const toSaveScreen = ({ id }) => {
    if (!id) {
      return navigation.navigate("Add"); //i.e if the action is to edit a post of the given id
    }
    return navigation.navigate("Add", { id });
  };

  /**callback to add a post when save is clicked
   * @param title post title
   * @param content post content
   * @Navigation navigate to ShowAll posts screen
   */
  const savePost = ({ title, content, id }) => {
    dispatch({ type: "add_post", payload: { title, content, id } });
    navigation.navigate("ShowAll");
  };

  /**callback to delete a post when delete icon is pressed
   * @param id post id
   * @Navigation navigate to ShowAll posts screen
   */
  const deletePost = ({ id }) => {
    dispatch({ type: "delete_post", payload: { id } });
    navigation.navigate("ShowAll");
  };

  /**callback to navigate to a post when the post title is pressed
   * @param id post id
   * @Navigation navigate to ShowOne posts screen with { id } params
   */
  const toShowOnePost = (id) => navigation.navigate("ShowOne", { id });

  return { toSaveScreen, savePost, deletePost, toShowOnePost };
};
