import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Toprak Yıldırım</h2>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Building scalable digital solutions with .NET and React.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/toprakyıldırım/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/ToprakYLDRM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="mailto:toprakkyildirim@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Toprak Yıldırım. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center">
                        Built with React & .NET principles
                    </p>
                </div>
            </div>
        </footer>
    );
};
