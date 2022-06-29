// Script Here

// Hamburger Functions


$('.reset').on('click', function(){

  let text = "You're About To Wipe All Data\nProceed?";

  if (confirm(text)) {
    localStorage.clear();
  } else {
    
  }

    

});

$('.hamburger_hit').on('click', function(){

if ($(".fa-bars")[0]){
  
  
  $('.side').css("height","100%");
  $('.map_switch').slideUp();
  
  $('.hamburger_hit').removeClass('fa-bars').addClass('fa-times');
  //$('.fa-times').css("color","#fff");

setTimeout(function(){ 

  $('.hamburger_menu ul').fadeIn(300);

}, 500);  


} else {
    
$('.hamburger_menu ul').fadeOut();
$('.map_switch').slideDown();


setTimeout(function(){ 

  
    $('.side').css("height","0");
    
    $('.hamburger_hit').removeClass('fa-times').addClass('fa-bars');
    //$('.fa-bars').css("color","#000");

}, 250);

}

});

$('.accordion_item h1').on('click', openAccordionItem);


function openAccordionItem(){

var content = $(this).parent().find('.accordion_content');

if (content.hasClass('open_accordion_item')){

  content.removeClass('open_accordion_item');

}

else{

$('.accordion_content').removeClass('open_accordion_item');

content.addClass('open_accordion_item');

}


};

$('.expense_show').click(function(){


$('.side').css("height","0");

setTimeout(function(){ 

  
    $('#expense').css("left","0");
    $('.button_2').show();

}, 250);

});

$('.button_2').click(function(){

$('.button_2').hide();
$('#expense').css("left","100%");

setTimeout(function(){ 

    

}, 250);





});



$('.map_switch').click(function(){

if 
( $('.map iframe').height() > 0) {

$('.map iframe').css("height","0");
$('.map_switch .fas').removeClass('fa-angle-down').addClass('fa-angle-up');


}

else
{
$('.map iframe').css("height","630px");
$('.map_switch .fas').removeClass('fa-angle-up').addClass('fa-angle-down');

}

});


$(".calendar_item").click(function(){

  var dateCalendar = $(this).attr("class").split(" ").pop();

  $('.calendar_item p').hide();
  $('td').css({"width": "0", "height": "0"});
  
  $(this).delay("fast").css("width","90%");

  

  
  $(this).delay("slow").css("height","350px");
  $(this).delay("slow").find('p').show();





});



$('.Simon, .Daniel').on('click', inittransferScript);

// Split The Cost Functionality With LocalStorage


var receipts = document.querySelector('#receipts');

var savedList = localStorage.getItem('receiptListItems');
// If there are any saved items, update our list

function updateCount(){

  if (localStorage.current_amount ) {

    if (localStorage.current_amount < 0 ){
    document.querySelector(".result").innerHTML = "Simon Owes Dan " + Math.abs(localStorage.current_amount) + " $";
    } 
    else
    { 
    document.querySelector(".result").innerHTML = "Dan Owes Simon " + Math.abs(localStorage.current_amount) + " $"; 
    } 

    }

    else{
    document.querySelector(".result").innerHTML = "No Payments Made Yet";  
    }

}

updateCount();

  


if (savedList) {
receipts.innerHTML = savedList;
}
    
function inittransferScript(){

var amountinput = document.querySelector('.amt').value;
var descriptioninput = document.querySelector('.desc').value;
var whereinput = document.querySelector('.where').value;
var who = this.className.split(" ").pop();
var today = new Date();
var when = ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

var receiptListItem = (who + " paid $" + amountinput + " on " + descriptioninput + " at " + whereinput);
receipts.innerHTML += '<li class="receipts_date">'  + when + '</li>';
receipts.innerHTML += '<li>'  + receiptListItem + '</li>';
receipts.innerHTML += '<li>'  + receiptListItem + '</li>';

// Save the list to localStorage
localStorage.setItem('receiptListItems', receipts.innerHTML);
// Check for saved wishlist items

function ClearFields() {

     document.querySelector(".desc").value = '';
     document.querySelector(".where").value = '';
     document.querySelector(".amt").value = '';
}

ClearFields();


var amt = Number(amountinput);

  if (typeof(Storage) !== "undefined") {

    if (localStorage.current_amount ) {

      if (who === "Daniel"){
        localStorage.current_amount = Number(localStorage.current_amount) - amt;
}

else{
    localStorage.current_amount = Number(localStorage.current_amount) + amt;
    
}
      
    } 

    else {
      localStorage.current_amount = amountinput;
    }

    updateCount();  

  }

  else {
    document.querySelector(".result").innerHTML = "Change Browser, Bowser...";
  }    

};


