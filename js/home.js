$(document).ready(function(){

  function storeData(event) {
    localStorage.numPlayerDivs = parseInt($(event.target).text().substring(0,1));
  }
  
  $('.players').on('click', storeData);
});
