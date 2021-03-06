const theme = {
	colors: {
		main: '#2C7CD4',
		darkMain: '#2B2E7F',
		darkGary: '#262525',
		header: 'black',
		gray: '#8c8c8c',
		second: '#55A1B2',
		secondLite: '#bcd9e0',

	},

	fontSizes: {
		header: '42px',
		headerMobile: '40px',
		nav: '20px',
		icon: '25px',
		large: '30px',
		medium: '18px',
		mediumMubile: '16px',
		small: '15px',
		smallMobile: '13px',
		autoFitHeader: 'clamp(2.2rem, 6.2vw, 2.4rem)',
		autoFitMedium: 'clamp(1.4rem, 4vw, 1.4rem)',
		autoFitMediumMubile: 'clamp(1.2rem, 3vw, 1.2rem)'
	},

	mediaQueries: {
		bellow500: 'only screen and (max-width: 500px)'

	},

	spacers: {
		large: '2rem',
		medium: '1rem',
		small: '0.5rem'
	}
};

export default theme;