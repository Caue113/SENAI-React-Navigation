import { StyleSheet, Text, View } from 'react-native-web';
import { createStackNavigator, createAppContainer} from "react-navigation";

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';

/*
export default function App() {
  return (
    <AppContainer/>
  );
}*/


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  }
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
