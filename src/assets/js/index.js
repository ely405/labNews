'use strict';

const render = (root) => {
  // root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(header(_=>{render(root)}));
  wrapper.append(BoardGrid(_=>{render(root)}));
  wrapper.append(PinDetails(_=>{render(root)}));
  wrapper.append(createSaveModal(_=>{render(root)}));
  root.append(wrapper);
}
const state = {
    screen: 'lander'
}

$(_ => {
  $.get("api/news/", function(data, status){
    console.log(data);
    console.log(status);
    });
  // render(root);
});
