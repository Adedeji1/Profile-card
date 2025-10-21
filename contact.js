const form = document.getElementById('contactForm');
const successMsg = document.getElementById('success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;
  successMsg.hidden = true;

  const fields = [
    { id: 'name', min: 1 },
    { id: 'email', min: 5 },
    { id: 'subject', min: 1 },
    { id: 'message', min: 10 }
  ];

  fields.forEach(({ id, min }) => {
    const input = document.getElementById(id);
    const error = document.getElementById(`error-${id}`);
    const value = input.value.trim();
    error.textContent = '';

    if (!value) {
      error.textContent = 'This field is required.';
      isValid = false;
    } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error.textContent = 'Please enter a valid email (name@example.com).';
      isValid = false;
    } else if (id === 'message' && value.length < 10) {
      error.textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }
  });

  if (isValid) {
    form.reset();
    successMsg.hidden = false;
  }
});
