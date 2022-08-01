const select = document.querySelectorAll('.select-head');
const option = document.querySelectorAll('.select-option');
let index = 1;


// dropdown
select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
        // next.style.zIndex = index++;
    })
})
option.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');
        const parent = b.target.closest('.select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
})



//modal
const backdrop = document.querySelector('#modal-back');
document.addEventListener('click', modalHandler);

function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.modal-btn');
    if (modalBtnOpen) { // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.modal-close');
    if (modalBtnClose) { // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest('.modal-window'));
    }

    if (evt.target.matches('#modal-back')) { // backdrop click
        hideModal(document.querySelector('.modal-window.modal-show'));
    }
}
function showModal(modalElem) {
    modalElem.classList.add('modal-show');
    backdrop.classList.remove('modal-hidden');
}
function hideModal(modalElem) {
    modalElem.classList.remove('modal-show');
    backdrop.classList.add('modal-hidden');
}


//remove item
function registerClickHandler (e) {
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
}
let removeBtn = document.querySelectorAll('.subcategories-remove');

for (let i = 0 ; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", registerClickHandler, false);
}



// checkbox reset
const checkBtn = document.querySelector('.form-reset');
const el = document.getElementsByClassName("switch-check");

const checkAll = () => {
    for (let i = 0; i < el.length; i++) {
        el[i].checked = true;
    }
    for (let i = 0; i < select.length; i++) {
        select[i].innerText = 'Мгновенно';
    }
};

checkBtn.addEventListener("click", checkAll, false);