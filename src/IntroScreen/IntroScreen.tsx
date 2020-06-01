import React, { ReactElement } from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Carousel } from '@farfarawaylabs/react-native-beauitful-controls';
import IntroScreenSlide from './IntroScreenSlide';
import IntroScreenTitle from './IntroScreenTitle';
import IntroScreenSubtitle from './IntroScreenSubtitle';
import {
  IntroScreenImageSection,
  IntroScreenTitleSection,
  IntroScreenAdditionalContentSection,
} from './IntroScreenSections';

export interface IntroScreenProps {
  /** Should the screen display navigational dots on the bottom. Defautls to true */
  showDots?: boolean;

  /** The color of a dot represnting a slide. Defaults to '#FFF' */
  dotColor?: string;

  /** The color of the active dot. Defaults to '#232323' */
  activeDotColor?: string;

  /** Event handler to call when the done button is pressed */
  onDone?: (currentIndex: number) => void;

  /** The title of the done button. Defaults to 'Done' */
  doneButtonTitle?: string;

  /** Your own custom element to be used as the done button */
  doneButton?: ReactElement;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * description
 */
const Screen: React.FC<IntroScreenProps> = ({
  children,
  dotColor = '#FFF',
  activeDotColor = '#232323',
  showDots = true,
  onDone,
  doneButtonTitle,
  doneButton,
  style,
}) => {
  return (
    <Carousel.Container style={style}>
      <Carousel.Slides>{children}</Carousel.Slides>
      {showDots && (
        <Carousel.Navigation
          dotColor={dotColor}
          activeDotColor={activeDotColor}
          onDone={onDone}
          doneButtonTitle={doneButtonTitle}
          doneButton={doneButton}
        />
      )}
    </Carousel.Container>
  );
};

const IntroScreen = {
  Screen: Screen,
  Slide: IntroScreenSlide,
  Title: IntroScreenTitle,
  Subtitle: IntroScreenSubtitle,
  ImageSection: IntroScreenImageSection,
  TitleSection: IntroScreenTitleSection,
  AdditionalContentSection: IntroScreenAdditionalContentSection,
};
export default IntroScreen;
