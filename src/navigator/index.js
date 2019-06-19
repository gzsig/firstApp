import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Tela0 from "../features/test1/components/tela0";
import Tela1 from "../features/test1/components/tela1";
import Tela2 from "../features/test2/components/tela2";
import Tela3 from "../features/test2/components/tela3";

const HelloNavigator = createStackNavigator(
  { 
    Tela0: Tela0,
    Tela1: Tela1
  },
  {
    initialRouteName: 'Tela0',
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