document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const addNewPlace = (e) => {
    e.preventDefault();
    const sfPlaces = document.getElementById("sf-places");
    const newPlace = document.createElement("li");
    const newPlaceInput = document.querySelector(".favorite-input");
    newPlace.textContent = newPlaceInput.value;
    sfPlaces.appendChild(newPlace);
  };

  document.querySelector(".favorite-submit")
    .addEventListener("click", addNewPlace);


  // adding new photos

  // --- your code here!



});
