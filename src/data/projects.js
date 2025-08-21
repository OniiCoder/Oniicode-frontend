export const projects = [
    {
        id: 1,
        image: 'https://buukmenow-laravel.s3.amazonaws.com/services/images/68a73ccdad980.png',
        title: 'DayTracker',
        description:
            'Your Life, Beautifully Tracked. Transform your daily journey into a visual masterpiece. Capture moments, organize tasks, and watch your progress bloom.',
        link: 'https://daytracker.oniicode.com/',
        isStartUp: false,
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Local Storage', 'Google Drive'],
        status: 'Live'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/heyset/image/upload/v1721733939/vibraniuumtech/Xnapper-2024-07-23-11.22.11.png',
        title: 'BuukMeNow',
        description:
            'Currently building and running a platform that helps small businesses, service providers and creators manage bookings, sell tickets, products and collect payments.',
        link: 'https://buukmenow.com',
        isStartUp: true,
        tech: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'AWS', 'Google Calendar', 'Paystack', 'Digital Ocean', 'Laravel Forge'],
        status: 'Live'
    },
    {
        id: 3,
        image: 'https://buukmenow-laravel.s3.amazonaws.com/services/images/68a73ae8ce157.png',
        title: 'FreshFold',
        description:
            'Laundry Made Effortless. Schedule pickup, customize services, and track your laundry in real-time. FreshFold brings the laundromat to your doorstep.',
        link: 'https://www.freshfold.so/',
        isStartUp: false,
        tech: ['React Native', 'Laraavel', 'Livewire', 'Tailwind CSS', 'MySQL', 'AWS', 'Google Calendar', 'Paystack', 'Digital Ocean', 'Laravel Forge'],
        status: 'In Development'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/heyset/image/upload/v1725199664/vibraniuumtech/loomlab_art.png',
        title: 'LoomLab AI',
        description:
            'A mobile app that allows users to generate images and flyers with AI prompts. Built with cutting-edge AI technology for creative content generation.',
        link: 'https://testflight.apple.com/join/QNmRjxDC',
        isStartUp: false,
        tech: ['Flutter', 'Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'AWS', 'Google Calendar', 'Paystack', 'Digital Ocean', 'Laravel Forge'],
        status: 'Beta Testing'
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/heyset/image/upload/v1721733943/vibraniuumtech/Xnapper-2024-07-23-11.21.42.png',
        title: 'Petrol Padi',
        description:
            'A mobile and web application that allows users to browse PMS, Diesel and Gas prices from depots across Nigeria and place orders.',
        link: 'https://petrolpadi.com',
        isStartUp: false,
        tech: ['Flutter', 'Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'AWS', 'Google Calendar', 'Paystack', 'Digital Ocean', 'Laravel Forge'],
        status: 'Live'
    }
]

// Helper function to get featured projects (first 5 projects)
export const getFeaturedProjects = () => projects.slice(0, 5)

// Helper function to get all projects
export const getAllProjects = () => projects
