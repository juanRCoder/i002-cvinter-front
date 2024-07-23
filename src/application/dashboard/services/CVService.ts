import axios from "axios";
import {
  Education,
  Experiencia,
  TechSkills,
  Idiomas,
  Certificados,
  Info,
} from "../components/templates/interfaces-templates";
import { Template5Props } from "../components/templates/interfaces-templates";

export const postCV = async (
  name: string,
  lastName: string,
  titulo: string,
  bio: string,
  education?: Education[],
  experiencia?: Experiencia[],
  techSkills?: TechSkills[],
  idiomas?: Idiomas[],
  certificados?: Certificados[],
  softSkills?: string[],
  personaInfo?: Info[]
) => {
  const cvData: Template5Props = {
    name,
    lastName,
    titulo,
    bio,
    education,
    experiencia,
    techSkills,
    idiomas,
    certificados,
    softSkills,
    personaInfo,
  };
  try {
    await axios.post("http://localhost:8080/api/users/upload-cv", cvData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("CV enviado correctamente");
  } catch (e) {
    console.error("No se pudo enviar el cv:", e);
    throw e;
  }
};
