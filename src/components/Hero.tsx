import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Database, Server, Smartphone, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-primary text-xs sm:text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Available for new projects
                    </div>

                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight tracking-tight">
                        Building Scalable <span className="text-primary">Backend Architectures</span> & Modern <span className="text-primary">Mobile Experiences</span>.
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
                        Specialized in .NET Core, C#, React, and SQL Server. Transforming complex data into user-friendly, enterprise-grade solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <Button href="#projects" className="group w-full sm:w-auto">
                            View Work
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" href="#contact" className="w-full sm:w-auto">
                            Contact Me
                        </Button>
                    </div>

                    <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">Backend Systems</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">Mobile Apps</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">Web Platforms</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content - Abstract Code/Server Visualization */}
                <div className="relative lg:h-[600px] flex items-center justify-center mt-2 lg:mt-0">
                    <div className="relative w-full max-w-lg aspect-square">
                        {/* Background Decor elements */}
                        <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-200/50 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gray-200/50 rounded-full blur-3xl opacity-60"></div>

                        {/* Main Abstract Card */}
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col justify-between transform -rotate-1 sm:rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-10">
                            <div className="flex items-center gap-2 mb-4 border-b pb-4 border-gray-100">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <span className="ml-auto text-xs text-gray-400 font-mono">Server.cs</span>
                            </div>

                            <div className="font-mono text-xs overflow-hidden">
                                <div className="flex">
                                    <span className="text-purple-600 mr-2">public class</span>
                                    <span className="text-yellow-600">ToprakYıldırım</span>
                                </div>
                                <div className="text-gray-600">{'{'}</div>

                                <div className="pl-4 my-1">
                                    <span className="text-purple-600">public string</span> Title = <span className="text-green-600">"Backend Dev"</span>;
                                </div>

                                <div className="pl-4 my-1">
                                    <span className="text-purple-600">public string</span>[] Skills =
                                </div>
                                <div className="pl-4 text-gray-600">{'{'}</div>
                                <div className="pl-8 text-green-600">
                                    "C#", "ASP.NET", "EF Core",
                                </div>
                                <div className="pl-8 text-green-600">
                                    "SQL", "React", "JavaScript" "Docker"
                                </div>
                                <div className="pl-4 text-gray-600">{'};'}</div>

                                <div className="pl-4 my-1">
                                    <span className="text-purple-600">public bool</span> OpenToWork = <span className="text-blue-600">true</span>;
                                </div>

                                <div className="text-gray-600">{'}'}</div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">Status</div>
                                    <div className="text-sm font-medium text-green-600 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Online
                                    </div>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <div className="text-xs text-gray-500 mb-1">Uptime</div>
                                    <div className="text-sm font-medium text-dark">99.9%</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -right-4 sm:-right-8 top-1/4 bg-white p-2 sm:p-4 rounded-xl shadow-lg border border-gray-100 z-20 animate-bounce hidden sm:block" style={{ animationDuration: '3s' }}>
                            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>

                        <div className="absolute -left-4 sm:-left-8 bottom-1/4 bg-white p-2 sm:p-4 rounded-xl shadow-lg border border-gray-100 z-20 animate-bounce hidden sm:block" style={{ animationDuration: '4s' }}>
                            <span className="font-bold text-xl sm:text-2xl text-dark">JS</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
