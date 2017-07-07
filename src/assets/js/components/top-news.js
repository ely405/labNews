'use strict';

function Noticia(title, brief, url, classNews){
  this.title = title;
  this.brief = brief;
  this.url = url;
  this.classNews = classNews;
}

const topNew = [];

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

const sectionTopNews = (update)=>{
  let topNews = $('<section class="container-fluid top"></section>');
  let row = $('<section class="row"></div>');

  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 0){
          const aNews = new Noticia(data.title, data.brief, data.img, 'col-xs-12 col-sm-12 has-feedback');
          topNew.push(aNews);
        }
      })
    })
    console.log(topNew.length);

    $.each(topNew, (i, noticia)=>{
      console.log('noticia get');
      console.log(noticia);
      let itemNews = content(noticia.title, noticia.brief, 'assets/img/news/' + noticia.url, noticia.classNews);
      row.append(itemNews);
    })
  });

  return topNews.append(row);
}
