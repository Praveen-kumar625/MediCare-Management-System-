import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, Code, User, Mail } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import './WelcomeScreen.css';

const Particles = () => {
  return (
    <div className="welcome-particles-container">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="welcome-particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const WelcomeScreen: React.FC = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Initial wait
    // Step 1: Text reveal
    // Step 2: Author card reveal
    // Step 3: Button reveal
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 2500);
    const t3 = setTimeout(() => setStep(3), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const handleContinue = () => {
    localStorage.setItem('medicare_welcomed', 'true');
    history.push('/');
  };

  return (
    <div className="welcome-wrapper">
      <div className="welcome-aurora welcome-aurora-1" />
      <div className="welcome-aurora welcome-aurora-2" />
      <div className="welcome-aurora welcome-aurora-3" />
      
      <Particles />

      <div className="welcome-content">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="welcome-text-container"
            >
              <motion.h4 
                initial={{ opacity: 0, letterSpacing: '0px' }}
                animate={{ opacity: 1, letterSpacing: '8px' }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="welcome-subtitle"
              >
                WELCOME
              </motion.h4>
              <h1 className="welcome-title">
                Welcome to the <span>Future</span>
              </h1>
              <p className="welcome-desc">
                Crafted with passion, innovation, precision, and modern engineering to deliver a world-class digital experience. Enjoy your journey.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="welcome-author-card"
            >
              <div className="welcome-author-header">
                <div className="welcome-author-badge">Designed & Developed By</div>
              </div>
              <div className="welcome-author-body">
                <div className="welcome-author-avatar">
                  PKJ
                </div>
                <div className="welcome-author-info">
                  <h2>PRAVEEN KUMAR JAYSWAL</h2>
                  <p>Lead Developer · Full Stack Engineer</p>
                  <div className="welcome-social-links">
                    <a href="https://github.com/Praveen-kumar625" target="_blank" rel="noopener noreferrer"><Code size={18} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><User size={18} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Mail size={18} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="welcome-actions"
            >
              <button onClick={handleContinue} className="welcome-btn-continue">
                Enter Dashboard <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WelcomeScreen;
