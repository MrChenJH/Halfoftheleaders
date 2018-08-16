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
const deviceWidth = Dimensions.get('window').width;  
const deviceheight = Dimensions.get('window').height;  
import CheckBox from '../component/checkbox'
const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class HD extends Component {
    constructor(props) {
        super(props);
        this.state = {
             dataSource: ds.cloneWithRows([
                {title:'数学作业',content:'获得金豆:500',xz:true},
                {title:'在家不能抽烟',content:'获得金豆:500',xz:false}
              ]),
              type:1,
              typetitle:'',
              typecontent:''
        }
    }

    render(){ 
        const {back}=this.props
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
                     style={{backgroundColor:'#fff',height:deviceheight}}>
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
         <View 
         style={{flexDirection:'row'}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>昨日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                borderBottomColor:'#FFBF00',
                borderBottomWidth:2,
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>行为</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>列表</Text>
         </View>
         <View 
         style={{flexDirection:'row',marginLeft:5}}>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>昨日</Text>
              <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>行为</Text>
             <Text style={{fontSize:13,
                fontWeight:'bold',
                height:30,
                textAlign:'center',
                textAlignVertical:'center'}}>列表</Text>
         </View>
        </View>
                  <ListView
                                  dataSource={this.state.dataSource}
                                   renderRow={(rowData) => 
                           
                                          <View 
                                              style={{flexDirection:'row',
                                                      borderTopColor:'#F0F0F0',
                                                      backgroundColor:'#efefef',
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
                                                        flexDirection:'row',
                                                        justifyContent:'center',
                                                        alignItems:'center'}}>
                                                            <Image source={require('./xgsy/you.png')} style={{height:30,width:30,marginLeft:5}} resizeMode='stretch'></Image>
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

