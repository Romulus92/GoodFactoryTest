/* //collapses

const itemHeight = $('.results__container').height()

$('.hide-button').click(function() {
    const nowItemHeight = $('.results__container').height()
    if (nowItemHeight == 0) {
        $('.results__container').animate({ height: '100%' }, 500)
    } else {
        $('.results__container').animate({ height: '0' }, 500)
    }
});

/* $('.results__container').animate({ height: '100%' }, 500) */
* /