import Splash from './views/Splash';

export default class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: '欢迎界面', component: Splash }}
        configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={(route, navigator) => {
          //返回按钮
          navigator.goBack = function () {
            navigator.pop();
          }
          //退出整个app
          navigator.exitApp = function () {
            let routes = navigator.getCurrentRoutes();
            for (var i = 0; i < routes.length; i++) {
              navigator.pop();
            }
          }
          return (
            <route.component {...route} navigator={navigator}></route.component>
          );
        }}
      ></Navigator>
    );
  }
}

AppRegistry.registerComponent('react_test', () => Index);