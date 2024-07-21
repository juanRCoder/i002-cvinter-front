import { useEffect, useRef } from "react";
import { useCvStore } from "../../../zustand/store/CvStore";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";
import Template5 from "../templates/Template5";

const CVPreview: React.FC = () => {
  const localCvRef = useRef<HTMLDivElement>(null);
  const { setCVRef, templateSelected, name, lastName, bio, titulo, experiencia, education, techSkills, softSkills, idiomas, certificados, personaInfo } = useCvStore();

  useEffect(() => {
    setCVRef(localCvRef);
  }, [setCVRef]);

  const renderSelectedTemplate = () => {
    const props = {
      templateSelected,
      name: name || "Olivia",
      lastName: lastName || "Wilson",
      bio,
      titulo,
      experiencia,
      education,
      techSkills,
      softSkills,
      idiomas,
      certificados,
      personaInfo
    };

    switch (templateSelected) {
      case 1:
        return <Template1 {...props} />;
      case 2:
        return <Template2 {...props} />;
      case 3:
        return <Template3 {...props} />;
      case 4:
        return <Template4 {...props} />;
      case 5:
        return <Template5 {...props} />;
      default:
        return <p>No template selected or template not supported.</p>;
    }
  };

  return (
    <>
      <div ref={localCvRef}>
        {renderSelectedTemplate()}
      </div>
    </>
  );
};

export default CVPreview;
