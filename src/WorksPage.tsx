import React, { ReactElement, useState, useEffect } from 'react';
import { useParams, useHistory, Switch, Route, useLocation } from 'react-router-dom';
import {
  mergeStyles,
  Dropdown,
  Pivot,
  PivotItem,
  IDropdownOption,
  Text,
  Panel,
  PanelType,
  FontWeights,
} from 'office-ui-fabric-react';
import { parse } from 'query-string';
import { Card } from '@uifabric/react-cards';
import ReactMarkdown from 'react-markdown/with-html';
import PageTemplate from './PageTemplate';
import { useIsMobile } from './helpers';
import ThemedSeparator from './ThemedSeparator';
import { THEME_PRIMARY, WorkCategory, Work } from './constants';
import { WORK_CATEGORIES, WORK_SUBCATEGORIES, WORKS } from './data';

const dropdownOptions: IDropdownOption[] = [
  { key: WorkCategory.largeEnsemble, text: 'Large Ensemble' },
  { key: WorkCategory.chamberSolo, text: 'Chamber and Solo' },
  { key: WorkCategory.filmVideo, text: 'Film and Video' },
  { key: WorkCategory.electronic, text: 'Electronic' },
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

function getWork(workId: null | string): null | Work {
  if (!workId) return null;
  return WORKS[workId];
}

export default function WorksPage(): ReactElement {
  const isMobile = useIsMobile();

  const { category: selectedTabKey } = useParams();
  const history = useHistory();
  const location = useLocation();
  const params = parse(location.search);
  const selectedWorkId = params.work ? params.work : null;

  const selectedWork = getWork(selectedWorkId as string | null);

  const [content, setContent] = useState<null | string>(null);
  useEffect(() => {
    (async () => {
      if (selectedWork) {
        let contentBody;
        try {
          contentBody = await import(`./content/${selectedWorkId}.md`);
          setContent(contentBody.default);
        } catch {
          setContent(null);
        }
      }
    })();
  }, [selectedWork, setContent]);

  function openPanel(workId: string): void {
    history.replace(`/works/${selectedTabKey}?work=${workId}`);
    setContent(null);
  }

  return (
    <PageTemplate title="Works">
      {isMobile ? (
        <Dropdown
          selectedKey={selectedTabKey}
          onChange={(event, item) => item && history.replace(`/works/${item.key}`)}
          options={dropdownOptions}
        />
      ) : (
        <Pivot
          selectedKey={selectedTabKey}
          onLinkClick={item => item && history.replace(`/works/${item.props.itemKey}`)}
        >
          {dropdownOptions.map(option => (
            <PivotItem key={option.key} itemKey={option.key as string} headerText={option.text} />
          ))}
        </Pivot>
      )}

      <div className={cardsList}>
        <Switch>
          {dropdownOptions.map(option => (
            <Route path={`/works/${option.key}`} key={option.key}>
              {WORK_CATEGORIES[option.key].map(subCategoryId => {
                const subCategory = WORK_SUBCATEGORIES[subCategoryId];
                return (
                  <div className={subCategoryGroup} key={subCategoryId}>
                    {subCategory.title && (
                      <Text block variant="xLarge" className={subCategoryTitle}>
                        {subCategory.title}
                      </Text>
                    )}

                    {subCategory.works.map(workId => {
                      const work = WORKS[workId];
                      return (
                        <Card
                          horizontal
                          className={cardClassName}
                          onClick={() => openPanel(workId)}
                          key={workId}
                        >
                          <Card.Item styles={{ root: { width: '100%' } }}>
                            <Text block variant="large">
                              {work.title}
                            </Text>
                            <Text block variant="medium" style={{ fontStyle: 'italic' }}>
                              {work.year}
                            </Text>
                          </Card.Item>
                        </Card>
                      );
                    })}
                  </div>
                );
              })}
            </Route>
          ))}
        </Switch>
      </div>

      <Panel
        isOpen={Boolean(selectedWork)}
        onDismiss={() => history.replace(`/works/${selectedTabKey}`)}
        type={PanelType.medium}
        isLightDismiss
        overlayProps={{ isDarkThemed: true }}
      >
        {selectedWork && (
          <>
            <Text variant="xLarge" style={{ color: THEME_PRIMARY }} block>
              {selectedWork.title}
            </Text>
            {selectedWork.subtitle && (
              <Text variant="medium" style={{ color: THEME_PRIMARY }} block>
                {selectedWork.subtitle}
              </Text>
            )}
            <ThemedSeparator />
            <div className={detailsClassName}>
              {selectedWork.instrumentation && (
                <div>
                  <Text>For {selectedWork.instrumentation}</Text>
                </div>
              )}

              <div>
                <Text styles={{ root: { fontWeight: FontWeights.bold } }}>Composed:</Text>{' '}
                <Text>{selectedWork.year}</Text>
              </div>

              {selectedWork.commissionedBy && (
                <div>
                  <Text styles={{ root: { fontWeight: FontWeights.bold } }}>Commissioned by:</Text>{' '}
                  <Text>{selectedWork.commissionedBy}</Text>
                </div>
              )}
            </div>
            {content && <ReactMarkdown source={content} escapeHtml={false} />}
          </>
        )}
      </Panel>
    </PageTemplate>
  );
}
