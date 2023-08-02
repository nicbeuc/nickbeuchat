'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";

import { debounce } from '@/helpers';
import styles from './Logo.module.css'

export default function Logo() {
  const [logoIsSmushed, setLogoIsSmushed] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;
      if (scrollY >= scrollThreshold) {
        setLogoIsSmushed(true);
      } else {
        setLogoIsSmushed(false);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <h1 className={`${styles.logo} ${logoIsSmushed ? styles.smushed : ''}`}>
      <Link href="/">
        N<span>ick</span> B<span>euchat</span>
      </Link>
    </h1>
  )
}