import { PageContainer } from '@ant-design/pro-layout';
import React, { useRef } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import type { ProDescriptionsActionType } from '@ant-design/pro-descriptions';
import ProDescriptions from '@ant-design/pro-descriptions';
import { Button } from '@medisys/component';
import { sleep } from '@medisys/utils';
import { currentUser } from '@/services/ant-design-pro/api';
import { ProInput } from '@/components';

export default () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  const actionRef = useRef<ProDescriptionsActionType>();
  console.log(actionRef);
  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      {/* <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
      </div> */}
      <div>
        <ProDescriptions
          actionRef={actionRef}
          title="User Information"
          request={currentUser}
          // extra={<Button type="link">修改</Button>}
        >
          <ProDescriptions.Item
            label="Display Name"
            dataIndex={['user', 'name']}
            tooltip="123"
          ></ProDescriptions.Item>
          <ProDescriptions.Item label="Username" dataIndex={['user', 'userName']} />
          <ProDescriptions.Item dataIndex="date" label="日期" valueType="date" />
          <ProDescriptions.Item label="money" dataIndex="money" valueType="money" />
          <ProDescriptions.Item label="文本" valueType="option">
            <Button
              type="primary"
              onClick={() => {
                actionRef.current?.reload();
              }}
              key="reload"
            >
              刷新
            </Button>
            <Button key="rest">重置</Button>
          </ProDescriptions.Item>
        </ProDescriptions>
      </div>
    </PageContainer>
  );
};
