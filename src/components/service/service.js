import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "مشاوره",
      image: "/images/nopic.jpg", // آدرس تصویر شما
    },
    {
      id: 2,
      title: " محصولات",
      image: "/images/nopic.jpg", // آدرس تصویر شما
    },
    {
      id: 3,
      title: "آموزش",
      image: "/images/nopic.jpg", // آدرس تصویر شما
    },
  ];

  return (
    <div className={styles.container}>
      {services.map((service) => (
        <div key={service.id} className={styles.card}>
          <div className={styles.div_img}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
            />
            <div className={styles.title}>{service.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
