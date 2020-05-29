# @farfarawaylabs/react-native-beautiful-screens

Beautiful ready to be used screens for React Native apps

## Installation

```sh
npm install @farfarawaylabs/react-native-beautiful-screens
```

## CoverScreenOne

This component represent a fully designed cover screen. It is built as a composable component so it's easy to configure as needed. Each of the child compoenents can be styled separately or removed all together.

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/CoverScreenOne.png?raw=true">

```js
import React, { useState } from 'react';
import {
  CoverScreenOne,
  CoverScreenOneTitle,
  CoverScreenOneDescription,
  CoverScreenOneButton,
} from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
  const demoBgImage = require('../demoImages/demoBG.jpg');

  return (
    <CoverScreenOne image={demoBgImage}>
      <CoverScreenOneTitle title="Welcome to the amazing app" />
      <CoverScreenOneDescription description="Create amazing things using this app. You never seen this before" />
      <CoverScreenOneButton title="Take me in" />
    </CoverScreenOne>
  );
}
```

## CoverScreenTwo

This component represent a fully designed cover screen.
COnfigure it using the following props:

- image: The backgound image of the cover screen

- title: The title of the cover screen

- subtitle: The subtitle of the cover screen

- buttonTitle: The title of the action button of the screen

- onPress: The event handler of the action button of the screen

- allCaps: Should the title of the screen be shown in all caps. Default to true.

- titleStyle: Additional styels for the title of the screen

- subtitleStyle: Additional styles for the subtitle of the screen

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/CoverScreenTwo.png?raw=true">

```js
import React, { useState } from 'react';
import { CoverScreenTwo } from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
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
}
```

## LoginScreenOne

This component represent a fully designed login screen. It is built as a composable component so it's easy to configure as needed. Each of the child compoenents can be styled separately or removed all together.

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/LoginScreenOne.png?raw=true">

```js
import React, { useState } from 'react';
import { LoginScreenOne } from '@farfarawaylabs/react-native-beautiful-ui';
import { View } from 'react-native';

export default function App() {
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
}
```

## IntroScreen

The goal of this component is to provide a fully working and well designed walkthrough/intro screen which many apps out there are using. The component was written as a compound component so it's very easy to customize or replace certain elements if needed.
This component is built on top of our Carousel component so each screen is basically a carousel slide.
We also provide a few wrapper components each one is a fully designed slide in case you just want something quick and don't require a lot of customization. See code below for example of both usages.

### IntroScreen.Screen Props:

- showDots: Should the screen display navigational dots on the bottom. Defautls to true

- dotColor: The color of a dot represnting a slide. Defaults to '#FFF'

- activeDotColor: The color of the active dot. Defaults to '#232323'

- style: Additional styles or styles to override default style

### IntroScreen.Slide Props:

- shouldUseSafeAreaView: Determine if the slide should be displayed inside a SafeAreaView. If true, remember to set the slide background color as well. Defaults to false.

- backgroundColor: The background color of the slide

- style: Additional styles or styles to override default style

### IntroScreen.ImageSection, IntroScreen.TitleSection, IntroScreen.AdditionalContentSection Props:

- backgroundColor: The background color of the section

- style: Additional styles or styles to override default style

### IntroScreen.Title Props:

- title: The title

- style: Additional styles or styles to override default style

### IntroScreen.Subitle Props:

- title: The subtitle

- style: Additional styles or styles to override default style

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/IntroScreenTwo.png?raw=true">
<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/IntroScreenOne.png?raw=true">

```js
import React, { useState } from 'react';
import { IntroScreen } from '@farfarawaylabs/react-native-beautiful-ui';
import { View, Button, Image } from 'react-native';
import { Center } from '@farfarawaylabs/react-native-layout';

export default function App() {
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
}
```

## AskPermissionsScreen

Almost all apps require to get user permissions for things like notifications or location services access. Although you can always just popup the OS built in permissions dialog, a better way is to first show the user a dialog/screen with more information on why your app is asking for the permission.
This screen allows you to easily show a well designed such dialog. If the user press the approve button, then popup the OS dialog to actually get the permission.

Props:

- image: The image to display on top of the screen

- title: The title of the screen

- description: The longer description of the screen

- titleStyle: Additional styles or override default styles of the title of the screen

- descriptionStyle: Additional styles or override default styles of the description of the screen

- approveButtonTitle: The title of the approve permission button. Defaults to "Let's do it"

- rejectButtonTitle: The title of the reject permission button. Defaults to "Maybe next time"

- approveButton: A way to provide your own custom approve button

- rejectButton: A way to provide your own custom reject button

- backgroundColor: The background color of the screen

- onApprove: Event handler to call if the user presses the approve button

- onReject: Event handler to call if the user presses the reject button

<img width="300" height="600" src="https://github.com/nechmads/demo_images/blob/master/fflabs_react-native-beautiful-ui/AskPermissionScreen.png?raw=true">

```js
import React, { useState } from 'react';
import { AskPermissionScreen } from '@farfarawaylabs/react-native-beautiful-ui';

export default function App() {
  const demoImage = require('../demoImages/notificationsDemo.png');

  return (
    <AskPermissionScreen
      image={demoImage}
      title="Stay In The Know"
      description="Enable notifications and make sure you always stay up to date with important updates from your network"
    />
  );
}
```

## License

MIT
