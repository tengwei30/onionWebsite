$(function() {
    // Import common footer.html
    $('footer').load('footer.html')

    // download show or hide
    $('.small-download').hover(function(){
        $('.show-download').fadeIn(500)
    },function(){
        $('.show-download').fadeOut(500)
    })


    // home tip more
    $('.btn-value').on('click', function() {
        window.location.href="onion-values.html"
    })
    $('.btn-welfare').on('click', function() {
        window.location.href="onion-welfare.html"
    })
    $('.btn-develop').on('click', function() {
        window.location.href="onion-dev.html"
    })
    $('.btn-eval').on('click', function() {
        window.location.href="onion-evaluation.html"
    })
    $('.btn-jobs').on('click', function() {
        window.location.href="onion-jobs.html"
    })


    // shuffling
    
    var w = 20 + 'em';
    console.log(w)
})
