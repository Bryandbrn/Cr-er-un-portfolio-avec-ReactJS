import React, { useEffect, useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import GitHubModal from './components/GitHubModal'

export default function App() {
    // Fetch GitHub profile ONCE on app load (required)
    const [ghData, setGhData] = useState(null)
    const [ghError, setGhError] = useState(null)

    useEffect(() => {
        let isMounted = true
        fetch('https://api.github.com/users/github-john-doe')
            .then((r) => {
                if (!r.ok) throw new Error('GitHub API error ' + r.status)
                return r.json()
            })
            .then((data) => {
                if (isMounted) setGhData(data)
            })
            .catch((err) => {
                if (isMounted) setGhError(err.message)
            })
        return () => { isMounted = false }
    }, [])

    const gh = useMemo(() => ({ data: ghData, error: ghError }), [ghData, ghError])

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-fill">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mentions-legales" element={<Legal />} />
                    {/* Fallback */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <Footer />
            <GitHubModal gh={gh} />
        </div>
    )
}
