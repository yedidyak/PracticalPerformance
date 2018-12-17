import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {getData} from './data/data';
import Item from './items/Item1';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: {}, data: getData()};


    // setInterval(() => {
    //   this.setState({data: getData()})
    // }, 1000);
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state.selected}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <Item
              {...item}
              isSelected={this.state.selected[item.id]}
              toggleSelected={(id) => {
                if (this.state.selected[id]) {
                  this.setState({selected: {...this.state.selected, [id]: false}});
                } else {
                  this.setState({selected: {...this.state.selected, [id]: true}});
                }
              }}
            />
          );
        }}
      />
    );
  }
}

