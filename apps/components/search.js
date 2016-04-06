'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  Image,
  StyleSheeet,
  ActivityIndicatorIOS,
  TouchableOpacity,
} from 'react-native';

import { runSearch } from '../actions';

import styles from './searchStyles';

class Search extends Component {
  handleKeywordChange(event) {
    this.props.setSearchKeyword(event.nativeEvent.text.trim());
  }

  handleSubmit(event) {
    this.props.runSearch(this.props.keyword);
  }

  handleEnjoy() {
    this.props.listPlaylist(null, true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../images/youtube-logo.png')}
        />

        {this.props.isSearching ?
          <ActivityIndicatorIOS
            style={styles.preloader}
            animating={this.props.isSearching}
            color='#111'
            size="large"
          />
        :
          <TextInput
            style={styles.searchInput}
            value={this.props.keyword}
            onChange={this.handleKeywordChange.bind(this)}
            onSubmitEditing={this.handleSubmit.bind(this)}
            placeholder="Search for videos"
          />
        }
        {this.props.error ? <Text style={styles.error}>{this.props.error}</Text> : null}
        <Text style={styles.info}><Text style={styles.heavyText}>extPlaylist</Text>
          lets you search for youtube videos outside of youtube in 3 steps:
        </Text>
        <Text style={styles.info}>1. Search for videos</Text>
        <Text style={styles.info}>2. Add to existing or new playlist</Text>
        <Text style={styles.info}>3. Enjoy your playlist!</Text>
      </View>
    );
  }
}

Search.propTypes = {
  error: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  isSearching: React.PropTypes.bool.isRequired,
  setSearchKeyword: React.PropTypes.func.isRequired,
  runSearch: React.PropTypes.func.isRequired,
};

export default Search;
