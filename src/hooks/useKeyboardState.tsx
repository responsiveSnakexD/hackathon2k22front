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
  const _keyboardDidShow = (): void => {
    console.log('dupa');
    setKeyboardStatus(true);
  };
  const _keyboardDidHide = (): void => {
    console.log('dupadupa');
    setKeyboardStatus(false);
  };
  return keyboardStatus;
};
