const iconMenu: HTMLButtonElement | null = document.querySelector(".icon-menu");
const menuBody: HTMLElement | null = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function(event: MouseEvent): void {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('menu-open');
    menuBody!.classList.toggle('_active');
  });
}


const selectHeader: HTMLDivElement | null = document.querySelector('.select__header');

if (selectHeader) {
  selectHeader.addEventListener('click', selectHandler);
  let selectItems: HTMLLIElement[] = Array.from(document.querySelectorAll('.select__item'));
  selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
  });
  document.body.addEventListener('click', selectClose);
}

function selectHandler (event: MouseEvent): void {
  let target: HTMLDivElement = event.target as HTMLDivElement;
  let select: HTMLDivElement = target.closest('.select') as HTMLDivElement;
  select.classList.toggle('active');
}

function selectChoose (event: MouseEvent): void {
  let target: HTMLLIElement = event.target as HTMLLIElement;
  let text = target.innerText;
  let select: HTMLDivElement = target.closest('.select') as HTMLDivElement;
  let current: HTMLSpanElement = select.querySelector('.select__current') as HTMLSpanElement;
  target.innerText = current.innerText;
  current.innerText = text;
  select.classList.remove('active');
}

function selectClose (event: MouseEvent): void {
  let select: HTMLDivElement = selectHeader!.parentElement as HTMLDivElement;
  let selectCurrent: HTMLSpanElement = selectHeader!.children[0] as HTMLSpanElement;
  let selectArrow: HTMLSpanElement = selectHeader!.children[1] as HTMLSpanElement;
  let target: HTMLSpanElement = event.target as HTMLSpanElement;
  if(select.classList.contains('active') && 
    target !== selectCurrent && 
      target !== selectArrow) {
        select.classList.remove('active');
  }
}


const buttonsContainer: HTMLDivElement | null = document.querySelector('.languages');
const buttonsGroup: HTMLCollection | undefined = buttonsContainer?.getElementsByClassName("languages__item");

if (buttonsGroup) {
  const buttons: HTMLButtonElement[] = <HTMLButtonElement[]> Array.from(buttonsGroup);
  buttons.forEach(button => {
    button.addEventListener("click", clickHandler)});
}

function clickHandler(event: MouseEvent){
  let current: HTMLButtonElement | null = document.querySelector("._active");
  current!.classList.remove("_active");
  (event.target as HTMLElement).classList.add("_active")
}