/**
 * Created by apple on 16/10/26.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ListView,
} from 'react-native';


export default class MyListViewGroup extends Component {

    constructor(props){
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged : (r1,r2)=>r1!==r2,
            sectionHeaderHasChanged : (h1,h2)=>h1!==h2
        });

        /***
         *
         * [
         *     [row1,row2,row3,...]
         *     [row1,row2,row3,...],
         * ]
         *
         */
        let datas = [];
        for(let i=0;i<4;i++){
            var section = [];
            // datas[i] = section;
            datas.push(section);

            for(let j=0;j<20;j++) {
                section.push('组'+i + ',row' + j);
            }
        }

        // ds.cloneWithRows()
        //添加分组数据使用这个：cloneWithRowsAndSections
        this.state = {
            ds : ds.cloneWithRowsAndSections(datas)
        }

    }

    render(){
        return (
            <ListView
                dataSource={this.state.ds}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
        );
    }

    //创建行
    renderRow(rowData,sectionId,rowId){

        console.log(rowData,sectionId,rowId);

        return (
            <TouchableOpacity style={{
                margin: 5,
                backgroundColor: 'pink',
                height: 44
            }}>
                <Text>{rowData}</Text>
            </TouchableOpacity>
        );

    }

    //创建组的头视图
    renderSectionHeader(sectionData,sectionId){
        console.log(sectionData);

        return (
            <View style={{
                backgroundColor:'gray',
                height: 20,
            }}>
                <Text>好友</Text>
            </View>
        );
    }

}
