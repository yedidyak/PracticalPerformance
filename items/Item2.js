import React, {PureComponent} from 'react';
import BaseItem from './BaseItem';

setInterval(() => console.log('RENDER_COUNT', renderCount), 1000);

export default class Item extends PureComponent {
  render() {
    return <BaseItem {...this.props}/>;
  }
}
