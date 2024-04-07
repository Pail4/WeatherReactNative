import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {styles} from '../../../../styles/styles';

export function TabsNav(props) {
  const {changeTab, selectedTab} = props;

  return (
    <View style={styles.tab_nav} className="tab-nav">
      <Button
        style={StyleSheet.compose(
          styles.tab_nav_button,
          styles.tab_nav_button_hover,
        )}
        className={'now-btn ' + (selectedTab[0] && 'active')}
        data-tab="NOW"
        title="Now"
        onPress={() => {
          changeTab(0);
        }}
      />
      <Button
        className={'details-btn ' + (selectedTab[1] && 'active')}
        data-tab="DETAILS"
        title="Details"
        onPress={() => {
          changeTab(1);
        }}
      />
      <Button
        className={'forecast-btn ' + (selectedTab[2] && 'active')}
        data-tab="FORECAST"
        title="Forecast"
        onPress={() => {
          changeTab(2);
        }}
      />
    </View>
  );
}
