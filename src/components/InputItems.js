import react from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const InputItem = ({ title, edit = false, onTextEdit, input }) => {
  const display = edit ? `Enter New ${title}` : `Enter ${title}`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{display}</Text>
      <TextInput style={styles.input} value={input} onChangeText={onTextEdit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.14,
    height: 50,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
  },
  input: {
    // flex: 1,
    height: 40,
    borderWidth: 1,
  },
});

export default InputItem;