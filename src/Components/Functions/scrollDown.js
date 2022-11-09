//onClick={() => {scrollDown("service", -100);}}
const scrollDown = async (id, offset) => {

  const position = window.scrollY;
  const element = document.getElementById(id);


  if (element == null || element.style.visibility === "hidden" || element.style.display === "none") return;
  let parent = element.parentElement
  while (parent.tagName !== "BODY")
  {
    if(window.getComputedStyle(parent).display ===  "none") return;
    parent = parent.parentElement
  }

  const element_position = element.offsetTop
  
  let defaultOffset = (window.innerWidth > 1000) ? -100 : 0;
  if (offset != null) defaultOffset += offset;
  
  window.scrollBy({ 
      top: (element_position - position) + defaultOffset, 
      left: 0, 
      behavior: 'smooth' 
    });
}

export default scrollDown