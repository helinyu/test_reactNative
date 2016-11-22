/**
 * Created by heliang on 16/11/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    InteractionManager,
    TextInput,
    Image,
    ScrollView

} from 'react-native';

import HimeDetail from './HimeDetail';
import HomeTopView from './HomeTopView';
import HomeMiddleView from  './HomeMiddleView'

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

let topdataArr = require('./../../LocalData/TopMenu.json').data;
let middleData = require('./../../LocalData/HomeTopMiddleLeft.json');

export default class Home extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return (

            <View style={styles.container}>
                {/*导航*/}
                {this.renderNav()}

                <ScrollView>
                    {/*焦点图*/}
                    <HomeTopView dataArr={topdataArr}></HomeTopView>
                    {/*中间部分内容*/}
                    <HomeMiddleView dataObj={middleData}></HomeMiddleView>

                </ScrollView>

                <TouchableOpacity onPress={()=>this.dealWithPress()}>
                    <Text style={ styles.homeStyle }>home界面</Text>
                </TouchableOpacity>


            </View>
        );
    };

    renderNav(){
        return(
            <View style={ styles.navStyle}>
                {/*左边*/}
                <TouchableOpacity>
                    <Text>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <View>
                    <TextInput style={ styles.textInputStyle}
                               placeholder="请输入商家 商圈 品类"
                    />
                </View>
                {/*右边*/}
                <View style={{ flexDirection:'row'}}>
                    <Image source={{uri:'icon_homepage_message' }} style={styles.navImageStyle}/>
                    <Image source={{uri:'icon_homepage_scan'}} style={styles.navImageStyle}/>
                </View>

            </View>
        )
    };


    dealWithPress(){
        var navigator = this.props.navigator;
        //const {navigator} = this.props; 这种更加高级的写法
        // 优化界面的卡顿现象 注意,这里要备份this
        InteractionManager.runAfterInteractions(function () {
            navigator.push({
                title:'详细页面',
                component: HimeDetail
            })
        })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    homeStyle:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navStyle:{
        backgroundColor:"#f60",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:width,
        height:44,

    },
    textInputStyle:{
        width:width * 0.7,
        height:34,
        backgroundColor:'white',
        borderRadius:17
    },
    navImageStyle:{
        width:24,
        height:24
    },


});

module.exports = Home;