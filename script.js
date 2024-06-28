document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.foto-profil');
    const heading = document.querySelector('h1');

    profileImage.addEventListener('click', function() {
        alert('Halo! Saya Krisna Harsyandi Saputra.');
    });

    heading.addEventListener('mouseover', function() {
        this.style.color = 'blue';
    });

    heading.addEventListener('mouseout', function() {
        this.style.color = 'black';
    });
});