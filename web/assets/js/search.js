
const relatedBlog = new Swiper('.relatedBlog', {
  // Optional parameters
  speed: 1000,
  // If we need pagination
  slidesPerView: 3,
  spaceBetween: 78,
 navigation: {
      nextEl: '.nextBlog',
      prevEl: '.prevBlog',
    },


});
const relatedProduct = new Swiper('.relatedProduct', {
  // Optional parameters
  speed: 1000,
  // If we need pagination
  slidesPerView: 3,
  spaceBetween: 78,
 navigation: {
      nextEl: '.nextRelatedProduct',
      prevEl: '.prevRelatedProduct',
    },


});
const relatedProject = new Swiper('.relatedProject', {
  // Optional parameters
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 61,
  // If we need pagination
  navigation: {
      nextEl: '.nextProjects',
      prevEl: '.prevProjects',
    },

});