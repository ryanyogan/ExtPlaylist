'use strict';

import React, {
  Component,
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setSearchKeyword,
  runSearch,
  moreVideos,
  newSearch,
} from './actions';

import Search from './components/search';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  scene: {
    flex: 1,
    paddingTop: 63,
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search
          error={this.props.search.error}
          keyword={this.props.search.keyword}
          isSearching={this.props.isSearching}
          runSearch={this.props.runSearch}
        />
      </View>
    );
  }
}

const stateToProps = (state) => {
  return {
    search: state.search,
  };
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSearchKeyword,
    runSearch,
    moreVideos,
    newSearch,
  }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(App);

