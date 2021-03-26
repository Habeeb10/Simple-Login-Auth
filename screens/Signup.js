import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Facebook, Google, Logo, User, Vec } from "../svg";
import { Key } from "../svg";
import { Input } from "../component/CustomInput";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.itemcon}>
        <Logo />
        <Text style={styles.sign}>SIGN UP</Text>
      </View>
      <View style={styles.box}>
        <Input icon={<User />} hasBorder={true} placeHolder="First name" />
        <Input icon={<User />} hasBorder={true} placeHolder="Last name" />
        <Input icon={<Key />} hasBorder={true} placeHolder="E-mail" />
        <Input icon={<Vec />} placeHolder="Phone" />
      </View>
      <Text style={styles.use}>or use an extraneous accounts</Text>
      <View style={styles.books}>
        <TouchableOpacity activeOpacity={0.7} style={styles.book}>
          <Google />
          <Text style={styles.google}>GOOGLE</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity activeOpacity={0.7} style={styles.book}>
          <Facebook />
          <Text style={styles.face}>FACEBOOK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.last}>
        <Text style={styles.signup}> SIGN UP</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signin}
          onPress={() => navigation.navigate("signin")}
        >
          <Text style={styles.sin}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  google: {
    color: "#404CB2",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
  },
  face: {
    color: "#404CB2",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
  },
  divider: {
    width: 1,
    backgroundColor: "black",
  },
  book: {
    width: "50%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  books: {
    flexDirection: "row",
    marginTop: 40,
    borderRadius: 7,
    borderWidth: 1,
  },
  use: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: "#3D6670",
  },
  signin: {
    backgroundColor: "#404CB2",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "50%",
    alignSelf: "center",
    borderRadius: 5,
  },

  sin: {
    color: "white",
    fontSize: 16,
    letterSpacing: 1,
  },
  signup: {
    fontSize: 16,
    color: "#404CB2",
    fontWeight: "700",
    letterSpacing: 1,
  },
  last: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 200,
  },

  email: {
    fontSize: 18,
    lineHeight: 20,
    alignItems: "center",
    color: "#3D6670",
  },
  box: {
    backgroundColor: "white",
    width: 343,
    height: 180,
    borderRadius: 5,
    marginTop: 50,
  },
  sign: {
    fontSize: 30,
    letterSpacing: 2,
  },
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#BEBEBE",
  },
  itemcon: {
    alignSelf: "center",
    marginTop: 50,
    alignItems: "center",
  },
});
