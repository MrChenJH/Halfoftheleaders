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
import Jtjh from './cygl/jtjh'
import Cssz from './cygl/cssz'
import Wd   from './cygl/wd'


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
              <Component  navigator={this.props.navigator}/>
          </TabNavigator.Item>
        )
    
      }
    

      render() {
    
        return (
          <View style={styles.container}>
            <TabNavigator
            tabBarShadowStyle={{display:'none'}}
            hidesTabTouch={true}
            tabBarStyle={{display:'none'}}
            >
              {this._renderTabarItems('首页',require('./img/1.png'),require('./main/souye.png'),Gly)}
              {this._renderTabarItems('成员管理',require('./img/2.png'),require('./main/jhgl.png'),Cygl)}
              {this._renderTabarItems('计划管理',require('./img/3.png'),require('./main/wodeys.png'),Jtjh)}
              {this._renderTabarItems('参数设置',require('./img/4.png'),require('./main/woyouhuashuo.png'),Cssz)}
              {this._renderTabarItems('我的',require('./img/2.png'),require('./main/wodecaidan.png'),Wd )}
            </TabNavigator>
          </View>
        )}
       
    
 
  
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
  
