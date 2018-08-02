import React, {Component} from 'react';
import {
    ScrollView,

    Text,

    View,

    Image,
    ImageBackground,
    ListView
} from 'react-native';
import Button from '../component/button'
export default class page4 extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows([
                {title:'做作业',time:'2018-07-01 10:45'},
                {title:'打扫卫生',time:'2018-07-01 10:45'},
                {title:'洗碗',time:'2018-07-01 10:45'},
                {title:'按时睡觉',time:'2018-07-01 10:45'}
              
              ])
        
        }
    }
    _rednerJH() {
        let icons = []
        icons.push({img: require('./gly/icon_canshu.png'), name: '成员管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        icons.push({img: require('./gly/icon_canshu.png'), name: '计划管理'})
        return (icons.map((t, i) =>this._remderItem(t, i)))
    }

    _remderItem(t, i) {

        return ( <View key = {i} 
        style = {{width: 80,height: 60,justifyContent:'center',alignItems:'center'}} >
        <Image
            source={t.img}
            style={{
            height: 40,
            width: 40
        }}>
        </Image> 
        <Text> {
            t.name
        }
         </Text>
            </View>)
    }

    render() {
        return (
        <View>
            <Text>暂未开发</Text>
        </View>
        )
    }
}