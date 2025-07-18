const form = document.querySelector(".form__section");

const handleSubmit = async (e) => {
  e.preventDefault(); // prevent page reload

  const from = document.getElementById("fromInput").value;
  const to = document.getElementById("toInput").value;
  const date = document.getElementById("dateInput").value;

  try {
    const response = await fetch("http://localhost:8000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        date,
      }),
    });
    if (!response.ok) throw new Error("Couldn't add new data");
    const result = await response.json();
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }

  document.getElementById("fromInput").value = "";
  document.getElementById("toInput").value = "";
  document.getElementById("dateInput").value = "";
};

form.addEventListener("submit", handleSubmit);
