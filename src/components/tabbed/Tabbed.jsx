import { useState } from 'react';
import List from '../list/List';

export default function Tabbed({
  tabs,
  fetchTabContent,
  tabType,
  buttonsClasses = '',
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsContent, setTabsContent] = useState(
    tabs.map(({ content }) => (content ? content : null)),
  );

  async function changeTab(tab) {
    setActiveTab(tab);

    if (!tabsContent[tab]) {
      const nextTabContent = await fetchTabContent();

      setTabsContent((prevTabsContent) => {
        const newTabsContent = [...prevTabsContent];
        newTabsContent[tab] = nextTabContent;

        return newTabsContent;
      });
    }
  }

  return (
    <div>
      <List list={tabs} keyFn={(tab) => tab.name} classes={`${buttonsClasses}`}>
        {(tab, index) => (
          <button className="" onClick={() => changeTab(index)}>
            {tab.name}
          </button>
        )}
      </List>
      <article>
        {tabsContent[activeTab] ? tabsContent[activeTab] : null}
      </article>
    </div>
  );
}
