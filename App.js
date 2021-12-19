import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header from './Shared/Header';
import ProductContainer from './Screens/Products/ProductContainer';

// Navigatiors
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Main />
      </View>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
