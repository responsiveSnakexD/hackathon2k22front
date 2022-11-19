import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';
import {Entypo} from '@expo/vector-icons';
import {Link} from 'expo-router';
import React from 'react';
import {View} from 'react-native';

export const MainTaskButton: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <View style={[globalStyles.button, {backgroundColor: colors.secondary}]}>
      <Link href="/mainTask">
        <Entypo name="address" size={24} color={colors.onSecondary} />
      </Link>
    </View>
  );
};
