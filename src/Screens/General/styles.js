import {StyleSheet} from 'react-native';

const numpadItem = {
  width: 70,
  height: 70,
  margin: 3,
  alignItems: 'center',
  justifyContent: 'center',
};

export default StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  wrapper: {
    width: '100%',
    height: '92%',
    paddingEnd: '5%',
    paddingStart: '5%',
  },
  adContainer: {
    height: '8%',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  screenContainer: {
    height: '30%',
    paddingEnd: '4%',
    paddingStart: '4%',
    paddingBottom: '5%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  operationScreen: {
    fontSize: 24,
    width: '100%',
    color: '#373B44',
    textAlign: 'right',
  },
  tempResultScreen: {
    fontSize: 50,
    width: '100%',
    color: '#373B44',
    textAlign: 'right',
  },
  numpadContainer: {
    height: '70%',
  },
  numpadInner: {
    height: '100%',
  },
  backspace: {
    height: '12%',
    width: 70,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  numpadWrapper: {
    height: '85%',
    justifyContent: 'space-between',
  },
  numpadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numpadItem,
  numpadItemEqual: {
    ...numpadItem,
    borderRadius: 20,
    backgroundColor: '#E16263',
  },
  numpadText: {
    fontSize: 24,
    color: '#373B44',
  },
  numpadTopText: {
    fontSize: 24,
    color: '#32C2A8',
  },
  numpadRightText: {
    fontSize: 24,
    color: '#E16263',
  },
  numpadEqualText: {
    fontSize: 24,
    color: '#FFF',
  },
});
