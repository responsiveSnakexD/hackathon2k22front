import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboardState = (): boolean => {
  useEffect(() => {
    const eventShow = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const eventHide = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      eventShow.remove();
      eventHide.remove();
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
  const _keyboardDidShow = (): void => setKeyboardStatus(true);
  const _keyboardDidHide = (): void => setKeyboardStatus(false);
  return keyboardStatus;
};
