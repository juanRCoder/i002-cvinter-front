import { useNavigate } from "react-router-dom";
import NextButton from "../NextButton";
import { useCvStore } from "../../../zustand/store/CvStore";
import SectionSocialMedia from "../SectionSocialMedia";
import SectionInfo from "../SectionInfo";

const Bio: React.FC = () => {
  const navigate = useNavigate();
  const { bio, setBio, name, setName, lastName, setLastName, titulo, setTitulo, personaInfo = [], addInfo, editInfo, removeInfo } = useCvStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    // Update corresponding state based on input name
    switch (name) {
      case "bio":
        setBio(value);
        break;
      case "titulo":
        setTitulo(value);
        break;
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "linkedin":
      case "github":
      case "portfolio":
      case "behance":
      case "email":
      case "telephone":
      case "address":
        if (value) {
          if (personaInfo.find(inf => inf.icon === name)) {
            editInfo(name, value);
          } else {
            addInfo({ icon: name, dato: value });
          }
        } else {
          removeInfo(name);
        }
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    navigate("../experience");
  };

  return (
    <div className="scale-95 font-lato flex flex-col ">
      <div className=" bg-white">
        <form className="">
          {/* Sección "Sobre mí" */}
          <SectionInfo 
            bio={bio || ""} 
            onChange={handleChange} 
            name={name || ""} 
            lastName={lastName || ""} 
            titulo={titulo || ""} 
            personaInfo={personaInfo || []} 
          />

          {/* Sección "Redes Sociales" */}
          <SectionSocialMedia onChange={handleChange} state={personaInfo} />

        </form>
      </div>
      <div className="mt-10">
        <NextButton
          onClick={handleNext}
          label="Guardar cambios y continuar"
        />
      </div>
    </div>
  );
};

export default Bio;
