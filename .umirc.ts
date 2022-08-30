import { defineConfig } from '@umijs/max';
import zhCN from 'antd/lib/locale/zh_CN';

export default defineConfig({
  antd: {
    // configProvider
    configProvider: {
      locale: zhCN,
    },
    // 暗黑模式
    dark: true,
    // babel-plugin-import
    import: true,
    // less or css, default less
    style: 'less',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
