/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import WebViews from './webView'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
