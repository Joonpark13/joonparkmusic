declare module 'react-typeform-embed' {
  import React from 'react';

  export interface ReactTypeformEmbedProps {
    url: string,
    style: object
  }

  export class ReactTypeformEmbed extends React.Component<ReactTypeformEmbedProps, any> {}
}
