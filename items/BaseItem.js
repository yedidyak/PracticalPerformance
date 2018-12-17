import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {countRender} from './countRender';

export default class BaseItem extends Component {
  render() {
    countRender();
    return (
      <TouchableOpacity onPress={() => this.props.toggleSelected(this.props.id)}>
        <View style={{flexDirection: 'row', flex: 1, padding: 20, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: this.props.isSelected ? 'paleturquoise' : undefined}}>
          <Image style={{width: 100, height: 100}} source={{uri: this.props.imageUrl}}/>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 24}}>{this.props.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
