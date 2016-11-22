/**
 * Created by heliang on 16/11/18.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

var mineDataArr = require('./MineOrderData.json');

// 组件类
export default class MineHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={{ height:200,backgroundColor:'#f60',flexDirection:'row' ,alignItems:'center',justifyContent:'space-between' }}>
                    <View style={{ flexDirection:'row',alignItems:'center' }}>
                        <Image source={{uri:'see'}} style={{ width:80, height:80, resizeMode: Image.resizeMode.contain,
                            borderRadius:40,marginRight:5, marginLeft:7
                       }}></Image>
                        <Text style={{ fontSize:16}}>小码哥电商</Text>
                        <Image source={{ uri:"avatar_vip"}} style={{ width:26, height:26, resizeMode: Image.resizeMode.contain,
                            borderRadius:13
                       }}></Image>
                    </View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{ width:14, height:24,marginRight:15}}></Image>
                </View>
                {/*下部分*/}
                <View style={ styles.bottomStyle}>
                    {/*                    <View style={ styles.bottomItemStyle}>
                        <Text style={{color:'white'}}>{mineDataArr[0].number}</Text>
                        <Text style={{color:'white'}}>{mineDataArr[0].title}</Text>
                    </View>
                    <View style={ styles.bottomItemStyle}>
                        <Text style={{color:'white'}} >{mineDataArr[1].number}</Text>
                        <Text style={{color:'white'}} >{mineDataArr[1].title}</Text>
                    </View>
                    <View style={ styles.bottomItemStyle}>
                        <Text style={{color:'white'}} >{mineDataArr[2].number}</Text>
                        <Text style={{color:'white'}} >{mineDataArr[2].title}</Text>
                    </View>*/}
                    {this.renderBottom()}
                </View>
                

            </View>
        );
    }

    renderBottom(){
            var itemArr = [];
            for( var i=0 ; i<mineDataArr.length; i++){
                ( function (i) {
                itemArr.push(
                <TouchableOpacity key={i} style={ styles.bottomItemStyle} onPress={()=>{alert(mineDataArr[i].title)}}>
                    <Text style={{color:'white'}}>{mineDataArr[i].number}</Text>
                    <Text style={{color:'white'}}>{mineDataArr[i].title}</Text>
                </TouchableOpacity>
                )
                })(i);
            };
        return itemArr;
    }
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomStyle:{
        flexDirection:'row',
        width: width,
        height:50,
        backgroundColor:'rgba(255,255,255,0.3)',
        justifyContent:'space-around',
        position:'absolute',
        bottom:0,
        left:0
    },
    bottomItemStyle:{
        width:width/3+1,
        height:40,
        marginTop:5,
        paddingBottom:5,
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'white',
        justifyContent:'space-around'
    }
});

// 输出组件
module.exports = MineHeaderView;