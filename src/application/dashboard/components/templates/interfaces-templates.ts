export interface Experiencia {
  id: number;
  profesion?: string;
  empresa?: string;
  dateStart?: string | number;
  dateEnd?: string | number;
  descripcion?: string;
}
export interface Education {
  id: number;
  instituto?: string;
  carrera?: string;
  nivel?: string;
  dateStart?: string | number;
  dateEnd?: string | number;
}
export interface TechSkills {
  id: number;
  skill: string;
  nivel: string;
}
export interface Idiomas {
  languaje: string;
  nivel: string;
}
export interface Certificados {
  id: number;
  skill: string;
  entidadEmisora: string;
  ano: string | number;
}
export interface Info {
  icon: string;
  dato: string;
}
export interface Template5Props {
  templateSelected?: number;
  name?: string | undefined;
  lastName?: string | undefined;
  titulo?: string | undefined;
  bio?: string;
  education?: Education[];
  experiencia?: Experiencia[];
  techSkills?: TechSkills[];
  idiomas?: Idiomas[];
  certificados?: Certificados[];
  softSkills?: string[];
  personaInfo?: Info[];
}
