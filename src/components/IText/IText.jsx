import {StyleSheet, Text} from 'react-native';
import {styles} from '../../styles/styles';

export const IText = ({children, style}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Text style={StyleSheet.compose(styles.text, style)}>{children}</Text>;
};
