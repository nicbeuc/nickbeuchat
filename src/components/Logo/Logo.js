'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import { throttle } from 'lodash';

import styles from './Logo.module.css'

export default function Logo() {
  const [logoIsSmushed, setLogoIsSmushed] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;
      setLogoIsSmushed(scrollY >= scrollThreshold)
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <h1 className={`${styles.logo} ${logoIsSmushed ? styles.smushed : ''}`}>
      <Link href="/">
        <span>N</span><span>ick</span> <span>B</span><span>euchat</span>
      </Link>
    </h1>
  )
}