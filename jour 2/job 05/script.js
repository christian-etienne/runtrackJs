window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var scrollPercentage = scrollPosition / scrollHeight;

    var footer = document.querySelector('footer');
    footer.style.backgroundColor = 'rgb(' + Math.round(scrollPercentage * 255) + ', 0, 0)';
});
