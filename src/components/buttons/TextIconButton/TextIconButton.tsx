import globalStyles from '@app/globalStyles';
import {useAppTheme} from '@app/hooks';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextIconButtonProps} from './type';

export const TextIconButton: React.FC<TextIconButtonProps> = ({
  text,
  icon,
  onPress,
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          globalStyles.button,
          styles.container,
          {backgroundColor: colors.secondary},
        ]}>
        <Text style={{color: colors.onSecondary}}>{text}</Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // center the text and icon
    justifyContent: 'center',
    alignItems: 'center',
  },
});
