const courses = [
	{
		id: 1,
		title: 'Getting the most of vanhack',
		content: [
			{ id: 1, title: 'Welcome to VanHack', type: 'action' },
			{ id: 2, title: 'There are our values!', type: 'document' },
			{ id: 3, title: 'What do you need to get a job?', type: 'video' },
			{ id: 4, title: 'How to verify your English', type: 'video' },
			{ id: 5, title: '5 Steps to move to Canada', type: 'video' },
			{ id: 6, title: 'Join our slack channel', type: 'action' }
		]
	},
	{
		id: 2,
		title: 'Working while traveling',
		content: [
			{ id: 1, title: 'Welcome to VanHack', type: 'action' },
			{ id: 2, title: 'There are our values!', type: 'document' },
			{ id: 3, title: 'What do you need to get a job?', type: 'video' },
			{ id: 4, title: 'How to verify your English', type: 'video' },
			{ id: 5, title: '5 Steps to move to Canada', type: 'video' },
			{ id: 6, title: 'Join our slack channel', type: 'action' }
		]
	}
]

const jobs = [
	{
		id: 1,
		title: 'Front End Developer',
		new: true,
		location: 'Toronto',
		skills: [
			{ name: 'REACT' },
			{ name: 'REACT-NATIVE' },
			{ name: 'JAVASCRIPT'}
		]
	},
	{
		id: 2,
		title: 'Back End Developer',
		new: false,
		location: 'Frankfurt',
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