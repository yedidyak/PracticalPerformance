import React, {Component} from 'react';
import BaseItem from './BaseItem';

export default class Item extends Component {

  shouldComponentUpdate(nextProps) {
    const {id, name, imageUrl, toggleSelected, isSelected} = this.props;
    return (nextProps.id !== id) ||
      (nextProps.name !== name) ||
      (nextProps.imageUrl !== imageUrl) ||
      (nextProps.toggleSelected !== toggleSelected) ||
      (nextProps.isSelected !== isSelected);
  }

  render() {
    return <BaseItem {...this.props}/>;
  }
}
