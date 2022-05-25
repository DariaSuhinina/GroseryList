let groseryItems = document.querySelector('.groseryItems');

document.querySelector('#userInput').addEventListener("keydown", (event) => {
  if(event.code === "Enter") writeItems();
})

function writeItems() {
  let item = document.createElement('h2');
  item.className = 'oneItem';
  item.innerHTML = '- ' + document.querySelector('#userInput').value;
  groseryItems.append(item);
  console.log(item);
  document.querySelector('#userInput').value = '';

  //должен быть внутри функции, тк иначе у нас нет элементов item, к которым применится обработчик событий, и появится ошибка
  item.addEventListener("click", () => { 
    if (!item.style.textDecoration){
      item.style.textDecoration = 'line-through';
    } else {
      item.style.textDecoration = '';
    }
  });

}

function letErase() {
  groseryItems.innerHTML = '';
}
