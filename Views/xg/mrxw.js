import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    Image,
    ImageBackground,
    ListView,
    Button,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';  
import app from '../../app.json';
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource: ds.cloneWithRows([
                {title:'不要一直不理我',content:'家风豆:500'},
                {title:'在家不能抽烟',content:'家风豆:500'}
              ]),
              type:1,
              typetitle:'',
              typecontent:''
        }
    }

    render(){ 
      
        if(this.state.type==1){
    return (
        <View style={{
            backgroundColor: '#F7F7F7'
        }}>
                <View
                    style={{
                    height: 250,

                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <View style={{
                        height:200
                    }}>
                             <ImageBackground
                               
                         resizeMode='contain'
                            source={ require('./gly/banner.png')
                        }
                          
                            style={{
                             height:200,
                             width:1000
                        }}></ImageBackground>
                    </View>
                 </View>
                     <ScrollView 
                     style={{backgroundColor:'#efefef',height:deviceheight}}>
         <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:30,
             margin:5,
             alignItems:'center',
             justifyContent:'center',
             paddingLeft:10,
             paddingRight:10
         }}>
             <Text style={{fontSize:13,fontWeight:'bold'}}>昨日计划列表</Text>  
             <View style={{width:10}}></View>
             <Text style={{fontSize:13,fontWeight:'bold'}}>昨日行为列表</Text> 
           
        </View>
                  <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                           
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:rowData.xz?'#FB9401':'#fff',
                                                      borderTopWidth:1,
                                                      margin:5,
                                                      borderRadius:10,
                                                      height:40}}>
                                                      <View style={{flex:4,
                                                        justifyContent:'center',
                                                        alignItems:'flex-start',
                                                     
                                                        marginLeft:10}}>
                                                          <Text style={{   fontSize:12,color:'#474747'}}>{rowData.title}</Text>
                                                      </View>
                                                      <View style={{flex:2,
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}>
                                                          <Text style={{  fontSize:12, color:'#474747'}}>{rowData.content}</Text>
                                                      </View>
                                                      <View style={{flex:1,
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                         <CheckBox  style={{height:20,width:20}}></CheckBox>
   
                                                      </View>
                                                    
                                            
                                         </View>
                        
                                         }
                                   />
                    
                            </ScrollView>
               
     </View>
            )
            }
          
            
    }
}

