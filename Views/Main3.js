import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Wd from './cygl/wd'
import Shy from './page/shy'
import Xwpj from './shy/xwpj'
import JHSh from './shy/jhsh'
import YSSH from './shy/yssh'


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页',
            type: this.props.type ? this.props.type : 1
        }
    }

    _renderTabarItems(selectedTab, icon, selectedIcon, Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={selectedTab}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
            >
                <Component navigator={this.props.navigator} tc={() => {
                    this.setState({type: 5})
                }}/>
            </TabNavigator.Item>
        )
    }

    render() {
        if (this.state.type === 1) {
            return (
                <View style={styles.container}>
                    <TabNavigator>
                        {this._renderTabarItems('首页', require('./img/1.png'), require('./main/souye.png'), Shy)}
                        {this._renderTabarItems('任务审核', require('./shy/shyImage/jhshwxz.png'), require('./shy/shyImage/jhshxz.png'), JHSh)}
                        {this._renderTabarItems('行为评价', require('./shy/shyImage/xwpjwxz.png'), require('./shy/shyImage/xwpjxz.png'), Xwpj)}
                        {this._renderTabarItems('预算审核', require('./shy/shyImage/ysshwxz.png'), require('./shy/shyImage/ysshxz.png'), YSSH)}
                        {this._renderTabarItems('我的', require('./gcy/shyImage/menu_wode.png'), require('./main/wdcdxz.png'), Wd)}
                    </TabNavigator>
                </View>)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    tabText: {
        color: '#000000',
        fontSize: 10
    },
    selectedTabText: {
        color: '#D81E06'
    },
    icon: {
        width: 20,
        height: 20
    }
});
  
