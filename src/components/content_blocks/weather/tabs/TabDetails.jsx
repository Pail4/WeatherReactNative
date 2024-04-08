import React from 'react';

import {ParamsList, LocationName} from './elements/elements';
import {StyleSheet, View} from 'react-native';
import {styles} from '../../../../styles/styles';

export function TabDetails(props) {
  const {isActive, params} = props;

  return (
    isActive && (
      <View style={styles.tab_details}>
        <LocationName value={params.cityName} />
        <ParamsList
          show={params}
          ViewClass={styles.tab_details__details_list}
        />
      </View>
    )
  );
}
