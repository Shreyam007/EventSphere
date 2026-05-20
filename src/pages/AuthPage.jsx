import { useState, useEffect } from 'react'
import './AuthPage.css'

/* ── tiny icon components (inline SVG – no extra deps) ───── */
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const IconLock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M20 21a8 8 0 1 0-16 0"/>
  </svg>
)

const IconEye = ({ open }) => open ? (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
) : (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" y1="2" x2="22" y2="22"/>
  </svg>
)

const IconGoogle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const IconGithub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

/* ── Floating orbs background ─────────────────────────────── */
const Background = () => (
  <div className="auth-bg" aria-hidden="true">
    <div className="orb orb-1"/>
    <div className="orb orb-2"/>
    <div className="orb orb-3"/>
    <div className="orb orb-4"/>
    <div className="grid-overlay"/>
  </div>
)

/* ── Left panel — branding & features ────────────────────── */
const BrandPanel = () => {
  const stats = [
    { value: '50K+', label: 'Events Hosted' },
    { value: '2M+',  label: 'Tickets Sold' },
    { value: '98%',  label: 'Satisfaction' },
  ]

  const features = [
    'Create & publish events in minutes',
    'Smart ticketing with QR codes',
    'Real-time analytics dashboard',
    'AI-powered event descriptions',
    'Seamless Razorpay payments',
    'Live check-in with Socket.IO',
  ]

  const testimonials = [
    { name: 'Priya S.', role: 'Event Organiser', text: 'EventSphere transformed how we manage our tech conferences. Absolutely brilliant!', stars: 5 },
    { name: 'Aryan M.', role: 'Attendee', text: 'Found amazing events and the ticketing process was incredibly smooth.', stars: 5 },
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="brand-panel">
      <div className="brand-panel__inner">

        {/* Logo */}
        <div className="brand-logo">
          <div className="brand-logo__icon">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="url(#lg1)" strokeWidth="2"/>
              <path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#2563eb"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="brand-logo__text">EventSphere</span>
        </div>

        {/* Headline */}
        <div className="brand-headline">
          <h1 className="brand-headline__title">
            Where Great<br/>
            <span className="gradient-text">Events</span> Come<br/>
            to Life.
          </h1>
          <p className="brand-headline__sub">
            The all-in-one platform for organising unforgettable experiences and discovering events that matter to you.
          </p>
        </div>

        {/* Features list */}
        <ul className="brand-features">
          {features.map((f, i) => (
            <li key={i} className="brand-feature-item">
              <span className="brand-feature-icon"><IconCheck /></span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="brand-stats">
          {stats.map((s, i) => (
            <div key={i} className="brand-stat">
              <span className="brand-stat__value">{s.value}</span>
              <span className="brand-stat__label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div className="brand-testimonial">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card ${i === activeTestimonial ? 'testimonial-card--active' : ''}`}
            >
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="star"><IconStar /></span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === activeTestimonial ? 'testimonial-dot--active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

/* ── Input field component ────────────────────────────────── */
const InputField = ({ id, label, type = 'text', placeholder, value, onChange, icon, error, autoComplete }) => {
  const [showPwd, setShowPwd] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword ? (showPwd ? 'text' : 'password') : type

  return (
    <div className={`input-group ${error ? 'input-group--error' : ''}`}>
      <label className="input-label" htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <span className="input-icon input-icon--left">{icon}</span>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="input-field"
        />
        {isPassword && (
          <button
            type="button"
            className="input-icon input-icon--right input-toggle"
            onClick={() => setShowPwd(p => !p)}
            aria-label={showPwd ? 'Hide password' : 'Show password'}
          >
            <IconEye open={showPwd} />
          </button>
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

/* ── Role selector ────────────────────────────────────────── */
const RoleSelector = ({ value, onChange }) => {
  const roles = [
    {
      id: 'attendee',
      label: 'Attendee',
      desc: 'Discover & buy tickets',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      id: 'organiser',
      label: 'Organiser',
      desc: 'Create & manage events',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="m9 16 2 2 4-4"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="role-selector">
      <label className="input-label">I am a…</label>
      <div className="role-options">
        {roles.map(r => (
          <button
            key={r.id}
            type="button"
            id={`role-${r.id}`}
            className={`role-option ${value === r.id ? 'role-option--active' : ''}`}
            onClick={() => onChange(r.id)}
          >
            <span className="role-option__icon">{r.icon}</span>
            <span className="role-option__label">{r.label}</span>
            <span className="role-option__desc">{r.desc}</span>
            {value === r.id && (
              <span className="role-option__check"><IconCheck /></span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ── Password strength ────────────────────────────────────── */
const PasswordStrength = ({ password }) => {
  const getStrength = (pwd) => {
    let score = 0
    if (!pwd) return { score: 0, label: '', color: '' }
    if (pwd.length >= 8) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++
    const levels = [
      { score: 1, label: 'Weak',    color: '#f87171' },
      { score: 2, label: 'Fair',    color: '#fbbf24' },
      { score: 3, label: 'Good',    color: '#34d399' },
      { score: 4, label: 'Strong',  color: '#10b981' },
    ]
    return levels[score - 1] || { score: 0, label: '', color: '' }
  }

  const { score, label, color } = getStrength(password)
  if (!password) return null

  return (
    <div className="pwd-strength">
      <div className="pwd-strength__bars">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="pwd-strength__bar"
            style={{ backgroundColor: i <= score ? color : 'rgba(255,255,255,0.1)' }}
          />
        ))}
      </div>
      <span className="pwd-strength__label" style={{ color }}>{label}</span>
    </div>
  )
}

/* ── Main AuthPage ─────────────────────────────────────────── */
export default function AuthPage() {
  const [mode, setMode] = useState('login')   // 'login' | 'signup'
  const [isAnimating, setIsAnimating] = useState(false)

  /* form state */
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '', role: 'attendee', agree: false,
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const switchMode = (next) => {
    if (next === mode || isAnimating) return
    setIsAnimating(true)
    setErrors({})
    setSuccess('')
    setTimeout(() => {
      setMode(next)
      setForm({ name: '', email: '', password: '', confirmPassword: '', role: 'attendee', agree: false })
      setIsAnimating(false)
    }, 280)
  }

  const set = (key) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm(p => ({ ...p, [key]: val }))
    if (errors[key]) setErrors(p => ({ ...p, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (mode === 'signup' && !form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (mode === 'signup' && form.password.length < 8) e.password = 'Password must be at least 8 characters'
    if (mode === 'signup' && form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match'
    if (mode === 'signup' && !form.agree) e.agree = 'You must accept the terms'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setErrors({})
    /* Simulate API call */
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSuccess(
      mode === 'login'
        ? '🎉 Welcome back! Redirecting to your dashboard…'
        : '✅ Account created! Please check your email to verify.'
    )
  }

  return (
    <div className="auth-root">
      <Background />

      <div className="auth-layout">
        {/* Left brand panel */}
        <BrandPanel />

        {/* Right form panel */}
        <div className="auth-form-panel">
          <div className={`auth-card ${isAnimating ? 'auth-card--exit' : 'auth-card--enter'}`}>

            {/* Mobile logo */}
            <div className="mobile-logo">
              <div className="brand-logo">
                <div className="brand-logo__icon brand-logo__icon--sm">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="url(#lg2)" strokeWidth="2"/>
                    <path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="lg2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7c3aed"/>
                        <stop offset="1" stopColor="#2563eb"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="brand-logo__text">EventSphere</span>
              </div>
            </div>

            {/* Tab switcher */}
            <div className="auth-tabs" role="tablist">
              <button
                id="tab-login"
                role="tab"
                aria-selected={mode === 'login'}
                className={`auth-tab ${mode === 'login' ? 'auth-tab--active' : ''}`}
                onClick={() => switchMode('login')}
              >
                Sign In
              </button>
              <button
                id="tab-signup"
                role="tab"
                aria-selected={mode === 'signup'}
                className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`}
                onClick={() => switchMode('signup')}
              >
                Create Account
              </button>
              <div className={`auth-tab-indicator ${mode === 'signup' ? 'auth-tab-indicator--right' : ''}`} />
            </div>

            {/* Heading */}
            <div className="auth-heading">
              <h2 className="auth-heading__title">
                {mode === 'login' ? 'Welcome back 👋' : 'Join EventSphere 🚀'}
              </h2>
              <p className="auth-heading__sub">
                {mode === 'login'
                  ? 'Sign in to manage your events and tickets.'
                  : 'Create your free account and start exploring events.'}
              </p>
            </div>

            {/* Social login */}
            <div className="social-login">
              <button type="button" className="social-btn" id="btn-google-login" aria-label="Continue with Google">
                <IconGoogle /> <span>Google</span>
              </button>
              <button type="button" className="social-btn" id="btn-github-login" aria-label="Continue with GitHub">
                <IconGithub /> <span>GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="divider"><span>or continue with email</span></div>

            {/* Success banner */}
            {success && (
              <div className="success-banner" role="alert">
                <span>{success}</span>
              </div>
            )}

            {/* Form */}
            <form
              id={mode === 'login' ? 'login-form' : 'signup-form'}
              className="auth-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {mode === 'signup' && (
                <InputField
                  id="input-name"
                  label="Full Name"
                  placeholder="Aryan Mehta"
                  value={form.name}
                  onChange={set('name')}
                  icon={<IconUser />}
                  error={errors.name}
                  autoComplete="name"
                />
              )}

              <InputField
                id="input-email"
                label="Email Address"
                type="email"
                placeholder="hello@eventsphere.io"
                value={form.email}
                onChange={set('email')}
                icon={<IconEmail />}
                error={errors.email}
                autoComplete="email"
              />

              <InputField
                id="input-password"
                label="Password"
                type="password"
                placeholder={mode === 'login' ? 'Enter your password' : 'Create a strong password'}
                value={form.password}
                onChange={set('password')}
                icon={<IconLock />}
                error={errors.password}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />

              {mode === 'signup' && (
                <PasswordStrength password={form.password} />
              )}

              {mode === 'signup' && (
                <InputField
                  id="input-confirm-password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Re-enter your password"
                  value={form.confirmPassword}
                  onChange={set('confirmPassword')}
                  icon={<IconLock />}
                  error={errors.confirmPassword}
                  autoComplete="new-password"
                />
              )}

              {mode === 'signup' && (
                <RoleSelector value={form.role} onChange={(r) => setForm(p => ({ ...p, role: r }))} />
              )}

              {mode === 'login' && (
                <div className="login-extras">
                  <label className="checkbox-label" htmlFor="remember-me">
                    <input type="checkbox" id="remember-me" className="checkbox-input" />
                    <span className="checkbox-custom"/>
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="link-btn" id="btn-forgot-password">
                    Forgot password?
                  </button>
                </div>
              )}

              {mode === 'signup' && (
                <div className="terms-wrapper">
                  <label className={`checkbox-label ${errors.agree ? 'checkbox-label--error' : ''}`} htmlFor="agree-terms">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      className="checkbox-input"
                      checked={form.agree}
                      onChange={set('agree')}
                    />
                    <span className="checkbox-custom"/>
                    <span>
                      I agree to the{' '}
                      <button type="button" className="link-btn">Terms of Service</button>
                      {' '}and{' '}
                      <button type="button" className="link-btn">Privacy Policy</button>
                    </span>
                  </label>
                  {errors.agree && <span className="input-error">{errors.agree}</span>}
                </div>
              )}

              <button
                type="submit"
                id={mode === 'login' ? 'btn-login-submit' : 'btn-signup-submit'}
                className={`submit-btn ${loading ? 'submit-btn--loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner" aria-label="Loading" />
                ) : (
                  mode === 'login' ? 'Sign In to EventSphere' : 'Create My Account'
                )}
              </button>
            </form>

            {/* Footer switch */}
            <p className="auth-footer">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                className="link-btn link-btn--strong"
                id={mode === 'login' ? 'btn-switch-to-signup' : 'btn-switch-to-login'}
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
              >
                {mode === 'login' ? 'Sign up free →' : 'Sign in →'}
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
