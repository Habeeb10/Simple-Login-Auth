import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../svg";
import { Key } from "../svg";
import { Let } from "../svg";
import { Input } from "../component/CustomInput";
import { Switch } from "react-native-gesture-handler";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.itemcon}>
        <Logo />
        <Text style={styles.sign}>SIGN IN</Text>
      </View>
      <View style={styles.box}>
        <Input
          icon={<Key />}
          hasBorder={true}
          placeHolder="tijanihabib42@gmail.com"
        />
        <Input icon={<Let />} placeHolder="Password" />
      </View>
      <Text style={styles.forgot}>Forgot Password ?</Text>
      <View style={styles.switch}>
        <Text style={styles.enable}>Enable 2FA authentication</Text>
        <Switch />
      </View>
      <View style={styles.last}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("signup")}
        >
          <Text style={styles.signup}> SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.signin}>
          <Text style={styles.sin}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: 300,
  },
  enable: {
    color: "#3D6670",
    fontSize: 15,
    marginTop: 10,
  },
  forgot: {
    marginTop: 30,
    color: "#404CB2",
    fontWeight: "bold",
    fontSize: 15,
  },
  key: {
    flexDirection: "row",
    marginLeft: 10,
  },
  let: {
    flexDirection: "row",
    marginLeft: 10,
  },
  pass: {
    fontSize: 18,

    color: "#3D6670",
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
    height: 110,
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
