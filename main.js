// Jquery_Ajax

$('li > a').on('click', function(e) {
  e.preventDefault();
  $('.nav .nav-link').removeClass('active');
  $(this).addClass('active');
  let link = $(this).attr('href');
  $('.content').load(`users.html .${link}`);
});



// $('.bottom').load('data.html #second', () => console.log('Title loaded'));

//  *************** first way ***************
//   $.ajax(
//     'https://mysafeinfo.com/api/data?list=bestnovels1&format=json&case=default&token=TvaUJpdfUMILnZPlY4DTDS8R4v5zpvil'
//   )
//     .done((res) => console.log(res))
//     .fail(() => console.log('error'))
//     .always(() => console.log('Always start'));





//  *************** second way ***************
// $.ajax({
//   url: 'https://mysafeinfo.com/api/data?list=bestnovels1&format=json&case=default&token=TvaUJpdfUMILnZPlY4DTDS8R4v5zpvil',
//   type: 'GET',
//   dataType: 'json',
// })
//   .done((res) => res.forEach((e) => $('body').append(`${e.Title} <br>`)))
//   .fail(() => console.log('error'))
//   .always(() => console.log('Always start'));