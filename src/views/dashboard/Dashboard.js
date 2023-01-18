import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cilApps,
  cibGoogle,
  cibFacebook,
  cibTwitter,
  cibLinkedin,
  cilPhone,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilReload,
  cilCloudDownload,
  cilPeople,
  cilAppsSettings,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: '점유 채널', value: '93.70 개', percent: 60, color: 'danger' },
    { title: '유휴 채널', value: '23.093 개', percent: 14, color: 'info' },
    { title: '신규 가입', value: '78.706 명', percent: 27, color: 'warning' },
    { title: '이슈 발생', value: '0 건', percent: 0, color: 'success' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'S-CJO-IVR01', icon: cilApps, value: 95 },
    { title: '테스트', icon: cilAppsSettings, value: 0 },
  ]

  const progressGroupExample2_1 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 47 },
  ]

  const progressGroupExample3 = [
    { title: '상품 문의', icon: cilPhone, percent: 70, value: '126/180' },
    { title: '고객 상담', icon: cilPeople, percent: 15, value: '27/180' },
    { title: 'A/S 접수', icon: cilReload, percent: 15, value: '27/180' },
    { title: '테스트', icon: cilAppsSettings, percent: 0, value: '0/30' },
  ]
  const progressGroupExample3_1 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol xs={12} md={6} xl={6}>
              <CRow>
                <CCol sm={6}>
                  <div className="text-medium-emphasis small">콜수</div>
                  <div className="fs-1 fw-semibold text-info">0</div>
                </CCol>
                <CCol sm={6}>
                  <div className="border-start border-start-1 border-start-dark py-1 px-3">
                    <div className="text-medium-emphasis small">평균 통화시간</div>
                    <div className="fs-1 fw-semibold text-dark">00:00:00</div>
                  </div>
                </CCol>
              </CRow>
              {/* <hr className="mt-0" /> */}
            </CCol>
            <CCol xs={12} md={6} xl={6}>
              <CRow>
                <CCol sm={6}>
                  <div className="border-start border-start-1 border-start-dark py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">최대 채널점유수</div>
                    <div className="fs-1 fw-semibold text-success">0</div>
                  </div>
                </CCol>
                <CCol sm={6}>
                  <div className="border-start border-start-1 border-start-dark py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">평균 채널점유수</div>
                    <div className="fs-1 fw-semibold text-dark">0</div>
                  </div>
                </CCol>
              </CRow>
              {/* <hr className="mt-0" /> */}
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>채널 현황</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={4}>
                      <div className="py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">전체 채널수</div>
                        <div className="fs-5 fw-semibold">210</div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">점유 채널수</div>
                        <div className="fs-5 fw-semibold">171</div>
                      </div>
                    </CCol>
                    <CCol sm={4}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">유휴 채널수</div>
                        <div className="fs-5 fw-semibold">39</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  <div className="position-relative w-75 h-75 d-inline-block">
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <p className="fs-6 text-dark mt-3 mb-0">점유율</p>
                      <p className="fs-3 text-center text-danger fw-bolder m-0">81%</p>
                    </div>
                    <CChartDoughnut
                      data={{
                        labels: ['점유', '유휴'],
                        datasets: [
                          {
                            backgroundColor: ['#DD1B16', '#39f'],
                            data: [81, 19],
                            borderWidth: 1,
                          },
                        ],
                      }}
                    />
                  </div>
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">점유율 상위 시스템</div>
                        <div className="fs-5 fw-semibold">S-CJO-IVR01</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">점유율 상위 업무</div>
                        <div className="fs-5 fw-semibold">일반</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                상반기 채널 점유율 추이
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['일별', '월별', '년별'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === '월별'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
              datasets: [
                {
                  label: '점유 채널',
                  backgroundColor: hexToRgba(getStyle('--cui-danger'), 10),
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 2,
                  data: [
                    random(90, 200),
                    random(30, 200),
                    random(100, 200),
                    random(80, 200),
                    random(120, 200),
                    random(140, 200),
                  ],
                  fill: true,
                },
                {
                  label: '유휴 채널',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(0, 50),
                    random(0, 30),
                    random(0, 100),
                    random(0, 80),
                    random(0, 50),
                    random(0, 50),
                  ],
                },
                {
                  label: '신규 가입 통화',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [30, 45, 100, 105, 60, 55],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>채널 현황</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">작주 최대 점유 채널수</div>
                        <div className="fs-5 fw-semibold">171</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">작주 최대 유휴 채널수</div>
                        <div className="fs-5 fw-semibold">39</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="danger" value={item.value2} />
                        <CProgress thin color="info" value={item.value1} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">고객수</div>
                        <div className="fs-5 fw-semibold">1,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">외부 접근 채널</div>
                        <div className="fs-5 fw-semibold">191,235</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2_1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3_1.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* <WidgetsDropdown /> */}
      {/* <WidgetsBrand withCharts /> */}
    </>
  )
}

export default Dashboard
