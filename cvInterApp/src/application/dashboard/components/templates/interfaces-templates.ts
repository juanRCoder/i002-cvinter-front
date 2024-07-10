export interface Experiencia {
  profesion?: string;
  empresa?: string;
  dateStart?: string;
  dateEnd?: string;
  rol?: string;
}
export interface Education {
  instituto?: string;
  carrera?: string;
  nivel?: string;
  anoStart?: number;
  anoEnd?: number;
}
export interface Redes {
  red: string;
  user: string;
}
export interface TechSkills {
  skill: string;
  nivel: string;
}
export interface Idiomas {
  languaje: string;
  nivel: string;
}
export interface Certificados {
  skill: string;
  entidadEmisora: string;
  ano: number;
}
export interface Location {
  red: string;
  user: string;
}
export interface Template5Props {
  name?: string;
  lastName?: string;
  titulo?: string;
  bio?: string;
  education?: Education[];
  experiencia?: Experiencia[];
  redes?: Redes[];
  techSkills?: TechSkills[];
  idiomas?: Idiomas[];
  certificados?: Certificados[];
  softSkills?: string[];
  location?: Location[];
}
