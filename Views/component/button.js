import React,{Component} from 'react';

import {
   
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
    }

    onPress = () => {
        const { onPress } = this.props;
        //onPress(); //控制按钮的状态方式一
        onPress(this.enable); //控制按钮的状态方式二 异步传递一个方法但不立即执行
    };

    enable = () => {
        this.setState({
            disabled: false,
        });
    };

    disable = () => {
        this.setState({
            disabled: true,
        });
    };

    render() {
        const { textStyle,btnStyle,img } = this.props;
        return (
            <TouchableOpacity
                disabled={this.state.disabled}
                style={[btnStyle]}
                onPress={this.onPress}>
                <Image
                 source={img}
                style={textStyle}
                resizeMode='stretch'
                ></Image> 
            </TouchableOpacity>
        );
    }

}

