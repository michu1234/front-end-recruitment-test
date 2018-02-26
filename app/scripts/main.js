/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function () {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set:
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            var installingWorker = registration.installing;

            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a 'New content is
                  // available; please refresh.' message in the page's interface.
                  break;

                case 'redundant':
                  throw new Error('The installing ' +
                    'service worker became redundant.');

                default:
                  // Ignore
              }
            };
          }
        };
      }).catch(function (e) {
        console.error('Error during service worker registration:', e);
      });
  }
})();
// regex patterns
var lettersOnly = /^[a-zA-Z\s]+$/;
var numbersOnly = /[0-9]/;
var expDate = /[0-9]{2}\/[0-9]{2}/;
var cardNumb = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
var emailOnly = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// user input data
var payForm = document.myForm;
var userName = payForm.firstName;
var userSurname = payForm.surname;
var userEmail = payForm.email;
var userCode = payForm.postalCode;
var userTelephone = payForm.telephone;
var userCard = payForm.creditcard;
var userSecCode = payForm.securitycode;
var userExpDate = payForm.expirationdate;
var subButton = document.querySelector('.submit');

function displayIt() {
  // name validation
  if (userName.value === null || userName.value === '') {
    userSecCode.setCustomValidity('Please, type your name');
    userName.parentNode.classList.add('alert');
  } else if (!lettersOnly.test(userName.value)) {
    userName.setCustomValidity('I expect only letters here');
    userName.parentNode.classList.add('alert');
  }
  // last name
  if (userSurname.value === null || userSurname.value === '') {
    userSecCode.setCustomValidity('Please, type your name');
    userSurname.parentNode.classList.add('alert');
  } else if (!lettersOnly.test(userSurname.value)) {
    userSurname.setCustomValidity('I expect only letters here');
    userSurname.parentNode.classList.add('alert');
  }
  // email
  if (userEmail.value === null || userEmail.value === '') {
    userEmail.setCustomValidity('Please, type your email');
    userEmail.parentNode.classList.add('alert');
  } else if (!emailOnly.test(userEmail.value)) {
    userEmail.setCustomValidity('I expect only email adress here');
    userEmail.parentNode.classList.add('alert');
  }
  // postal code
  if (userCode.value === null || userCode.value === '') {
    userCode.setCustomValidity('Please, type your postal code');
    userCode.parentNode.classList.add('alert');
  } else if (!numbersOnly.test(userCode.value)) {
    userCode.setCustomValidity('I expect only numbers here');
    userCode.parentNode.classList.add('alert');
  }
  // telephone
  if (userTelephone.value === null || userTelephone.value === '') {
    userTelephone.setCustomValidity('Please, type your security code');
    userTelephone.parentNode.classList.add('alert');
  } else if (!numbersOnly.test(userTelephone.value)) {
    userTelephone.setCustomValidity('I expect only numbers here');
    userTelephone.parentNode.classList.add('alert');
  }
  // credit card
  if (userCard.value === null || userCard.value === '') {
    userCard.setCustomValidity('Please, type your credit card number');
    userCard.parentNode.classList.add('alert');
  } else if (!cardNumb.test(userCard.value)) {
    userCard.setCustomValidity('I expect different format here');
    userCard.parentNode.classList.add('alert');
  }
  // password validation
  if (userSecCode.value === null || userSecCode.value === '') {
    userSecCode.setCustomValidity('Please, type your security code');
    userSecCode.parentNode.classList.add('alert');
  } else if (!numbersOnly.test(userSecCode.value)) {
    userSecCode.setCustomValidity('I expect only numbers here');
    userSecCode.parentNode.classList.add('alert');
  }
  // expiration date
  if (userExpDate.value === null || userExpDate.value === '') {
    userExpDate.setCustomValidity('Please, type your expiration date');
    userExpDate.parentNode.classList.add('alert');
  } else if (!expDate.test(userExpDate.value)) {
    userExpDate.setCustomValidity('I expect different format here');
    userExpDate.parentNode.classList.add('alert');
  }
}
subButton.addEventListener('click', displayIt);

