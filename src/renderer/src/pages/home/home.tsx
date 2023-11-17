import MainComposer from '@renderer/components/MainComposer/MainComposer';
import MediaInputs from '@renderer/components/MediaInputs/MediaInput';
import SavBar from '@renderer/components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
          </div>
          <div className={scss.gridInput}>
            <MainComposer />
            <MediaInputs />
          </div>
          <div className={scss.gridTabs} />
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
