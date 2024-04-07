import {Text} from 'react-native';
import {styles} from '../../styles/styles';

export const IText = ({children}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Text style={styles.text}>{children}</Text>;
};
