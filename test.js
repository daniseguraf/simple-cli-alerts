import alert from './index.js';

const msgs = [
	{type: 'success', msg: 'All done!', name: 'GREAT!'},
	{type: 'warning', msg: 'Yo missed something!'},
	{type: 'info', msg: 'Follow the rabbit', name: ''},
	{type: 'error', msg: 'Something is wrong', name: 'WHATTTT????'},
	{}
];

msgs.map((el) => alert(el));
