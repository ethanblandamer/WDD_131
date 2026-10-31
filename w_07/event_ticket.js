const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const codeContainer = document.querySelector("#codeContainer");
const output = document.querySelector("#output");
const codeLabel = document.querySelector("#codeContainer label");
const codeInput = document.querySelector("#code");

function updateCodeField() {
  if (type.value === "Student") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Student I#";
    codeInput.hidden = false;
    codeInput.required = true;
  } else if (type.value === "Guest") {
    codeContainer.hidden = false;
    codeLabel.textContent = "Access Code";
    codeInput.hidden = false;
    codeInput.required = true;
  } else {
    codeContainer.hidden = true;
    codeInput.value = "";
    codeInput.required = false;
  }
}

type.addEventListener("change", updateCodeField);
updateCodeField();

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const chosen = new Date(`${value}T00:00:00`);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const selectedType = form.type.value;
  const eventDate = form.eventDate.value;

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  if (type.value === "Student") {
    if (!/^\d{9}$/.test(codeInput.value)) {
        output.textContent = "Student I# must be 9 digits.";
        return;
    }
  } 
  else if (type.value === "Guest") {
    if (codeInput.value !== "EVENT131") {
        output.textContent = "Invalid Access Code";
        return;
    }
  }

  

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${selectedType}</p>
    <p>${eventDate}</p>
  `;

  form.reset();
  updateCodeField();
});