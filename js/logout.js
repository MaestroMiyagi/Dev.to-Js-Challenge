const logoutLink = document.getElementById('logout-link')

logoutLink.addEventListener('click', () => {
  localStorage.removeItem('token')
  window.location.replace('../index.html')
});

export default logoutLink