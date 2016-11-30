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


class MyImage extends Component {

    render(){
        return (
            <View>
                <Text>显示图片</Text>
                <Image source={ require('./logo.jpg') }
                       style={{width:100,height:100}} />

                <Image source={{uri:'http://p1.meituan.net/movie/2e31bda18d03a91f3aaeadc6060576c9171055.jpg.webp@160w_220h_1e_1c'}}
                       style={{width:100,height:100,backgroundColor:'red'}}
                       resizeMode={'contain'} />

            </View>
        );
    }

}


export default MyImage;