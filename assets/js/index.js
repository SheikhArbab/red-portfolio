const tabTitles = document.querySelector('.tab-titles');
const filterButtons = tabTitles.querySelectorAll('.filter-button');
const categoryItems = document.querySelectorAll('.tab-contents');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    // Show/hide items based on selected filter
    categoryItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // Toggle active class for selected filter button
    filterButtons.forEach(btn => btn.classList.remove('active-link'));
    button.classList.add('active-link');
  });
});



const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("li-active");
    if (li.querySelector("a").getAttribute("href").substring(1) === current) {
      li.classList.add("li-active");
    }
  });
});


window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    if (window.pageYOffset > 550) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  document.querySelector('.menu-container').addEventListener('click', function () {
    this.classList.toggle('clicked');
  });
  document.querySelector('.dropdown-toggle').addEventListener('click', () => {
    let ul = document.querySelector('ul');
    
    if (ul.style.height == '100vh') {
      ul.style.height = '0vh';
    } else {
      ul.style.height = '100vh';
    }
  });
  