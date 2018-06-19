//Equivalent of $(document).ready
document.onreadystatechange = () => {
  if(document.readyState == "interactive") {
    //select all sections
    sections = document.querySelectorAll(".service");

    window.addEventListener("scroll", () => {
      //currentScroll is the number of pixel that the window has been scrolled
      let currentScroll = window.scrollY;
  
      let currentSection;
      
      sections.forEach(section => {
        //get the position of each section compared to the top
        let sectionPosition = section.offsetTop;
        // sectionPosition.top = sectionPosition.top + document.body.scrollTop;

        console.log("pos: " + section.id + " " + sectionPosition);
        console.log("scroll: " + currentScroll);

        // If the sectionPosition is less the the currentScroll position the div we are testing has moved above the window edge.
        // the -81 is so that it includes the navbar(81px).
        if(sectionPosition - 81 < currentScroll){
          //set currentSection to the actual current section from the ones we are looping through
          currentSection = section;
        }
        
        //get the id of the current section
        let id = currentSection.getAttribute('id');
        //reset class of all links in the sidebar
        let links = document.querySelectorAll('a.sidebar__link');
        links.forEach(link => {
          link.classList.remove('active');
        });
        //add active class to currentSection
        document.querySelector('a[href="#' + id + '"]').classList.add('active');
        
      })
    });
  }
}