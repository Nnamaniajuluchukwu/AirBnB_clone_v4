$(document).ready(() => {
  $('input[type=checkbox]').on('click', () => {
    const $myListName = [];
    const $myId = [];
  
    // add the checked box to a list
    $('input[type=checkbox]:checked').each(() => {
      $myListName.push($(this).attr('data-name'));
      $myId.push($(this).attr('data-id'));
    });

    /* if nothing was checked, then set h4 to $nbsp
    else displayed the checked items */
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
});
