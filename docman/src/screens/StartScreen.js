import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>DocMan</Header>

    <Paragraph>
      Commit to be fit
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("SwiperScreen")}>
      Start
    </Button>
  </Background>
);

export default memo(StartScreen);