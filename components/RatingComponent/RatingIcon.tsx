import React from 'react';
import styles from './RatingIcon.module.css';

interface RatingIconProps {
  filled: boolean;
  onClick?: () => void;
}


const RatingIcon: React.FC<RatingIconProps> = ({ filled }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${styles.star} ${filled ? styles.filled : ''}`}>
      <path d="M12 2 L15.09 8.13 L22 9.27 L17 14.03 L18.18 21 L12 17.77 L5.82 21 L7 14.03 L2 9.27 L8.91 8.13 L12 2 Z" />
    </svg>
  );
};

export default RatingIcon;
