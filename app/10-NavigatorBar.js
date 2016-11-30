/**
 * Created by apple on 16/10/27.
 */


/**
 * Created by apple on 16/10/26.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Navigator,
    Alert
} from 'react-native';


import NavigatorBar from 'react-native-navbar';


export default class MyNavigatorBar extends Component {

    render(){
        return (
            <Navigator
                initialRoute={{item : FirstPage }}
                renderScene={(route, navigator)=>{
                    return <route.item navigator={navigator} {...route} />
                }}
            />
        );
    }

}


class FirstPage extends Component {

    render(){
        return (
            <View style={{
                flex : 1,
                backgroundColor: 'pink'
            }}>
                {/*创建导航栏组件对象*/}
                <NavigatorBar
                    title={{ title : '首页' }}
                    tintColor="red"
                    rightButton={{
                        title : '消息',
                        tintColor : 'gray',
                        handler : ()=>{
                            this.props.navigator.push({
                                item : SecondPage,
                                name : 'zhangsan'
                            });
                        }
                    }}
                />


                <Text></Text>
            </View>
        );
    }
}

class SecondPage extends Component {


    //组件已经渲染显示完成
    componentDidMount() {
        Alert.alert(this.props.name);
    }

    render(){
        return (
            <View style={{flex:1, backgroundColor:'green'}}>

                <NavigatorBar
                    title={{ title : '消息' }}
                    tintColor="red"
                    leftButton={{
                        title : '返回',
                        tintColor : 'white',
                        handler : ()=>this.props.navigator.pop()
                    }}
                />

                <Text>第二个页面</Text>
                
            </View>
        );
    }

}
