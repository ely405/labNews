'use strict';

const render = (root) => {
  // root.empty();
  const wrapper = $('<div class="wrapper"></div>');
// 
  wrapper.append(sectionTopNews(_=>{render(root)}));
  root.append(wrapper);
}

$(_ => {
  const root = $('#root');
  console.log(root);
  render(root);
});
