import { Column, Container, Row } from '@medicare/components'
import { motion } from 'framer-motion'
import React, { useCallback, useState } from 'react'

import PatientSearchRequest from '../models/PatientSearchRequest'
import PatientSearchInput from './PatientSearchInput'
import ViewPatientsTable from './ViewPatientsTable'

const SearchPatients = () => {
  const [searchRequest, setSearchRequest] = useState<PatientSearchRequest>({ queryString: '' })

  const onSearchRequestChange = useCallback((newSearchRequest: PatientSearchRequest) => {
    setSearchRequest(newSearchRequest)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <Row>
          <Column md={12}>
            <div className="mc-card" style={{ padding: '24px', marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--mc-text)' }}>Find Patients</h3>
              <PatientSearchInput onChange={onSearchRequestChange} />
            </div>
          </Column>
        </Row>
        <Row>
          <Column md={12}>
            <div className="mc-card">
              <ViewPatientsTable searchRequest={searchRequest} />
            </div>
          </Column>
        </Row>
      </Container>
    </motion.div>
  )
}

export default SearchPatients
