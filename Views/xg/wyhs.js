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
import CheckBox from '../component/checkboxsy'
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
        const {back}=this.props
        if(this.state.type==1){
    return (
        <View >
        <View style={{
         flexDirection:'row',
         borderBottomWidth:1,
         borderBottomColor:'#E6E6E6',
         backgroundColor:'#fe9c2e',
         height:40,
         alignItems:'center',
         justifyContent:'space-between'}}>
         
          <View  style={{height:50,width:35,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity   
             style={{height:50,
              width:35,
              justifyContent:'center',
              alignItems:'flex-end'}} 
                onPress={()=>{back()}}>
                  <Image source={require('./imgs/back.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                  </Image>
                </TouchableOpacity> 
          </View> 
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text 
                    style={{fontSize:16,
                      color:'#FFF',fontWeight:'bold'}}>我有话说</Text>
                </View> 
                <View style={{marginRight:5}}> 
                <TouchableOpacity  style={{height:20,width:20}} onPress={()=>{ this.setState({type:3})}}>
                  <Image source={require('./imgs/add.png')}  resizeMode='stretch'  style={{height:20,width:20}} >
                  </Image>
                </TouchableOpacity> 
                </View> 
            </View>
       
         

         <View
                                style={{
                                  height:30,
            
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 10
                            }}>
                                <Text>我的家人</Text>
                            </View>
                      
                            <View
                                style={{
                                 height:100,
                                  
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 20,
                                marginTop: 10
                            }}>
                                       
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}> 
                                   <TouchableOpacity onPress={()=>{this.setState({type:111})}}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>父亲</Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    marginTop: 5
                                }}> 
                                     <TouchableOpacity onPress={()=>{this.setState({type:111})}}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>母亲</Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}>
                                 <TouchableOpacity onPress={()=>{this.setState({type:111})}}>
                                    <Image
                                        source={require('./gly/boy.png')}
                                        style={{
                                        height: 50,
                                        width: 50
                                    }}></Image>
                                    <Text>小鬼</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
            
 
    
         <ScrollView style={{backgroundColor:'#efefef',height:deviceheight}}>
         <View  
            style={{
             justifyContent:'space-between',
             flexDirection:'row',
             backgroundColor:'#fff',
             height:30,
             margin:5,
             alignItems:'flex-end',
             paddingLeft:10,
             paddingRight:10
         }}>
             <Text style={{fontSize:13}}>我想对爸爸说:</Text> 
             <Text style={{fontSize:13}}>我的评价</Text>
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

