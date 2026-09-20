import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import logo from "../images/logos/logo2.png"
import * as styles from "./header.module.css"

const tabs = [
  { name: "Home", to: "/" },
  { name: "Notes", to: "/notes/" },
  { name: "Hobbies", to: "/hobbies/" },
  { name: "About", to: "/about/" },
]

export default function Header({ siteTitle }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = event => {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onOutside = event => {
      if (!navRef.current?.contains(event.target)) setOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 901px)")
    const onResize = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onOutside)
    desktop.addEventListener("change", onResize)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onOutside)
      desktop.removeEventListener("change", onResize)
    }
  }, [open])

  return (
    <header className={styles.siteHeader}>
      <meta property="og:image" content="https://jshen13.github.io/logo.png" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5986849736581274" crossOrigin="anonymous" />
      <nav className={styles.navBar} aria-label="Main navigation" ref={navRef}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src={logo} width="25" height="25" alt="" />
          <span>{siteTitle}</span>
        </Link>
        <button ref={toggleRef} type="button" className={styles.menuToggle}
          aria-expanded={open} aria-controls="site-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(value => !value)}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        <ul id="site-navigation" className={`${styles.navLinks} ${open ? styles.open : ""}`}>
          {tabs.map(tab => (
            <li key={tab.to}>
              <Link to={tab.to} onClick={() => setOpen(false)}
                className={siteTitle === tab.name ? styles.activeTab : undefined}
                aria-current={siteTitle === tab.name ? "page" : undefined}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
