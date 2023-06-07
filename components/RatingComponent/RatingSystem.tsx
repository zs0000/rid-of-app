import React, { useState } from 'react';
import RatingIcon from './RatingIcon';
import styles from './RatingSystem.module.css';

const RatingSystem: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }, (_, index) => (
        <RatingIcon
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default RatingSystem;
