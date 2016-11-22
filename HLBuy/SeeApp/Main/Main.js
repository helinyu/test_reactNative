/**
 * Created by heliang on 16/11/16.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

// 导入组件文件
import Home from './../Home/Home';
import Mine from './../Mine/Mine';
import More from './../More/More';
import Shop from './../Shop/Shop';


//组件类
export default class Main extends Component {
    //构造
    constructor(props){
        super(props);
        //初始状态
        this.state = {
            // 记录当前选中的tabItem
            selectedTabItem: 'home'
        };
    }


    render() {
        return (
            <TabNavigator>

                {this.renderTabItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', false,  <Home {...this.props}/>)}
                {this.renderTabItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', false,  <Shop {...this.props}/>)}
                {this.renderTabItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', true,  <Mine {...this.props}/>)}
                {this.renderTabItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', false,  <More {...this.props}/>)}

            </TabNavigator>
        );
    }

    // 子tabItem
    renderTabItem(title,renderIcon,renderSelectedIcon,selectedTabItem,isRenderBadge, component){
        return(
        <TabNavigator.Item
            title={title}
            titleStyle = { {color:'red' }}
            selectedTitleStyle={{ color:'orange'}}
            renderIcon={()=> <Image source={{uri: renderIcon}} style={styles.tabIconStyle} />}
            renderSelectedIcon={()=> <Image source={{uri: renderSelectedIcon}} style={styles.tabIconStyle} />}
            selected = { this.state.selectedTabItem === selectedTabItem }
            onPress ={ ()=>{
                        this.setState({
                            selectedTabItem :selectedTabItem
                        })
                    } }
            renderBadge={()=>this.renderBadge(isRenderBadge)}
        >
            {component}
        </TabNavigator.Item>
        )
    }
    // 自定义气泡
    renderBadge(isRenderBadge){
        // 判断
        if (!isRenderBadge) return;
        return(
            <View style={{width:18, height:18, borderRadius:9, alignItems:'center', backgroundColor:'red',  marginTop:8}}>
                <Text style={{color:'white'}}>8</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    tabIconStyle:{
        width:28,
        height:28
    }

});

module.exports = Main;
