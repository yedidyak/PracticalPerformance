import React, {PureComponent} from 'react';
import BaseItem from './BaseItem';

export default class Item extends PureComponent {
  render() {
    return <BaseItem {...this.props}/>;
  }
}
