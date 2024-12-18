import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/slider01.jpg",
      title: "عنوان اول",
      description: "این یک متن آزمایشی است که روی اسلایدر قرار دارد.",
    },
    {
      image: "/images/slider04.jpg",
      title: "عنوان دوم",
      description: "این هم یک متن دیگر است برای نمایش در اسلایدر.",
    },
    {
      image: "/images/slider03.jpg",
      title: "عنوان سوم",
      description: "این هم یک متن دیگر است برای نمایش در اسلایدر.",
    },
    {
      image: "/images/slider05.jpg",
      title: "عنوان چهارم",
      description: "این هم یک متن دیگر است برای نمایش در اسلایدر.",
    },
    {
      image: "/images/slider06.jpg",
      title: "عنوان پنجم",
      description: "این هم یک متن دیگر است برای نمایش در اسلایدر.",
    },
    {
      image: "/images/slider07.jpg",
      title: "عنوان ششم",
      description: "این هم یک متن دیگر است برای نمایش در اسلایدر.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageSection}>
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className={styles.image} />
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={handlePrev}>
            <img src="/images/left.svg" alt="Previous" className={styles.button} />
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            <img src="/images/right.svg" alt="Next" className={styles.button} />
          </button>
        </div>
      </div>

      <div className={styles.infoSection}>
        <h2 className={styles.title}>{slides[currentIndex].title}</h2>
        <p className={styles.description}>{slides[currentIndex].description}</p>
        <button className={styles.infoButton}>بیشتر بخوانید</button>
      </div>
    </div>
  );
};

export default Slider;
