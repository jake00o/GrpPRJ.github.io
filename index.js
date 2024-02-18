$(() => {
    AOS.init();

    
    // change navbar bg on scroll
    const navbar = document.querySelector('.navbar');
    const navBrand = document.querySelector('.navbar-brand');
    const navLink = document.querySelector('.nav-link');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navbar.classList.add('navbar-scrolled');
            navBrand.classList.add(`navbar-brand-scrolled`);
            navLink.classList.add(`nav-link-scrolled`);
        } else {
            navbar.classList.remove(`navbar-scrolled`);
            navBrand.classList.remove(`navbar-brand-scrolled`);
            navLink.classList.remove(`nav-link-scrolled`);
        }
    });

    // scroll to Top button - rocket icon
    $('#topControl').click(() => {
        $("html, body").scrollTop(0);
        return false;
    });

    // scrollSpy
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        rootMargin: '0px 0px -10%',
        smoothScroll: true
    });
    scrollSpy.refresh();

    // show more button in gallery
    $(document).ready(function () {
        // Initially hide the gallery items
        $(".double-gallery").hide();

        // Show/hide gallery items and change button text on click
        $("#showGallery").click(function () {
            $(".double-gallery").toggle();
            $(this).text(function(_, text){
                return text === "Show Less" ? "Show More" : "Show Less";
            });
        });
    });
   
}) 
// subscribe button changes to subcribed after clicking
function changeText() {
    var paraElement = document.getElementById("para");
    paraElement.innerHTML = "SUBSCRIBED!";
    
}

var themonth = 1;
renderCal(themonth);

$('.minusmonth').click(function(){
  themonth += -1;
  renderCal(themonth);
});

$('.addmonth').click(function(){
  themonth += 1;
  renderCal(themonth);
});

function renderCal(themonth){
$('.calendar li').remove();
$('.calendar ul').append('<li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li> <li>Su</li>');
var d = new Date(),
  currentMonth = d.getMonth()+themonth, // get this month
  days = numDays(currentMonth,d.getYear()), // get number of days in the month
  fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the week the 1st lands on
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']; // month names

$('.calendar p.monthname').text(months[currentMonth-1]); // add month name to calendar

for (var i=0;i<fDay-1;i++) { // place the first day of the month in the correct position
  $('<li>&nbsp;</li>').appendTo('.calendar ul');
}

for (var i = 1;i<=days;i++) { // write out the days
  $('<li>'+i+'</li>').appendTo('.calendar ul');
}

function firstDay(month,year) {
  return new Date(year,month,1).getDay();
}

function numDays(month,year) {
  return new Date(year,month,0).getDate();
}
//calender drop down
var clicker = 0;
var min = 0;
var max = 0;

$('.calendar li').click(function(){ // toggle selected dates
  if(clicker==0){
    clicker=1;
    $('.calendar li').removeClass('red');
    $(this).addClass('red');
    min = $(this).text();
  } else {
    clicker=0;
    $(this).addClass('red');
    $('.calendar li.red').each(function(){
      max = $(this).text();
    });
    for(i=parseInt(min);i<parseInt(max);i++){
      $('.calendar li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); 
    }
  }
});
}