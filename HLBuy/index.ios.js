/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  Navigator
} from 'react-native';

import Main from './SeeApp/Main/Main'
import More from './SeeApp/More/More'
import Mine from './SeeApp/Mine/Mine'

export default class HLBuy extends Component {
  render() {
    return (
        <Navigator
            // 初始化路由
            initialRoute={{ name: 'main', component: Main }}
            // 页面过渡的方式
            configureScene={(route) => {
                return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
            }}
            // 实例化组件
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}



AppRegistry.registerComponent('HLBuy', () => HLBuy);
