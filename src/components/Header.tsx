import React from 'react';
import {View, StyleSheet} from 'react-native';

import {useAppTheme} from '@app/hooks';

import {InfoComponent} from './InfoComponent/InfoComponent';
import {MainTaskButton} from './buttons/MainTaskButton';
import {RankingButton} from './buttons/RankingButton';

type HeaderTypes = {
  exp: number;
};

const newParagraph = '\n\n\t';

const campaignDescription = `
    \tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${newParagraph}
    Sit amet dictum sit amet justo donec enim diam. Nisl pretium fusce id velit ut tortor pretium. Amet est placerat in egestas erat imperdiet sed euismod nisi. 
    Vitae nunc sed velit dignissim sodales ut eu sem. Adipiscing tristique risus nec feugiat. Pellentesque habitant morbi tristique senectus et netus et. Commodo ullamcorper a lacus vestibulum sed arcu non odio.\n\t Gravida neque convallis a cras semper auctor neque vitae. Cum sociis natoque penatibus et. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Nisl vel pretium lectus quam id. Felis bibendum ut tristique et egestas\n\n\t quis ipsum suspendisse. Egestas dui id ornare arcu odio ut sem nulla. Quam vulputate dignissim suspendisse in est ante. Sed arcu non odio euismod lacinia at quis risus. Scelerisque viverra mauris in aliquam sem.`;

export const Header = ({exp}: HeaderTypes) => {
  const {colors} = useAppTheme();
  return (
    <>
      <View style={styles.container}>
        <RankingButton exp={exp} onPress={() => console.log('exp')} />
        <View style={styles.innerShelf}>
          <InfoComponent
            campaignName="Campaign"
            campaignDescription={campaignDescription}
          />
          <MainTaskButton />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  innerShelf: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
});
