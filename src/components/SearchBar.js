/* @flow */

import React, { PropTypes, Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 56,
    elevation: 2,
  },

  icon: {
    color: '#676767',
    margin: 16,
    height: 24,
    width: 24,
  },

  input: {
    fontFamily: 'Lato',
    flex: 1,
    margin: 0,
    padding: 0,
  }
});

type Props = {
  value: string;
  onChangeSearch: Function;
  style?: any;
}

export default class SearchBar extends Component<void, Props, void> {

  static propTypes = {
    value: PropTypes.string.isRequired,
    onChangeSearch: PropTypes.func.isRequired,
    style: View.propTypes.style,
  };

  _handleClearPress = () => {
    this.props.onChangeSearch('');
  };

  render() {
    const { ...rest, style } = this.props;

    return (
      <View style={[ styles.bar, style ]}>
        <Icon
          style={styles.icon}
          name='search'
          size={24}
        />
        <TextInput
          {...rest}
          style={styles.input}
          placeholderTextColor='#949494'
          underlineColorAndroid='transparent'
          onChangeText={this.props.onChangeSearch}
        />
        {this.props.value ?
          <TouchableOpacity onPress={this._handleClearPress}>
            <Icon
              style={styles.icon}
              name='close'
              size={24}
            />
          </TouchableOpacity> :
          null
        }
      </View>
    );
  }
}