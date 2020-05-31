import React from 'react';
import { StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';

export interface CoverScreenOneButtonProps extends ButtonProps {
  /** The title of the button */
  title: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Title styling
   */
  titleStyle?: StyleProp<TextStyle>;
}

/**
 * The action button to be displayed inside a CoverScreenOne component
 */
const CoverScreenOneButton: React.FC<CoverScreenOneButtonProps> = ({
  style,
  title,
  titleStyle,
  ...rest
}) => {
  const buttonStyle = StyleSheet.flatten([styles.button, style]);
  const mergedTitleStyle = StyleSheet.flatten([styles.title, titleStyle]);
  return (
    <Button
      buttonStyle={buttonStyle}
      titleStyle={mergedTitleStyle}
      {...rest}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 41,
    paddingVertical: 17,
    backgroundColor: '#FFF',
    marginTop: 40,
  },
  title: {
    color: '#000',
  },
});

export default CoverScreenOneButton;
