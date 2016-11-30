/**
 * Created by apple on 16/10/26.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ListView,
} from 'react-native';


export default class MyListView extends Component {

    constructor(props){
        super(props);

        //创建数据源对象，数据源是用于存储ListView要显示的数据
        var datasource = new ListView.DataSource({
            rowHasChanged : (r1,r2)=>r1!==r2
        });

        var datas = [];
        for(let i=0;i<50;i++){
            datas.push('row-' + i);
        }

        //是讲数组datas 放入数据源对象 datasource
        //datasource = datasource.cloneWithRows(datas);

        this.state = {
            ds : datasource.cloneWithRows(datas)
        }


    }

    render(){
        return (
            <ListView
                dataSource={this.state.ds}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
                renderFooter={this.renderFooter}
                renderSeparator={this.renderSeparator}
            />
        );
    }

    /**
     *
     * @param rowData     数组中的元素
     * @param sectionId   组id
     * @param rowId     行索引
     */
    //renderRow ： 用于创建每一行的组件界面，数组中有多少个元素，此函数会被调用多少次
    renderRow(rowData,sectionId,rowId){
        console.log(rowData,rowId,sectionId);

        //判断是否是第一个单元格
        if(rowId == 0) {
            return (
                <View style={{
                    backgroundColor:'pink',
                    height: 100,
                }}>
                    <Text>轮播图</Text>
                </View>
            );
        }


        //返回一行要显示的组件界面
        return (
            <View style={{
                backgroundColor : 'pink',
                margin : 5,
                height: 44
            }} key={sectionId + rowId} >
                <Text>{rowData}</Text>
            </View>
        );
    }

    //创建列表的头视图

     renderHeader(){

         return (
             <View style={{
                 backgroundColor:'green',
                 height: 80,
             }}>

                <Text>头视图</Text>

             </View>
         );
     }

    //创建列表的尾视图
    renderFooter(){
        return (
            <View style={{
                backgroundColor:'red',
                height: 80,
            }}>

                <Text>头视图</Text>

            </View>
        );
    }


    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (
            <View key={sectionID+rowID} style={{
                backgroundColor:'gray',
                height: 0.5,
            }}>

            </View>
        );
    }

}

const styles = StyleSheet.create({

});