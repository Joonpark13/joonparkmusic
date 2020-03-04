import React, { ReactElement } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';

export default function ContactPage(): ReactElement {
  const isMobile = useIsMobile();
  return (
    <PageTemplate title="Contact">
      <ReactTypeformEmbed
        url="https://joonpark13.typeform.com/to/tT6G7B"
        style={{ position: 'static', height: isMobile ? 580 : 800 }}
      />
    </PageTemplate>
  );
}
