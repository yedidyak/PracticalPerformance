const DATA_SIZE = 1000;

export function getData() {
  const data = [];
  for (let i=0; i < DATA_SIZE; i++) {
    data.push({
      id: 'item_' + i,
      imageUrl: 'https://picsum.photos/500/500?image=' + i,
      name: 'I am item ' + i,
      otherParameter: random()
    })
  }
  return data;
}

const random = () => Math.floor((Math.random() * 10) + 1);
