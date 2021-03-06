import React, {PureComponent} from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
}
    from 'react-native'

const checkedImage=require('../cygl/imgs/checked.png')
const checkImage=require('../cygl/imgs/check.png')
export default class CheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked || false
        };
    }
   
    getChecked() {
        return this.state.isChecked;
    }
 
    setChecked(isChecked) {
        this.setState({
            isChecked: isChecked
        });
    }
 

    render() { 
        const {styles,selected}=this.props;
        return (
            <TouchableHighlight underlayColor={'transparent'} onPress={() =>{
                this.setState({
                    isChecked: !this.state.isChecked
                });
                selected(this.state.isChecked)
            } }>
                <Image source={this.state.isChecked?checkedImage:checkImage} style={styles}/>
            </TouchableHighlight>
        );
    }
}
