import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { mergeStyles, Text } from 'office-ui-fabric-react';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';
import about from './about.jpg';

const text = mergeStyles({
  display: 'block',
  marginBottom: 20,
});

const spacer = mergeStyles({
  height: 20,
});

const content = mergeStyles({
  maxWidth: 980,
  margin: 'auto',
});

export default function AboutPage(): ReactElement {
  const isMobile = useIsMobile();

  const imgClassName = mergeStyles({
    width: isMobile ? 280 : 340,
    display: 'block',
    margin: '38px auto',
  });

  return (
    <PageTemplate title="About">
      <div className={content}>
        <img src={about} className={imgClassName} />

        <Text variant="large" className={text}>
          Hi, thanks for visiting my website!
        </Text>

        <Text variant="mediumPlus" className={text}>
          I'm a composer based in Chicago, IL and I write a variety of music for ensembles, chamber
          groups, and media. I graduated with a Bachelor of Music in Music Composition from the Bienen
          School of Music at Northwestern University. I've been fortunate enough to have music
          performed by incredible ensembles such as the Northwestern University Contemporary Music
          Ensemble, the Windy City Winds, and the Ithaca High School Choir, among others. In addition
          to composing, I conduct my own music and enjoy audio recording and production.
        </Text>

        <Text variant="mediumPlus" className={text}>
          I work as a <a href="http://joonpark.me/">software engineer</a> by day, and I write{' '}
          <a href="https://medium.com/@joon.park13">short fiction and nonfiction</a> if musical
          inspiration doesn't strike. When I'm outside you'll usually find me playing ultimate
          frisbee or skiing. Feel free to check out my works <Link to="/works">here</Link> or reach
          out with any inquiries <Link to="/contact">here</Link>.
        </Text>

        <div className={spacer} />
      </div>
    </PageTemplate>
  );
}
