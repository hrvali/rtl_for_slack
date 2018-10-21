/***** my code to correct slack fot rtl ****/
function isRTL(text) {
  if (text !== "") {
    if ("اآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیؤئيإأةك۰۱۲۳۴۵۶۷۸۹".indexOf(text[0]) > -1) {
      return true;
    }
  }
  return false;
}

document.addEventListener('DOMNodeInserted', function(e) {
      $('.c-message__body').not('rtl').not('ltr').each(function() {
        if (isRTL($(this).text().trim())) {
          $(this).addClass('rtl');
        }
        else {
          $(this).addClass('ltr');
        }
      });
    });

document.addEventListener('DOMContentLoaded', function() {
    $('head').append('\
      <style type="text/css">\
        .rtl {\
          font-family: Tahoma, Arial !important;\
          direction: rtl;\
          text-align: left;\
        }\
        .rtl:before {\
          content: "\u202B";\
        }\
        .rtl:after {\
          content: "\u200F";\
        }\
      </style>\
    ');

    $('#msg_input').keyup(function() {
      var el = $(this).find('p');
      if (isRTL(el.text())) {
        el.addClass('rtl');
      }
    });
});
