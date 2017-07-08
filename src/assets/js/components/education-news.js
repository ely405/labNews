'use strict';

const educationNews = [];

const sectioneducationNews = (update)=>{
  let educationNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>EDUCACIÓN</h1>');
  let firstRow = $('<section class="row"></div>');
  let secondRow = $('<section class="row"></div>');


  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 3){
          console.log(categorie);
          const aNews = new Noticia(data.title, data.brief, data.img);
          educationNews.push(aNews);
        }
      });
    });

    let item1 = content(educationNews[2].title, educationNews[2].brief, 'assets/img/' + educationNews[2].url);
    item1.addClass('main-new col-xs-12 col-sm-3 has-feedback');
    let item2 = content(educationNews[3].title, educationNews[3].brief, 'assets/img/' + educationNews[3].url);
    item2.addClass('col-xs-12 col-sm-3 has-feedback');
    let item3 = content(educationNews[4].title, educationNews[4].brief, 'assets/img/' + educationNews[4].url);
    item3.addClass('col-xs-12 col-sm-3 has-feedback');
    let item4 = content(educationNews[5].title, educationNews[5].brief, 'assets/img/' + educationNews[5].url);
    item4.addClass('col-xs-12 col-sm-3 has-feedback');
    let item5 = content(educationNews[6].title, educationNews[6].brief, 'assets/img/' + educationNews[6].url);
    item5.addClass('col-xs-12 col-sm-6 has-feedback');
    let item6 = content(educationNews[7].title, educationNews[7].brief, 'assets/img/' + educationNews[7].url);
    item6.addClass('col-xs-12 col-sm-6 has-feedback');
    firstRow.append(item1, item2, item3, item4);
    secondRow.append(item5, item6)
    console.log(educationNews);
  });

  return educationNews.append(sectionTitle, firstRow, secondRow);
}
