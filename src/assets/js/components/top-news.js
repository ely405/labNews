'use strict';

function Noticia(title, brief, url){
  this.title = title;
  this.brief = brief;
  this.url = url;
}

const topNew = [];

const content = (titleNews, briefNews, urlImg)=>{
  let container = $('<section"></section>');
  let img = $('<img src="'+urlImg+'" alt="" class="img-responsive">');
  let containDescription = $('<div class="p-abs content"></div>');
  let title = $('<h6>'+titleNews+'</h6>');
  let brief = $('<p>'+briefNews+'</p>');

  containDescription.append(title, brief);
  container.append(img, containDescription);

  return container;
}

const sectionTopNews = (update)=>{
  let topNews = $('<section class="container-fluid top"></section>');
  let row = $('<section class="row"></div>');

  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 0){
          const aNews = new Noticia(data.title, data.brief, data.img);
          topNew.push(aNews);
        }
      });
    });

    let item1 = content(topNew[0].title, topNew[0].brief, 'assets/img/' + topNew[0].url);
    item1.addClass('main-new col-xs-12 col-sm-12 has-feedback top__content');
    let item2 = content(topNew[1].title, topNew[1].brief, 'assets/img/' + topNew[1].url);
    item2.addClass('main-new col-xs-12 col-sm-6 has-feedback top__content');
    let item3 = content(topNew[2].title, topNew[2].brief, 'assets/img/' + topNew[2].url);
    item3.addClass('main-new col-xs-12 col-sm-3 has-feedback top__content top__content--short');
    let item4 = content(topNew[3].title, topNew[3].brief, 'assets/img/' + topNew[3].url);
    item4.addClass('main-new col-xs-12 col-sm-3 has-feedback top__content top__content--short');
    row.append(item1, item2, item3, item4);
  });

  return topNews.append(row);
}
