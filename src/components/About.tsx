import React from 'react';
import { Section } from './ui/Section';
import { Code, Palette, Terminal } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <Section id="about" title="About Me" subtitle="Get to know me better.">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                    {/* Decorative quote mark */}
                    <div className="absolute top-4 right-6 text-9xl text-gray-50 opacity-50 font-serif leading-none select-none">
                        &rdquo;
                    </div>

                    <div className="relative z-10">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                            I have a degree in <span className="text-dark font-semibold">Computer Programming</span>. I'm proficient in technologies like <span className="text-primary font-medium">C#</span>, <span className="text-primary font-medium">ASP.NET</span>, <span className="text-primary font-medium">JavaScript</span>, <span className="text-primary font-medium">React</span>, and <span className="text-primary font-medium">SQL</span>.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            I'm experienced in <span className="text-dark font-semibold">web and desktop application development</span>, database management, and modern UI design. I'm solution-oriented, team-oriented, and a software developer open to continuous improvement.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100 transition-colors hover:bg-blue-50">
                        <Code className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-dark mb-2">Clean Code</h3>
                        <p className="text-sm text-gray-600">Writing maintainable, scalable, and efficient software solutions.</p>
                    </div>
                    <div className="p-6 bg-purple-50/50 rounded-xl border border-purple-100 transition-colors hover:bg-purple-50">
                        <Palette className="w-8 h-8 text-purple-600 mb-4" />
                        <h3 className="font-bold text-dark mb-2">Modern UI/UX</h3>
                        <p className="text-sm text-gray-600">Creating visually appealing and user-friendly interfaces.</p>
                    </div>
                    <div className="p-6 bg-green-50/50 rounded-xl border border-green-100 transition-colors hover:bg-green-50">
                        <Terminal className="w-8 h-8 text-green-600 mb-4" />
                        <h3 className="font-bold text-dark mb-2">Problem Solving</h3>
                        <p className="text-sm text-gray-600">Analytical approach to troubleshooting and optimization.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
