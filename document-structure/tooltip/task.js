const body = document.querySelector("body");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
body.appendChild(tooltip);

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("has-tooltip")) {
    e.preventDefault();
    const isSameTooltip =
      tooltip.textContent === target.title &&
      tooltip.classList.contains("tooltip_active");
    tooltip.classList.remove("tooltip_active");

    if (!isSameTooltip) {
      tooltip.textContent = target.title;

      const rect = target.getBoundingClientRect();
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.bottom}px`;

      tooltip.classList.add("tooltip_active");
    }
  } else if (tooltip.classList.contains("tooltip_active")) {
    tooltip.classList.remove("tooltip_active");
  }
});
