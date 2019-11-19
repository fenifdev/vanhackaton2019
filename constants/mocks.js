const courses = [
	{
		id: 1,
		title: 'Getting the most of vanhack',
		description: 'Welcome VanHacker!  This is your onboarding :) Learn more about how VanHack can help you prepare yourself to start your international career journey.',
		content: [
			{ id: 1, title: 'Welcome to VanHack', type: 'action', verified: true },
			{ id: 2, title: 'There are our values!', type: 'document' },
			{ id: 3, title: 'What do you need to get a job?', type: 'video' },
			{ id: 4, title: 'How to verify your English', type: 'video' },
			{ id: 5, title: '5 Steps to move to Canada', type: 'video' },
			{ id: 6, title: 'Join our slack channel', type: 'action' }
		],
		image: require('../assets/images/course1.jpg')
	},
	{
		id: 2,
		title: 'Working while traveling',
		description: 'We created an amazing guide with all the tips and instructions you need to be closer to your dream job abroad. Welcome to VanHack Mission Academy!',
		content: [
			{ id: 1, title: 'Welcome to VanHack', type: 'action' },
			{ id: 2, title: 'There are our values!', type: 'document' },
			{ id: 3, title: 'What do you need to get a job?', type: 'video' },
			{ id: 4, title: 'How to verify your English', type: 'video' },
			{ id: 5, title: '5 Steps to move to Canada', type: 'video' },
			{ id: 6, title: 'Join our slack channel', type: 'action' }
		],
		image: require('../assets/images/course2.jpg')
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