import { create } from "zustand";
import {
  Template5Props,
  Redes,
  Experiencia,
  Education,
  TechSkills,
  Idiomas,
  Certificados,
  Location,
} from "../../dashboard/components/templates/interfaces-templates";

interface CvStore extends Template5Props {
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

  addRed: (red: Redes) => void;
  editRed: (red: string, user: string) => void;
  removeRed: (red: string) => void;

  addLocation: (location: Location) => void;
  editLocation: (red: string, user: string) => void;
  removeLocation: (red: string) => void;
}

export const useCvStore = create<CvStore>((set) => ({
  techSkills: [
    { skill: "javascript", nivel: "intermedio" },
    { skill: "python", nivel: "basico" },
    { skill: "react", nivel: "avanzado" },
  ],
  education: [
    {
      instituto: "Universidad Increible",
      carrera: "Lic. en Administracion",
      nivel: "Terciario",
      anoStart: 2015,
      anoEnd: 2018,
    },
  ],
  experiencia: [
    {
      profesion: "Asistencia de Gerencia",
      empresa: "Empresa Increible",
      dateStart: "Agosto 2019",
      dateEnd: "Presente",
      rol: "Asistencia administrativa integral a Gerencia.Seguimiento de Agenda.Revision de idoneidad de documentos y control de archivos. Creacion de Presentaciones mensuales.",
    },
  ],
  softSkills: [
    "liderazgo",
    "Iniciativa",
    "Inteligencia Emocional",
    "Comunicacion",
  ],
  idiomas: [
    { languaje: "espanol", nivel: "nativo" },
    { languaje: "ingles", nivel: "basico" },
  ],
  certificados: [
    {
      skill: "JavaScript Developer",
      entidadEmisora: "Udemy",
      ano: 2020,
    },
    {
      skill: "Python Developer",
      entidadEmisora: "Platzi",
      ano: 2022,
    },
  ],
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

  addRed: (red: Redes) =>
    set((state) => ({ redes: [...(state.redes ?? []), red] })),
  editRed: (red: string, user: string) =>
    set((state) => ({
      redes: (state.redes ?? []).map((r) =>
        r.red === red ? { ...r, user } : r
      ),
    })),
  removeRed: (red: string) =>
    set((state) => ({
      redes: (state.redes ?? []).filter((r) => r.red !== red),
    })),

  addLocation: (location: Location) =>
    set((state) => ({ location: [...(state.location ?? []), location] })),
  editLocation: (red: string, user: string) =>
    set((state) => ({
      location: (state.location ?? []).map((loc) =>
        loc.red === red ? { ...loc, user } : loc
      ),
    })),
  removeLocation: (red: string) =>
    set((state) => ({
      location: (state.location ?? []).filter((loc) => loc.red !== red),
    })),
}));
