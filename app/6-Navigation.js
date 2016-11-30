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
    Navigator,
    TouchableHighlight
} from 'react-native';


export default class MyNavigator extends Component {

    render(){

        var p1 = {
            n1 : 'jack',
            age : 20
        };

        var p2 = {
            ...p1,  //将p1中的属性复制给p2
            height : 170,
            weight : 180,
        };
        console.log(p2);


        /**
         * initialRoute : 之定义初始化导航的第一个界面
         * renderScene : 当导航切换界面时，则会调用renderScene指定的函数，
         *               此函数返回需要显示的界面
         * configureScene : 指定界面切换的动画和方向
         */
        return (
            <Navigator
                style={styles.navbar}
                initialRoute={{name:'MovieList', item: MovieList }}
                configureScene={(route)=>{
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{

                    /**
                     * route 路由对象，用于管理路由切换界面
                     * navigator 导航对象
                     *
                     */
                        //取得当前导航要显示的组件界面
                    var Component = route.item;

                    var params = route.params;

                    console.log("renderScene ： " + Component);

                    //navigator={navigator} 将导航对象传给
                    //return <Component navigator={navigator} p={params} />

                    /**
                     * <Component {...route.params} navigator={navigator}
                     * 等价于, 将route.params中的属性赋值到Component组件的属性上
                     * <Component id={route.params.id} title={route.params.id}  navigator={navigator}
                     */
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}


/**
 * 导航的第一个组件界面
 */
class MovieList extends Component {

    /*
     * constructor 组件的构造函数
     * props ： 创建此组件对象时，传入的属性
     *
     */
    constructor(props){
        super(props);

        this.state = {
            name : ''
        };
    }

    render(){

        let that = this;

        return (
            <View style={{ flex:1, backgroundColor:'red'}}>
                <Text>
                    第一个列表页面
                </Text>

                <TouchableHighlight
                    style={{backgroundColor:'white', padding:10,width:100}}
                    underlayColor='gray' onPress={()=>{

                        //console.log('click');

                    //console.log(this);

                    //调用导航对象的跳转方法push
                    that.props.navigator.push({
                        name : 'MovieDetail',
                        item : MovieDetail,  //指定要跳转的组件类

                        //将参数传给下一个界面
                        params : {
                            id : '10003',
                            title : '无bug...',
                            callbackFun : (str)=>{
                                this.setState({
                                    name : str
                                });
                            }
                        }
                    });

                }} >

                    <Text style={{fontSize:18}}>详情</Text>

                </TouchableHighlight>


                <Text>
                    { this.state.name }
                </Text>

            </View>
        );
    }

}

/**
 * 导航的第二个组件界面
 */
class MovieDetail extends Component {

    render(){

        return (
            <View style={{ flex:1, backgroundColor:'gray'}}>

                <Text>

                    第二个详情页面
                    {/*{ this.props.p.id }*/}
                    {/*{ this.props.p.title }*/}

                    {this.props.id}
                    {this.props.title}

                </Text>

                <Text onPress={()=>{

                    //调用上一个组件的函数
                    this.props.callbackFun('回传用户名：tom');

                    //pop : 返回到上一个界面
                    this.props.navigator.pop();
                }}>
                    返回
                </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    navbar : {
        backgroundColor:'pink'
    }

});