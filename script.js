const form = document.querySelector(".form__section");

const handleSubmit = (e) => {
  e.preventDefault(); // prevent page reload

  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  const date = document.getElementById("dateInput").value;

  const newEntry = { from, to, date };

  // Step 1: Read existing data
  let existing = JSON.parse(localStorage.getItem("data")) || [];

  // Step 2: Add new entry
  existing.push(newEntry);

  // Step 3: Save updated array
  localStorage.setItem("data", JSON.stringify(existing));
  console.log(JSON.parse(localStorage.getItem("data")));
};

form.addEventListener("submit", handleSubmit);
