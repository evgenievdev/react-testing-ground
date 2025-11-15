import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './Card.module.scss';
import { Car } from '../mocks/cars';

interface CardProps {
  car: Car;
  className?: string;
  index?: number;
}

const Card = ({ car, className = '', index = 0 }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        className={`${styles.cardContainer} ${className}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
      <motion.div
        className={styles.card}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className={styles.front}
          style={{
            backgroundImage: `url(${car.photo})`,
            backfaceVisibility: 'hidden',
          }}
        >
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h2 className={styles.title}>{car.year} {car.make} {car.model}</h2>
              <p className={styles.description}>{car.description}</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className={styles.back}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={styles.specsContent}>
            <h3 className={styles.specsTitle}>Performance Specs</h3>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Horsepower: </span>
              <span className={styles.specValue}>{car.horsepower} hp</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Torque: </span>
              <span className={styles.specValue}>{car.torque} lb-ft</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Weight: </span>
              <span className={styles.specValue}>{car.weight} lbs</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Top Speed: </span>
              <span className={styles.specValue}>{car.topSpeed} mph</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>0-60 Time:</span>
              <span className={styles.specValue}>{car.acceleration}s</span>
            </div>
            <button 
              className={styles.fullViewBtn}
              onClick={() => setIsExpanded(true)}
            >
              Full View
            </button>
          </div>
        </div>
      </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isExpanded && (
        <motion.div 
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsExpanded(false)}
              aria-label="Close"
            >
              ×
            </button>
            
            <motion.div 
              className={styles.modalInner}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
            >
              <div className={styles.modalLeft}>
                <img 
                  src={car.photo} 
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className={styles.modalImage}
                />
              </div>
              
              <div className={styles.modalRight}>
                <h2 className={styles.modalTitle}>{car.year} {car.make} {car.model}</h2>
                <p className={styles.modalDescription}>{car.description}</p>
                
                <div className={styles.modalSpecs}>
                  <h3>Performance Specifications</h3>
                  <div className={styles.specGrid}>
                    <div className={styles.specCard}>
                      <span className={styles.specCardLabel}>Horsepower</span>
                      <span className={styles.specCardValue}>{car.horsepower} hp</span>
                    </div>
                    <div className={styles.specCard}>
                      <span className={styles.specCardLabel}>Torque</span>
                      <span className={styles.specCardValue}>{car.torque} lb-ft</span>
                    </div>
                    <div className={styles.specCard}>
                      <span className={styles.specCardLabel}>Weight</span>
                      <span className={styles.specCardValue}>{car.weight} lbs</span>
                    </div>
                    <div className={styles.specCard}>
                      <span className={styles.specCardLabel}>Top Speed</span>
                      <span className={styles.specCardValue}>{car.topSpeed} mph</span>
                    </div>
                    <div className={styles.specCard}>
                      <span className={styles.specCardLabel}>0-60 Time</span>
                      <span className={styles.specCardValue}>{car.acceleration}s</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
