import React, { useEffect } from 'react'

import { useUpdateTitle } from '../page-header/title/TitleContext'
import useTranslator from '../shared/hooks/useTranslator'

const Dashboard: React.FC = () => {
  const { t } = useTranslator()
  const updateTitle = useUpdateTitle()
  useEffect(() => {
    updateTitle(t('dashboard.label'))
  })

  const today = new Date()
  const greeting =
    today.getHours() < 12 ? 'Good Morning' : today.getHours() < 17 ? 'Good Afternoon' : 'Good Evening'
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="mc-dashboard">
      {/* ── Welcome Hero ── */}
      <div className="mc-welcome">
        <h2>{greeting}, Dr. Admin 👋</h2>
        <p>{dateStr} &mdash; Here&apos;s your hospital overview for today</p>
        <div className="mc-welcome-actions">
          <button
            className="mc-welcome-btn primary"
            onClick={() => (window.location.href = '/patients/new')}
          >
            ＋ New Patient
          </button>
          <button
            className="mc-welcome-btn primary"
            onClick={() => (window.location.href = '/appointments/new')}
          >
            📅 Schedule Appointment
          </button>
          <button
            className="mc-welcome-btn primary"
            onClick={() => (window.location.href = '/labs/new')}
          >
            🔬 Request Lab
          </button>
        </div>
      </div>

      {/* ── Statistics Cards ── */}
      <div className="mc-stats-row">
        <div className="mc-stat-card patients">
          <div className="mc-stat-icon">👥</div>
          <div className="mc-stat-value">1,248</div>
          <div className="mc-stat-label">Total Patients</div>
          <div className="mc-stat-change">↑ 12% this month</div>
        </div>
        <div className="mc-stat-card appointments">
          <div className="mc-stat-icon">📅</div>
          <div className="mc-stat-value">38</div>
          <div className="mc-stat-label">Appointments Today</div>
          <div className="mc-stat-change">↑ 5% vs yesterday</div>
        </div>
        <div className="mc-stat-card labs">
          <div className="mc-stat-icon">🔬</div>
          <div className="mc-stat-value">156</div>
          <div className="mc-stat-label">Active Lab Requests</div>
          <div className="mc-stat-change">24 pending review</div>
        </div>
        <div className="mc-stat-card medications">
          <div className="mc-stat-icon">💊</div>
          <div className="mc-stat-value">89</div>
          <div className="mc-stat-label">Pending Medications</div>
          <div className="mc-stat-change">12 require approval</div>
        </div>
      </div>

      {/* ── Charts & Activity Row ── */}
      <div className="mc-dashboard-row" style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        {/* Bar Chart — Weekly Appointments */}
        <div className="mc-card" style={{ flex: '1.2' }}>
          <div className="mc-chart-container">
            <div className="mc-section-header">
              <h3 className="mc-section-title">Weekly Appointments</h3>
              <span className="mc-section-badge">This Week</span>
            </div>
            <div className="mc-bar-chart" style={{ marginBottom: '30px' }}>
              {[
                { day: 'Mon', val: 28, color: '#0891b2' },
                { day: 'Tue', val: 35, color: '#06b6d4' },
                { day: 'Wed', val: 42, color: '#0891b2' },
                { day: 'Thu', val: 38, color: '#06b6d4' },
                { day: 'Fri', val: 31, color: '#0891b2' },
                { day: 'Sat', val: 18, color: '#22d3ee' },
                { day: 'Sun', val: 8, color: '#67e8f9' },
              ].map((d) => (
                <div
                  key={d.day}
                  className="mc-bar"
                  style={{
                    height: `${(d.val / 42) * 100}%`,
                    background: `linear-gradient(180deg, ${d.color} 0%, ${d.color}99 100%)`,
                  }}
                >
                  <span className="mc-bar-value">{d.val}</span>
                  <span className="mc-bar-label">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donut Chart — Patient Demographics */}
        <div className="mc-card" style={{ flex: '0.8' }}>
          <div className="mc-chart-container">
            <div className="mc-section-header">
              <h3 className="mc-section-title">Patient Demographics</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
              <div
                className="mc-donut-chart"
                style={{
                  background: `conic-gradient(
                    #0891b2 0deg 126deg,
                    #8b5cf6 126deg 216deg,
                    #10b981 216deg 288deg,
                    #f59e0b 288deg 342deg,
                    #ef4444 342deg 360deg
                  )`,
                }}
              >
                <div className="mc-donut-center">
                  <span>1,248</span>
                  <span>Total</span>
                </div>
              </div>
              <div className="mc-donut-legend">
                {[
                  { label: 'Adult (18-60)', value: '35%', color: '#0891b2' },
                  { label: 'Senior (60+)', value: '25%', color: '#8b5cf6' },
                  { label: 'Youth (12-18)', value: '20%', color: '#10b981' },
                  { label: 'Child (2-12)', value: '15%', color: '#f59e0b' },
                  { label: 'Infant (<2)', value: '5%', color: '#ef4444' },
                ].map((item) => (
                  <div key={item.label} className="mc-legend-item">
                    <div className="mc-legend-dot" style={{ background: item.color }} />
                    <span className="mc-legend-label">{item.label}</span>
                    <span className="mc-legend-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Recent Activity & Departments Row ── */}
      <div className="mc-dashboard-row" style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        {/* Recent Activity */}
        <div className="mc-card" style={{ flex: 1, padding: '20px 24px' }}>
          <div className="mc-section-header">
            <h3 className="mc-section-title">Recent Activity</h3>
            <span className="mc-section-badge">Live</span>
          </div>
          <ul className="mc-activity-list">
            {[
              {
                type: 'patient',
                text: 'New patient Aarav Sharma registered',
                time: '2 minutes ago',
              },
              {
                type: 'appointment',
                text: 'Dr. Mehta completed appointment #APT-2847',
                time: '15 minutes ago',
              },
              {
                type: 'lab',
                text: 'Lab results ready for Priya Singh (CBC)',
                time: '32 minutes ago',
              },
              {
                type: 'medication',
                text: 'Medication dispensed: Amoxicillin 500mg',
                time: '1 hour ago',
              },
              {
                type: 'incident',
                text: 'Incident #INC-091 resolved by Dr. Gupta',
                time: '2 hours ago',
              },
            ].map((item, i) => (
              <li key={i} className="mc-activity-item">
                <div className={`mc-activity-dot ${item.type}`} />
                <div className="mc-activity-content">
                  <div className="mc-activity-title">{item.text}</div>
                  <div className="mc-activity-time">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Department Status */}
        <div style={{ flex: 1 }}>
          <div className="mc-section-header">
            <h3 className="mc-section-title">Department Status</h3>
          </div>
          <div className="mc-dept-grid">
            {[
              { name: 'Emergency', icon: '🚨', status: 'active', statusText: 'Operational', bg: 'rgba(239, 68, 68, 0.08)' },
              { name: 'Radiology', icon: '📡', status: 'active', statusText: 'All Clear', bg: 'rgba(8, 145, 178, 0.08)' },
              { name: 'Pathology', icon: '🔬', status: 'busy', statusText: '3 Pending', bg: 'rgba(245, 158, 11, 0.08)' },
              { name: 'Pharmacy', icon: '💊', status: 'active', statusText: 'Stocked', bg: 'rgba(16, 185, 129, 0.08)' },
              { name: 'Cardiology', icon: '❤️', status: 'active', statusText: 'Available', bg: 'rgba(139, 92, 246, 0.08)' },
              { name: 'Neurology', icon: '🧠', status: 'busy', statusText: '5 In Queue', bg: 'rgba(59, 130, 246, 0.08)' },
            ].map((dept) => (
              <div key={dept.name} className="mc-dept-card">
                <div className="mc-dept-icon" style={{ background: dept.bg }}>
                  {dept.icon}
                </div>
                <div className="mc-dept-info">
                  <h4>{dept.name}</h4>
                  <div className={`mc-dept-status ${dept.status}`}>
                    <span className="dot" />
                    {dept.statusText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
