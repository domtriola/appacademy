document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants
  const toggleLi = e => {
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
  const addNewPlace = e => {
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
  let photoForm = document.querySelector(".photo-form-container");
  const showPhotoForm = document.querySelector(".photo-show-button");
  showPhotoForm.addEventListener("click", e => {
    e.preventDefault();
    photoForm.classList.toggle("hidden");
  });

  const photoList = document.querySelector(".dog-photos");
  const addPhotoButton = document.querySelector(".photo-url-submit");
  addPhotoButton.addEventListener("click", e => {
    e.preventDefault();
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = document.querySelector(".photo-url-input").value;
    li.appendChild(img);
    photoList.appendChild(li);
  });
});
