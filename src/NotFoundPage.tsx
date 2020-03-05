import React, { ReactElement } from 'react';
import { Text, mergeStyles } from 'office-ui-fabric-react';

const container = mergeStyles({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function NotFoundPage(): ReactElement {
  return (
    <div className={container}>
      <Text variant="large">Sorry, that page doesn't exist.</Text>
    </div>
  );
}