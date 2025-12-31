import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Github, Smartphone, Monitor, Play, Hourglass } from 'lucide-react';
import hikayeviImage from '../assets/hikayevi.webp';
import depostokImage from '../assets/depostok.webp';
import ecomDashboardImage from '../assets/ecomdashboard.webp';
import benKimimImage from '../assets/benkimim.webp';

interface ProjectAction {
    label: string;
    url?: string;
    icon: React.ElementType;
    variant?: 'primary' | 'outline' | 'ghost';
    disabled?: boolean;
}

interface Project {
    title: string;
    description: string;
    tags: string[];
    type: 'mobile' | 'web';
    features: string[];
    actions: ProjectAction[];
    color: string;
    image?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16 md:mb-24 last:mb-0">
            {/* Visual Side */}
            <div className={`w-full lg:w-[45%] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`relative mx-auto ${project.type === 'mobile' ? 'max-w-[280px]' : 'max-w-full'}`}>
                    {/* Device Frame */}
                    {project.type === 'mobile' ? (
                        <div className="relative rounded-[3rem] border-8 border-gray-800 bg-gray-800 overflow-hidden shadow-2xl">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                            {/* Screen Content */}
                            <div className="bg-light relative aspect-[9/19] w-full flex flex-col h-full bg-white">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="pt-8 flex flex-col h-full">
                                        {/* Header Mockup */}
                                        <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 bg-white">
                                            <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                            <div className="w-20 h-3 rounded-full bg-gray-200"></div>
                                            <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                                        </div>
                                        {/* Content Mockup */}
                                        <div className="p-4 space-y-4 bg-gray-50 flex-1">
                                            <div className="w-full h-32 rounded-lg opacity-20" style={{ backgroundColor: project.color }}></div>
                                            <div className="space-y-2">
                                                <div className="w-3/4 h-3 rounded bg-gray-200"></div>
                                                <div className="w-1/2 h-3 rounded bg-gray-200"></div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 mt-4">
                                                <div className="h-24 rounded-lg bg-white shadow-sm p-2 space-y-2">
                                                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                                                    <div className="w-full h-2 rounded bg-gray-100"></div>
                                                </div>
                                                <div className="h-24 rounded-lg bg-white shadow-sm p-2 space-y-2">
                                                    <div className="w-8 h-8 rounded bg-gray-100"></div>
                                                    <div className="w-full h-2 rounded bg-gray-100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="relative rounded-lg bg-gray-800 p-2 shadow-2xl">
                            <div className="flex gap-2 mb-2 px-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="bg-white rounded overflow-hidden aspect-[16/10] flex flex-col">
                                {!project.image && (
                                    <div className="flex border-b border-gray-100">
                                        <div className="w-48 h-8 bg-gray-50 border-r border-gray-100 flex items-center px-4">
                                            <div className="w-full h-2 rounded-full bg-gray-200"></div>
                                        </div>
                                    </div>
                                )}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex-1 p-6 bg-gray-50 flex gap-6">
                                        <div className="w-16 flex flex-col gap-4">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="w-full aspect-square rounded bg-white shadow-sm"></div>)}
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="w-full h-32 rounded-lg opacity-20" style={{ backgroundColor: project.color }}></div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-20 rounded bg-white shadow-sm"></div>
                                                <div className="h-20 rounded bg-white shadow-sm"></div>
                                                <div className="h-20 rounded bg-white shadow-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Decorative Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: project.color }}></div>
                </div>
            </div>

            {/* Content Side */}
            <div className={`w-full lg:w-[55%] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3 text-sm font-medium text-primary mb-3">
                    {project.type === 'mobile' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                    {project.type === 'mobile' ? 'Mobile Application' : 'Web Platform'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3 md:mb-4">{project.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {project.actions.map((action, i) => (
                        <Button
                            key={i}
                            variant={action.variant || (i === 0 ? 'outline' : 'primary')}
                            href={action.url}
                            className={`text-sm ${action.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={action.disabled}
                        >
                            <action.icon className="w-4 h-4 mr-2" />
                            {action.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'DepoStok',
            description: 'A comprehensive warehouse inventory tracking system designed for real-time stock management. Allows warehouse managers to track entry/exit of goods with barcode scanning support.',
            tags: ['.NET 8', 'React Native', 'SQL Server', 'Web API'],
            type: 'web',
            features: ['Real-time stock tracking', 'Low stock alerts', 'Role-based access control'],
            actions: [
                { label: 'View Code', url: 'https://github.com/ToprakYLDRM', icon: Github, variant: 'outline' }
            ],
            color: '#005A9C',
            image: depostokImage
        },
        {
            title: 'EComDashboard',
            description: 'A robust multi-channel e-commerce management system. Centralizes orders, inventory, and customer data from multiple sales channels into a single powerful dashboard.',
            tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Docker', 'Redis'],
            type: 'web',
            features: ['Unified order management', 'Sales analytics & reporting', 'Inventory synchronization', 'Multi-tenant architecture'],
            actions: [
                { label: 'View Code', url: 'https://github.com/ToprakYLDRM', icon: Github, variant: 'outline' }
            ],
            color: '#10B981',
            image: ecomDashboardImage
        },
        {
            title: 'HikayEvi',
            description: 'An interactive mobile story platform for children that makes reading fun. Features colorful illustrations and interactive story choices.',
            tags: ['React Native', 'Expo', 'Firebase', 'Animation'],
            type: 'mobile',
            features: ['Interactive storytelling', 'Offline reading mode', 'Parental controls', 'Progress tracking'],
            actions: [
                { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hikayevi.app&hl=tr', icon: Play, variant: 'primary' },
                { label: 'App Store', icon: Hourglass, variant: 'outline', disabled: true }
            ],
            color: '#F59E0B',
            image: hikayeviImage
        },
        {
            title: 'Ben Kimim?',
            description: 'A social word-guessing game powered by Google Sheets API for easy content updates. Designed for parties and social gatherings.',
            tags: ['React Native', 'Google Sheets API', 'Typescript'],
            type: 'mobile',
            features: ['Dynamic content via Google Sheets', 'Multi-player mode', 'Timer & Score tracking', 'Cross-platform support'],
            actions: [
                { label: 'Google Play', url: '#', icon: Play, variant: 'primary' },
                { label: 'App Store', icon: Hourglass, variant: 'outline', disabled: true }
            ],
            color: '#EC4899',
            image: benKimimImage
        }
    ];

    const otherProjects = [
        {
            title: "Market Automation",
            description: "Desktop application for stock tracking with secure data operations.",
            tags: ["C#", "WinForms", "ADO.NET", "SQL Server"]
        },
        {
            title: "Film Sales System",
            description: "Movie purchase platform with admin panel and role-based auth.",
            tags: [".NET MVC", "EF Core", "SQL Server"]
        },
        {
            title: "WorkLog",
            description: "Task management app for tracking and filtering daily tasks.",
            tags: [".NET 9", "Razor Pages", "EF Core"]
        },
        {
            title: "Mini CRM",
            description: "Lightweight CRM for managing customers and offers.",
            tags: [".NET 9", "Dapper", "SQL Server"]
        }
    ];

    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my recent work in mobile and backend development." className="overflow-hidden">
            <div className="mt-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="mt-24">
                <h3 className="text-2xl font-bold text-dark mb-8 text-center">Other Noteworthy Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {otherProjects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{project.title}</h4>
                            </div>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
