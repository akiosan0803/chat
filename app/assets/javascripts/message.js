$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var addImage = (message.image !== null) ? `<img class = "image_size", src="${message.image}">` :'';
    var html = `<div class="message"data-id="${message.id} >
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-meesage">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      <p class="lower-message__content">
                        ${addImage}
                      </p>
                  </div>
                </div>`
    return html;
  }

  function scroll() {
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
  }
  
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.form__submit').prop("disabled", false);
      scroll();
    })

    .fail(function(){
      alert('error')
      $('.form__submit').prop('disabled', false);
    })
  });

  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data('id');
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data:{id: last_message_id}
      })
      
      .done(function(messages){
        var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
          scroll();
        });
      }) 
      .fail(function(){
      alert('error');
      });
    }; 
  };
 setInterval(reloadMessages, 5000);
});