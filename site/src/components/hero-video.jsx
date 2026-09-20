import React, { useEffect, useRef, useState } from "react"
import desktopVideo from "../videos/redondo_drone1080.mp4"
import mobileVideo from "../videos/home-mobile.mp4"
import desktopPoster from "../videos/home-poster.webp"
import mobilePoster from "../videos/home-mobile-poster.webp"
import * as styles from "./hero-video.module.css"

export default function HeroVideo() {
  const videoRef = useRef(null)
  const wantsPlayback = useRef(true)
  const [source, setSource] = useState(null)
  const [autoPlayAllowed, setAutoPlayAllowed] = useState(false)
  const [requested, setRequested] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 900px)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const connection = navigator.connection
    const update = () => {
      setSource(mobile.matches ? mobileVideo : desktopVideo)
      setAutoPlayAllowed(!reducedMotion.matches && !connection?.saveData)
      setRequested(false)
      setHasPlayed(false)
      setFailed(false)
    }
    update()
    mobile.addEventListener("change", update)
    reducedMotion.addEventListener("change", update)
    connection?.addEventListener?.("change", update)
    return () => {
      mobile.removeEventListener("change", update)
      reducedMotion.removeEventListener("change", update)
      connection?.removeEventListener?.("change", update)
    }
  }, [])

  const activeSource = autoPlayAllowed || requested ? source : undefined

  useEffect(() => {
    setHasPlayed(false)
    setPlaying(false)
    setFailed(false)
    const video = videoRef.current
    video.defaultMuted = true
    video.muted = true
    video.load()
    if (!activeSource) return

    let inView = true
    const updatePlayback = () => {
      if (inView && !document.hidden && wantsPlayback.current) {
        // An autoplay refusal leaves the poster and explicit play control available.
        video.play()?.catch(() => {})
      } else {
        video.pause()
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      updatePlayback()
    })
    observer.observe(video)
    document.addEventListener("visibilitychange", updatePlayback)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", updatePlayback)
    }
  }, [activeSource])

  const toggle = () => {
    if (playing) {
      wantsPlayback.current = false
      videoRef.current.pause()
    } else {
      wantsPlayback.current = true
      setRequested(true)
      if (activeSource) videoRef.current?.play()?.catch(() => setPlaying(false))
    }
  }

  return (
    <>
      <picture className={styles.poster}>
        <source media="(max-width: 900px)" srcSet={mobilePoster} />
        <img src={desktopPoster} alt="Aerial view of the Redondo Beach waterfront" fetchpriority="high" />
      </picture>
      <video
        ref={videoRef}
        className={`${styles.video} ${hasPlayed && !failed ? styles.visible : ""}`}
        src={activeSource || undefined}
        autoPlay={Boolean(activeSource)}
        muted
        playsInline
        loop
        preload="none"
        aria-hidden="true"
        onPlaying={() => { setPlaying(true); setHasPlayed(true) }}
        onPause={() => setPlaying(false)}
        onError={() => { setFailed(true); setPlaying(false) }}
      />
      {!failed && (
        <button className={styles.control} type="button" onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          {playing ? "Pause" : "Play video"}
        </button>
      )}
    </>
  )
}
