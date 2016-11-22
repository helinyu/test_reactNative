/**
 * Created by heliang on 16/11/21.
 */
import React, { Component,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height, scale} = Dimensions.get('window');

let cols = 5;
let viewWidth = 70;
let marginX = (width - cols * viewWidth)/(cols + 1);

// 组件类
export default class Shop extends Component {
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
                var ds = new ListView.DataSource({ rowHasChanged:(r1,r2) => r1 !==r2})
              // 初始状态
              this.state = {
                  dataSource: ds.cloneWithRows(this.props.dataArr)
              };
            }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow = {this.renderRow}
                contentContainerStyle = { styles.listViewStyle}
            />

        );
    }
    renderRow(rowData){
        return(
            <TouchableOpacity style={styles.cellStyle}  onPress={()=>{ alert(rowData.title) }}>
                <Image source={{uri: rowData.image}} style={{ width:40,height:40}}></Image>
                <Text>{ rowData.title}</Text>
            </TouchableOpacity>
        )
    }
}

// 样式类
const styles = StyleSheet.create({

    listViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
        backgroundColor:'white'
    },
    cellStyle:{
        width:viewWidth,
        height:viewWidth + 5,
        justifyContent:'center',
        alignItems:'center',
        
        marginLeft:marginX,
    }
});

// 输出组件
module.exports = Shop;
