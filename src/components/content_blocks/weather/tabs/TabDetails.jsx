import React from 'react';

import {ParamsList, LocationName} from './elements/elements';
import {StyleSheet, View} from 'react-native';
import {styles} from '../../../../styles/styles';

export function TabDetails(props) {
  const {isActive, params} = props;

  return (
    isActive && (
      <View
        style={StyleSheet.compose(
          styles.tab,
          styles.tab_details,
          styles.tab_details_active,
        )}
        // className="tab tab-details active"
        id="tab02">
        <LocationName value={params.cityName} />
        <ParamsList
          show={params}
          ViewCLass={styles.tab_details__details_list}
          // ulClass="details-list"
        />
      </View>
    )
  );
}
