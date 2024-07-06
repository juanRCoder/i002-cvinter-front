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
        <div className="w-full flex justify-center">
            <ul className="flex space-x-4 md:space-x-8 p-4">
                {phases.map((phase, index) => (
                    <li key={index} className={`font-bold ${selectedSection === phase.path ? 'bg-green-200' : ''}`}>
                        {phase.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProgressNav;
