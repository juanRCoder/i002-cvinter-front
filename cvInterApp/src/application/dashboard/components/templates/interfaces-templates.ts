export interface Experiencia {
  profesion?: string;
  empresa?: string;
  dateStart?: string;
  dateEnd?: string;
  descripcion?: string;
}
export interface Education {
  instituto?: string;
  carrera?: string;
  nivel?: string;
  anoStart?: number;
  anoEnd?: number;
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
export interface Info {
  icon: string;
  dato: string;
}
export interface Template5Props {
  name?: string;
  lastName?: string;
  titulo?: string;
  bio?: string;
  education?: Education[];
  experiencia?: Experiencia[];
  techSkills?: TechSkills[];
  idiomas?: Idiomas[];
  certificados?: Certificados[];
  softSkills?: string[];
  personaInfo?: Info[];
}
