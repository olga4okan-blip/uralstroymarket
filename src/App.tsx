import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import SiteLayout from '@/components/SiteLayout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Price from '@/pages/Price'
import About from '@/pages/About'
import Contacts from '@/pages/Contacts'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/price" element={<Price />} />
          <Route path="/o-kompanii" element={<About />} />
          <Route path="/kontakty" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
