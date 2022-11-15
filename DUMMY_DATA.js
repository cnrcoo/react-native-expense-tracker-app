export const USER_INFO = {
	name: 'Çınar',
	surname: 'Arslan',
	cardNumber: '1234 0000 0000 9876',
	balance: 42216,
	cardType: 'Visa',
	expDate: '03/30',
};

export const MARKET_INFO = [
	{
		currencyName: 'GBP',
		value: 1.18,
		change_24h: 0.02,
		change_24h_percentage: 0.42,
	},
	{
		currencyName: 'EUR',
		value: 1.03,
		change_24h: -0.07,
		change_24h_percentage: 0.59,
	},
	{
		currencyName: 'AUD',
		value: 0.67,
		change_24h: 0.03,
		change_24h_percentage: 0.21,
	},
	{
		currencyName: 'CAD',
		value: 0.75,
		change_24h: -0.09,
		change_24h_percentage: 0.13,
	},
	{
		currencyName: 'JPY',
		value: 0.007,
		change_24h: -0.00162,
		change_24h_percentage: 0.42,
	},
];

export const TRANSACTION_INFO = [
	{
		txName: 'Adidas',
		txType: 'Sportswear',
		txAmount: '124.03',
		action: 'expenditure',
	},

	{
		txName: 'Rose McIver',
		txType: 'Transaction',
		txAmount: '750.00',
		action: 'received',
	},

	{
		txName: 'Bus tickets',
		txType: 'Transportation',
		txAmount: '48.76',
		action: 'expenditure',
	},

	{
		txName: 'Bob Marley',
		txType: 'Transaction',
		txAmount: '300.00',
		action: 'sent',
	},

	{
		txName: 'Pizza Hut',
		txType: 'Restaurant',
		txAmount: '101.50',
		action: 'expenditure',
	},
];

export const SPENDINGS_INFO = [
	{ day: 'Monday', amount: 126 },
	{ day: 'Tuesday', amount: 89.99 },
	{ day: 'Wednesday', amount: 190 },
	{ day: 'Thursday', amount: 112.04 },
	{ day: 'Friday', amount: 44.6 },
	{ day: 'Saturday', amount: 144 },
	{ day: 'Sunday', amount: 0 },
];

export const PERIOD_SPENDINGS = [
	{
		amount: 538.27,
		category: 'Shopping',
		percentage: '26%',
	},
	{
		amount: 318.04,
		category: 'Food',
		percentage: '18%',
	},
	{
		amount: 266.99,
		category: 'Transportation',
		percentage: '16%',
	},
	{
		amount: 193.38,
		category: 'Medical',
		percentage: '11%',
	},
];
