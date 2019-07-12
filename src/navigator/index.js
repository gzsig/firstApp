import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Login from "../features/login/components/Credentials";
import Feed from "../features/login/components/Feed";
import Tela2 from "../features/test2/components/tela2";
import Tela3 from "../features/test2/components/tela3";

const HelloNavigator = createStackNavigator(
  { 
    Login: Login,
    Feed: Feed
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

const SeeNavigator = createStackNavigator(
  { 
    Tela2: Tela2,
    Tela3: Tela3
  },
  {
    initialRouteName: 'Tela2',
    headerMode: 'none'
  }
)

export default AppNavigator = createBottomTabNavigator(
  {
    Tab1: HelloNavigator,
    Tab2: SeeNavigator
  },
  {
    initialRouteName: 'Tab1'
  }
)