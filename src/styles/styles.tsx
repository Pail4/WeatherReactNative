import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  html: {
    height: '100%',
  },
  text: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 28,
    color: 'black',
  },
  body: {
    backgroundColor: '#666',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 28,
  },
  content: {
    backgroundColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    padding: 12,
    width: 621,
    height: 457,
  },
  wrapper: {
    // display: 'flex',
    // flexDirection: 'column',
    // borderBottomColor: '#000',
    // borderBottomWidth: 1,
    width: '100%',
    height: '100%',
  },
  searchWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  searchButton: {
    flexGrow: 1,
    backgroundColor: '#333',
    color: 'black',
  },
  search__search_input: {
    flexGrow: 2,
    height: 45,
    paddingTop: 11,
    paddingRight: 0,
    paddingBottom: 13,
    paddingLeft: 16,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  search__search_input_error: {
    backgroundColor: 'rgba(219, 65, 65, 0.322)',
  },
  blocks: {
    display: 'flex',
  },
  weather: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: 370,
    maxHeight: 370,
  },
  tab: {
    height: '100%',
  },
  tab__grad__after: {
    // content: "°",
  },
  tab_now: {
    display: 'flex',
    flexDirection: 'column',
  },
  tab_now_likeBtn: {
    // marginRight: 20,
  },
  tab_now_likeBtnImg: {
    width: 30,
    height: 30,
  },
  tab_now_active: {
    display: 'flex',
  },
  tab_now__temperature: {
    marginTop: 20,
    marginLeft: 20,
    height: 95,
    fontSize: 70,
    lineHeight: 82,
  },
  tab_now__img_wrap: {
    alignSelf: 'center',
  },
  tab_now__weather_img: {
    width: 150,
    height: 150,
  },
  tab_now__bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  tab_now__bottom__location_name: {},
  tab_details: {
    marginTop: 10,
    marginLeft: 10,
  },
  tab_details_active: {
    display: 'flex',
    flexDirection: 'column',
  },
  tab_details__location_name: {
    marginTop: 10,
    marginRight: 0,
    marginBottom: 10,
    marginLeft: 10,
  },
  tab_details__details_list: {
    marginTop: 10,
  },
  tab_forecast: {
    // display: 'flex',
    // flexDirection: 'column',
    // overflow: 'scroll',
    maxHeight: 330,
  },
  tab_forecast_list: {
    overflow: 'scroll',
    width: '100%',
  },
  tab_forecast__time_block: {
    margin: 6,
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab_forecast__time_block_bot: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tab_forecast__time_block_top: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  tab_forecast__time_block_weather: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab_forecast__weather_img: {
    marginTop: -10,
    marginRight: -10,
    marginBottom: -10,
    marginLeft: -10,
    width: 40,
    height: 40,
    // filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7))',
  },
  tab_nav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-evenly',
  },
  tab_nav_button_last_child: {
    borderRightWidth: 0,
  },
  tab_nav_button_hover: {
    backgroundColor: '#8685853d',
  },
  tab_nav__active: {
    color: '#fff',
    backgroundColor: '#000',
  },
  tab_nav__active_hover: {
    backgroundColor: '#000',
  },
  locations: {
    width: '100%',
    textAlign: 'left',
  },
  locations__block_name: {
    paddingTop: 33,
    paddingRight: 0,
    paddingBottom: 7,
    paddingLeft: 18,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  locations__locations_list: {
    marginTop: 15,
    marginRight: 18,
    marginBottom: 0,
    marginLeft: 18,
    height: '100%',
    // maxHeight: 250,
    // overflow: 'auto',
  },
  locations__locations_list_li: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  locations__locations_list_li__liked_location: {
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    textAlign: 'left',
    width: '100%',
  },
  likedCityRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBlockColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
  },
  locations__locations_list_li__delete_location: {
    verticalAlign: 'middle',
    width: 27,
    height: 27,
    // background: 'url(../img/cross.svg) no-repeat center',
  },
  locations__locations_list_li__delete_location_hover: {
    backgroundColor: '#8685853d',
  },
  locations__locations_list_li_hover: {
    backgroundColor: '#8685853d',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#BD8CF3',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});

export const ButtonColor = '#333';
