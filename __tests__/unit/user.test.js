const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('', () => {
	beforeEach(async () => {
		await truncate();
	});

	it('should encrypt user password', async () => {
		const user = await User.create({ name: 'Lucas', email: 'lucas.eqh@hotmail.com', password: '123abc' });

		const compareHash = await bcrypt.compare('123abc', user.password_hash);

		expect(compareHash).toBe(true);
	});
});