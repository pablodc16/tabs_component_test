const displayTab = (event) => {
  const panelNumb = event.target.dataset.panel;
  const panels = Object.values(document.getElementsByClassName("tabs-cont"));

  // hide all panels
  panels.forEach((element) => {
    element.style.display = "none";
  });

  // remove the active class from the nav menu
  const navTabs = Object.values(document.getElementsByClassName("nav-tab"));
  navTabs.forEach((element) => {
    element.classList.remove("active");
  });

  // set the active class for the selected element in the nav menu
  event.target.classList.add("active");

  // display the panel selected on the nav
  const panel = document.getElementById(`tab-${panelNumb}`);
  panel.style.display = "block";
};

export default displayTab;
