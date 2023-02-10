// TEXT ANIMATION
var textWrapper = document.querySelector('.twohead .text-head2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text-head2'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.twohead .text-head2',
    translateY: ["1.5em", 0],
    duration: 1000,
    delay: (el, i) => 100 * i
  }).add({
    targets: '.twohead',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// TEXT ANIMATION
var textWrapper = document.querySelector('.threehead .text-head3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text-head3'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.threehead .text-head3',
    translateY: ["1.5em", 0],
    duration: 1000,
    delay: (el, i) => 100 * i
  }).add({
    targets: '.threehead',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// GOOGLE SPREADSHEET
const scriptURL = 'https://script.google.com/macros/s/AKfycbx_QnrHMVT6Z4iGvT29OELvUiRfvK9ECvttghmgbPg8n9qaY0XevX6cgtpad54Pq_Yz/exec'
const form = document.forms['submit-to-google-sheet']
const text = document.getElementById("text")

form.addEventListener('submit', e => {
    e.preventDefault();

    let inputs = form.elements;
    let isValid = true;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
          isValid = false;
          break;
        }
      } if (!isValid) {
        text.innerHTML = "There is no input text";
        return;
      }

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        text.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            text.innerHTML = ""
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

  