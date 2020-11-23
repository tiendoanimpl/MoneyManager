import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../styles';
export default StyleSheet.create({
  header: {
    height: 148,
    backgroundColor: colors.navigationDrawer.background,
    marginTop: Platform.select({android: 0, ios: 32}),
  },
  headerLogo: {
    height: 64,
    width: 64,
    backgroundColor: colors.navigationDrawer.headerLogo,
    borderRadius: 32,
    marginStart: 16,
    marginTop: 16,
  },
  headerEmailLayout: {
    height: 20,
    flexDirection: 'row',
    marginTop: 30,
    marginStart: 16,
    alignItems: 'center',
  },
  headerEmail: {
    height: 20,
    width: 200,
    fontSize: 14,
    color: 'white',
  },
  headerEmailDropDown: {
    height: 5,
    width: 10,
    marginStart: 20,
  },
  menu: {
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 16,
  },
  menuItemTextActive: {
    color: colors.navigationDrawer.activeItem,
    marginStart: 32,
  },
  menuItemTextInActive: {
    color: colors.navigationDrawer.inactiveItem,
    marginStart: 32,
  },
});
