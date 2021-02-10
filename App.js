import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MainNav from './src/navigation/MainNav';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <MainNav />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}
