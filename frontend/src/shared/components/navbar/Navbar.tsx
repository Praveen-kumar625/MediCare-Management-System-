import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  Search, 
  Settings, 
  LogOut, 
  Plus, 
  User as UserIcon,
  Menu,
  ChevronDown
} from 'lucide-react'

import { logout } from '../../../user/user-slice'
import useTranslator from '../../hooks/useTranslator'
import { RootState } from '../../store'
import { cn } from '../../../utils/cn'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslator()
  const { user } = useSelector((state: RootState) => state.user)

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)

  const navigateTo = (location: string) => {
    history.push(location)
    setIsProfileOpen(false)
    setIsAddOpen(false)
  }

  const handleLogout = () => {
    dispatch(logout())
    navigateTo('/login')
  }

  return (
    <header className="mc-navbar">
      <div className="mc-navbar-left d-md-none">
        <button className="mc-icon-btn">
          <Menu size={20} />
        </button>
      </div>

      <div className="mc-navbar-search d-none d-md-flex">
        <div className="mc-search-wrapper">
          <Search size={16} className="mc-search-icon" />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className="mc-search-input"
          />
          <div className="mc-search-shortcut">⌘K</div>
        </div>
      </div>

      <div className="mc-navbar-right">
        {/* Quick Add Menu */}
        <div className="mc-dropdown-container">
          <button 
            className="mc-btn mc-btn-primary mc-btn-sm"
            onClick={() => setIsAddOpen(!isAddOpen)}
          >
            <Plus size={16} />
            <span className="d-none d-md-inline">New</span>
          </button>

          <AnimatePresence>
            {isAddOpen && (
              <>
                <div className="mc-dropdown-overlay" onClick={() => setIsAddOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="mc-dropdown-menu"
                >
                  <div className="mc-dropdown-header">Quick Actions</div>
                  <button onClick={() => navigateTo('/patients/new')} className="mc-dropdown-item">
                    New Patient
                  </button>
                  <button onClick={() => navigateTo('/appointments/new')} className="mc-dropdown-item">
                    New Appointment
                  </button>
                  <button onClick={() => navigateTo('/medications/new')} className="mc-dropdown-item">
                    New Medication
                  </button>
                  <button onClick={() => navigateTo('/labs/new')} className="mc-dropdown-item">
                    New Lab Request
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Notifications */}
        <button className="mc-icon-btn mc-notifications-btn">
          <Bell size={18} />
          <span className="mc-indicator" />
        </button>

        {/* User Profile */}
        <div className="mc-dropdown-container">
          <button 
            className="mc-profile-trigger"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="mc-avatar">
              {user?.givenName?.charAt(0) || 'U'}
            </div>
            <div className="mc-profile-info d-none d-md-flex">
              <span className="mc-profile-name">{user?.givenName} {user?.familyName}</span>
              <span className="mc-profile-role">Administrator</span>
            </div>
            <ChevronDown size={14} className="mc-profile-chevron d-none d-md-block" />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                <div className="mc-dropdown-overlay" onClick={() => setIsProfileOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="mc-dropdown-menu mc-dropdown-menu-right"
                >
                  <div className="mc-dropdown-header">
                    <div className="font-medium">{user?.givenName} {user?.familyName}</div>
                    <div className="text-xs text-muted">admin@medicare.com</div>
                  </div>
                  <div className="mc-dropdown-divider" />
                  <button onClick={() => navigateTo('/settings')} className="mc-dropdown-item">
                    <UserIcon size={14} className="mr-2" />
                    My Profile
                  </button>
                  <button onClick={() => navigateTo('/settings')} className="mc-dropdown-item">
                    <Settings size={14} className="mr-2" />
                    {t('settings.label')}
                  </button>
                  <div className="mc-dropdown-divider" />
                  <button onClick={handleLogout} className="mc-dropdown-item mc-text-danger">
                    <LogOut size={14} className="mr-2" />
                    {t('actions.logout')}
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

export default Navbar
