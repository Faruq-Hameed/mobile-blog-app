import React, { use, useEffect, useLayoutEffect, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import Posts from "../apis/Posts";

import BlogListHeader from "../utils/BlogListHeader";
import BlogList from "../components/BlogList";
import { usePostContext } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

// const ShowPostsScreen = () => {
//   return (
//     <>
//       <BlogListHeader iconName="plus" library="Feather" />
//       <BlogList />
//     </>
//   );
// };

export default function ShowPostsScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <BlogListHeader iconName="plus" library="Feather" />,
    });
  }, [navigation]);

  return <BlogList />;
}

const styles = StyleSheet.create({
  mainContainer: {},
});

// export default ShowPostsScreen;
