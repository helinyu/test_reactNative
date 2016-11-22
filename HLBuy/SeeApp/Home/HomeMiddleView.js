/**
 * Created by heliang on 16/11/21.
 */

import React, { Component ,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import HomeCommonCell  from './HomeCommonCell';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class HomeMiddleView extends Component {
        //属性
            static propTypes = {
                dataObj:PropTypes.object,
            };
            //初始化
            static defaultProps = {
            };
    render() {
        let leftData = this.props.dataObj.dataLeft[0];
        return (
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:leftData.img1}} style={styles.imgStyle}></Image>
                    <Image source={{uri:leftData.img2}} style={styles.imgStyle}></Image>
                    <Text style={{fontSize:18}}>{leftData.title}</Text>
                    <View style={{ flexDirection:'row',marginTop:3}}>
                        <Text style={{color:'blue'}}>{leftData.price}</Text>
                        <Text style={{backgroundColor:'yellow'}}>{leftData.sale}</Text>
                    </View>
                </View>
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }
    renderRightView(){
        // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataObj.dataRight;
        //遍历
        for(var i=0; i<dataArr.length; i++){
            //装入数组
            itemArr.push(
                <HomeCommonCell key={i} datatObj={dataArr[i]}></HomeCommonCell>
            )
        }
        return itemArr;
    }
}



// 样式类
const styles = StyleSheet.create({
    container: {
        width:width,
        height:120,
        backgroundColor:'white',
        marginTop:15,
        flexDirection:"row",

    },
    leftViewStyle:{
        width:width*0.5,
        height:120,
        alignItems:'center',
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:1
    },
    imgStyle:{
        width:80,
        height:35,
        resizeMode:'contain'
    }
});

// 输出组件
module.exports = HomeMiddleView;
