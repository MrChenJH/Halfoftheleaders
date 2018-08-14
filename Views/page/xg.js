import React, {Component} from 'react';
import {
  TouchableOpacity,
StyleSheet,
    Text,
  ScrollView,
    View,
    Dimensions,
ImageBackground

} from 'react-native';
import Echarts from 'native-echarts';
export const deviceWidth = Dimensions.get('window').width;      
export default class app2 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        title: {
          text: '豆金分布图'
        },
        optionpie : {
          tooltip: {    //定义环形图item点击弹框
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
          legend: {     //定义右边的菜单目录效果
           data:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          series: [{
            name:'月份销量',
            type:'pie',
            hoverAnimation:false, 
            radius: ['58%', '90%'],     //设置环形图展示半径空心圆环
            avoidLabelOverlap: false,
            center: ['50%', '50%'],     //这里可以设置环形图展示的位置
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {               //设置点击展示环形图内部文本样式
                show: true,
                textStyle: {
                  color:'#666666',
                  fontSize: '11',
                  fontWeight: 'bold'
                }
              }
            },

            labelLine: {
              normal: {
                show: false
              }
            },
         
           data:[{value:2.00, name:'1月'}, {value:3.00, name:'2月'}, {value:3.00, name:'3月'}, {value:2.00, name:'4月'}, {value:5.00, name:'5月'}, {value:7.00, name:'6月'},
           {value:3.00, name:'7月'},{value:7.00, name:'8月'},{value:25.00, name:'9月'}, {value:3, name:'10月'}, {value:3, name:'11月'}, {value:3, name:'12月'}]
          }],
            //可以根据下标来定义item内容的颜色
            color:['#01a2ea', '#8ac99c','#23ac38','#b4d467','#ffff00','#fdcc89','#f19049','#ea6941','#f95353','#cc5ac0','#ac5fd7','#5570b5']

        },   
        optionline1 : {
          title: {
              text: '豆金统计图（周）'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20]
          }]
        }, optionline2 : {
          title: {
            text: '豆金统计图（天）'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20]
          }]
        },optionline3 : {
          title: {
            text: '豆金统计图（周）'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20]
          }]
        },
        text: 'test'
      };
    }
  
 
  
  
  render() {
      return (
        <ScrollView style={{width:deviceWidth}} >
      <ImageBackground source={require('./gly/2menu_bg.png')} style={{width:deviceWidth,paddingLeft:5,paddingRight:5}}>
        <View style={{height:45,marginTop:20,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff',borderRadius:5,alignItems:'center'}}>
          <Text style={{marginLeft:10,color:'orange',fontSize:15}}>
            本周攒豆情况  1500
          </Text>

          <TouchableOpacity style={{width:100,height:30}} onPress={()=>{this._setOp()}}>
               <ImageBackground style={{width:100,height:30}} source={require('./gly/woyaochongzhi.png')} resizeMode='stretch'>
               <Text style={{color: '#fff'}}>change state</Text>
               </ImageBackground>
          
          </TouchableOpacity>
     
        </View>
        

         <View style={{height:350,marginTop:10,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',alignContent:'center',paddingLeft:40,paddingRight:15}}>
              <Echarts option={this.state.optionpie} width={deviceWidth-90} height={300} />
                
        </View>


       <View style={{height:350,marginTop:10,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',alignContent:'center',paddingLeft:15,paddingRight:15}}>
              <Echarts option={this.state.optionline1} width={deviceWidth-40} height={300} />
                
        </View>
        
        
        <View style={{height:350,marginTop:10,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',alignContent:'center',paddingLeft:15,paddingRight:15}}>
              <Echarts option={this.state.optionline2} width={deviceWidth-40} height={300} />
                
        </View>
       
       
        <View style={{height:350,marginTop:10,backgroundColor:'#fff',borderRadius:5,justifyContent:'center',alignContent:'center',paddingLeft:15,paddingRight:15,marginBottom:30}}>
              <Echarts option={this.state.optionline3} width={deviceWidth-40} height={300} />
                
        </View>
      
        </ImageBackground>
        </ScrollView>
      );
    }
  }

