// PROFILE: current time (ms) update
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function renderTime() {
  // Use Date.now() — tests expect milliseconds near this value
  timeEl.textContent = Date.now();
}
renderTime();
setInterval(renderTime, 1000);

// CONTACT: validation & submission (all on same page)
const contactForm = document.getElementById('contactForm');
const successEl = document.getElementById('contact-success');

// Helper to get elements by field id suffix
const fieldMap = {
  name: {
    input: document.querySelector('[data-testid="test-contact-name"]'),
    err: document.querySelector('[data-testid="test-contact-error-name"]')
  },
  email: {
    input: document.querySelector('[data-testid="test-contact-email"]'),
    err: document.querySelector('[data-testid="test-contact-error-email"]')
  },
  subject: {
    input: document.querySelector('[data-testid="test-contact-subject"]'),
    err: document.querySelector('[data-testid="test-contact-error-subject"]')
  },
  message: {
    input: document.querySelector('[data-testid="test-contact-message"]'),
    err: document.querySelector('[data-testid="test-contact-error-message"]')
  }
};

function clearErrors(){
  Object.values(fieldMap).forEach(f => {
    if(f && f.err) f.err.textContent = '';
  });
  if(successEl) successEl.hidden = true;
}

function validateEmail(val){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

contactForm.addEventListener('submit', function(ev){
  ev.preventDefault();
  clearErrors();

  let valid = true;

  // Validate required
  const nameVal = fieldMap.name.input.value.trim();
  const emailVal = fieldMap.email.input.value.trim();
  const subjectVal = fieldMap.subject.input.value.trim();
  const messageVal = fieldMap.message.input.value.trim();

  if(!nameVal){
    fieldMap.name.err.textContent = 'Full name is required.';
    valid = false;
  }

  if(!emailVal){
    fieldMap.email.err.textContent = 'Email is required.';
    valid = false;
  } else if(!validateEmail(emailVal)){
    fieldMap.email.err.textContent = 'Please enter a valid email (name@example.com).';
    valid = false;
  }

  if(!subjectVal){
    fieldMap.subject.err.textContent = 'Subject is required.';
    valid = false;
  }

  if(!messageVal){
    fieldMap.message.err.textContent = 'Message is required.';
    valid = false;
  } else if(messageVal.length < 10){
    fieldMap.message.err.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if(valid){
    // show success only after valid submission
    contactForm.reset();
    successEl.hidden = false;
    // Move focus to success for screen readers
    successEl.focus?.();
  } else {
    successEl.hidden = true;
  }
});
