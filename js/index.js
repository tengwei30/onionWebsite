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

    // btn-mobile
    $('.btn-mobile').on('click', function() {
        $('.header .nav .navLists').slideToggle(200)
    })

    // shuffling
    
    // get jobs
    getJobs('产品类');
    function getJobs(string) {
        $.ajax({
            url: 'http://10.8.8.8:7002/jobs',
            type: 'get',
            contentType: 'application/json',
            success: function(data) {
                // console.log(data)
                var str = '';
                for (var i=0; i< data.length; i++) {
                    if (data[i]['category'] == string) {
                        for (var j=0; j<data[i]['jobs'].length; j++) {
                            var _data = data[i]['jobs'][j]
                            str = '<li><div class="jobs-postion-desc-top"><p class="jobs-position-title">'+
                            '<span>'+_data['title']+'</span><span class="jobs-position-createtime">'+_data['openedAt'].slice(0,10)+'  发布</span></p><p class="jobs-position-money"><span>'+
                            '<em style="padding-right:5px">'+_data['minSalary']+'k-'+_data['maxSalary']+'k</em>'+_data['locations'][0]['province']+' I 经验'+_data['minExperience']+'-'+_data['maxExperience']+'年 I 本科及以上</span>'+
                            '<span class="jobs-position-read-more"><em>查看详情</em><i class="read-arrow"></i></span></p></div>'+
                            '<div class="jobs-postion-desc-bottom"><div>'+_data['description']+'<button class="btn-resume" _value="'+_data['id']+'">投递简历</button></div></li>'
                            $('.jobs-position-desc-list').append(str)
                        }
                        
                    }
                }
            },
            fail: function(err) {
                console.log('error ---> ', err)
            }
        })
    }

    // jobs switch
    $('.jobs-position-name-list li').on('click', function() {
        $('.jobs-position-desc-list').empty();
        getJobs($(this).attr('_value'))
        $(this).addClass('active').siblings().removeClass('active')
    })
    
    // read details
    $(document).on('click', '.jobs-position-read-more', function() {
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

    // btn-resume
    $(document).on('click', '.btn-resume', function() {
        var id = $(this).attr('_value')
        window.location.href = 'https://app.mokahr.com/apply/guanghe#/job/'+id+'/apply?_k=n6ruao'
    })

})
