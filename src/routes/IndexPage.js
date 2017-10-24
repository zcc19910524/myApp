import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.home} />
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
