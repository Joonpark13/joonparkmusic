import React, { ReactElement, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Nav as FabricNav,
  Layer,
  mergeStyles,
  IconButton,
  classNamesFunction,
} from 'office-ui-fabric-react';
import { useIsMobile } from './helpers';
import { WorkCategory } from './constants';

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  {
    name: 'Works',
    url: '',
    links: [
      { name: 'Large Ensemble', url: `/works/${WorkCategory.largeEnsemble}` },
      { name: 'Chamber and Solo', url: `/works/${WorkCategory.chamberSolo}` },
      { name: 'Film and Video', url: `/works/${WorkCategory.filmVideo}` },
      { name: 'Electronic', url: `/works/${WorkCategory.electronic}` },
    ],
    isExpanded: true,
  },
  { name: 'Contact', url: '/contact' },
];

const buttonSize = 52;
const buttonClassName = mergeStyles({
  height: buttonSize,
  width: buttonSize,
  selectors: {
    ':hover': {
      backgroundColor: 'none',
    },
  },
});

const layerContentBackground = mergeStyles({
  backgroundColor: 'white',
  height: '100vh',
  width: '208px',
});

const layerStyles = {
  content: {
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};

export default function Nav(): ReactElement {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navClassName = mergeStyles({
    minWidth: 200,
    ...(!isMobile && !isHome && { borderRight: '1px #D8D6D6 solid' }),
  });

  const [open, setOpen] = useState(false);

  const nav = <FabricNav groups={[{ links }]} />;

  if (isMobile) {
    return (
      <Layer styles={open ? layerStyles : undefined}>
        <div className={open ? layerContentBackground : undefined}>
          <IconButton
            iconProps={{
              iconName: open ? 'Cancel' : 'GlobalNavButton',
              style: !open && isHome ? { color: 'white' } : undefined,
              styles: { root: { fontSize: 20 } },
            }}
            className={buttonClassName}
            onClick={() => setOpen(!open)}
          />
          {open && <div>{nav}</div>}
        </div>
      </Layer>
    );
  }
  return <div className={navClassName}>{nav}</div>;
}
