"use client"; // اضافه کردن این خط

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import ConfirmDialog from "./utils/ConfirmDialog";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter(); // استفاده برای هدایت

  const handleLogoutClick = () => {
    setIsDialogOpen(true); // باز کردن دیالوگ تایید خروج
  };

  const handleConfirmLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("خطای بوجود آمده : ", error);
    } finally {
      setIsDialogOpen(false);
    }
  };

  const handleCancelLogout = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.row_navbar}>
          <div className={styles.right_navbar}>
            <span className={styles.icon_clock_navbar}>
              <img src="/images/clock.svg" alt="rebo" />
            </span>
            <span>
              دوشنبه :<span>1403/08/03</span>
            </span>
          </div>
          <div>
            <span className={styles.icon_left_navbar}>
            <div
                className={styles.tooltip_container}
                onClick={handleLogoutClick}
              >
                <span className={styles.nav_login_exit}>خروج</span>
              </div>

              <div className={styles.tooltip_container}>
                <Link href="/login">
                  <span className={styles.nav_login_exit}>ورود</span>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.header_wrapper}>
          <nav className={styles.navbar_container}>
            <div className={styles.header_right}>
              <img
                src="/images/logo.png"
                alt="ربو | بورس خرما"
                className={styles.logo}
              />

              <div className={styles.left_menu}>
                <div className={styles.tooltip_container}>
                  <Link href="/">
                    <span className={styles.nav_title}>خانه</span>
                  </Link>
                </div>

                <div className={styles.tooltip_container}>
                  <Link href="/products">
                    <span className={styles.nav_title}>محصولات</span>
                  </Link>
                </div>

                <div className={styles.tooltip_container}>
                  <Link href="/blogs">
                    <span className={styles.nav_title}>وبلاگ</span>
                  </Link>
                </div>

                <div className={styles.tooltip_container}>
                  <Link href="/gallery">
                    <span className={styles.nav_title}>گالری</span>
                  </Link>
                </div>

                <div className={styles.tooltip_container}>
                  <Link href="/contact_us">
                    <span className={styles.nav_title}>تماس با ما</span>
                  </Link>
                </div>
                <div className={styles.tooltip_container}>
                  <Link href="/about_us">
                    <span className={styles.nav_title}> درباره ما</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.header_left}>
            پروفایل
            </div>
          </nav>
        </div>
      </header>

      {/* نمایش دیالوگ تایید خروج */}
      {isDialogOpen && (
        <ConfirmDialog
          message="آیا مطمئن هستید که می‌خواهید خارج شوید؟"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
          isOpen={isDialogOpen}
        />
      )}
    </>
  );
}
