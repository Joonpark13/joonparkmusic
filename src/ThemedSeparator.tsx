import React from 'react';
import { Separator } from 'office-ui-fabric-react';
import { THEME_PRIMARY } from './constants';

const separatorStyles = {
  root: {
    selectors: {
      '::before': {
        backgroundColor: THEME_PRIMARY,
      },
    },
  },
};

export default function ThemedSeparator() {
  return <Separator styles={separatorStyles} />;
}
