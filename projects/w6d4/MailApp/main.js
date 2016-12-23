document.addEventListener("DOMContentLoaded", function() {
  const sidebarItems = document.querySelectorAll(".sidebar-nav li");
  sidebarItems.forEach(item => {
    item.addEventListener("click", (e) => {
      let innerText = e.currentTarget.innerText.toLowerCase();
      window.location.hash = innerText;
    });
  });
});
