document.addEventListener("DOMContentLoaded", function () {
  const book = document.getElementById("book");
  const fontSizeControls = document.querySelectorAll(".font-size");

  fontSizeControls.forEach((control) => {
    control.addEventListener("click", function (event) {
      event.preventDefault();

      fontSizeControls.forEach((item) =>
        item.classList.remove("font-size_active")
      );

      control.classList.add("font-size_active");
      control.classList.remove("book_fs-small", "book_fs-big");
      book.classList.remove("book_fs-small", "book_fs-big");

      const size = control.dataset.size;
      if (size === "small") {
        book.classList.add("book_fs-small");
      } else if (size === "big") {
        book.classList.add("book_fs-big");
      }
    });
  });
});
