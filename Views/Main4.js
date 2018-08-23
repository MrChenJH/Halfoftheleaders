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
import Gly  from './page/gly'
import Cygl from './cygl/cygl'
import Wdys from './cygl/wdys'

import Cssz from './cygl/cssz'
import Wdjf from './cygl/wdjf'
import Wd   from './cygl/wd'
import Xg   from './page/xg' 
import Shy  from './page/shy'

import Gcy  from './page/gcy'
import Wdqb from './xg/wdqb'
import Jrrw from './xg/jrrw'
import Wyhs from './xg/wyhs'
import XGWdys from './xg/wdys'


import Xwpj from './shy/xwpj'
import Yssh from './shy/jhsh'
import Sh from './shy/sh'
import Jhsh from './shy/jhsh'
import Jssh from './shy/jssh'

import GcJrrw from './gcy/jrrw'

import GcZrxw from './gcy/zrxw'
import Gcsh from './gcy/sh'
import Wdzz  from './gcy/wdzz'
import page4 from './page/4'
import page5 from './page/4'

import Login from '../Acount/Login'
 export default  class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedTab:'首页',
          type:this.props.type?this.props.type:1
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
              <Component  navigator={this.props.navigator} tc={()=>{this.setState({type:5})}}/>
          </TabNavigator.Item>
        )
    
      }
    

      render() {
       if(this.state.type==1){
          return (
          <View style={styles.container}>
          <TabNavigator>
            {this._renderTabarItems('首页',require('./img/1.png'),require('./main/souye.png'),Gcy)}
            {this._renderTabarItems('行为评价',require('./img/2.png'),require('./main/jhgl.png'),Xwpj)}
            {this._renderTabarItems('预算赞助',require('./img/3.png'),require('./main/wodeys.png'),Wdzz)}
            {this._renderTabarItems('家庭钻豆',require('./img/4.png'),require('./main/woyouhuashuo.png'),Wdqb)}
            {this._renderTabarItems('我的',require('./img/2.png'),require('./main/wodecaidan.png'),Wd)}
           </TabNavigator>
        </View> )
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
  
