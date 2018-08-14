import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'; 
import page1 from './page/1'
import Cygl from './cygl/cygl'
import Wdys from './cygl/wdys'
import Jtjh from './cygl/jtjh1'
import Cssz from './cygl/cssz'
import Wdjf from './cygl/wdjf'
import Wd from './cygl/wd'
import page4 from './page/4'
import page5 from './page/4'

import Login from '../Acount/Login'
 export default  class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedTab:'首页',
          type:1
        }
    }
     
    _renderTabarItems(selectedTab,icon,selectedIcon,Component){
        return (
          <TabNavigator.Item
              selected={this.state.selectedTab === selectedTab}  
              title={selectedTab} 
              titleStyle={styles.tabText}  
              selectedTitleStyle={styles.selectedTabText}  
              renderIcon={() => <Image style={styles.icon} source={icon} />}  
              renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}  
              onPress={() => this.setState({ selectedTab: selectedTab })}
          >
              <Component  tc={()=>{this.setState({type:2})}}/>
          </TabNavigator.Item>
        )
    
      }
    

      render() {
       if(this.state.type==1){
        return (
          <View style={styles.container}>
            <TabNavigator>
              {this._renderTabarItems('首页',require('./img/1.png'),require('./main/souye.png'),page1)}
              {this._renderTabarItems('成员管理',require('./img/2.png'),require('./main/jhgl.png'),Cygl)}
              {this._renderTabarItems('计划管理',require('./img/3.png'),require('./main/wodeys.png'),Jtjh)}
              {this._renderTabarItems('参数设置',require('./img/4.png'),require('./main/woyouhuashuo.png'),Cssz)}
              {this._renderTabarItems('我的',require('./img/2.png'),require('./main/wodecaidan.png'),Wd )}
 
             </TabNavigator>
          </View>
        )}else
        {
           return (<Login></Login>)
        }
      }
 
  
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
       
    },
    tabText:{
      color:'#000000',
      fontSize:10
    },
    selectedTabText:{
      color:'#D81E06'
    },
    icon:{
      width:20,
      height:20
    }
  })
  
