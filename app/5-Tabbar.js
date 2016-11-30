/**
 * Created by apple on 16/10/25.
 */


/**
 * Created by apple on 16/10/25.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

//导入 react-native-tab-navigator 组件
 import Tabar from 'react-native-tab-navigator';


export default class MyTabbar extends Component {

    constructor(props){
        super(props);

        //初始化状态
        this.state = {
            //选中的tab页索引
            selectedIndex : 0
        }

    }
    render(){

        /***
         tabBarStyle : tabbar的样式属性
         selected : 是否是选中状态
         title : 显示的标题
         selectedTitleStyle : 选中状态title的样式
         renderIcon : function   指定一个返回组件的函数,组件作为图标显示
         renderSelectedIcon : function  选中的图标
         onPress : function 点击事件函数
         */
        return (
            <View style={styles.container}>
                <Tabar tabBarStyle={styles.tabbar}>
                    <Tabar.Item
                        selected={this.state.selectedIndex==0}
                        title="电影"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={()=>{
                            return <Image source={require('./home_tab_icon_2_1@2x.png')} style={styles.icon} />
                        }}
                        renderSelectedIcon={()=>{
                            return <Image source={require('./home_tab_icon_2_1@2x.png')} style={styles.icon} />
                        }}
                        onPress={()=>{
                            this.setState({
                                selectedIndex : 0
                            });
                        }}
                    >
                        <View style={{ flex:1,backgroundColor: 'red' }}></View>
                    </Tabar.Item>

                    <Tabar.Item
                        selected={this.state.selectedIndex==1}
                        title="电影"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={()=>{
                            return <Image source={require('./home_tab_icon_2_2@2x.png')} style={styles.icon} />
                        }}
                        onPress={()=>{
                            this.setState({
                                selectedIndex : 1
                            });
                        }}
                    >
                        <View style={{ flex:1,backgroundColor: 'green' }}></View>
                    </Tabar.Item>

                    <Tabar.Item
                        selected={this.state.selectedIndex==2}
                        title="电影"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={()=>{
                            return <Image source={require('./home_tab_icon_2_3@2x.png')} style={styles.icon} />
                        }}
                        onPress={()=>{
                            this.setState({
                                selectedIndex : 2
                            });
                        }}
                    >
                        <View style={{ flex:1,backgroundColor: 'blue' }}></View>
                    </Tabar.Item>
                </Tabar>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'white'
    },
    tabbar : {
        backgroundColor:'white',
        height : 49,
        overflow: 'hidden',
        borderTopWidth:0.5,
        borderTopColor:'#E3E3E3',
    },
    icon : {
        width : 25,
        height: 25,
    }

});