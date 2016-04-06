'use strict';

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 250,
    height: 150,
    alignSelf: 'center',
  },
  searchInput: {
    height: 60,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    marginBottom: 20,
  },
  info: {
    marginBottom: 10,
  },
  heavyText: {
    fontWeight: '500',
  },
  step: {
    marginBottom: 5,
  },
  preloader: {
    marginBottom: 20,
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default styles;
