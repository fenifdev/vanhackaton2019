const courses = [
	{
		id: 1,
		title: 'Getting the most of vanhack',
		content: ['Title 1', 'Title 2', 'Title 3']
	},
	{
		id: 2,
		title: 'Getting the most of vanhack',
		content: ['Title 1', 'Title 2', 'Title 3']
	}
]

const jobs = [
	{
		id: 1,
		title: 'Front End Developer'
		new: true,
		location: 'Toronto'
		skills: [
			{ name: 'REACT' },
			{ name: 'REACT-NATIVE' },
			{ name: 'JAVASCRIPT'}
		]
	},
	{
		id: 2,
		title: 'Back End Developer'
		new: false,
		location: 'Frankfurt'
		skills: [
			{ name: 'PHP' },
			{ name: 'LARAVEL' },
			{ name: 'MYSQL'}
		]
	}
]

export {
	courses,
	jobs
}