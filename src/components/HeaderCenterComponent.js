import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import theme from '../theme';

const HeaderCenterComponent = ({name}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};
export default HeaderCenterComponent;
export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
});
