const body = document.querySelector('body');

const students = [
	{ first: 'MARK', last: 'ROMANO', url: 'assets/mark_romano_14.jpg'},
	{ first: 'DOUGLAS', last: 'CHUNG', url: 'assets/douglas_chung_14.jpg'},
	{ first: 'ALYSSA', last: 'GAUDIOSO', url: 'assets/alyssa_gaudioso_14.jpg'},
	{ first: 'ANDREW', last: 'OH', url: 'assets/andrew_oh_14.jpg'},
	{ first: 'BRIAN', last: 'FELDMAN', url: 'assets/brian_feldman_14.jpg'},
	{ first: 'JACOB', last: 'WORREL', url: 'assets/jacob_worrel_14.jpg'},
	{ first: 'LIYANG', last: 'WANG', url: 'assets/liyang_wang_14.jpg'}
]

body.addEventListener('click', () => {
	const random = Math.floor(Math.random() * Object.keys(students).length);
	const name = document.querySelector('.name');
	const first = document.querySelector('#first');
	const last = document.querySelector('#last');
	const url = document.querySelector('.image');

	if (name.classList.contains('hidden')) {
		name.classList.remove('hidden');
	} else {
		first.innerHTML = students[random].first;
		last.innerHTML = students[random].last;
		url.style['background-image'] = `url(${students[random].url})`;
		name.classList.add('hidden');
	}
});