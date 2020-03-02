import React, { ReactElement, useState } from 'react';
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import { mergeStyles, Dropdown, Pivot, PivotItem, IDropdownOption, Text, Panel, PanelType, FontWeights } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';
import ThemedSeparator from './ThemedSeparator';
import JourneyToEaglePeak from './content/JourneyToEaglePeak';
import { THEME_PRIMARY, WORKS_CATEGORIES, WORKS_PATHS } from './constants';

const dropdownOptions: IDropdownOption[] = [
  { key: WORKS_CATEGORIES.largeEnsemble, text: 'Large Ensemble' },
  { key: WORKS_CATEGORIES.chamberSolo, text: 'Chamber and Solo' },
  { key: WORKS_CATEGORIES.filmVideo, text: 'Film and Video' },
];

const WORKS = {
  [WORKS_CATEGORIES.largeEnsemble]: [
    {
      title: 'Wind Ensemble',
      works: [
        {
          title: 'Journey to Eagle Peak',
          year: 2020,
          premieredBy: 'Windy City Winds',
          content: JourneyToEaglePeak,
        },
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
  [WORKS_CATEGORIES.chamberSolo]: [],
  [WORKS_CATEGORIES.filmVideo]: [],
};

const pathToCategoryMap = {
  [WORKS_PATHS.largeEnsemble]: WORKS_CATEGORIES.largeEnsemble,
  [WORKS_PATHS.chamberSolo]: WORKS_CATEGORIES.chamberSolo,
  [WORKS_PATHS.filmVideo]: WORKS_CATEGORIES.filmVideo,
};

const categoryToPathMap = {
  [WORKS_CATEGORIES.largeEnsemble]: WORKS_PATHS.largeEnsemble,
  [WORKS_CATEGORIES.chamberSolo]: WORKS_PATHS.chamberSolo,
  [WORKS_CATEGORIES.filmVideo]: WORKS_PATHS.filmVideo,
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

  const { category: path } = useParams();
  const selectedTabKey = pathToCategoryMap[path];
  const history = useHistory();

  const [selectedWork, setSelectedWork] = useState(null);

  const Content = selectedWork ? selectedWork.content : null;

  return (
    <PageTemplate title="Works">
      {isMobile ? (
        <Dropdown
          selectedKey={selectedTabKey}
          onChange={(event, item) => item && history.replace(categoryToPathMap[item.key])}
          options={dropdownOptions}
        />
      ) : (
        <Pivot
          selectedKey={selectedTabKey}
          onLinkClick={
            item => item && history.replace(categoryToPathMap[item.props.itemKey])
          }
        >
          {dropdownOptions.map(option => (
            <PivotItem key={option.key} itemKey={option.key} headerText={option.text} />
          ))}
        </Pivot>
      )}

      <div className={cardsList}>
        <Switch>
          {dropdownOptions.map(option => (
            <Route exact path={`/works/${categoryToPathMap[option.key]}`}>
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

