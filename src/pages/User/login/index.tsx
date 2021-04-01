import {
  AlipayCircleOutlined,
  LockOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Space, message } from 'antd';
import React, { useState } from 'react';
import { useIntl, Link, history, FormattedMessage, SelectLang, useModel } from 'umi';
import { ProInput, ProForm, ProCheckbox } from '@/components/Form';
import Footer from '@/components/Footer';
import { KEYS } from '@/utils/constant';
import { login } from '@/services/ant-design-pro/api';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/** 此方法会跳转到 redirect 参数所在的位置 */
const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 10);
};

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);
    try {
      // 登录
      const msg = await login({ ...values });
      if (msg.access_token) {
        localStorage.setItem(KEYS.TOKEN, JSON.stringify(msg));
        message.success('Login success！');
        await fetchUserInfo();
        goto();
        return;
      }
      // 如果失败去设置用户错误信息
    } catch (error) {
      setLoginFail(true);
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang}>{SelectLang && <SelectLang />}</div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>Banchoong WMS</span>
            </Link>
          </div>
          <div className={styles.desc}>Some description here</div>
        </div>

        <div className={styles.main}>
          <ProForm
            initialValues={{
              autoLogin: true,
              grant_type: 'password',
              client_id: 'WMSWebApp',
              client_secret: '7@XOAGn_(5',
              scope: 'offline_access',
            }}
            submitter={{
              searchConfig: {
                submitText: intl.formatMessage({
                  id: 'pages.login.submit',
                }),
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              handleSubmit(values as API.LoginParams);
            }}
          >
            {loginFail && (
              <LoginMessage
                content={intl.formatMessage({
                  id: 'pages.login.accountLogin.errorMessage',
                })}
              />
            )}
            <>
              <ProInput
                name="username"
                fieldProps={{
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                width="md"
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                })}
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="pages.login.username.required" />,
                  },
                ]}
              />
              <ProInput.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                })}
                rules={[
                  {
                    required: true,
                    message: <FormattedMessage id="pages.login.password.required" />,
                  },
                ]}
              />
            </>
            <div
              style={{
                marginBottom: 12,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <a>
                <FormattedMessage id="pages.login.forgotPassword" />
              </a>
            </div>
          </ProForm>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
