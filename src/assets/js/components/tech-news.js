'use strict';

const techNews = [];

const sectionTechNews = (update)=>{
  let techNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>TECNOLOGÍA</h1>');
  let row = $('<section class="row"></div>');
  let colLeft = $('<div class="col-sm-6 tech-col"></div>');
  let colRight = $('<div class="col-sm-6 tech-col"></div>');


  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 2){
          console.log(categorie);
          const aNews = new Noticia(data.title, data.brief, data.img);
          techNews.push(aNews);
        }
      });
    });

    let item1 = content(techNews[5].title, techNews[5].brief, 'assets/img/' + techNews[5].url);
    item1.addClass('main-new col-xs-12 has-feedback tech-col__left');
    colLeft.append(item1);
    let item2 = content(techNews[1].title, techNews[1].brief, 'assets/img/' + techNews[1].url);
    item2.addClass('col-xs-12 col-sm-6 has-feedback tech-col__right--50');
    let item3 = content(techNews[2].title, techNews[2].brief, 'assets/img/' + techNews[2].url);
    item3.addClass('col-xs-12 col-sm-6 has-feedback tech-col__right--50');
    let item4 = content(techNews[3].title, techNews[3].brief, 'assets/img/' + techNews[3].url);
    item4.addClass('col-xs-12 has-feedback tech-col__right--25 hidden-xs');
    let item5 = content(techNews[4].title, techNews[4].brief, 'assets/img/' + techNews[4].url);
    item5.addClass('col-xs-12 has-feedback tech-col__right--25 hidden-xs');
    colRight.append(item2, item3, item4, item5);
    row.append(colLeft, colRight);
  });

  return techNews.append(sectionTitle, row);
}
