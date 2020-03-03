import React, { ReactElement, useState, useEffect } from 'react';
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import { mergeStyles, Dropdown, Pivot, PivotItem, IDropdownOption, Text, Panel, PanelType, FontWeights } from 'office-ui-fabric-react';
import { Card } from '@uifabric/react-cards';
import ReactMarkdown from 'react-markdown';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';
import ThemedSeparator from './ThemedSeparator';
import { THEME_PRIMARY, WORKS_CATEGORIES, WORKS, Work } from './constants';

const dropdownOptions: IDropdownOption[] = [
  { key: WORKS_CATEGORIES.largeEnsemble, text: 'Large Ensemble' },
  { key: WORKS_CATEGORIES.chamberSolo, text: 'Chamber and Solo' },
  { key: WORKS_CATEGORIES.filmVideo, text: 'Film and Video' },
  { key: WORKS_CATEGORIES.electronic, text: 'Electronic' },
];

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

  const [selectedWork, setSelectedWork]: [Work | null, Function] = useState(null);

  const [content, setContent] = useState(null);
  useEffect(() => {
    (async () => {
      if (selectedWork) {
        let contentBody;
        try {
          contentBody = await import(`./content/${selectedWork.id}.md`);
          setContent(contentBody.default);
        } catch {
          setContent(null);
        }
      }
    })();
  }, [selectedWork, setContent]);

  function openPanel(work) {
    setSelectedWork(work);
    setContent(null);
  }

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
          selectedKey={selectedTabKey}
          onLinkClick={
            item => item && history.replace(item.props.itemKey)
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
            <Route exact path={`/works/${option.key}`}>
              {WORKS[option.key].map(subCategory => (
                <div className={subCategoryGroup}>
                  <Text block variant="xLarge" className={subCategoryTitle}>{subCategory.title}</Text>

                  {subCategory.works.map(work => (
                    <Card horizontal className={cardClassName} onClick={() => openPanel(work)}>
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
            {content && <ReactMarkdown source={content} />}
          </>
        )}
      </Panel>
    </PageTemplate>
  );
}

