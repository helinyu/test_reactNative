/**
 * Created by heliang on 16/11/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import CommonNav from './../Main/CommonNav'
import CommonCell from './../Main/CommonCell'

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CommonNav title="更多" rightIconName="icon_mine_setting"></CommonNav>
                <ScrollView >
                    <View style={{ marginTop:15}}>
                        <CommonCell  title="扫一扫" cellRightName="icon_cell_rightArrow_disabled"></CommonCell>
                    </View>
                    <View style={{marginTop:15}}>
                        <CommonCell  cellRightName="icon_cell_rightArrow_disabled" title="省流量模式"></CommonCell>
                        <CommonCell  cellRightName="icon_cell_rightArrow_disabled" title="扫一扫"></CommonCell>
                        <CommonCell  cellRightName="icon_cell_rightArrow_disabled" title="扫一扫" rightTitle="12.5M"></CommonCell>
                        <CommonCell  cellRightName="icon_cell_rightArrow_disabled" title="清除内存" isSwitch={true} ></CommonCell>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },



});

module.exports = More;