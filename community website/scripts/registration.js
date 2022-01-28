const modalClose = document.querySelector('.reg-modal__close');
const modalBtn = document.querySelector('.reg-modal__btn');
const navBtn = document.querySelector('.menu__btn');
const modal = document.querySelector('.reg-modal');


navBtn.addEventListener('click', function () {
  modal.classList.add('modal-active')
})

const closeModal = () => {
  modal.classList.remove('modal-active')
}

modalClose.addEventListener('click', closeModal);
modalBtn.addEventListener('click', closeModal);