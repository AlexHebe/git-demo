/**
 * Created by apple on 16/10/25.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class MyText extends Component {

    handlePress() {
        console.log('被点击了');
    }

    render(){
        return (
            <View style={{backgroundColor:'pink',flex:1}}>
                <Text>
                    <Text>这是一个Text文本</Text>
                    <Text style={styles.firstText}>
                        这是二个Text文本，这是二个Text文本，这是二个Text文本，这是二个Text文本，
                    </Text>
                </Text>
                <Text style={styles.secondText}
                      onPress={()=>{
                          console.log('被点击了1111');
                      }}>
                    这是三个Text文本
                </Text>

            </View>
        );
    }

}

const styles = StyleSheet.create({

    firstText : {
        backgroundColor : 'red',
        color : 'green',
        textAlign : 'center',
    },
    secondText : {
        backgroundColor : 'green',
        color : 'white',

    }

});
