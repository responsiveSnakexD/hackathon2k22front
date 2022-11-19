import React from 'react';

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {InfoComponent} from '../src/components/InfoComponent/InfoComponent';
import {useAppTheme} from '../src/hooks';

const App: React.FC = () => {
  const {colors} = useAppTheme();

  const newParagraph = '\n\n\t';

  const campaignDescription = `
    \tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${newParagraph}
    Sit amet dictum sit amet justo donec enim diam. Nisl pretium fusce id velit ut tortor pretium. Amet est placerat in egestas erat imperdiet sed euismod nisi. 
    Vitae nunc sed velit dignissim sodales ut eu sem. Adipiscing tristique risus nec feugiat. Pellentesque habitant morbi tristique senectus et netus et. Commodo ullamcorper a lacus vestibulum sed arcu non odio.\n\t Gravida neque convallis a cras semper auctor neque vitae. Cum sociis natoque penatibus et. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Nisl vel pretium lectus quam id. Felis bibendum ut tristique et egestas\n\n\t quis ipsum suspendisse. Egestas dui id ornare arcu odio ut sem nulla. Quam vulputate dignissim suspendisse in est ante. Sed arcu non odio euismod lacinia at quis risus. Scelerisque viverra mauris in aliquam sem.`;

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <InfoComponent
        campaignName="Campaign"
        campaignDescription={campaignDescription}
      />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
