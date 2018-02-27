$(function() {
    // Import common footer.html
    $('footer').load('footer.html')

    // download show or hide
    $('.small-download').hover(function(){
        $('.show-download').fadeIn(500)
    },function(){
        $('.show-download').fadeOut(500)
    })
})
