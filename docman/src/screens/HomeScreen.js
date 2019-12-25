import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import Paragraph from "../components/Paragraph";

const HomeScreen = ({ navigation }) => (
  <Background>
  <BackButton goBack={() => navigation.navigate("StartScreen")} />
    <Logo />
    <Header>DocMan</Header>

    <Paragraph>
      Commit to be fit
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
