import React, { ReactElement, ReactNode } from 'react';
import { Text, mergeStyles } from 'office-ui-fabric-react';
import ThemedSeparator from './ThemedSeparator';
import { THEME_PRIMARY } from './constants';
import { useIsMobile } from './helpers';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
}

const header = mergeStyles({
  textAlign: 'right',
});

export default function PageTemplate(props: PageTemplateProps): ReactElement {
  const isMobile = useIsMobile();

  const pageBackground = mergeStyles({
    padding: isMobile ? 24 : '24px 36px',
    width: '100%',
  });

  return (
    <div className={pageBackground}>
      <div className={isMobile ? header : undefined}>
        <Text variant="xxLarge" style={{ color: THEME_PRIMARY }}>
          {props.title}
        </Text>
        <ThemedSeparator />
      </div>
      {props.children}
    </div>
  );
}
