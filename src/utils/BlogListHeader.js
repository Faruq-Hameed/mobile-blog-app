import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../components/Icon";
import { useMyCallbacks } from "../hooks/useMyCallbacks";

const BlogListHeader = ({ iconName, library }) => {
  const {toSaveScreen } = useMyCallbacks()
  return (
    <View style={headerStyles.container}>
      <Text>Blog List</Text>
      <Icon name={iconName}library={library}  onPress={()=>toSaveScreen({id: null})
    }/>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    height: 50,
    backgroundColor: "rgb(230, 231, 231)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 40,
  },
});

export default BlogListHeader;
