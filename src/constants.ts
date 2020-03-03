export const THEME_PRIMARY = '#4E2A84';

export enum WORKS_CATEGORIES {
  largeEnsemble = 'large-ensemble',
  chamberSolo = 'chamber-solo',
  filmVideo = 'film-video',
  electronic = 'electronic',
}

export interface Work {
  id: string,
  title: string,
  year: number,
  premieredBy?: string,
}

interface Subcategory {
  title: string,
  works: Work[],
}

export const WORKS: { [key: string]: Subcategory[] | Work[] } = {
  [WORKS_CATEGORIES.largeEnsemble]: [
    {
      title: 'Wind Ensemble',
      works: [
        {
          id: '1d024d80-17ee-40c9-b9af-41c2bdac6658',
          title: 'Journey to Eagle Peak',
          year: 2020,
          premieredBy: 'Windy City Winds',
        },
        {
          id: '30b000e4-2525-4648-9594-d38d54966462',
          title: 'Canta Che Ti Passa',
          year: 2017
        },
      ]
    },
    {
      title: 'SATB Choir',
      works: [
        {
          id: '45c1e22e-5093-4866-94ea-e77e35480c72',
          title: 'High Flight',
          year: 2017
        },
      ]
    }
  ],
  [WORKS_CATEGORIES.chamberSolo]: [],
  [WORKS_CATEGORIES.filmVideo]: [],
  [WORKS_CATEGORIES.electronic]: [],
};
