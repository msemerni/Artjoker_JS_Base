const langHeader: HTMLDivElement | null = document.querySelector('.lang__header');
const btnMenu: HTMLButtonElement | null = document.querySelector(".btn-menu");
const menuBox: HTMLElement | null = document.querySelector(".menu__body");

const langHandler = (event: MouseEvent): void => {
  const eventTarget: HTMLDivElement = <HTMLDivElement>event.target;
  const lang: HTMLDivElement = <HTMLDivElement>eventTarget.closest('.lang');
  lang.classList.toggle('show');
}

const chooseLang = (event: MouseEvent): void => {
  const eventTarget: HTMLLIElement = <HTMLLIElement>event.target;
  const text = eventTarget.innerText;
  const lang: HTMLDivElement = <HTMLDivElement>eventTarget.closest('.lang')
  const current: HTMLSpanElement = <HTMLDivElement>lang.querySelector('.lang__current');
  eventTarget.innerText = current.innerText;
  current.innerText = text;
  lang.classList.remove('show');
}

const selectClose = (event: MouseEvent): void => {
  const lang: HTMLDivElement = <HTMLDivElement>langHeader!.parentElement;
  const selectCurrent: HTMLSpanElement = <HTMLSpanElement>langHeader!.children[0];
  const selectArrow: HTMLSpanElement = <HTMLSpanElement>langHeader!.children[1];
  const eventTarget: HTMLSpanElement = <HTMLSpanElement>event.target;
  if(lang.classList.contains('show') && eventTarget !== selectCurrent && eventTarget !== selectArrow) {
      lang.classList.remove('show');
  }
}

if (btnMenu) {
  btnMenu.addEventListener("click", function(event: MouseEvent): void {
    document.body.classList.toggle('.lock-body')
    btnMenu.classList.toggle('menu-open');
    menuBox!.classList.toggle('_show');
  });
}

if (langHeader) {
  langHeader.addEventListener('click', langHandler);
  const selectItems: HTMLLIElement[] = Array.from(document.querySelectorAll('.lang__item'));
  selectItems.map(item => {item.addEventListener('click', chooseLang)});
  document.body.addEventListener('click', selectClose);
}
