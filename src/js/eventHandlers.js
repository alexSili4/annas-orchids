import refs from './refs';

const isHiddenClassName = 'is-hidden';
let radioBtnName = null;

refs.seasonsList.addEventListener('click', onSeasonsListInput);
refs.heroJoinUsBtn.addEventListener('click', toggleModalWinState);
refs.closeModalWinBtn.addEventListener('click', toggleModalWinState);
refs.vacanciesList.addEventListener('click', toggleShowMoreVacancyDetails);
refs.vacanciesList.addEventListener('click', onJoinUsBtnClick);
refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.supportBnt.addEventListener('click', toggleSupportMenuState);
refs.consultationBtn.forEach((el) => {
  el.addEventListener('click', toggleModalWinState);
});
refs.showMoreBtn.forEach((el) => {
  el.addEventListener('click', toggleShowMoreText);
});
refs.mobileMenuToggleBtn.forEach((el) => {
  el.addEventListener('click', toggleMobileMenu);
});
refs.mobileMenuList.addEventListener('click', onMobileMenuListClick);

function toggleSupportMenuState(e) {
  e.currentTarget.blur();
  refs.supportMenu.classList.toggle('is-hidden-menu');
}

function onMobileMenuListClick(e) {
  const isTargetQuestionBtn = e.target.closest('.js-mobile-menu-link');

  if (!isTargetQuestionBtn) {
    return;
  }

  refs.mobileMenu.classList.toggle(isHiddenClassName);
}

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle(isHiddenClassName);
}

function toggleShowMoreText(e) {
  const targetClassName = 'hidden-desc';
  const hiddenTextElement = e.currentTarget.closest('.js-hidden-desc');
  hiddenTextElement.classList.toggle(targetClassName);
}

function toggleShowMoreVacancyDetails(e) {
  const isTargetToggleShowMoreBtn = e.target.classList.contains('js-toggle-show-more-vacancy-details') || e.target.closest('.js-toggle-show-more-vacancy-details');

  if (!isTargetToggleShowMoreBtn) {
    return;
  }

  const vacancyDetails = e.target.closest('.js-vacancy-card').querySelector('.js-vacancy-card-details');
  vacancyDetails.classList.toggle(isHiddenClassName);
}

function onJoinUsBtnClick(e) {
  e.currentTarget.blur();
  const isTargetJoinUsBtn = e.target.closest('.js-join-us-btn');

  if (!isTargetJoinUsBtn) {
    return;
  }

  refs.joinUsModalWin.classList.toggle(isHiddenClassName);
}

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-question-wrap');
  questionContainer.classList.toggle(targetClassName);
}

function onSeasonsListInput(e) {
  const isInput = e.target.nodeName === 'INPUT';
  const { value: targetClassName } = e.target;

  if (!isInput) {
    return;
  }

  if (targetClassName === radioBtnName) {
    e.target.checked = false;
    radioBtnName = null;
    refs.vacanciesList.classList.remove(targetClassName);

    return;
  }

  refs.goodsModalWinTargetSection.classList.remove('autumn', 'spring', 'winter', 'summer');
  refs.goodsModalWinTargetSection.classList.add(targetClassName);
}

let inputIndex = 0;
const focusableElementsNames = 'input:not([type="hidden"]), button';

function toggleModalWinState(e) {
  e.currentTarget.blur();
  refs.joinUsModalWin.classList.toggle(isHiddenClassName);

  const isHiddenModalWin = refs.joinUsModalWin.classList.contains(isHiddenClassName);

  if (isHiddenModalWin) {
    document.removeEventListener('keydown', onTabKeyPress);
  } else {
    document.addEventListener('keydown', onTabKeyPress);

    const focusableElements = refs.joinUsModalWin.querySelectorAll(focusableElementsNames);
    const firstInputIndex = [...focusableElements].findIndex(({ nodeName }) => nodeName === 'INPUT');
    inputIndex = firstInputIndex;
    const firstInput = focusableElements[firstInputIndex];

    setTimeout(() => {
      firstInput.focus();
      inputIndex += 1;
    }, 100);
  }
}

function onTabKeyPress(e) {
  const focusableElements = refs.joinUsModalWin.querySelectorAll(focusableElementsNames);

  if (e.code === 'Tab') {
    e.preventDefault();
    const isLastElement = inputIndex === focusableElements.length - 1;
    focusableElements[inputIndex].focus();

    if (isLastElement) {
      inputIndex = 0;
    } else {
      inputIndex += 1;
    }
  }
}
