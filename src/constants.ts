export const THEME_PRIMARY = '#4E2A84';

export enum WorkCategory {
  largeEnsemble = 'large-ensemble',
  chamberSolo = 'chamber-solo',
  filmVideo = 'film-video',
  electronic = 'electronic',
}

export interface Subcategory {
  title?: string,
  works: string[],
}

export interface Work {
  title: string,
  subtitle?: string,
  year: number,
  commissionedBy?: string,
  instrumentation?: string,
}

export const WORK_CATEGORIES: { [key: string]: string[] } = {
  [WorkCategory.largeEnsemble]: [
    '2fbeeaee-4d78-4a49-b5a6-da1881a9cb93',
    '0af48a44-a5ef-4ae7-b39d-cdd181a6312a',
    '333dbd32-ce3e-4bd7-b782-e417a89ffcd4',
    'e03a369f-edc4-4cf3-b004-89649adc0f7d',
  ],
  [WorkCategory.chamberSolo]: [
    '317d3b33-c8ba-4b93-9163-a5a2ed25181a',
    '7d8c580d-1fac-4291-a841-cff62224b491',
    'bdc1070a-f3cb-4392-847d-1747b35fbbaa',
    '6a9ef52e-edcd-4207-b9ed-946c55d8cd00',
  ],
  [WorkCategory.filmVideo]: [
    '4a1a6d47-f9c3-4a38-80d3-1521befb57a5',
    '474bed9f-a95d-42ce-b4d6-afa6e02a2ae7',
    '3a39d84b-649e-427d-bd13-cca993013192',
  ],
  [WorkCategory.electronic]: [
    '6575f2f4-46e1-47ea-8478-a156e45cd84c',
  ],
};

export const WORK_SUBCATEGORIES: { [key: string]: Subcategory } = {
  '2fbeeaee-4d78-4a49-b5a6-da1881a9cb93': {
    title: 'Wind Ensemble',
    works: [
      '1d024d80-17ee-40c9-b9af-41c2bdac6658',
      'adfdfb38-cd1f-4b07-9c18-6ec455de0346',
      'ad54086a-e733-4b64-876d-2c900602a9c3',
      '30b000e4-2525-4648-9594-d38d54966462',
      'b363fd2c-abb8-4d2e-a9aa-7f842d4ebf46',
    ],
  },
  '0af48a44-a5ef-4ae7-b39d-cdd181a6312a': {
    title: 'SATB Choir',
    works: [
      '45c1e22e-5093-4866-94ea-e77e35480c72',
      'd3119d5e-9fd0-4711-855f-dbf79c48a167',
      'e92d5d33-64a2-41a8-a0c7-40ee97f6f688',
      '822b1df1-2df0-4a82-a4ae-6f11e020b859',
    ],
  },
  '333dbd32-ce3e-4bd7-b782-e417a89ffcd4': {
    title: 'String Orchestra',
    works: [
      'ea5b7981-ec00-4aeb-82d4-34857211eda2',
    ],
  },
  'e03a369f-edc4-4cf3-b004-89649adc0f7d': {
    title: 'Other',
    works: [
      'a8e535ed-a871-4ccb-9387-b42f807ec0f1',
    ],
  },
  '317d3b33-c8ba-4b93-9163-a5a2ed25181a': {
    title: 'Brass Quintet',
    works: [
      '0a5c98bc-cfaa-4b46-8f24-7830ca8a7a40',
    ],
  },
  '7d8c580d-1fac-4291-a841-cff62224b491': {
    title: 'Solo Piano',
    works: [
      '61d80ed1-d3de-43e5-afbd-cd69a96743b8',
      'fa65bad9-d5c4-4717-b70b-80c57750529a',
      '81465e9b-5fda-4e7a-a96e-15386bce8776',
    ],
  },
  'bdc1070a-f3cb-4392-847d-1747b35fbbaa': {
    title: 'Solo Flute',
    works: [
      '1eac0a9e-64bb-42c2-9113-6e62e1a026b7',
      'ef351b0b-7f8d-4c95-b955-6b9f54b88a14',
    ],
  },
  '6a9ef52e-edcd-4207-b9ed-946c55d8cd00': {
    title: 'Other',
    works: [
'f484a500-2c1c-420e-93ec-add5aae59f6d',
'c3d93f53-0592-4b7c-9c53-aca3511ed1c9',
'74223673-d8c3-494e-8443-006792f7916f',
'7cc7454b-84f6-41af-9e80-faf9f933a1f0',
'87c13124-54e4-4870-b43d-bf46a2b1d351',
'c7fbaf87-adff-4665-bbf3-c2aa424f4b4b',
'b7287bf4-9862-4be5-8214-1aaaffface63',
    ],
  },
  '4a1a6d47-f9c3-4a38-80d3-1521befb57a5': {
    title: 'Feature Film Scores',
    works: [
'2b75d209-5efb-480f-a990-5a4a80b49089',
'cc42740b-3302-4a16-aca1-df1c130f0419',
    ],
  },
  '474bed9f-a95d-42ce-b4d6-afa6e02a2ae7': {
    title: 'Student Film Scores',
    works: [
'3b150b1e-77e1-48ff-ab47-92b6f23025a7',
'7ac6d60e-b2d6-4ed3-8dbe-3f4385b674f2',
'd8abe77c-2ca7-4c06-921b-f5d750610883',
'3676866a-c571-4251-b460-77c3a4f89a89',
    ],
  },
  '3a39d84b-649e-427d-bd13-cca993013192': {
    title: 'Trailers',
    works: [
'f5e0ed44-d4b1-4e74-8312-6b5a42fd76a8',
    ],
  },
  '6575f2f4-46e1-47ea-8478-a156e45cd84c': {
    works: [
'c8665715-aca1-4839-8559-c8701eaa2372',
'643837c3-3065-4b55-94e9-491777e08872',
    ],
  }
};

export const WORKS: { [key: string]: Work } = {
  '1d024d80-17ee-40c9-b9af-41c2bdac6658': {
    title: 'Journey to Eagle Peak',
    year: 2020,
    commissionedBy: 'Windy City Winds',
  },
  'adfdfb38-cd1f-4b07-9c18-6ec455de0346': {
    title: 'Landscapes',
    year: 2017,
  },
  'ad54086a-e733-4b64-876d-2c900602a9c3': {
    title: 'The Search for the Higgs',
    year: 2017,
  },
  '30b000e4-2525-4648-9594-d38d54966462': {
    title: 'Canta Che Ti Passa',
    subtitle: '“Sing and It Will Pass” – Fantasia for Wind Ensemble',
    year: 2017,
  },
  'b363fd2c-abb8-4d2e-a9aa-7f842d4ebf46': {
    title: 'Chaos and Chorale',
    year: 2016,
  },
  '45c1e22e-5093-4866-94ea-e77e35480c72': {
    title: 'High Flight',
    year: 2017,
  },
  'd3119d5e-9fd0-4711-855f-dbf79c48a167': {
    title: 'Dusk',
    year: 2014,
  },
  'e92d5d33-64a2-41a8-a0c7-40ee97f6f688': {
    title: 'Ambivalence',
    year: 2013,
  },
  '822b1df1-2df0-4a82-a4ae-6f11e020b859': {
    title: 'A Miracle',
    year: 2012
  },
  'ea5b7981-ec00-4aeb-82d4-34857211eda2': {
    title: 'Per Audacia Noctu',
    year: 2013,
  },
  'a8e535ed-a871-4ccb-9387-b42f807ec0f1': {
    title: 'Illumination',
    year: 2017
  },
  '0a5c98bc-cfaa-4b46-8f24-7830ca8a7a40': {
    title: 'Two Movements for Brass Quintet',
    year: 2015,
  },
  '61d80ed1-d3de-43e5-afbd-cd69a96743b8': {
    title: 'Dear Future',
    year: 2016,
  },
  'fa65bad9-d5c4-4717-b70b-80c57750529a': {
    title: "The Sky's the Limit",
    year: 2013,
  },
  '81465e9b-5fda-4e7a-a96e-15386bce8776': {
    title: 'Innocence',
    year: 2013,
  },
'1eac0a9e-64bb-42c2-9113-6e62e1a026b7': {
    title: 'The Question of Tonality',
    year: 2016,
  },
'ef351b0b-7f8d-4c95-b955-6b9f54b88a14': {
    title: 'Octatonic Journey (Five Not Seven)',
    year: 2013,
  },
'f484a500-2c1c-420e-93ec-add5aae59f6d': {
    title: 'Strangers, Shadows, and Desert Wanderers',
    subtitle: 'Concerto for Oboe and String Quartet',
    year: 2016,
    instrumentation: 'Oboe and String Quartet',
  },
'c3d93f53-0592-4b7c-9c53-aca3511ed1c9': {
    title: 'A Scattering of Patchworks',
    year: 2014,
    instrumentation: 'Three Clarinets in B♭ and two Tenor Saxophones',
  },
'74223673-d8c3-494e-8443-006792f7916f': {
    title: 'Abruptly Lost',
    subtitle: 'in three movements',
    year: 2014,
    instrumentation: 'Tenor Saxophone Duet',
  },
'7cc7454b-84f6-41af-9e80-faf9f933a1f0': {
    title: 'Cool, But Where Are We Going?',
    year: 2014,
    instrumentation: 'Clarinet in B♭ Duet',
  },
'87c13124-54e4-4870-b43d-bf46a2b1d351': {
    title: 'Regaches',
    year: 2014,
    instrumentation: 'Trumpet in B♭ and Tuba',
  },
'c7fbaf87-adff-4665-bbf3-c2aa424f4b4b': {
    title: 'Trio for Clarinet in B♭, Cello, and Piano',
    year: 2013,
    instrumentation: 'Clarinet in B♭, Cello, Piano',
  },
'b7287bf4-9862-4be5-8214-1aaaffface63': {
    title: 'Champion',
    year: 2013,
    instrumentation: 'Horn in F, Trombone, 2 Tubas, Percussion',
  },
'2b75d209-5efb-480f-a990-5a4a80b49089': {
        title: 'The Helsings',
        subtitle: 'an Applause for a Cause Film',
        year: 2017,
      },
'cc42740b-3302-4a16-aca1-df1c130f0419': {
        title: 'Trust (and Other Lies We Tell Ourselves to Sleep at Night)',
        year: 2016,
      },
'3b150b1e-77e1-48ff-ab47-92b6f23025a7': {
        title: 'Lottery Lad!',
        year: 2016,
      },
'7ac6d60e-b2d6-4ed3-8dbe-3f4385b674f2': {
        title: 'Roadside',
        year: 2015,
      },
'd8abe77c-2ca7-4c06-921b-f5d750610883': {
        title: 'Shambles',
        year: 2014,
      },
'3676866a-c571-4251-b460-77c3a4f89a89': {
        title: 'Quince',
        year: 2014,
      },
'f5e0ed44-d4b1-4e74-8312-6b5a42fd76a8': {
        title: 'The Red Rator',
        year: 2013,
      },
'c8665715-aca1-4839-8559-c8701eaa2372': {
        title: 'Stars of the Old Astronomer',
        year: 2015,
      },
'643837c3-3065-4b55-94e9-491777e08872': {
        title: 'An Exploration of Music Technology',
        year: 2015,
      },
};