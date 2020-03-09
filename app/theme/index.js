/* eslint-disable no-unused-vars */
/**
 * Election Support
 * https://github.com/prydansoftware/ElectionsSupport.git
 *
 * @Developer : Jadav Chirag
 * @Author : Prydan Software
 * @Date : 31 Jan 2020
 *
 * @Screen : Styles
 * @Description : App Global Styles Sheet.
 *
 * @providesModule Styles
 */
import {Platform, StyleSheet} from 'react-native';
import {WINDOW, smartScale} from '../utils/AppUtils';
import Color from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listView: {
    width: WINDOW.width,
    marginTop: smartScale(20),
    height: WINDOW.height,
  },
  tabView: {
    flexDirection: 'row',
    height: smartScale(40),
    padding: smartScale(10),
    justifyContent: 'center',
    alignContent: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: smartScale(100),
    flexDirection: 'row',
    paddingHorizontal: smartScale(10),
    borderColor: 'black',
    borderWidth: 1,
    height: smartScale(35),
  },
  listViewItem: {
    width: WINDOW.width - smartScale(26),
    height: smartScale(250),
    borderRadius: 20,
    marginTop: smartScale(20),
    backgroundColor: '#F6F6F6',
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowColor: '#3A676F',
    shadowOpacity: 1.0,
    borderWidth: 0.5,
    borderColor: 'rgba(58,103,111,0.5)',
  },
  image: {
    height: smartScale(190),
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: smartScale(10),
  },
  textView: {
    fontSize: smartScale(16),
    fontWeight: '400',
    textAlign: 'left',
    fontFamily: 'Cochin',
    marginTop: smartScale(10),
  },
  fabAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    width: smartScale(35),
    height: smartScale(35),
    backgroundColor: Color.primaryColor,
    borderRadius: 70,
  },
  itemFooter: {
    flexDirection: 'row',
    paddingHorizontal: smartScale(16),
    justifyContent: 'space-between',
    width: '100%',
  },
  activeTabText: {
    color: 'white',
    fontSize: smartScale(14),
    fontWeight: 'bold',
  },
  inActiveTabText: {
    color: 'black',
    fontSize: smartScale(14),
    fontWeight: 'bold',
  },
});
export default styles;
