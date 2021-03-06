import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $('.active_heart_wrap').removeClass('hidden')
  } else {
    $('.inactive_heart_wrap').removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#item-show').data()
  const itemId = dataset.postId


  // いいね機能
  axios.get(`/api/items/${itemId}/like`)
    .then((response) => {
      const hasLiked = response.data.hasLiked
      handleHeartDisplay(hasLiked)
    })
  
  $('.inactive_heart_wrap').on('click', (e) => {
    e.preventDefault();
    const content = $(e.currentTarget).attr('id')
    axios.post(`/api/items/${content}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`#${content}.active_heart_wrap`).removeClass('hidden')
          $(`#${content}.inactive_heart_wrap`).addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $('.active_heart_wrap').on('click', (e) => {
    e.preventDefault();
    const content = $(e.currentTarget).attr('id')
    axios.delete(`/api/items/${content}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`#${content}.active_heart_wrap`).addClass('hidden')
          $(`#${content}.inactive_heart_wrap`).removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
});












//   スライドショー機能
document.addEventListener('DOMContentLoaded', () => {
  $('.slideshow').each(function () {
    var container = $('.slideshow'),
        slideGroup = container.find('.slideshow_slides_1'),
        slides = slideGroup.find('.slide'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.slideshow_indicator_1'),

        slideCount = slideGroup.length,
        indicatorHTML = '',
        currentIndex = 0,
        duration = 500;
    
    slides.each(function (i) {
      if(i < 3) {
         $(this).css({left: 100 * i + '%'});
        indicatorHTML += '<a href = "#">' + ('▪︎') + '</a>';
      } else {
        return false;
      } 
    });

    indicator.html(indicatorHTML);

    function goToSlide (index) {
        slideGroup.animate({left: -100 * index + '%'}, duration);
        currentIndex = index;
        updateNav();
    }

    function updateNav () {
        indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }

    indicator.on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('prev')) {
            goToSlide($(this).index());
        } 
    });

    goToSlide(currentIndex);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  $('.slideshow').each(function () {
    var container = $('.slideshow'),
        slideGroup = container.find('.slideshow_slides_2'),
        slides = slideGroup.find('.slide'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.slideshow_indicator_2'),

        slideCount = slideGroup.length,
        indicatorHTML = '',
        currentIndex = 0,
        duration = 500;
    
    slides.each(function (i) {
      if(i < 3) {
         $(this).css({left: 100 * i + '%'});
        indicatorHTML += '<a href = "#">' + ('▪︎') + '</a>';
      } else {
        return false;
      } 
    });

    indicator.html(indicatorHTML);

    function goToSlide (index) {
        slideGroup.animate({left: -100 * index + '%'}, duration);
        currentIndex = index;
        updateNav();
    }

    function updateNav () {
        indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }

    indicator.on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('prev')) {
            goToSlide($(this).index());
        } 
    });

    goToSlide(currentIndex);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  $('.slideshow').each(function () {
    var container = $('.slideshow'),
        slideGroup = container.find('.slideshow_slides_3'),
        slides = slideGroup.find('.slide'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.slideshow_indicator_3'),

        slideCount = slideGroup.length,
        indicatorHTML = '',
        currentIndex = 0,
        duration = 500;
    
    slides.each(function (i) {
      if(i < 3) {
         $(this).css({left: 100 * i + '%'});
        indicatorHTML += '<a href = "#">' + ('▪︎') + '</a>';
      } else {
        return false;
      } 
    });

    indicator.html(indicatorHTML);

    function goToSlide (index) {
        slideGroup.animate({left: -100 * index + '%'}, duration);
        currentIndex = index;
        updateNav();
    }

    function updateNav () {
        indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }

    indicator.on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('prev')) {
            goToSlide($(this).index());
        } 
    });

    goToSlide(currentIndex);
  });
});

