import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cars } from "../mocks/cars";
import Card from "../ui/Card";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const carsPerPage = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isLoading ? (
        <motion.div 
          className={styles.loadingOverlay}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          onAnimationComplete={() => {}}
        >
          <div className={styles.loadingContainer}>
            <motion.div
              className={styles.spinner}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <motion.h2
              className={styles.loadingText}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Loading Dashboard...
            </motion.h2>
          </div>
        </motion.div>
      ) : null}

      <motion.div 
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className={styles.title}
          animate={{ opacity: scrollY > 100 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Dashboard
        </motion.h1>
        <div className={styles.grid}>
        {currentCars.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + index * 0.5,
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <Card car={car} index={index} />
          </motion.div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.active : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      )}
      </motion.div>
    </>
  );
};

export default Dashboard;
