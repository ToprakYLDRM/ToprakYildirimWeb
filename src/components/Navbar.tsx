import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import cvPdf from '../assets/Toprak-Yildirim-cv-EN.pdf';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-dark tracking-tight">
                    Toprak Yıldırım
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" className="px-4 py-2 text-sm" href={cvPdf} download="Toprak-Yildirim-CV.pdf">
                            <Download className="w-4 h-4 mr-2" />
                            CV
                        </Button>
                        <Button className="px-4 py-2 text-sm" href="#contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Hire Me
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 hover:text-primary font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                        <Button variant="outline" className="w-full justify-center" href={cvPdf} download="Toprak-Yildirim-CV.pdf">
                            <Download className="w-4 h-4 mr-2" />
                            Download CV
                        </Button>
                        <Button className="w-full justify-center" href="#contact">
                            <Mail className="w-4 h-4 mr-2" />
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
