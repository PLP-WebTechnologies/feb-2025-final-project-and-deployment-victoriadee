document.getElementById('colorBtn').addEventListener('click', () => {
  const colors = ['red', 'green', 'blue', 'purple'];
  const chosen = colors[Math.floor(Math.random() * colors.length)];
  const text = document.getElementById('colorText');
  text.style.color = chosen;
  localStorage.setItem('preferredColor', chosen);
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('preferredColor');
  if (saved) document.getElementById('colorText').style.color = saved;
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(tab.dataset.target).classList.remove('hidden');
  });
});

document.getElementById('signupForm')?.addEventListener('submit', e => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (!email.value || password.value.length < 8) {
    e.preventDefault();
    alert('Check form fields before submitting.');
  }
});

function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}
