const displayTab = (event) => {
  const panelNumb = event.target.dataset.panel;
  const panels = Object.values(document.getElementsByClassName("tabs-cont"));

  // hide all panels
  panels.forEach((element) => {
    element.style.display = "none";
  });

  // display the panel selected on the nav
  const panel = document.getElementById(`tab-${panelNumb}`);
  panel.style.display = "block";
}

export default displayTab;
