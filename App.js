import { StatusBar } from 'expo-status-bar';
import {  LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './Shared/Header';

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// Navigatiors
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
          <Header />
          <Main />
        
      </NavigationContainer>
    </Provider>
  );
}

