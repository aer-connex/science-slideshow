// function openMenu() {
//   const el = document.querySelector('.menu');
//   if (el.classList.contains('close-menu')) {
//     el.classList.remove('close-menu');
//     el.classList.add('open-menu');
//   } else if (el.classList.contains('open-menu')) {
//     el.classList.add('close-menu');
//     el.classList.remove('open-menu');
//   } else {
//     el.classList.add('open-menu');
//   }
// }

(function () {
  // document.querySelector('.menu').style.bottom = '-10%';
  const el = document.querySelector('.menu');
  el.style.bottom = '-10%';
  el.style.opacity = '0';
})();

function toggleMenu() {
  const el = document.querySelector('.menu');
  if (el.style.bottom == '-10%') {
    el.style.bottom = '100px';
    el.style.opacity = '1';
    document.querySelector('.toggle__menu-open').style.opacity = '0';
    document.querySelector('.toggle__menu-close').style.opacity = '1';
  } else {
    el.style.bottom = '-10%';
    el.style.opacity = '0';
    document.querySelector('.toggle__menu-open').style.opacity = '1';
    document.querySelector('.toggle__menu-close').style.opacity = '0';
  }
}

function addActiveClass(context) {
  const navItems = document.querySelectorAll('.menu-icon');
  const navItem = document.getElementById(context);
  navItems.forEach((nav) => {
    nav.classList.remove('nav-active');
  });
  navItem.classList.add('nav-active');
}

function changeMenu(context) {
  const title = document.querySelector('.title');
  const info = document.querySelector('.slide-info')

  switch (context) {
    case 'home':
      title.innerText = 'home';
      info.innerText = 'what we will go over: \n\n -exoskeleton; \n\n -body (head, thorax, abdomen); \n\n -legs; \n\n -antennae; \n\n -simple eyes.';
      toggleMenu();
      addActiveClass(context);
      break;
    case 'about':
      title.innerText = 'about bugs';
      info.innerText = 'exoskeleton: the outer protective layer of an insect. made of chitin, a tough, rigid substance that shields the delicate organs from harm. (also provides structural support. \n\n body: insects typically have three distinct body segments: the head, thorax, and abdomen. each segment serves different functions. the head contains sensory organs such as the antennae, eyes, and mouthparts. the thorax is where the legs and wings are attached, facilitating movement and flight. the abdomen houses vital organs such as the digestive, reproductive, and respiratory systems. \n\nlegs: insects have six legs attached to their thorax, typically in pairs of three. these legs are adapted for various functions, including walking, climbing, jumping, digging, and grasping. each leg is composed of several segments joined by flexible joints, allowing for a wide range of motion.';
      toggleMenu();
      addActiveClass(context);
      break;
    case 'about2':
      title.innerText = 'about bugs 2';
      info.innerText = "antennae: antennae are sensory organs located on the insect's head. they play a crucial role in detecting environmental cues such as odors, vibrations, humidity, and temperature. antennae vary in shape and size across different insect species and are equipped with sensory receptors that help insects navigate their surroundings, find food, locate mates, and avoid predators. \n\n eyes: simple and compound: insects have simple and compound eyes, compound eyes have up to 25,000 individual lenses. they detect color and motion. simple eyes, located on the forehead, the simple eyes help detected changes in light. helpful for: day length detection, season detection, migration, hibernation, reproduction.";
      toggleMenu();
      addActiveClass(context);
      break;
    case 'about3':
      title.innerText = 'about bugs 3';
      info.innerText = "mouthparts: there are a few kinds of mouthparts: chewing, piercing/sucking, sponging, and siphoning. these have adapted to fit an insect's diet. \n\n wings: wings give an insect the ability to fly, they have two pairs: functional and protective. they are the only invertebrates who have evolved to fly.";
      toggleMenu();
      addActiveClass(context);
      break;
    case 'about4':
      title.innerText = 'about bugs 4';
      info.innerText = "abdomen: the abdomen contains the guts of the insect. they have small tubes called tracheae to get oxygen from the spiracles on the abdomen. insect blood does not carry oxygen, the circulatory system provides oxygen to the rest of the body.";
      toggleMenu();
      addActiveClass(context);
      break;
    case 'finale':
      title.innerText = "thx for listening (we're all looking at u adam)";
      info.innerText = "pls give any Qs. we have As don't worry";
      toggleMenu();
      addActiveClass(context);
      break;
    default:
      break;
  }
}

function changeTextForMenu(){
  const title = document.querySelector('.title');
  const text = document.querySelector('.description')
  if (title.innerText == 'home'){
    text.nodeValue() = 'Hello World!'
  }

}

const navItems = document.querySelectorAll('.menu-icon');

const toolTips = document.querySelectorAll('.tooltip');

function addToolTip(key) {
  removeTooltips();
  toolTips.forEach((tooltip) => {
    if (tooltip.getAttribute('data-key') == key) {
      tooltip.style.opacity = '1';
    }
  });
}

function removeTooltips() {
  toolTips.forEach((tooltip) => {
    tooltip.style.opacity = '0';
  });
}

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    addToolTip(item.getAttribute('id'));
  });
});

navItems.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    removeTooltips();
  });
});
