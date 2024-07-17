import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProgressNav.css';

const ProgressNav = () => {
    const location = useLocation();
    const [selectedSection, setSelectedSection] = useState('');
    useEffect(() => {
        const currentSection = location.pathname.split('/')[2] || '';
        setSelectedSection(currentSection);
    }, [location.pathname]);

    const phases = [
        { path: '', name: 'Elige Plantilla' },
        { path: 'bio', name: 'Bio' },
        { path: 'experience', name: 'Experiencia' },
        { path: 'education', name: 'Educacion' },
        { path: 'tech-skills', name: 'Tech Skills' },
        { path: 'soft-skills', name: 'Soft Skills' },
        { path: 'other-data', name: 'Otros Datos' },
        { path: 'upload', name: 'Descarga' }
    ];

    return (
        <div className="shadow-custom shadow-blue-logo/50 pt-8">
            <ul className="m-auto max-w-7xl flex items-center justify-center">
                {phases.map((phase, index) => (
                    <li
                        key={index}
                        className={`${selectedSection === phase.path ? 'bg-green-200' : ''} transition font-normal text-md font-lato text-gray-900/80 mx-2 py-2 px-4 rounded-full`}
                    >
                        {phase.name}
                    </li>
                ))}
            </ul>
        </div>



    );
}

export default ProgressNav;
