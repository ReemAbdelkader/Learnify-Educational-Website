let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .edu .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

// Initialize Swiper
var swiper = new Swiper(".our_courses", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        540: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

// Function to toggle the display of the course list
function toggleList() {
    const list = document.getElementById('courseList');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}
var swiper = new Swiper(".our_courses", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        540: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
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


