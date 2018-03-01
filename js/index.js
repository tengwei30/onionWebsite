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
    

    // get jobs
    getJobs();
    function getJobs() {
        $.ajax({
            // url: 'http://10.8.200.56:3000/jobs',
            url: 'http://localhost:3001/jobs.json',
            dataType: "jsonp",
            contentType: 'application/json',
            success: function(data) {
                console.log(data)
            },
            fail: function(err) {
                console.log('error ---> ', err)
            }
        })
    }

    // jobs switch
    $('.jobs-position-name-list li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
    })

    // read details
    $('.jobs-position-read-more').on('click',function() {
        $(this).parent().parent().siblings().slideToggle(300)
        if ($(this).find('i').hasClass('rotate')) {
            $(this).find('i').removeClass('rotate')
            $(this).find('i').addClass('init-rotate')
        } else {
            $(this).parent().parent().parent().siblings().find('i').removeClass('rotate')
            $(this).find('i').removeClass('init-rotate')
            $(this).find('i').addClass('rotate')
        }
        $(this).parent().parent().parent().siblings().find('.jobs-postion-desc-bottom').slideUp(300)
    })

})
