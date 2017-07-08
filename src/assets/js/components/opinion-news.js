'use strict';

const opinionNews = [];

const sectionopinionNews = (update)=>{
  let opinionNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>OPINION</h1>');
  let row = $('<section class="row opinion-row"></div>');


  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 4){
          console.log(categorie);
          const aNews = new Noticia(data.title, data.brief, data.img);
          opinionNews.push(aNews);
        }
      });
    });

    let item1 = content(opinionNews[4].title, opinionNews[4].brief, 'assets/img/' + opinionNews[4].url);
    item1.addClass('main-new col-xs-12 col-sm-3 has-feedback opinion-row__content');
    let item2 = content(opinionNews[1].title, opinionNews[1].brief, 'assets/img/' + opinionNews[2].url);
    item2.addClass('col-xs-12 col-sm-3 has-feedback opinion-row__content');
    let item3 = content(opinionNews[2].title, opinionNews[2].brief, 'assets/img/' + opinionNews[3].url);
    item3.addClass('col-xs-12 col-sm-3 has-feedback opinion-row__content h-50-xs');
    let item4 = content(opinionNews[3].title, opinionNews[3].brief, 'assets/img/' + opinionNews[4].url);
    item4.addClass('col-xs-12 col-sm-3 has-feedback opinion-row__content h-50-xs');
    row.append(item1, item2, item3, item4);
    console.log(opinionNews);
  });

  return opinionNews.append(sectionTitle, row);
}
