var accItem = document.getElementsByClassName('accordionItem');//блок с заголовком и контентом
var accHD = document.getElementsByClassName('accordionItemHeading');//заголовок
for (i = 0; i < accHD.length; i++) {//перебираем все заголовки
	accHD[i].addEventListener('click', toggleItem, false);//обработчик события, вызванного на данный заголовок. Если кликает по заголовку, то вызывается метод
//toggleItem()
}
function toggleItem() {
	var itemClass = this.parentNode.className;//присваивается класс parentNode
	console.log(itemClass);
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem close';
		alert('robit1');
	}
	if (itemClass == 'accordionItem close') {
		this.parentNode.className = 'accordionItem open';
		alert('robit2');
	}
}