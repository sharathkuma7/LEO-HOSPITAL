$(document).ready(function() {
    // Hide all faq items on page load
    $('.faq-item p' ).hide();

    // Toggle faq items when a question is clicked
    $('.faq h3').click(function() {
        $(this).parent().find('p').slideToggle();
    });
});