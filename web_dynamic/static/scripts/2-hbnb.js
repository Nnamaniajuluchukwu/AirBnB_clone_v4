$(document).ready(() => {
  $('input[type=checkbox]').on('click', () => {
    const myListName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(() => {
      myListName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  success: json => {
    $('#api_status').addClass('available');
  },

  error: (xhr, status) => {
    console.log('error ' + status);
  }
});
