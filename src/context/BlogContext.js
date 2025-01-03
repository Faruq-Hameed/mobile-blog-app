import React, { useContext, useState, useReducer } from "react";
import { postReducer } from "../reducers/post.reducer";

const PostContext = React.createContext();

const initialState = [
  {title: "Test title", content:"Test content", id: 1 }
]

/**
 * PostProvider component that manages the state of blog posts and provides
 * methods to manipulate them.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {React.ReactElement} A PostContext.Provider wrapping the children.
 */
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const valueContext = {
    state,
        dispatch
  }
  return (
    <PostContext.Provider
      value={valueContext}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => React.useContext(PostContext);

export default PostContext;
