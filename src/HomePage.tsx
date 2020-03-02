import React, { ReactElement } from 'react';
import { mergeStyles, DefaultButton, PrimaryButton, Text } from 'office-ui-fabric-react';
import { useIsMobile } from './helpers';
import hero from './hero.jpg';

const backgroundClassName = mergeStyles({
  width: '100%',
  height: '100vh',
});

const topLayerClassName = mergeStyles({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const spacer1 = mergeStyles({
  height: '108px',
});

const mainTextClassName = mergeStyles({
  textAlign: 'center',
});

const actionButtonsContainerClassName = mergeStyles({
  display: 'flex',
});

const subtitleStyleOverride = {
  color: 'white',
  display: 'block',
  fontFamily: '"Noto Sans JP", sans-serif',
  marginBottom: '20px',
};

const desktopButtonStyles = {
  width: '140px',
  height: '60px',
  fontSize: '24px',
};

export default function HomePage(): ReactElement {
  const isMobile = useIsMobile();

  const heroClassName = mergeStyles({
    position: 'fixed',
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    zIndex: -1,
    ...(isMobile ? {
      backgroundSize: '360%',
      backgroundPosition: 'bottom right',
    } : {
      backgroundSize: 'cover',
      backgroundPosition: 'bottom right 186px',
    }),
  });

  const horizontalSeparatorClassName = mergeStyles({
    width: isMobile ? '28px' : '32px',
  });

  const spacer2 = mergeStyles({
    height: isMobile ? '140px' : '28vh',
  });

  const titleStyleOverride = {
    color: 'white',
    display: 'block',
    marginBottom: '20px',
    fontFamily: '"Noto Sans JP", sans-serif',
    ...(isMobile ? { fontSize: '48px' } : {}),
  };

  return (
    <div className={backgroundClassName}>
      <div className={heroClassName} />
      <div className={topLayerClassName}>
        <div>
          <div className={spacer1} />
          <div className={mainTextClassName}>
            <Text variant={isMobile ? 'xxLarge' : 'mega'} style={titleStyleOverride}>Joon Park</Text>
            <Text variant={isMobile ? 'xLarge' : 'xxLarge'} style={subtitleStyleOverride}>Composer</Text>
          </div>
        </div>

        <div>
          <div className={actionButtonsContainerClassName}>
            <DefaultButton text="About" style={isMobile ? undefined : desktopButtonStyles } />
            <div className={horizontalSeparatorClassName} />
            <PrimaryButton text="Works" style={isMobile ? undefined : desktopButtonStyles } />
          </div>
          <div className={spacer2} />
        </div>
      </div>
    </div>
  );
}
