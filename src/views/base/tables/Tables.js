import PropTypes from 'prop-types'
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton,
  CButtonGroup,
  CInputGroup,
  CFormInput,
  CDropdownDivider,
  CBadge,
} from '@coreui/react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CFormCheck } from '@coreui/react'
// import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'

const DocsExample1 = (props) => {
  const { children, href } = props

  const _href = `https://coreui.io/react/docs/${href}`

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink href="#" active>
            {/* <CIcon icon={cilMediaPlay} className="me-2" /> */}
            프로세스
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href={_href} target="_blank">
            {/* <CIcon icon={cilCode} className="me-2" /> */}
            서비스
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}
DocsExample1.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>프로세스 / 서비스 제어</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            {/* <p className="text-medium-emphasis small">
              Similar to tables and dark tables, use the modifier prop{' '}
              <code>color=&#34;light&#34;</code> or <code>color=&#34;dark&#34;</code> to make{' '}
              <code>&lt;CTableHead&gt;</code>s appear light or dark gray.
            </p> */}
            <CCard>
              <CCardBody>
                <CRow className="g-3">
                  <CCol sm={1}>
                    <CFormCheck id="flexCheckChecked" label="전체" defaultChecked />
                  </CCol>
                  <CCol sm={10}>
                    <CInputGroup>
                      <CFormInput aria-label="Text input with segmented dropdown button" />
                      <CDropdown alignment="end" variant="input-group">
                        <CButton type="button" color="secondary" variant="outline">
                          서 버
                        </CButton>
                        <CDropdownToggle color="secondary" variant="outline" split />
                        <CDropdownMenu>
                          <CDropdownItem href="#">Action</CDropdownItem>
                          <CDropdownItem href="#">Another action</CDropdownItem>
                          <CDropdownItem href="#">Something else here</CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CInputGroup>
                  </CCol>
                  <CCol sm={1}>
                    <CButton component="a" color="info" variant="outline" href="#" role="button">
                      조 회
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <DocsExample1 href="components/table#table-head">
              <CRow className="justify-content-between">
                <CCol xs={{ span: 2, offset: 0 }}>
                  <CDropdown>
                    <CDropdownToggle color="white">타입</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">HostCLientAPP</CDropdownItem>
                      <CDropdownItem href="#">media_manager</CDropdownItem>
                      <CDropdownItem href="#">scenarion_manager</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={{ span: 7, offset: 0 }}>
                  <CFormCheck inline id="inlineCheckbox1" value="option1" label="상태" />
                  <CFormCheck inline id="inlineCheckbox2" value="option2" label="해제" />
                  <CFormCheck inline id="inlineCheckbox1" value="option1" label="전체" />
                  <CFormCheck inline id="inlineCheckbox2" value="option2" label="시작" />
                  <CFormCheck inline id="inlineCheckbox1" value="option1" label="정지" />
                  <CFormCheck inline id="inlineCheckbox2" value="option2" label="알수없음" />
                </CCol>
                <CCol xs={{ span: 3, offset: 0 }}>
                  <CButtonGroup role="group" aria-label="Basic outlined example">
                    <CButton color="info" variant="outline">
                      시 작
                    </CButton>
                    <CButton color="info" variant="outline">
                      종 료
                    </CButton>
                    <CButton color="info" variant="outline">
                      강제로 종료
                    </CButton>
                  </CButtonGroup>
                </CCol>
              </CRow>
              <br></br>
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">
                      <CFormCheck id="flexCheckChecked" label=" " defaultChecked />
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">센터</CTableHeaderCell>
                    <CTableHeaderCell scope="col">시스템</CTableHeaderCell>
                    <CTableHeaderCell scope="col">시스템명</CTableHeaderCell>
                    <CTableHeaderCell scope="col">시스템IP</CTableHeaderCell>
                    <CTableHeaderCell scope="col">프로세스</CTableHeaderCell>
                    <CTableHeaderCell scope="col">프로세스명</CTableHeaderCell>
                    <CTableHeaderCell scope="col">프로세스타입</CTableHeaderCell>
                    <CTableHeaderCell scope="col">프로세스상태</CTableHeaderCell>
                    <CTableHeaderCell scope="col">서비스상태</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Agent상태</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#1</CTableDataCell>
                    <CTableDataCell>10.121.104.51</CTableDataCell>
                    <CTableDataCell>HO_01</CTableDataCell>
                    <CTableDataCell>HostClientApp</CTableDataCell>
                    <CTableDataCell>ETC</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p></p>
                      {/* <CBadge color="info">시작</CBadge> */}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#1</CTableDataCell>
                    <CTableDataCell>10.121.104.51</CTableDataCell>
                    <CTableDataCell>MM_01</CTableDataCell>
                    <CTableDataCell>media_manager</CTableDataCell>
                    <CTableDataCell>MEDIA</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p></p>
                      {/* <CBadge color="info">시작</CBadge> */}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#1</CTableDataCell>
                    <CTableDataCell>10.121.104.51</CTableDataCell>
                    <CTableDataCell>SM_01</CTableDataCell>
                    <CTableDataCell>scenario_manager</CTableDataCell>
                    <CTableDataCell>SCENARIO</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#2</CTableDataCell>
                    <CTableDataCell>10.121.104.52</CTableDataCell>
                    <CTableDataCell>HO_01</CTableDataCell>
                    <CTableDataCell>HostClientApp</CTableDataCell>
                    <CTableDataCell>ETC</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p></p>
                      {/* <CBadge color="info">시작</CBadge> */}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#2</CTableDataCell>
                    <CTableDataCell>10.121.104.52</CTableDataCell>
                    <CTableDataCell>MM_01</CTableDataCell>
                    <CTableDataCell>media_manager</CTableDataCell>
                    <CTableDataCell>MEDIA</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p></p>
                      {/* <CBadge color="info">시작</CBadge> */}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#2</CTableDataCell>
                    <CTableDataCell>10.121.104.52</CTableDataCell>
                    <CTableDataCell>MM_02</CTableDataCell>
                    <CTableDataCell>media_manager</CTableDataCell>
                    <CTableDataCell>MEDIA</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p></p>
                      {/* <CBadge color="info">시작</CBadge> */}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#2</CTableDataCell>
                    <CTableDataCell>10.121.104.52</CTableDataCell>
                    <CTableDataCell>SM_01</CTableDataCell>
                    <CTableDataCell>scenario_manager</CTableDataCell>
                    <CTableDataCell>SCENARIO</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label=" " />
                    </CTableHeaderCell>
                    <CTableDataCell>서울</CTableDataCell>
                    <CTableDataCell>00101001</CTableDataCell>
                    <CTableDataCell>서울IVR#2</CTableDataCell>
                    <CTableDataCell>10.121.104.52</CTableDataCell>
                    <CTableDataCell>SM_02</CTableDataCell>
                    <CTableDataCell>scenario_manager</CTableDataCell>
                    <CTableDataCell>SCENARIO</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="info">시작</CBadge>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample1>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
