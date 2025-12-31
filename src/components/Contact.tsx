import React from 'react';
import { Button } from './ui/Button';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-primary text-white text-center">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto py-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
                    <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                        I'm currently available for freelance projects and open to full-time opportunities.
                        If you have a project that needs some creative engineering, I'd love to hear about it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href="mailto:toprakkyildirim@outlook.com"
                            className="bg-white !text-primary hover:!bg-gray-100 border-transparent w-full sm:w-auto"
                        >
                            <Mail className="w-4 h-4 mr-2" />
                            Send me an email
                        </Button>
                        <Button
                            variant="outline"
                            href="https://www.linkedin.com/in/toprakyıldırım/"
                            className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                        >
                            Connect on LinkedIn
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
