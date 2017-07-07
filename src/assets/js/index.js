'use strict';

const render = (root) => {
  // root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//
  wrapper.append(sectionTopNews(_=>{render(root)}));
  wrapper.append(sectionWorldNews(_=>{render(root)}));
  wrapper.append(sectionTechNews(_=>{render(root)}));
  root.append(wrapper);
}

$(_ => {
  const root = $('#root');
  console.log(root);
  render(root);

  $.get('/api/categories/2', (response)=>{
    console.log(response);
  })
});
