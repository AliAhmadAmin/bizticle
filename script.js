document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#nav_toggle').addEventListener('click', function(){
        document.querySelector('.top-nav').classList.add('active')

    })
    document.querySelector('#close_nav').addEventListener('click', function(){
        document.querySelector('.top-nav').classList.remove('active')
    })
    document.querySelector('#filter').addEventListener('click', function(){
        document.querySelector('.section2-col1').classList.add('active')

    })
    document.querySelector('#close_filter').addEventListener('click', function(){
        document.querySelector('.section2-col1').classList.remove('active')
    })

})


