let renderCount = 0;

export function countRender() {
  renderCount++;
}

setInterval(() => console.log('RENDER_COUNT', renderCount), 500);
