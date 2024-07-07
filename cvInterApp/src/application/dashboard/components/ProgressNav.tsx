import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressNav = () => {
    const location = useLocation();
    const [selectedSection, setSelectedSection] = useState('');
    useEffect(() => {
        const currentSection = location.pathname.split('/')[2] || '';
        setSelectedSection(currentSection);
    }, [location.pathname]);

    const phases = [
        { path: '', name: 'Select template' },
        { path: 'bio', name: 'Bio' },
        { path: 'experience', name: 'Experience' },
        { path: 'education', name: 'Education' },
        { path: 'tech-skills', name: 'Tech skills' },
        { path: 'soft-skills', name: 'Soft skills' },
        { path: 'other-data', name: 'Other data' },
        { path: 'upload', name: 'Upload' }
    ];

    return (
        <div className="w-full flex justify-center h-auto pt-10 pb-4">
            <ul className="flex flex-wrap justify-center gap-2 md:gap-3 p-2">
                {phases.map((phase, index) => (
                    <li
                        key={index}
                        className={`font-medium text-sm md:text-base ${selectedSection === phase.path ? 'bg-green-200' : ''} px-2 py-1 rounded mb-2`}
                    >
                        {phase.name}
                    </li>
                ))}
            </ul>
        </div>



    );
}

export default ProgressNav;
