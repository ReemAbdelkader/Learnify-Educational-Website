let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .edu .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

// Initialize Swiper

// swiper for courses
const coursesSwiper = new Swiper('.coursesSwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

// Swiper for teachers
const teachersSwiper = new Swiper('.teachersSwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

// swiper for reviews
const reviewsSwiper = new Swiper('.reviewsSwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});


function toggleList() {
    const list = document.getElementById('courseList');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

// add event when choose an item form the list
const courseSelect = document.getElementById('course');
const selectedCourseInput = document.getElementById('selectedCourse');

courseSelect.addEventListener('change', function() {
    // choose the select one (course)
    const selectedOption = courseSelect.options[courseSelect.selectedIndex].text;

    // appear the selected course in the input 
    selectedCourseInput.value = selectedOption;

    // disappear the list auto after the choosing operation
    document.getElementById('courseList').style.display = 'none';
});


