import { create } from "zustand";
import {
  Template5Props,
  Experiencia,
  Education,
  TechSkills,
  Idiomas,
  Certificados,
  Info,
} from "../../dashboard/components/templates/interfaces-templates";

interface CvStore extends Template5Props {
  cvRef: React.MutableRefObject<HTMLDivElement | null> | null;
  setCVRef: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  setTemplateSelected: (template: number) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setTitulo: (titulo: string) => void;
  setBio: (bio: string) => void;
  setExperiencia: (experiencia: Experiencia[]) => void;
  setEducation: (education: Education[]) => void;
  setTechSkills: (techSkills: TechSkills[]) => void;
  setSoftSkills: (softSkills: string[]) => void;
  setIdiomas: (idiomas: Idiomas[]) => void;
  setCertificados: (certificados: Certificados[]) => void;

  addInfo: (info: Info) => void;
  editInfo: (icon: string, dato: string) => void;
  removeInfo: (icon: string) => void;
  resetState: () => void;
}

export const useCvStore = create<CvStore>((set) => ({
  templateSelected: 0,
  name: "",
  lastName: "",
  titulo: "",
  bio: "",
  personaInfo: [],
  experiencia: [],
  education: [],
  techSkills: [],
  softSkills: [],
  idiomas: [],
  certificados: [],
  cvRef: null,
  
  setCVRef: (ref) => set({ cvRef: ref }),

  setTemplateSelected: (templateSelected: number) => set({ templateSelected }),
  setName: (name: string) => set({ name }),
  setLastName: (lastName: string) => set({ lastName }),
  setTitulo: (titulo: string) => set({ titulo }),
  setBio: (bio: string) => set({ bio }),
  setExperiencia: (experiencia: Experiencia[]) => set({ experiencia }),
  setEducation: (education: Education[]) => set({ education }),
  setTechSkills: (techSkills: TechSkills[]) => set({ techSkills }),
  setSoftSkills: (softSkills: string[]) => set({ softSkills }),
  setIdiomas: (idiomas: Idiomas[]) => set({ idiomas }),
  setCertificados: (certificados: Certificados[]) => set({ certificados }),

  addInfo: (info: Info) =>
    set((state) => ({ personaInfo: [...(state.personaInfo ?? []), info] })),
  editInfo: (icon: string, dato: string) =>
    set((state) => ({
      personaInfo: (state.personaInfo ?? []).map((info) =>
        info.icon === icon ? { ...info, dato } : info
      ),
    })),
  removeInfo: (icon: string) =>
    set((state) => ({
      personaInfo: (state.personaInfo ?? []).filter(
        (info) => info.icon !== icon
      ),
    })),
  // RESETEO PARA CAMBIAR DE CV's
  resetState: () =>
    set({
      name: "",
      lastName: "",
      titulo: "",
      bio: "",
      personaInfo: [],
      experiencia: [],
      education: [],
      techSkills: [],
      softSkills: [],
      idiomas: [],
      certificados: [],
    }),
}));
