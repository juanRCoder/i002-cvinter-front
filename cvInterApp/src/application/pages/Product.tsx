import React from 'react';

interface TemplateProps {
  name: string;
  image: string;
}

const Template: React.FC<TemplateProps> = ({ name, image }) => {
  return (
    <div className="text-center w-1/2 md:w-1/4 lg:w-1/6 p-2">
      <img src={image} alt={name} className="mx-auto mb-2 rounded-lg shadow-lg" />
      <div className="font-bold">{name}</div>
    </div>
  );
};

const TemplatesGallery: React.FC = () => {
  const templates = [
    { name: 'Elegante', image: 'src/assets/cv_1.png' },
    { name: 'ejecutivo', image: 'src/assets/cv_2.png' },
    { name: 'Soft', image: 'src/assets/cv_3.png' },
    { name: 'Clasico', image: 'src/assets/cv_4.png' },
    { name: 'New', image: 'src/assets/cv_5.png' },
  ];

  return (
    <div className="relative flex flex-wrap justify-center gap-3 my-4 bg-[#95BE9E] pt-40">
      {templates.map((template) => (
        <Template key={template.name} name={template.name} image={template.image} />
      ))}
    </div>
  );
};

export default TemplatesGallery;
