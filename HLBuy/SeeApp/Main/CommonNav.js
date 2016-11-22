/**
 * Created by heliang on 16/11/16.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image

} from 'react-native';


let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

export default class CommonNav extends Component {
    //属性
        static propTypes = {
            title:PropTypes.string,
            leftIconName:PropTypes.string,
            rightIconName:PropTypes.string
        };
        //初始化
        static defaultProps = {
        };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        return(
            <View style={ styles.navStyle}>

                {/*左边*/}
                <TouchableOpacity onPress={()=>this.dealWithPress()}  style={{ flexDirection:'row', marginLeft:8}}>
                    <Image source={{uri:this.props.leftIconName}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                {/*中间*/}
                <View>
                    <Text style={{ fontSize:18}}>{ this.props.title}</Text>
                </View>
                {/*右边*/}
                <View style={{ flexDirection:'row', marginRight:8}}>
                    <Image source={{uri:this.props.rightIconName}} style={styles.navImageStyle}/>
                </View>

            </View>
        )
    };


}

const styles = StyleSheet.create({
    navStyle:{
        backgroundColor:"#f60",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:width,
        height:44,

    },
    navImageStyle:{
        width:24,
        height:24
    },

});

module.exports = CommonNav;