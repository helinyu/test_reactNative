/**
 * Created by heliang on 16/11/21.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

// 组件类
export default class HomeCommonCell extends Component {
    //属性
    static propTypes = {
        datatObj:PropTypes.object,
    };
    //初始化
    static defaultProps = {
    };
    render() {
        return (
            //取出数据
            <View style={styles.container}>
                <View style={ styles.cellLeft}>
                    <Text style={{color:this.props.datatObj.titleColor, fontSize:22}}>{this.props.datatObj.title}</Text>
                    <Text style={{ fontSize:18,color:"#2b2b2b"}}>{this.props.datatObj.subTitle}</Text>
                </View>
                <Image
                     source={{uri:this.props.datatObj.rightImage}}
                       style={{ width:50, height:50}}
                ></Image>
            </View>
        );
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        width:width*0.5,
        alignItems:"center",
        height:59,
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:1,
        borderLeftColor:"#e8e8e8",
        borderLeftWidth:1
    },

});

// 输出组件
module.exports = HomeCommonCell;