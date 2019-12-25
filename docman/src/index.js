import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  StartScreen,
  SwiperScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard
} from "./screens";

const Router = createStackNavigator(
  {
    StartScreen,
    SwiperScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

export default createAppContainer(Router);
