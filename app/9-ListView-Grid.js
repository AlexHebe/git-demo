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
    Image,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';


export default class MyListViewGrid extends Component {

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
            /**
             * contentContainerStyle : 设置ListView的样式
             * 如果想让单元格网格排列，则设置flexDirection : 'row',横向排列
             */
            <ListView
                contentContainerStyle={{
                    flexDirection : 'row',
                    flexWrap : 'wrap',
                    justifyContent : 'flex-start'
                }}
                initialListSize={18}
                dataSource={this.state.ds}
                renderRow={this.renderRow}
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

        return (
            <TouchableOpacity style={{
                backgroundColor:'pink',
                height: 100,
                margin: 5,
                width : 100,
                flex : 1,
                alignSelf : 'flex-end'
            }}>
                <Text>{rowData}</Text>
            </TouchableOpacity>
        );

    }


}
