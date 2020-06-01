import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './src/App';
import NavigationApp from './src/NavigationApp';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => NavigationApp);
