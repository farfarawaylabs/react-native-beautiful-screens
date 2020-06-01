import * as React from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native-elements';
import {
  CoverScreenOne,
  CoverScreenOneButton,
  CoverScreenOneDescription,
  CoverScreenOneTitle,
  CoverScreenTwo,
  LoginScreenOne,
  AskPermissionScreen,
  IntroScreen,
  IntroScreenRegularSlide,
} from '@farfarawaylabs/react-native-beautiful-screens';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from '@farfarawaylabs/react-native-beauitful-controls';
import { Center } from '@farfarawaylabs/react-native-layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ShowIntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ShowCoverScreenOne = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <CoverScreenOne image={demoBgImage}>
      <CoverScreenOneTitle title="Welcome to the amazing app" />
      <CoverScreenOneDescription description="Create amazing things using this app. You never seen this before" />
      <CoverScreenOneButton title="Take me in" />
    </CoverScreenOne>
  );
};

const ShowCoverScreenTwo = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  return (
    <CoverScreenTwo
      image={demoBgImage}
      title="Welcome to the App"
      subtitle="The best app"
      buttonTitle="Show me in"
      onPress={() => {}}
    />
  );
};

const ShowLoginScreenOne = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  const demoLogoImage = require('../demoImages/demoLogo.png');
  return (
    <LoginScreenOne.Screen backgroundImage={demoBgImage}>
      <LoginScreenOne.LogoContainer>
        <Image source={demoLogoImage} />
      </LoginScreenOne.LogoContainer>
      <LoginScreenOne.TitleContainer>
        <LoginScreenOne.Title title="Welcome to the most amazing app" />
        <LoginScreenOne.Description description="The number one social app that is doing amazing things" />
      </LoginScreenOne.TitleContainer>
      <LoginScreenOne.ButtonsContainer>
        <FacebookLoginButton onPress={() => {}} />
        <GoogleLoginButton onPress={() => {}} />
      </LoginScreenOne.ButtonsContainer>
    </LoginScreenOne.Screen>
  );
};

const ShowAskPermissionScreen = () => {
  const demoImage = require('../demoImages/notificationsDemo.png');
  return (
    <AskPermissionScreen
      image={demoImage}
      title="Stay In The Know"
      description="Enable notifications and make sure you always stay up to date with important updates from your network"
      onApprove={() => {}}
      onReject={() => {}}
    />
  );
};

const ShowIntroScreen = () => {
  const demoBgImage = require('../demoImages/introDemoOne.png');

  return (
    <IntroScreen.Screen dotColor="#ffb367" activeDotColor="#58b4ae">
      <IntroScreen.Slide>
        <IntroScreen.ImageSection>
          <Image
            source={demoBgImage}
            style={{ width: '80%', height: '100%' }}
          />
        </IntroScreen.ImageSection>
        <IntroScreen.TitleSection>
          <IntroScreen.Title title="Welcome to the amazing app" />
          <IntroScreen.Subtitle subtitle="You won't believe how cool this app and how much you will love it" />
        </IntroScreen.TitleSection>
        <IntroScreen.AdditionalContentSection>
          <Center horizontal vertical style={{ width: '100%' }}>
            <Button title="Enable Notifications" onPress={() => {}} />
          </Center>
        </IntroScreen.AdditionalContentSection>
      </IntroScreen.Slide>

      <IntroScreenRegularSlide
        image={demoBgImage}
        backgroundColor="#ffe2bc"
        title="Welcome to the amazing app"
        subtitle="You won't believe how cool this app and how much you will love it"
      >
        <Center horizontal vertical style={{ width: '100%' }}>
          <Button title="Enable Location" onPress={() => {}} />
        </Center>
      </IntroScreenRegularSlide>
    </IntroScreen.Screen>
  );
};
