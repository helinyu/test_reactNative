/**
 * Created by heliang on 16/11/16.
 */
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import CommonCell from './../Main/CommonCell'
import MineHeaderView from './MineHeaderView'
import MineOraderView from './MineOraderView'

//导入本地的数据
var orderArr = require('./OrderData.json');


export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                {/*头部*/}
                <MineHeaderView ></MineHeaderView>

                <View>
                    <CommonCell title="我的订单" cellRightName="icon_cell_rightArrow"
                                leftImageName="collect"
                    ></CommonCell>
                </View>
                {/*订单问题*/}
                <MineOraderView dataArr={orderArr}></MineOraderView>

                <View style={{ marginTop:15}}>
                    <CommonCell title="小码哥钱包" cellRightName="icon_cell_rightArrow"
                                rightTitle="账户余额:$100" leftImageName="draft"
                    ></CommonCell>
                    <CommonCell title="抵用券" cellRightName="icon_cell_rightArrow"
                                rightTitle="0" leftImageName="like"
                    ></CommonCell>
                </View>
                <View style={{ marginTop:15}}>
                    <CommonCell title="积分商场" cellRightName="icon_cell_rightArrow"
                                leftImageName="card"
                    ></CommonCell>
                </View>
                <View style={{ marginTop:15}}>
                    <CommonCell title="今日推荐" cellRightName="icon_cell_rightArrow"
                                leftImageName="new_friend" rightImageName="me_new"
                    ></CommonCell>
                </View>
                <View style={{ marginTop:15}}>
                    <CommonCell title="我要合作" cellRightName="icon_cell_rightArrow"
                                leftImageName="pay" rightTitle="轻松开店,招财进宝"
                    ></CommonCell>
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

module.exports = Mine;