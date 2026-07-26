import { Toaster } from '@medicare/components'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { motion } from 'framer-motion'

import Dashboard from './dashboard/Dashboard'
import Imagings from './imagings/Imagings'
import Incidents from './incidents/Incidents'
import Labs from './labs/Labs'
import Medications from './medications/Medications'
import Breadcrumbs from './page-header/breadcrumbs/Breadcrumbs'
import { ButtonBarProvider } from './page-header/button-toolbar/ButtonBarProvider'
import ButtonToolBar from './page-header/button-toolbar/ButtonToolBar'
import { useTitle } from './page-header/title/TitleContext'
import Patients from './patients/Patients'
import Appointments from './scheduling/appointments/Appointments'
import Settings from './settings/Settings'
import Navbar from './shared/components/navbar/Navbar'
import { NetworkStatusMessage } from './shared/components/network-status'
import Sidebar from './shared/components/Sidebar'
import { RootState } from './shared/store'

const MediCare = () => {
  const { title } = useTitle()
  const { sidebarCollapsed } = useSelector((state: RootState) => state.components)

  return (
    <div className="mc-app-wrapper">
      <NetworkStatusMessage />
      <Navbar />
      
      <div className="mc-layout">
        <Sidebar />
        
        <ButtonBarProvider>
          <motion.main
            layout
            initial={false}
            animate={{ 
              marginLeft: sidebarCollapsed ? 80 : 260 
            }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            className="mc-main-content"
            role="main"
          >
            <div className="mc-page-header">
              <h1 className="mc-page-title">{title}</h1>
              <ButtonToolBar />
            </div>
            
            <Breadcrumbs />
            
            <div className="mc-page-body">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/appointments" component={Appointments} />
                <Route path="/patients" component={Patients} />
                <Route path="/labs" component={Labs} />
                <Route path="/medications" component={Medications} />
                <Route path="/incidents" component={Incidents} />
                <Route path="/settings" component={Settings} />
                <Route path="/imaging" component={Imagings} />
              </Switch>
            </div>
            
            <Toaster autoClose={5000} hideProgressBar draggable />

            <footer className="mc-footer">
              <div className="mc-footer-content">
                <span>MediCare Management System &copy; {new Date().getFullYear()}</span>
                <span className="mc-footer-divider">•</span>
                <span>Built by <a href="https://github.com/Praveen-kumar625/MediCare-Management-System-" target="_blank" rel="noopener noreferrer">Team CODE CRASH</a> for Brainwave Hackathon</span>
              </div>
            </footer>
          </motion.main>
        </ButtonBarProvider>
      </div>
    </div>
  )
}

export default MediCare
