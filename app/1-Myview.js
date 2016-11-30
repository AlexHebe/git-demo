/**
 * Created by apple on 16/10/25.
 */

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

//创建一个组件类
export default class MyView extends Component {

    render() {
        return (
            <View style={styles.contatiner_view}>
                <View style={styles.item_view}></View>
                <View style={[styles.item_view,{flex:2}]}></View>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    contatiner_view : {
        backgroundColor : 'red',
        flex : 1 ,
        marginTop:20,
        flexDirection : 'row',
    },
    item_view : {
        width : 50,
        height: 50,
        flex : 1,
        backgroundColor:'green',
        //border : ['2','solid','black']
        borderColor : 'black',
        borderStyle : 'solid',
        //borderWidth : 3,
        borderTopWidth : 3,
        margin : 10,
    }
});


//export default MyView;

