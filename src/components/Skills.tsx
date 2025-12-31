import { Section } from './ui/Section';
import { Server, Layout, GitBranch } from 'lucide-react';

export const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Technical Expertise" subtitle="A comprehensive toolset for building robust applications." light>
            <div className="grid md:grid-cols-3 gap-8">

                {/* Backend Column */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                        <Server className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Backend Development</h3>
                    <ul className="space-y-3">
                        {[
                            'C# & .NET 8/9',
                            'ASP.NET Core Web API',
                            'SQL Server (MSSQL)',
                            'Entity Framework Core',
                            'Dapper Micro-ORM',
                            'Microservices Architecture'
                        ].map((skill, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Frontend & Mobile Column */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                        <Layout className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Frontend & Mobile</h3>
                    <ul className="space-y-3">
                        {[
                            'React.js',
                            'React Native & Expo',
                            'TypeScript / JavaScript',
                            'Tailwind CSS',
                            'Bootstrap',
                            'Responsive Design'
                        ].map((skill, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools & Architecture */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                        <GitBranch className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-4">Tools & Architecture</h3>
                    <ul className="space-y-3">
                        {[
                            'Git & GitHub',
                            'Docker',
                            'Swagger / OpenAPI',
                            'Object-Oriented Programming',
                            'RESTful APIs',
                            'Agile/Scrum Workflow'
                        ].map((skill, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </Section>
    );
};
