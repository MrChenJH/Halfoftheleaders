import React, {Component} from 'react';
import {
    ScrollView,
    Text,

    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ListView,
    Dimensions
} from 'react-native';
import Echarts from 'native-echarts';

 const deviceWidth = Dimensions.get('window').width;      
export default class page3 extends Component {
    constructor(props) {
        super(props);
     

        this.state = {
           optionline2 : {
        
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
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }],
              color:['#01a2ea', '#8ac99c','#23ac38','#b4d467','#ffff00','#fdcc89']

            }
        }
      
    }
  
  
    render() {
        return (
          <ScrollView>
              <View> 
                  <ImageBackground source={require('./jdjf/bg.png')} resizeMode='stretch' style={{height:100,width:deviceWidth}}>
                  
                  </ImageBackground>
              </View> 
          
          
              <View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>当月排名</Text>
                <Text>击败全国98%</Text>
                </View>
               <View>
               <Image source={require('./jdjf/jdt.png')} resizeMode='cover'></Image>
               <Image source={require('./jdjf/xsj.png')} resizeMode='cover'></Image>
               </View>
              </View>


                 <View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>年度排名</Text>
                <Text>击败全国98%</Text>
                </View>
               <View>
               <Image source={require('./jdjf/jdt.png')} resizeMode='cover'></Image>
               <Image source={require('./jdjf/xsj.png')} resizeMode='cover'></Image>
               </View>
              </View>
              
              <View>
              <Echarts option={this.state.optionline1} width={deviceWidth-40} height={300} />
   
              </View>

              <View style={{justifyContent:'center'}}> 
               <TouchableOpacity onPress={()=>{}} >
                <ImageBackground source={require('./jdjf/sygl.png')}  resizeMode='stretch'  style={{width:100,height:20}}></ImageBackground>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{}}>
               <ImageBackground source={require('./jdjf/zdgl.png')}  resizeMode='stretch'  style={{width:100,height:20}}></ImageBackground>
                   </TouchableOpacity>
              </View>
              
             </ScrollView>
        )
    }
}