import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Users, Calendar, FlaskConical, Pill, Activity } from 'lucide-react'
import { useUpdateTitle } from '../page-header/title/TitleContext'
import useTranslator from '../shared/hooks/useTranslator'

// Custom Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    let totalMilSecDur = parseInt(String(duration * 1000));
    let incrementTime = (totalMilSecDur / end) * 2;
    if (incrementTime < 10) incrementTime = 10;
    
    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMilSecDur / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>
}

// Skeleton Loader
const DashboardSkeleton = () => (
  <div className="mc-dashboard" style={{ padding: '20px' }}>
    <motion.div 
      className="mc-welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{ background: 'var(--mc-bg-card)', height: '180px', borderRadius: '16px' }}
    />
    <div className="mc-stats-row">
      {[1, 2, 3, 4].map(i => (
        <motion.div 
          key={i}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
          style={{ background: 'var(--mc-bg-card)', height: '120px', borderRadius: '16px' }}
        />
      ))}
    </div>
    <div className="mc-dashboard-row" style={{ display: 'flex', gap: '20px' }}>
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ background: 'var(--mc-bg-card)', height: '300px', flex: 1.2, borderRadius: '16px' }}
      />
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ background: 'var(--mc-bg-card)', height: '300px', flex: 0.8, borderRadius: '16px' }}
      />
    </div>
  </div>
)

const Dashboard: React.FC = () => {
  const { t } = useTranslator()
  const updateTitle = useUpdateTitle()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    updateTitle(t('dashboard.label'))
    // Simulate data loading
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [t, updateTitle])

  if (isLoading) return <DashboardSkeleton />

  const today = new Date()
  const greeting = today.getHours() < 12 ? 'Good Morning' : today.getHours() < 17 ? 'Good Afternoon' : 'Good Evening'
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  }

  return (
    <motion.div 
      className="mc-dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* ── Welcome Hero ── */}
      <motion.div className="mc-welcome" variants={itemVariants}>
        <h2>{greeting}, Dr. Admin 👋</h2>
        <p>{dateStr} &mdash; Here&apos;s your hospital overview for today</p>
        <div className="mc-welcome-actions">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mc-welcome-btn primary">
            <Users size={16} /> New Patient
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mc-welcome-btn primary">
            <Calendar size={16} /> Schedule Appointment
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mc-welcome-btn primary">
            <FlaskConical size={16} /> Request Lab
          </motion.button>
        </div>
      </motion.div>

      {/* ── Statistics Cards ── */}
      <motion.div className="mc-stats-row" variants={containerVariants}>
        {[
          { icon: Users, label: 'Total Patients', value: 1248, change: '↑ 12%', cls: 'patients' },
          { icon: Calendar, label: 'Appointments Today', value: 38, change: '↑ 5%', cls: 'appointments' },
          { icon: FlaskConical, label: 'Active Labs', value: 156, change: '24 pending', cls: 'labs' },
          { icon: Pill, label: 'Pending Meds', value: 89, change: '12 require approval', cls: 'medications' },
        ].map((stat, i) => (
          <motion.div key={i} className={`mc-stat-card ${stat.cls}`} variants={itemVariants} whileHover={{ y: -5 }}>
            <div className="mc-stat-icon"><stat.icon size={24} /></div>
            <div className="mc-stat-value"><AnimatedCounter value={stat.value} /></div>
            <div className="mc-stat-label">{stat.label}</div>
            <div className="mc-stat-change">{stat.change}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Charts & Activity Row ── */}
      <div className="mc-dashboard-row" style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        {/* Bar Chart — Weekly Appointments */}
        <motion.div className="mc-card" style={{ flex: '1.2' }} variants={itemVariants}>
          <div className="mc-chart-container">
            <div className="mc-section-header">
              <h3 className="mc-section-title">Weekly Appointments</h3>
              <span className="mc-section-badge">This Week</span>
            </div>
            <div className="mc-bar-chart" style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-end', height: '200px' }}>
              {[
                { day: 'Mon', val: 28, color: '#0891b2' },
                { day: 'Tue', val: 35, color: '#06b6d4' },
                { day: 'Wed', val: 42, color: '#0891b2' },
                { day: 'Thu', val: 38, color: '#06b6d4' },
                { day: 'Fri', val: 31, color: '#0891b2' },
                { day: 'Sat', val: 18, color: '#22d3ee' },
                { day: 'Sun', val: 8, color: '#67e8f9' },
              ].map((d, i) => (
                <div key={d.day} className="mc-bar" style={{ position: 'relative', flex: 1, margin: '0 8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.val / 42) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                    style={{
                      background: `linear-gradient(180deg, ${d.color} 0%, ${d.color}99 100%)`,
                      width: '100%',
                      borderRadius: '4px 4px 0 0',
                      minHeight: '20px'
                    }}
                  />
                  <span className="mc-bar-value" style={{ bottom: '100%', position: 'absolute', fontSize: '10px' }}>{d.val}</span>
                  <span className="mc-bar-label" style={{ marginTop: '8px', fontSize: '12px', color: 'var(--mc-text-muted)' }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Donut Chart — Patient Demographics */}
        <motion.div className="mc-card" style={{ flex: '0.8' }} variants={itemVariants}>
          <div className="mc-chart-container">
            <div className="mc-section-header">
              <h3 className="mc-section-title">Patient Demographics</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 0' }}>
              <motion.div
                className="mc-donut-chart"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
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
                  <span><AnimatedCounter value={1248} duration={1.5} /></span>
                  <span>Total</span>
                </div>
              </motion.div>
              <div className="mc-donut-legend">
                {[
                  { label: 'Adult (18-60)', value: '35%', color: '#0891b2' },
                  { label: 'Senior (60+)', value: '25%', color: '#8b5cf6' },
                  { label: 'Youth (12-18)', value: '20%', color: '#10b981' },
                  { label: 'Child (2-12)', value: '15%', color: '#f59e0b' },
                  { label: 'Infant (<2)', value: '5%', color: '#ef4444' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.label} 
                    className="mc-legend-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <div className="mc-legend-dot" style={{ background: item.color }} />
                    <span className="mc-legend-label">{item.label}</span>
                    <span className="mc-legend-value">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* ── Recent Activity & Departments Row ── */}
      <div className="mc-dashboard-row" style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
        <motion.div className="mc-card" style={{ flex: 1, padding: '20px 24px' }} variants={itemVariants}>
          <div className="mc-section-header">
            <h3 className="mc-section-title">Recent Activity</h3>
            <span className="mc-section-badge"><Activity size={14} style={{ marginRight: 4 }}/> Live</span>
          </div>
          <ul className="mc-activity-list">
            {[
              { type: 'patient', text: 'New patient Aarav Sharma registered', time: '2 minutes ago' },
              { type: 'appointment', text: 'Dr. Mehta completed appointment #APT-2847', time: '15 minutes ago' },
              { type: 'lab', text: 'Lab results ready for Priya Singh (CBC)', time: '32 minutes ago' },
              { type: 'medication', text: 'Medication dispensed: Amoxicillin 500mg', time: '1 hour ago' },
            ].map((item, i) => (
              <motion.li 
                key={i} 
                className="mc-activity-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.1) }}
              >
                <div className={`mc-activity-dot ${item.type}`} />
                <div className="mc-activity-content">
                  <div className="mc-activity-title">{item.text}</div>
                  <div className="mc-activity-time">{item.time}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
