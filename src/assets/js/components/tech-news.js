console.log('hola');

'use strict';

const techNews = [];

const sectionTechNews = (update)=>{
  let techNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>TECNOLOGÍA</h1>');
  let row = $('<section class="row"></div>');
  let colLeft = $('<div class="col-sm-6"></div>');
  let colRight = $('<div class="col-sm-6"></div>');


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

    let item1 = content(techNews[0].title, techNews[0].brief, 'assets/img/' + techNews[0].url);
    item1.addClass('main-new col-xs-12 has-feedback');
    colLeft.append(item1);
    let item2 = content(techNews[1].title, techNews[1].brief, 'assets/img/' + techNews[1].url);
    item2.addClass('col-xs-12 col-sm-6 has-feedback');
    let item3 = content(techNews[2].title, techNews[2].brief, 'assets/img/' + techNews[2].url);
    item3.addClass('col-xs-12 col-sm-6 has-feedback');
    let item4 = content(techNews[3].title, techNews[3].brief, 'assets/img/' + techNews[3].url);
    item4.addClass('col-xs-12 has-feedback');
    let item5 = content(techNews[4].title, techNews[4].brief, 'assets/img/' + techNews[4].url);
    item5.addClass('col-xs-12 has-feedback');
    colRight.append(item2, item3, item4, item5);

    console.log(techNews);
  });

  return techNews.append(sectionTitle, colLeft, colRight);
}
