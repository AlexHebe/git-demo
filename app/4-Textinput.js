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
    TextInput,
    ProgressBarAndroid
} from 'react-native';


export default class MyTextinput extends Component {

    render(){
        return (
            <View>
                <Text>输入框</Text>

                <TextInput style={styles.textinputStyle}
                            defaultValue="jack"
                           autoFocus={true}
                           placeholder="请输入"
                           secureTextEntry={true}
                />

                <ProgressBarAndroid progress={0.5} color="red" />


            </View>
        );
    }

}

const styles = StyleSheet.create({

    textinputStyle : {
        height : 50,
        borderWidth : 2,
        borderColor : 'black',
        // backgroundColor : 'gray',
    }

});