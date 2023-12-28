document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('show-menu');
    });


function toggleSearchInput() {
    const searchInput = document.querySelector('.search-input');
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
}