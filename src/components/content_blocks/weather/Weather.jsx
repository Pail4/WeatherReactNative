import React, {useState} from 'react';

import {TabNow} from './tabs/TabNow';
import {TabDetails} from './tabs/TabDetails';
import {TabForecast} from './tabs/TabForecast';
import {TabsNav} from './tabs/TabsNav';
import {View} from 'react-native';
import {styles} from '../../../styles/styles';

export function Weather(props) {
  const {params} = props;
  const [selectedTab, setSelectedTab] = useState([true, false, false]);

  const changeTab = function (number) {
    let select = [false, false, false];
    select[number] = true;
    setSelectedTab(select);
  };

  return (
    <View style={styles.weather} className="weather">
      <TabNow
        isActive={selectedTab[0]}
        params={params}
        onLikeClick={props.onLikeClick}
      />
      <TabDetails isActive={selectedTab[1]} params={params} />
      <TabForecast
        isActive={selectedTab[2]}
        cityName={params.cityName}
        blockList={props.blockList}
      />
      <TabsNav changeTab={changeTab} selectedTab={selectedTab} />
    </View>
  );
}
