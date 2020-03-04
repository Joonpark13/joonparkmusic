export const THEME_PRIMARY = '#4E2A84';

export enum WORKS_CATEGORIES {
  largeEnsemble = 'large-ensemble',
  chamberSolo = 'chamber-solo',
  filmVideo = 'film-video',
  electronic = 'electronic',
}

export interface Subcategory {
  title?: string,
  works: Work[],
}

export interface Work {
  id: string,
  title: string,
  subtitle?: string,
  year: number,
  commissionedBy?: string,
  instrumentation?: string,
}

export const WORKS: { [key: string]: Subcategory[] } = {
  [WORKS_CATEGORIES.largeEnsemble]: [
    {
      title: 'Wind Ensemble',
      works: [
        {
          id: '1d024d80-17ee-40c9-b9af-41c2bdac6658',
          title: 'Journey to Eagle Peak',
          year: 2020,
          commissionedBy: 'Windy City Winds',
        },
        {
          id: 'adfdfb38-cd1f-4b07-9c18-6ec455de0346',
          title: 'Landscapes',
          year: 2017,
        },
        {
          id: 'ad54086a-e733-4b64-876d-2c900602a9c3',
          title: 'The Search for the Higgs',
          year: 2017,
        },
        {
          id: '30b000e4-2525-4648-9594-d38d54966462',
          title: 'Canta Che Ti Passa',
          subtitle: '“Sing and It Will Pass” – Fantasia for Wind Ensemble',
          year: 2017,
        },
        {
          id: 'b363fd2c-abb8-4d2e-a9aa-7f842d4ebf46',
          title: 'Chaos and Chorale',
          year: 2016,
        },
      ],
    },
    {
      title: 'SATB Choir',
      works: [
        {
          id: '45c1e22e-5093-4866-94ea-e77e35480c72',
          title: 'High Flight',
          year: 2017,
        },
        {
          id: 'd3119d5e-9fd0-4711-855f-dbf79c48a167',
          title: 'Dusk',
          year: 2014,
        },
        {
          id: 'e92d5d33-64a2-41a8-a0c7-40ee97f6f688',
          title: 'Ambivalence',
          year: 2013,
        },
        {
          id: '822b1df1-2df0-4a82-a4ae-6f11e020b859',
          title: 'A Miracle',
          year: 2012
        }
      ],
    },
    {
      title: 'String Orchestra',
      works: [
        {
          id: 'ea5b7981-ec00-4aeb-82d4-34857211eda2',
          title: 'Per Audacia Noctu',
          year: 2013,
        }
      ]
    },
    {
      title: 'Other',
      works: [
        {
          id: 'a8e535ed-a871-4ccb-9387-b42f807ec0f1',
          title: 'Illumination',
          year: 2017
        }
      ]
    }
  ],
  [WORKS_CATEGORIES.chamberSolo]: [
    {
      title: 'Brass Quintet',
      works: [
        {
          id: '0a5c98bc-cfaa-4b46-8f24-7830ca8a7a40',
          title: 'Two Movements for Brass Quintet',
          year: 2015,
        }
      ],
    },
    {
      title: 'Solo Piano',
      works: [
        {
          id: '61d80ed1-d3de-43e5-afbd-cd69a96743b8',
          title: 'Dear Future',
          year: 2016,
        },
        {
          id: 'fa65bad9-d5c4-4717-b70b-80c57750529a',
          title: "The Sky's the Limit",
          year: 2013,
        },
        {
          id: '81465e9b-5fda-4e7a-a96e-15386bce8776',
          title: 'Innocence',
          year: 2013,
        },
      ],
    },
    {
      title: 'Solo Flute',
      works: [
        {
          id: '1eac0a9e-64bb-42c2-9113-6e62e1a026b7',
          title: 'The Question of Tonality',
          year: 2016,
        },
        {
          id: 'ef351b0b-7f8d-4c95-b955-6b9f54b88a14',
          title: 'Octatonic Journey (Five Not Seven)',
          year: 2013,
        },
      ],
    },
    {
      title: 'Other',
      works: [
        {
          id: 'f484a500-2c1c-420e-93ec-add5aae59f6d',
          title: 'Strangers, Shadows, and Desert Wanderers',
          subtitle: 'Concerto for Oboe and String Quartet',
          year: 2016,
          instrumentation: 'Oboe and String Quartet',
        },
        {
          id: 'c3d93f53-0592-4b7c-9c53-aca3511ed1c9',
          title: 'A Scattering of Patchworks',
          year: 2014,
          instrumentation: 'Three Clarinets in B♭ and two Tenor Saxophones',
        },
        {
          id: '74223673-d8c3-494e-8443-006792f7916f',
          title: 'Abruptly Lost',
          subtitle: 'in three movements',
          year: 2014,
          instrumentation: 'Tenor Saxophone Duet',
        },
        {
          id: '7cc7454b-84f6-41af-9e80-faf9f933a1f0',
          title: 'Cool, But Where Are We Going?',
          year: 2014,
          instrumentation: 'Clarinet in B♭ Duet',
        },
        {
          id: '87c13124-54e4-4870-b43d-bf46a2b1d351',
          title: 'Regaches',
          year: 2014,
          instrumentation: 'Trumpet in B♭ and Tuba',
        },
        {
          id: 'c7fbaf87-adff-4665-bbf3-c2aa424f4b4b',
          title: 'Trio for Clarinet in B♭, Cello, and Piano',
          year: 2013,
          instrumentation: 'Clarinet in B♭, Cello, Piano',
        },
        {
          id: 'b7287bf4-9862-4be5-8214-1aaaffface63',
          title: 'Champion',
          year: 2013,
          instrumentation: 'Horn in F, Trombone, 2 Tubas, Percussion',
        },
      ]
    }
  ],
  [WORKS_CATEGORIES.filmVideo]: [
    {
      title: 'Feature Film Scores',
      works: [
        {
          id: '2b75d209-5efb-480f-a990-5a4a80b49089',
          title: 'The Helsings',
          subtitle: 'an Applause for a Cause Film',
          year: 2017,
        },
        {
          id: 'cc42740b-3302-4a16-aca1-df1c130f0419',
          title: 'Trust (and Other Lies We Tell Ourselves to Sleep at Night)',
          year: 2016,
        },
      ],
    },
    {
      title: 'Student Film Scores',
      works: [
        {
          id: '3b150b1e-77e1-48ff-ab47-92b6f23025a7',
          title: 'Lottery Lad!',
          year: 2016,
        },
        {
          id: '7ac6d60e-b2d6-4ed3-8dbe-3f4385b674f2',
          title: 'Roadside',
          year: 2015,
        },
        {
          id: 'd8abe77c-2ca7-4c06-921b-f5d750610883',
          title: 'Shambles',
          year: 2014,
        },
        {
          id: '3676866a-c571-4251-b460-77c3a4f89a89',
          title: 'Quince',
          year: 2014,
        },
      ],
    },
    {
      title: 'Trailers',
      works: [
        {
          id: 'f5e0ed44-d4b1-4e74-8312-6b5a42fd76a8',
          title: 'The Red Rator',
          year: 2013,
        }
      ],
    },
  ],
  [WORKS_CATEGORIES.electronic]: [
    {
      works: [
        {
          id: 'c8665715-aca1-4839-8559-c8701eaa2372',
          title: 'Stars of the Old Astronomer',
          year: 2015,
        },
        {
          id: '643837c3-3065-4b55-94e9-491777e08872',
          title: 'An Exploration of Music Technology',
          year: 2015,
        },
      ],
    },
  ],
};
