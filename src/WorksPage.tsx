import React, { ReactElement, useState } from 'react';
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import { mergeStyles, Dropdown, Pivot, PivotItem, IDropdownOption, Text, Panel, PanelType, FontWeights } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';
import ThemedSeparator from './ThemedSeparator';
import JourneyToEaglePeak from './content/JourneyToEaglePeak';
import { THEME_PRIMARY } from './constants';

const dropdownOptions: IDropdownOption[] = [
  { key: 'large-ensemble', text: 'Large Ensemble' },
  { key: 'chamber-solo', text: 'Chamber and Solo' },
  { key: 'film-video', text: 'Film and Video' },
];

const WORKS = {
  'large-ensemble': [
    {
      title: 'Wind Ensemble',
      works: [
        { title: 'Journey to Eagle Peak', year: 2020, premieredBy: 'Windy City Winds', content: JourneyToEaglePeak },
        { title: 'Canta Che Ti Passa', year: 2017 },
      ]
    },
    {
      title: 'SATB Choir',
      works: [
        { title: 'High Flight', year: 2017 },
      ]
    }
  ],
  'chamber-solo': [],
  'film-video': [],
};

const cardsList = mergeStyles({
  marginTop: 32,
});

const subCategoryTitle = mergeStyles({
  marginBottom: 12,
});

const cardClassName = mergeStyles({
  marginBottom: 12,
  padding: 10,
});

const subCategoryGroup = mergeStyles({
  marginBottom: 32,
});

const detailsClassName = mergeStyles({
  marginBottom: 12,
});

export default function WorksPage(): ReactElement {
  const isMobile = useIsMobile();

  const { category: selectedTabKey } = useParams();
  const history = useHistory();

  const [selectedWork, setSelectedWork] = useState(null);

  const Content = selectedWork ? selectedWork.content : null;

  return (
    <PageTemplate title="Works">
      {isMobile ? (
        <Dropdown
          selectedKey={selectedTabKey}
          onChange={(event, item) => item && history.replace(item.key)}
          options={dropdownOptions}
        />
      ) : (
        <Pivot
          selectedKey={selectedTabKey as string}
          onLinkClick={
            item => item && history.replace(
              dropdownOptions.find(option => option.text === item.props.headerText).key
            )
          }
        >
          {dropdownOptions.map(option => (
            <PivotItem key={option.key} headerText={option.text} />
          ))}
        </Pivot>
      )}

      <div className={cardsList}>
        <Switch>
          {dropdownOptions.map(option => (
            <Route exact path={`/works/${option.key}`}>
              {WORKS[option.key].map(subCategory => (
                <div className={subCategoryGroup}>
                  <Text block variant="xLarge" className={subCategoryTitle}>{subCategory.title}</Text>

                  {subCategory.works.map(work => (
                    <Card horizontal className={cardClassName} onClick={() => setSelectedWork(work)}>
                      <Card.Item>
                        <Text block variant="large">{work.title}</Text>
                        <Text block variant="medium" style={{ fontStyle: 'italic' }}>{work.year}</Text>
                      </Card.Item>
                    </Card>
                  ))}
                </div>
              ))}
            </Route>
          ))}
        </Switch>
      </div>

      <Panel
        isOpen={Boolean(selectedWork)}
        onDismiss={() => setSelectedWork(null)}
        type={PanelType.medium}
      >
        {selectedWork && (
          <>
            <Text variant="xLarge" style={{ color: THEME_PRIMARY }} block>
              {selectedWork.title}
            </Text>
            <ThemedSeparator />
            <div className={detailsClassName}>
              <div>
                <Text styles={{ root: { fontWeight: FontWeights.bold } }}>Composed:</Text>
                {' '}
                <Text>{selectedWork.year}</Text>
              </div>

              {selectedWork.premieredBy && (
                <div>
                  <Text styles={{ root: { fontWeight: FontWeights.bold } }}>Premiered by:</Text>
                  {' '}
                  <Text>{selectedWork.premieredBy}</Text>
                </div>
              )}
            </div>
            {selectedWork.content && <Content />}
          </>
        )}
      </Panel>
    </PageTemplate>
  );
}

