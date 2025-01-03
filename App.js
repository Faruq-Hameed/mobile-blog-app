import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowPostsScreen from "./src/screens/ShowAllPostsScreen";
import AddPostScreen from "./src/screens/AddPostScreen";
import GetPostScreen from "./src/screens/ShowOnePostScreen";
import { PostProvider } from "./src/context/BlogContext";

const RootStack = createNativeStackNavigator();

export default () => {
  return (
    <PostProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="ShowAll" // Set the default screen here
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <RootStack.Screen
            name="ShowAll"
            component={ShowPostsScreen}
            options={{ title: "Get All Posts Screen" }}
          />
          <RootStack.Screen
            name="Add"
            component={AddPostScreen}
            options={{ title: "Add Post Screen" }}
          />
          <RootStack.Screen
            name="ShowOne"
            component={GetPostScreen}
            options={{ title: "Get One Post Screen" }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
};
