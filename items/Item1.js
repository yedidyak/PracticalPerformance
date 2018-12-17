import React, {Component} from 'react';
import BaseItem from './BaseItem';

export default class Item extends Component {
  render() {
    return <BaseItem {...this.props}/>;
  }
}
