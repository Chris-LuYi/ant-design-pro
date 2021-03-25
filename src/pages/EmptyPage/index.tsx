import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import FormValidateStatic from './FormValidateStatic';
import type { ProColumns, ActionType } from '@ant-design/pro-table';

import ProTable from '@ant-design/pro-table';

// import services from '@/services/ant-design-pro';

// const { api } = services;
// console.log(api.addRule);
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '123',
      dataIndex: 'name',
      tip: '规则名称是唯一的 key',
      render: (dom, entity) => {
        return (
          <a>
            {dom} {entity.updatedAt}
          </a>
        );
      },
    },
  ];

  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <ProTable<API.RuleListItem, API.PageParams> request={api.rule} columns={columns} />;
      <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div>
    </PageContainer>
  );
};
