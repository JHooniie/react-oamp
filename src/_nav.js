import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilChartPie,
  cilSettings,
  cilDescription,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilMonitor,
  cilFolderOpen,
  cilFile,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: '보고서',
    to: '/base',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '콜 보고서',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: '서비스 메뉴 보고서',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: '채널 점유율 보고서',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: '자원사용 보고서',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '모니터링',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '자원사용 모니터링',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: '채널 모니터링',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: '프로세스 모니터링',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: '이벤트 모니터링',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '관리',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '사용자 관리',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: '코드 관리',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: '시스템 및 프로세스 관리',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: '공휴일 관리',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: '서비스코드 관리',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: '멘트파일 관리',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: '로그뷰어',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: '다중파일전송',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '제어',
    to: '/buttons',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '프로세스제어',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: '시나리오 배포 적용',
        to: '/buttons/buttons',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '한솔인티큐브',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '공지사항',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: '버전 업데이트',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: '사용 메뉴얼',
        to: '/icons/brands',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
