var contactForm = document.getElementById('contact-form');
var messageData = {};
function submitLog(event) {
  messageData.name = contactForm.elements.name.value;
  messageData.email = contactForm.elements.email.value;
  messageData.message = contactForm.elements.message.value;
  event.preventDefault();
  document.getElementById('contact-form').reset();
  console.log('messageData:', messageData);
}

contactForm.addEventListener('submit', submitLog);
