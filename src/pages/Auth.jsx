import { useState } from 'react'
import { Brand } from '../components/SiteLayout.jsx'

function AuthIllustration() {
  return (
    <div className="auth-illustration" aria-hidden="true">
      <div className="auth-illustration__window">
        <div className="auth-illustration__bar"><i /><i /><i /></div>
        <div className="auth-illustration__sidebar"><i /><i /><i /><i /></div>
        <div className="auth-illustration__content">
          <div className="auth-illustration__tile" />
          <div className="auth-illustration__lines"><i /><i /><i /></div>
          <div className="auth-illustration__panel" />
        </div>
      </div>
      <div className="auth-illustration__note" />
    </div>
  )
}

function AuthPage({ mode }) {
  const isRegister = mode === 'register'
  const [showPassword, setShowPassword] = useState(false)
  const redirect = new URLSearchParams(window.location.search).get('redirect')
  const allowedRedirects = ['/about', '/portfolio', '/projects', '/home']
  const postAuthRedirect = allowedRedirects.includes(redirect) ? redirect : '/home'
  const loginHref = isRegister ? `/login${redirect ? `?redirect=${encodeURIComponent(redirect)}` : ''}` : postAuthRedirect
  const registerHref = `/register${redirect ? `?redirect=${encodeURIComponent(redirect)}` : ''}`

  const title = isRegister ? 'Daftar' : 'Masuk'

  return (
    <div className={`auth-page${isRegister ? ' auth-page--register' : ''}`}>
      <section className="auth-story" aria-label="Tentang Sigma Lab">
        <Brand light />
        <div className="auth-story__copy">
          <span className="auth-story__eyebrow">
            {isRegister ? 'BERGABUNG DENGAN SIGMA LAB' : 'SELAMAT DATANG KEMBALI'}
          </span>
          <h1>
            {isRegister
              ? 'Buat akun dan mulai berkarya bersama'
              : 'Masuk untuk melanjutkan project kamu'}
          </h1>
          <p>
            {isRegister
              ? 'Daftar gratis untuk mengikuti project, mengirim request, dan menampilkan karyamu di portofolio.'
              : 'Lihat project yang kamu ikuti, pantau request, dan kelola profilmu di Sigma Lab.'}
          </p>
        </div>
        <AuthIllustration />
      </section>

      <section className="auth-panel" aria-label={title}>
        <div className="auth-card">
          <h2>{title}</h2>
          <p className="auth-card__intro">
            {isRegister
              ? 'Lengkapi data berikut untuk membuat akun.'
              : 'Masukkan email dan password akunmu.'}
          </p>

          <div className="auth-form">
            {isRegister && (
              <>
                <label className="auth-field">
                  Nama Lengkap
                  <input name="name" autoComplete="name" placeholder="Nama lengkap" />
                </label>
                <div className="auth-form__row">
                  <label className="auth-field">
                    NIM
                    <input
                      name="studentId"
                      autoComplete="off"
                      inputMode="numeric"
                      placeholder="Nomor induk"
                    />
                  </label>
                  <label className="auth-field">
                    No HP
                    <input
                      name="phone"
                      type="text"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="08xx xxxx xxxx"
                    />
                  </label>
                </div>
              </>
            )}

            <label className="auth-field">
              Email
              <input
                name="email"
                type="text"
                inputMode="email"
                autoComplete="email"
                placeholder="nama@email.com"
              />
            </label>

            <label className="auth-field">
              Password
              <span className="auth-password">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isRegister ? 'new-password' : 'current-password'}
                  placeholder={isRegister ? 'Min. 8 karakter' : 'Masukkan password'}
                />
                <button
                  className="auth-password__toggle"
                  type="button"
                  aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? 'Sembunyikan' : 'Tampilkan'}
                </button>
              </span>
            </label>

            {isRegister && (
              <>
                <label className="auth-field">
                  Konfirmasi Password
                  <input
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Ulangi password"
                  />
                </label>
                <label className="auth-check">
                  <input name="terms" type="checkbox" />
                  <span>Saya setuju dengan syarat dan ketentuan Sigma Lab</span>
                </label>
              </>
            )}

            {!isRegister && (
              <div className="auth-form__options">
                <label className="auth-check">
                  <input name="remember" type="checkbox" />
                  <span>Ingat saya</span>
                </label>
                <button className="auth-inline-button" type="button">
                  Lupa password?
                </button>
              </div>
            )}

            {isRegister ? (
              <a className="auth-submit" href={loginHref}>Buat Akun</a>
            ) : (
              <a className="auth-submit" href={postAuthRedirect}>Masuk</a>
            )}
          </div>

          {!isRegister && (
            <>
              <div className="auth-divider"><span>atau</span></div>
              <button className="auth-google" type="button">
                <span className="auth-google__mark" aria-hidden="true">G</span>
                Masuk dengan Google
              </button>
            </>
          )}

          <p className="auth-card__switch">
            {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'}{' '}
            <a href={isRegister ? loginHref : registerHref}>
              {isRegister ? 'Login' : 'Daftar sekarang'}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export function Login() {
  return <AuthPage mode="login" />
}

export function Register() {
  return <AuthPage mode="register" />
}
