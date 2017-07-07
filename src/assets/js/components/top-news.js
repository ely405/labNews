'use strict';

function Noticia(title, brief, url, classNews){
  this.title = title;
  this.brief = brief;
  this.url = url;
  this.classNews = classNews;
}

const newsState = {
    top: []
}

const content = (titleNews, briefNews, urlImg, classContainer)=>{
  let container = $('<section class="'+classContainer+' top__content"></section>');
  let img = $('<img src="'+urlImg+'" alt="" class="img-responsive">');
  let containDescription = $('<div class="p-abs"></div>');
  let title = $('<h2>'+titleNews+'</h2>');
  let brief = $('<p>'+briefNews+'</p>');

  containDescription.append(title, brief);
  container.append(img, containDescription);

  return container;
}



$.get("/api/news/", (response, status)=>{
  $.each(response, (i, data)=>{
    $.each(data.categories, (i, categorie)=>{
      if(categorie == 0){
        const aNews = new Noticia(data.title, data.brief, data.img, 'col-xs-12 col-sm-12 has-feedback');
        newsState.top.push(aNews);
      }
    })
  })
});

const sectionTopNews = (update)=>{
  let topNews = $('<section class="container-fluid top"></section>');
  let row = $('<section class="row"></div>');

  console.log(newsState);

  $.each(newsState, (i, noticia)=>{
    console.log('newsState-tip');
    console.log(noticia);
    $.each(noticia, (i, info)=>{
      console.log('info');
      let itemNews = content(info.title, noticia.brief, 'assets/img/news/' + noticia.url, noticia.classNews);
      console.log(itemNews);
      row.append(itemNews);
    })
  });

  return topNews.append(row);
}
