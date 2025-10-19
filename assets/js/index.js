function openSearchMenu() {
	const searchMenu = document.getElementById('search_menu');
	searchMenu.classList.add('active');
	document.body.style.overflow = 'hidden'; // запрет прокрутки
}

function closeSearchMenu() {
	const searchMenu = document.getElementById('search_menu');
	searchMenu.classList.remove('active');
	document.body.style.overflow = ''; // вернуть прокрутку
}

// Закрытие по нажатию Esc
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeSearchMenu();
	}
});

// Закрытие по клику вне формы (опционально)
document.getElementById('search_menu').addEventListener('click', (e) => {
	if (e.target === document.getElementById('search_menu')) {
		closeSearchMenu();
	}
});

function openMainMenu() {
	const menu = document.getElementById('main_menu');
	menu.classList.add('active');
	document.body.style.overflow = 'hidden';
}

function closeMainMenu() {
	const menu = document.getElementById('main_menu');
	menu.classList.remove('active');
	document.body.style.overflow = '';
}

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		closeMainMenu();
		closeSearchMenu(); // если оба могут быть открыты
	}
});

// Закрытие по клику вне меню
document.getElementById('main_menu').addEventListener('click', (e) => {
	if (e.target === document.getElementById('main_menu')) {
		closeMainMenu();
	}
});

// Клик по пункту меню — закрыть
document.querySelectorAll('.menu-item').forEach(item => {
	item.addEventListener('click', () => {
		// Можно добавить переход: window.location = '/news' и т.д.
		closeMainMenu();
	});
});