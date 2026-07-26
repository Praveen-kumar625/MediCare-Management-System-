import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FlaskConical, 
  Pill, 
  AlertTriangle, 
  Image as ImageIcon,
  ChevronRight,
  ChevronLeft,
  Plus,
  List as ListIcon
} from 'lucide-react'

import useTranslator from '../hooks/useTranslator'
import Permissions from '../model/Permissions'
import { RootState } from '../store'
import { updateSidebar } from './component-slice'
import { cn } from '../../utils/cn'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { sidebarCollapsed } = useSelector((state: RootState) => state.components)
  const permissions = useSelector((state: RootState) => state.user.permissions)

  const { t } = useTranslator()
  const path = useLocation()
  const history = useHistory()
  const { pathname } = path
  const splittedPath = pathname.split('/')

  const [expandedItem, setExpandedItem] = useState('none')

  useEffect(() => {
    if (splittedPath[1].includes('patients')) setExpandedItem('patient')
    else if (splittedPath[1].includes('appointments')) setExpandedItem('appointment')
    else if (splittedPath[1].includes('labs')) setExpandedItem('labs')
    else if (splittedPath[1].includes('medications')) setExpandedItem('medications')
    else if (splittedPath[1].includes('incidents')) setExpandedItem('incidents')
    else if (splittedPath[1].includes('imagings')) setExpandedItem('imagings')
    else setExpandedItem('none')
  }, [pathname])

  const navigateTo = (location: string) => {
    history.push(location)
  }

  const toggleExpansion = (item: string) => {
    setExpandedItem((prev) => (prev === item ? 'none' : item))
  }

  const renderNavItem = (
    id: string,
    label: string,
    icon: React.ReactNode,
    basePath: string,
    isActive: boolean,
    hasSubmenu: boolean,
    onClick: () => void
  ) => {
    const isExpanded = expandedItem === id

    return (
      <li className="mc-nav-item" key={id}>
        <motion.div
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={cn(
            "mc-nav-link",
            isActive && "active"
          )}
        >
          <span className="mc-nav-icon">{icon}</span>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="mc-nav-label"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
          {!sidebarCollapsed && hasSubmenu && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className="mc-nav-chevron"
            >
              <ChevronRight size={16} />
            </motion.div>
          )}
        </motion.div>
      </li>
    )
  }

  const renderSubItem = (
    label: string,
    icon: React.ReactNode,
    path: string,
    isActive: boolean
  ) => {
    return (
      <motion.li 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="mc-nav-subitem"
        key={path}
      >
        <motion.div
          whileHover={{ x: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          className={cn("mc-nav-sublink", isActive && "active")}
          onClick={() => navigateTo(path)}
        >
          <span className="mc-nav-subicon">{icon}</span>
          <span className="mc-nav-sublabel">{label}</span>
        </motion.div>
      </motion.li>
    )
  }

  return (
    <motion.nav
      initial={false}
      animate={{ 
        width: sidebarCollapsed ? 80 : 260 
      }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
      className="mc-sidebar"
    >
      <div className="mc-sidebar-header">
        <div className="mc-logo">
          <div className="mc-logo-icon">M</div>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="mc-logo-text"
              >
                MediCare
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mc-sidebar-content">
        <ul className="mc-nav-list">
          {renderNavItem(
            'dashboard',
            t('dashboard.label'),
            <LayoutDashboard size={20} />,
            '/',
            pathname === '/',
            false,
            () => {
              navigateTo('/')
              setExpandedItem('none')
            }
          )}

          {/* Patients */}
          {renderNavItem(
            'patient',
            t('patients.label'),
            <Users size={20} />,
            '/patients',
            splittedPath[1].includes('patient'),
            true,
            () => {
              navigateTo('/patients')
              toggleExpansion('patient')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'patient' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.WritePatients) &&
                  renderSubItem(
                    t('patients.newPatient'),
                    <Plus size={14} />,
                    '/patients/new',
                    splittedPath[1].includes('patients') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ReadPatients) &&
                  renderSubItem(
                    t('patients.patientsList'),
                    <ListIcon size={14} />,
                    '/patients',
                    splittedPath[1].includes('patients') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>

          {/* Appointments */}
          {renderNavItem(
            'appointment',
            t('scheduling.label'),
            <Calendar size={20} />,
            '/appointments',
            splittedPath[1].includes('appointments'),
            true,
            () => {
              navigateTo('/appointments')
              toggleExpansion('appointment')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'appointment' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.WriteAppointments) &&
                  renderSubItem(
                    t('scheduling.appointments.new'),
                    <Plus size={14} />,
                    '/appointments/new',
                    splittedPath[1].includes('appointments') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ReadAppointments) &&
                  renderSubItem(
                    t('scheduling.appointments.schedule'),
                    <ListIcon size={14} />,
                    '/appointments',
                    splittedPath[1].includes('appointments') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>

          {/* Medications */}
          {renderNavItem(
            'medications',
            t('medications.label'),
            <Pill size={20} />,
            '/medications',
            splittedPath[1].includes('medications'),
            true,
            () => {
              navigateTo('/medications')
              toggleExpansion('medications')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'medications' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.RequestMedication) &&
                  renderSubItem(
                    t('medications.requests.new'),
                    <Plus size={14} />,
                    '/medications/new',
                    splittedPath[1].includes('medications') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ViewMedications) &&
                  renderSubItem(
                    t('medications.requests.label'),
                    <ListIcon size={14} />,
                    '/medications',
                    splittedPath[1].includes('medications') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>

          {/* Labs */}
          {renderNavItem(
            'labs',
            t('labs.label'),
            <FlaskConical size={20} />,
            '/labs',
            splittedPath[1].includes('labs'),
            true,
            () => {
              navigateTo('/labs')
              toggleExpansion('labs')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'labs' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.RequestLab) &&
                  renderSubItem(
                    t('labs.requests.new'),
                    <Plus size={14} />,
                    '/labs/new',
                    splittedPath[1].includes('labs') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ViewLabs) &&
                  renderSubItem(
                    t('labs.requests.label'),
                    <ListIcon size={14} />,
                    '/labs',
                    splittedPath[1].includes('labs') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>

          {/* Imagings */}
          {renderNavItem(
            'imagings',
            t('imagings.label'),
            <ImageIcon size={20} />,
            '/imaging',
            splittedPath[1].includes('imaging'),
            true,
            () => {
              navigateTo('/imaging')
              toggleExpansion('imagings')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'imagings' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.RequestImaging) &&
                  renderSubItem(
                    t('imagings.requests.new'),
                    <Plus size={14} />,
                    '/imaging/new',
                    splittedPath[1].includes('imaging') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ViewImagings) &&
                  renderSubItem(
                    t('imagings.requests.label'),
                    <ListIcon size={14} />,
                    '/imaging',
                    splittedPath[1].includes('imaging') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>

          {/* Incidents */}
          {renderNavItem(
            'incidents',
            t('incidents.label'),
            <AlertTriangle size={20} />,
            '/incidents',
            splittedPath[1].includes('incidents'),
            true,
            () => {
              navigateTo('/incidents')
              toggleExpansion('incidents')
            }
          )}
          <AnimatePresence>
            {expandedItem === 'incidents' && !sidebarCollapsed && (
              <ul className="mc-nav-sublist">
                {permissions.includes(Permissions.ReportIncident) &&
                  renderSubItem(
                    t('incidents.reports.new'),
                    <Plus size={14} />,
                    '/incidents/new',
                    splittedPath[1].includes('incidents') && splittedPath.length > 2
                  )}
                {permissions.includes(Permissions.ViewIncidents) &&
                  renderSubItem(
                    t('incidents.reports.label'),
                    <ListIcon size={14} />,
                    '/incidents',
                    splittedPath[1].includes('incidents') && splittedPath.length < 3
                  )}
                {permissions.includes(Permissions.ViewIncidentWidgets) &&
                  renderSubItem(
                    t('incidents.visualize.label'),
                    <ListIcon size={14} />,
                    '/incidents/visualize',
                    splittedPath[1].includes('incidents') && splittedPath.length < 3
                  )}
              </ul>
            )}
          </AnimatePresence>
        </ul>
      </div>

      <div className="mc-sidebar-footer">
        <button 
          className="mc-collapse-btn" 
          onClick={() => dispatch(updateSidebar())}
        >
          {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Sidebar
