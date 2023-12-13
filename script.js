window.onload = function() {
    var bottomRightImage = document.querySelector('.help');
    var emailLink = 'mailto:GRPS@novozymes.com';

    bottomRightImage.addEventListener('click', function() {
        window.location.href = emailLink;
    });
};