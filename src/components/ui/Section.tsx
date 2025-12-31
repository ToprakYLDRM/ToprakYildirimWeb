import React from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    light?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className = '',
    children,
    title,
    subtitle,
    light = false
}) => {
    return (
        <section
            id={id}
            className={`py-12 md:py-20 px-4 md:px-8 lg:px-16 ${light ? 'bg-light' : 'bg-white'} ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <div className="mb-8 md:mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3 md:mb-4 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                        <div className="h-1 w-20 bg-primary mt-4 md:mt-6 rounded-full"></div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};
