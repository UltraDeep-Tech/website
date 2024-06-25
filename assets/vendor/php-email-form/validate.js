document.addEventListener('DOMContentLoaded', function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;
      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

      if (!action) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }

      thisForm.querySelector('.loading').style.display = 'block';
      thisForm.querySelector('.error-message').style.display = 'none';
      thisForm.querySelector('.sent-message').style.display = 'none';

      let formData = new FormData(thisForm);

      if (recaptcha) {
        if (typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function () {
            try {
              grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                });
            } catch (error) {
              displayError(thisForm, error.message);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(response => response.json())
      .then(data => {
        thisForm.querySelector('.loading').style.display = 'none';
        if (data.status === 'success') {
          showSuccessMessage(thisForm, data.message);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        displayError(thisForm, error.message);
      });
  }

  function showSuccessMessage(thisForm, message) {
    let sentMessage = thisForm.querySelector('.sent-message');
    sentMessage.innerHTML = message;
    sentMessage.style.display = 'block';
    thisForm.reset();
  }

  function displayError(thisForm, errorMessage) {
    let errorMessageElement = thisForm.querySelector('.error-message');
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.style.display = 'block';
    thisForm.querySelector('.loading').style.display = 'none';
  }

});




