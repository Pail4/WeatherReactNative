import React from 'react';
import {Button, View} from 'react-native';
import {ButtonColor, styles} from '../../../../styles/styles';

export function TabsNav(props) {
  const {changeTab} = props;

  return (
    <View style={styles.tab_nav} className="tab-nav">
      <Button
        data-tab="NOW"
        title="Now"
        color={ButtonColor}
        onPress={() => {
          changeTab(0);
        }}
      />
      <Button
        data-tab="DETAILS"
        title="Details"
        color={ButtonColor}
        onPress={() => {
          changeTab(1);
        }}
      />
      <Button
        data-tab="FORECAST"
        title="Forecast"
        color={ButtonColor}
        onPress={() => {
          changeTab(2);
        }}
      />
    </View>
  );
}
