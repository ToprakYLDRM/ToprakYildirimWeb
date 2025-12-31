import { Section } from './ui/Section';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience & Education" subtitle="My professional journey and academic background." light>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">

                {/* Experience Column */}
                <div>
                    <h3 className="flex items-center text-xl font-bold text-dark mb-8">
                        <Briefcase className="w-5 h-5 text-primary mr-3" />
                        Professional Experience
                    </h3>
                    <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-[2px] before:bg-gray-200">

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-primary shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Web Design Assistant Specialist</h4>
                            <div className="text-primary font-medium mb-1">Kurgu Digital Agency</div>
                            {/* <div className="text-sm text-gray-500 flex items-center mb-2">
                <Calendar className="w-3 h-3 mr-1" /> 202X - Present
              </div> */}
                            <p className="text-gray-600 text-sm">
                                Assisted in designing and developing web interfaces, focusing on user experience and responsive design principles.
                            </p>
                        </div>

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-primary shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Software Intern</h4>
                            <div className="text-primary font-medium mb-1">Soft İş Solutions Inc.</div>
                            <p className="text-gray-600 text-sm">
                                Gained hands-on experience in software development lifecycle, debugging, and assisting senior developers with backend tasks.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="flex items-center text-xl font-bold text-dark mb-8">
                        <GraduationCap className="w-5 h-5 text-primary mr-3" />
                        Education
                    </h3>
                    <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-[2px] before:bg-gray-200">

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-gray-400 shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Backend Training</h4>
                            <div className="text-gray-700 font-medium mb-1">SoftIto IT Academy</div>
                            <p className="text-gray-500 text-sm">Specialized training in .NET and server-side technologies.</p>
                        </div>

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-gray-400 shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Business Administration</h4>
                            <div className="text-gray-700 font-medium mb-1">Atatürk University</div>
                            <p className="text-gray-500 text-sm">Undergraduate Degree</p>
                        </div>

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-gray-400 shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Computer Programming</h4>
                            <div className="text-gray-700 font-medium mb-1">Istanbul Topkapı University</div>
                            <p className="text-gray-500 text-sm">Associate Degree</p>
                        </div>

                        <div className="relative pl-12">
                            <div className="absolute left-[13px] top-[6px] w-[14px] h-[14px] rounded-full border-[3px] border-white bg-gray-400 shadow-sm ring-1 ring-gray-200"></div>
                            <h4 className="text-lg font-bold text-dark">Medical Imaging</h4>
                            <div className="text-gray-700 font-medium mb-1">Istanbul Medipol University</div>
                            <p className="text-gray-500 text-sm">Associate Degree</p>
                        </div>

                    </div>
                </div>

            </div>
        </Section>
    );
};
