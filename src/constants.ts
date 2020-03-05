export const THEME_PRIMARY = '#4E2A84';

export enum WorkCategory {
  largeEnsemble = 'large-ensemble',
  chamberSolo = 'chamber-solo',
  filmVideo = 'film-video',
  electronic = 'electronic',
}

export interface Subcategory {
  title?: string;
  works: string[];
}

export interface Work {
  title: string;
  subtitle?: string;
  year: number;
  commissionedBy?: string;
  instrumentation?: string;
}
