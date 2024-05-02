import refs from './refs';
import smoothScroll from './smoothScroll';

refs.mainNavigation.forEach((el) => {
  el.addEventListener('click', onMainNavigationLinkClick);
});

function onMainNavigationLinkClick(e) {
  const isNavLink = e.target.classList.contains('js-main-navigation-link');
  if (isNavLink) {
    e.preventDefault();
    const sectionId = e.target.attributes.href.value;
    const targetSection = document.querySelector(sectionId);
    smoothScroll(targetSection);
  }
}
