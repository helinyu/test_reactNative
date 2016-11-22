/**
 * Created by heliang on 16/11/19.
 */
import React, { Component ,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

import HomeListView from './HomeListView';

// 组件类
export default class HomeTopView extends Component {
        //属性
            static propTypes = {
                dataArr:PropTypes.array,
            };
            //初始化
            static defaultProps = {
            };
       // 构造
            constructor(props) {
              super(props);
              // 初始状态
              this.state = {
                  selectedPage:0
              };
            }
       

    render() {
        return (
            <View style={styles.container}>
                {/*上部分的焦点图*/}
                    <ScrollView horizontal={true}
                                padingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={(e)=>{this.pageScrollEnd(e)}}
                    >
                        {this.renderScrollImage()}
                    </ScrollView>
                {/*下部分的两个小点*/}
                    <View style={{ flexDirection:'row',justifyContent:"center", alignItems:"center"}}>
                        {this.renderIndicator()}
                    </View>
 
            </View>
        );
    }
    renderScrollImage(){
        // 组件数组
                let itemArr = [];
                // 数据数组
                let dataArr = this.props.dataArr;
                //遍历
                for(var i=0; i<dataArr.length; i++){
                    //装入数组
                    itemArr.push(
                        <HomeListView key={i} dataArr = {dataArr[i]}></HomeListView>
                    )
                }
        //返回数组组件
                return itemArr;
    }
    renderIndicator(){
         // 组件数组
        let itemArr = [];
        // 数据数组
        let dataArr = this.props.dataArr;
        for(var i=0; i<dataArr.length; i++){
            var style = (i == this.state.selectedPage)?{color:'orange'} :{color:'gray'}
            itemArr.push(
                <Text key={i} style={[{fontSize:30 },style]}>&bull;</Text>
            )
        }
        return itemArr;
    }

    // 当一页滚动结束
    pageScrollEnd(e){
        // 1. 求出偏移量,注意这里的事件是这样写的
        let currentPage = e.nativeEvent.contentOffset.x / width;
        // 2. 更新状态机
        this.setState({
            selectedPage: currentPage
        });
    }

   
}

// 样式类
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'

    },

});



// 输出组件
module.exports = HomeTopView;