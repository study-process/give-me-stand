import { FC } from 'react';
import { Tabs } from 'antd';
import { UserPage, StandsPage } from 'src/pages/index';

const { TabPane } = Tabs;

export const MainPage: FC = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Мои стенды" key="1">
          <UserPage />
        </TabPane>
        <TabPane tab="Занять стенд" key="2">
          <StandsPage />
        </TabPane>
      </Tabs>
    </div>
  )
}