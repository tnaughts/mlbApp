/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Standings from './app/scenes/Standings'

const App: () => React$Node = () => {
  return (
    
    <SafeAreaView style={{flex: 1}}>
        <Standings/>
    </SafeAreaView>

  );
};


export default App;
