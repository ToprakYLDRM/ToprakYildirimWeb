import React, { useState } from 'react';
import { Section } from './ui/Section';
import { X, ZoomIn } from 'lucide-react';
import ccnaCert from '../assets/CCNA-certificate-cisco.png';
import linuxCert from '../assets/linux-certificate.png';
import pythonCert from '../assets/python-certificate.png';
import cyberCert from '../assets/siber-security-cisco.png';
import backendCert from '../assets/softito-backend-certificate.png';

interface Certificate {
    id: number;
    title: string;
    image: string;
    description: string;
}

const certificates: Certificate[] = [
    {
        id: 1,
        title: 'CCNA: Introduction to Networks',
        image: ccnaCert,
        description: 'Cisco Networking Academy',
    },
    {
        id: 2,
        title: 'Backend Software Specialization',
        image: backendCert,
        description: 'Softito Software Academy',
    },
    {
        id: 3,
        title: 'Introduction to Cybersecurity',
        image: cyberCert,
        description: 'Cisco Networking Academy',
    },
    {
        id: 4,
        title: 'Python Essentials',
        image: pythonCert,
        description: 'Python Institute',
    },
    {
        id: 5,
        title: 'Linux Essentials',
        image: linuxCert,
        description: 'NDG & Cisco Networking Academy',
    },
];

export const Certificates: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <Section id="certificates" title="Certificates" subtitle="Professional certifications documenting my technical expertise." light>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="group relative bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer overflow-hidden"
                        onClick={() => setSelectedCert(cert)}
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 drop-shadow-md" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-md font-bold text-dark truncate" title={cert.title}>{cert.title}</h3>
                            <p className="text-xs text-gray-500">{cert.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-bold text-dark">{selectedCert.title}</h3>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto p-4 bg-gray-50 flex items-center justify-center">
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-w-full max-h-full object-contain shadow-lg rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};
