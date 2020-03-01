import React from 'react';
import ReactDOM from 'react-dom';
import { mergeStyles, loadTheme } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import App from './App';
import { THEME_PRIMARY } from './constants';

initializeIcons();

loadTheme({
  palette: {
    themePrimary: THEME_PRIMARY,
    themeDarkAlt: '#401F68',
  }
})

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    },
    ':global(a)': {
      color: '#5091CD',
    },
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
