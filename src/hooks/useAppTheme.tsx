import {useTheme} from 'react-native-paper';

import {Theme} from '../theme';

export const useAppTheme = useTheme as () => Theme;
