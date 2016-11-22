/**
 * Created by heliang on 16/11/18.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

// 组件类
export default class MineOraderView extends Component {
        //属性
            static propTypes = {
                dataArr: PropTypes.array
            };
            //初始化
            static defaultProps = {
            };

    render() {
        return (

                <View style={ styles.orderViewStyle }>
                    {this.renderItem()}
                </View>

        );
    }
    renderItem(){
        let itemArr = [];
        let dataArr = this.props.dataArr;
        for(var i=0; i<dataArr.length;i++){
            let data = dataArr[i];
            itemArr.push(
                <ItemView data={data} key={i}></ItemView>
            )
        }
        return itemArr;
    }
}

// 样式类
const styles = StyleSheet.create({

    orderViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:70,
        backgroundColor:'white'
    },
    itemStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        width:40,
        height:28
    }
    
});
//-------------------------------------------------------------
class ItemView extends Component {
        //属性
            static propTypes = {
                data:PropTypes.object,
            };
            //初始化
            static defaultProps = {
            };

    render(){
        return(
            <TouchableOpacity   style={ styles.itemStyle } onPress={()=>{ alert(this.props.data.title)}}>
                <Image source={{uri:this.props.data.icon}} style={styles.iconStyle}></Image>
                <Text>{this.props.data.title}</Text>
            </TouchableOpacity>
        )
    }
}

// 输出组件
module.exports = MineOraderView;