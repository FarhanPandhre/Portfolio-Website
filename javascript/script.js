  //mobile view navbar
  var sidemenu = document.getElementById("sidemenu")
  function openmenu(){
      sidemenu.style.right = "0"
  }
  function closemenu(){     
      sidemenu.style.right = "-100vw"
  }

  //tab section in about consist of info an skills

  // var tabButtons = document.querySelectorAll('.button-left, .button-right')
  var tabButtons = document.querySelectorAll('.about-col-2 .tabs .button-left, .button-right')
  var tabContent = document.querySelectorAll('.tab-info, .tab-skills-icon')

  function showPanel (panelIndex, colorCode){

      tabButtons.forEach(function(node){
          node.style.backgroundColor = '';
          node.style.color = '';
      });
      tabButtons[panelIndex].style.backgroundColor = colorCode;
      tabButtons[panelIndex].style.color = 'black';

      tabContent.forEach(function(node){
          node.style.display = 'none';
      });
      tabContent[panelIndex].style.display = 'block';
      tabContent[panelIndex].style.backgroundColor = colorCode;
  }
  showPanel(0, '#FFFFFF');

  //animated numbers on scroll
  const workSection = document.querySelector('.animated-numbers-sub-wrapper');
  const workObserver = new IntersectionObserver(
      (entries, observer) => {
          const [entry] = entries;
          console.log(entry);

          if(!entry.isIntersecting) return;
          const counterNum = document.querySelectorAll('.counter-numbers');
          const speed = 200;
          counterNum.forEach((currElem) =>{
              const updateNumber = () => {
              const targetNumber = parseInt(currElem.dataset.number);
              const initialNum = parseInt(currElem.innerText);
              const incrementNumber = Math.trunc(targetNumber / speed);
              if(initialNum < targetNumber){
                  currElem.innerText = `${initialNum + incrementNumber}+`;
                  setTimeout(updateNumber, 10);
              }
          };
          updateNumber();
          });
          observer.unobserve(workSection)
  },
  {
      root : null,
      threshold : 0,
  }
  );
  workObserver.observe(workSection);
