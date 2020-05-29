import { NativeModules } from 'react-native';

type ReactNativeBeautifulScreensType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeBeautifulScreens } = NativeModules;

export default ReactNativeBeautifulScreens as ReactNativeBeautifulScreensType;
