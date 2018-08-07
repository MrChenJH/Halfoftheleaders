import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  CheckBox,
  Image,
  ImageBackground
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'; 
import page1 from './page/1'
import Wdys from './cygl/wdys'
import hd from './cygl/hd'
import Jtjh from './cygl/jtjh1'
import page4 from './page/4'
import page5 from './page/4'

 export default  class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          selectedTab:'首页'
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
              <Component />
          </TabNavigator.Item>
        )
    
      }
    

      render() {
          
        return (
          <View style={styles.container}>
            <TabNavigator>
              {this._renderTabarItems('首页',require('./img/1.png'),require('./main/souye.png'),page1)}
              {this._renderTabarItems('我的计划',require('./img/2.png'),require('./main/jhgl.png'),Jtjh)}
              {this._renderTabarItems('我的预算',require('./img/3.png'),require('./main/wodeys.png'),Wdys)}
              {this._renderTabarItems('我有话说',require('./img/4.png'),require('./main/woyouhuashuo.png'),page4)}
              {this._renderTabarItems('我的菜单',require('./img/2.png'),require('./main/wodecaidan.png'),page5)}
 
             </TabNavigator>
          </View>
        );
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
  
