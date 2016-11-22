/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Main from './SeeApp/Main/Main'

export default class HLBuy extends Component {
  render() {
    return (
        <Main>ufdhufh</Main>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('HLBuy', () => HLBuy);
