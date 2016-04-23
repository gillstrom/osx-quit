import test from 'ava';
import m from './';

test('quit', async t => {
	await m('Safari');
	t.pass();
});
