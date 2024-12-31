import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPostsScreen from "./src/screens/GetAllPostsScreen";
import AddPostScreen from "./src/screens/AddPostScreen";
import GetPostScreen from "./src/screens/GetPostScreen";
import { PostProvider } from "./src/context/BlogContext";

const RootStack = createNativeStackNavigator();

export default () => {
  return (
    <PostProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="GetAll" // Set the default screen here
          screenOptions={{
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <RootStack.Screen
            name="GetAll"
            component={AllPostsScreen}
            options={{ title: "Get All Posts Screen" }}
          />
          <RootStack.Screen
            name="Add"
            component={AddPostScreen}
            options={{ title: "Add Post Screen" }}
          />
          <RootStack.Screen
            name="GetOne"
            component={GetPostScreen}
            options={{ title: "Get One Post Screen" }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
};
