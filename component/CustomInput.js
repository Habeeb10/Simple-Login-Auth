import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const Input = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  icon,
  hasBorder,
}) => {
  return (
    <View
      style={[
        styles.container,
        { borderBottomWidth: hasBorder ? 2 : 0 },
        style,
      ]}
    >
      {icon}
      <TextInput
        value={value}
        keyboardType={type}
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="#3D6670"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    borderColor: "#DDDDDD",
    paddingBottom: 10,
    marginTop: 10,
  },
  input: {
    width: "100%",
    color: "#3D6670",
    fontSize: 17,
    marginLeft: 10,
  },
});
