/**
 * Created by heliang on 16/11/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import CommonNav from './../Main/CommonNav'

// 组件类
export default class HomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNav title="深圳" leftIconName="icon_homepage_message" rightIconName="icon_homepage_scan"></CommonNav>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
                    <Text style={styles.welcome}>
                        首页的详情页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出组件
module.exports = HomeDetail;
