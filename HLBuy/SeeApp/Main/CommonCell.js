/**
 * Created by heliang on 16/11/18.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Switch
} from 'react-native';

// 组件类
export default class CommonCell extends Component {
        //属性
            static propTypes = {
                title:PropTypes.string,//表示左边那个标题
                cellRightName:PropTypes.string,//表示右边的箭头图片
                rightImageName:PropTypes.string,//表示右边的图片
                isSwitch:PropTypes.bool, //是否有开关
                rightTitle:PropTypes.string, //表示右边那个标题
                leftImageName:PropTypes.string, //表示左边的图片

            };
            //初始化
            static defaultProps = {
            };
           // 构造
                constructor(props) {
                  super(props);
                  // 初始状态
                  this.state = {
                      switchOn:false
                  };
                }

    render() {
        return (

                <View style={ styles.cellViewStyle }>
                    <View style={ styles.leftViewStyle }>
                        <Image style={ styles.leftImgStyle } source={{uri:this.props.leftImageName}}></Image>
                        <Text  style={ styles.textLeftStyle}>{this.props.title}</Text>
                    </View>
                    {this.renderRightView()}
                </View>

        );
    }
    renderRightView(){
        var tmp;
       if(this.props.isSwitch){
            tmp = <Switch value={this.state.switchOn}
                          onValueChange={ ()=>{
                                this.setState({
                                    switchOn :!this.state.switchOn
                                })
                          } }
                    ></Switch>
        }else{
            tmp = <Image source={{uri:this.props.cellRightName}} style={ styles.imageRightStyle}></Image>
        }
        return <View style={{ flexDirection:'row',alignItems:'center' }}>
            <Image style={{ width:24,height:13}} source={{uri:this.props.rightImageName}}></Image>
            <Text style={{ marginRight:8}}>{this.props.rightTitle}</Text>
            {tmp}
        </View>;
    }
}

// 样式类
const styles = StyleSheet.create({
    cellViewStyle:{
        flexDirection:'row',
        justifyContent:"space-between",
        height:44,
        backgroundColor:'#fff',
        alignItems:'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    textLeftStyle:{
        marginLeft:8,
        fontSize:16
    },
    imageRightStyle:{
        width:14,
        height:24,
        marginRight:15,

    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftImgStyle:{
        width:24,
        height:24,
        marginLeft:8,
        borderRadius:12
    },

})

// 输出组件
module.exports = CommonCell;