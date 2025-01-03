import { TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { usePostContext } from "../context/BlogContext";
/**
 * A reusable Icon component that renders icons from different libraries and handles navigation.
 *
 * @component
 * @param {Object} props - The properties that define the Icon component.
 * @param {string} props.name - The name of the icon to be displayed.
 * @param {string} props.library - The icon library to use. Must be either "AntDesign", "Ionicons","Feather".
 * @param {string} props.onPress - callback to be called when the icon is clicked
 * @returns {React.Element|null} A TouchableOpacity component with the icon, or null if the library is invalid.
 *
 * @example
 * <Icon name="ShowAll" library="AntDesign" screen="ShowPostsScreen" />
 */
const Icon = ({ name, library, onPress }) => {
  const navigation = useNavigation();

  let IconComponent;
  switch (library) {
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "FontAwesome5":
      IconComponent = FontAwesome5;
      break;
    default:
      IconComponent = AntDesign;
  }
  const expectedLibrary = ["AntDesign", "FontAwesome5", "Feather", "Ionicons"];
  if (!library || !expectedLibrary.includes(library)) return null;

  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      {!name ? null : <IconComponent name={name} size={30} color="black" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    // fontSize: 30,
    position: "absolute",
    right: 15,
  },
});

export default Icon;
