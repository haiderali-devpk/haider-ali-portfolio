import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertTriangle } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TypingHeading from './TypingHeading.jsx'

const EMAIL = 'haiderali646450@gmail.com'
const FORMSUBMIT_URL = `https://formsubmit.co/${EMAIL}`
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${EMAIL}`

// Contact form — sends real messages to haiderali646450@gmail.com via
// FormSubmit (no signup, no API key). The form's action/method are a
// plain POST to FormSubmit, so it still works with JavaScript off; with
// JavaScript on, the submit is sent via fetch and a success message is
// shown inline without leaving the page.
//
// FIRST SUBMISSION: FormSubmit sends a one-time activation email to
// haiderali646450@gmail.com — click the activation link in the inbox,
// after which all form messages arrive at that email.
const inputClass =
  'mt-1 w-full rounded-xl border border-border bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/15 dark:bg-navy-deep dark:text-white dark:placeholder:text-slate-500'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const formData = new FormData(e.target)
      const body = {
        name: formData.get('name'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        message: formData.get('message'),
        _subject: 'New message from portfolio',
        _captcha: 'false',
        _template: 'table',
      }
      const res = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error(`FormSubmit returned ${res.status}`)
      setStatus('sent')
      e.target.reset()
    } catch (err) {
      setStatus('error')
    }
  }
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <Reveal>
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Contact</p>
        <TypingHeading
          text="Let's build something together"
          className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white md:text-4xl"
        />
        <p className="mt-4 max-w-2xl text-lg text-muted dark:text-slate-300">
          Tell me about your project — I&rsquo;ll get back to you as soon as I can.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/haiderali-devpk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-navy-soft dark:bg-white dark:text-navy dark:hover:bg-primary-soft"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/haider-ali-ba5492331/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-navy"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft dark:bg-primary/20">
                <Mail className="h-6 w-6 text-primary dark:text-blue-300" />
              </span>
              <span>
                <strong className="block text-ink dark:text-white">Email</strong>
                <span className="break-all text-sm text-muted dark:text-slate-300">{EMAIL}</span>
              </span>
            </a>
            <a
              href="tel:+923281409024"
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-navy"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft dark:bg-primary/20">
                <Phone className="h-6 w-6 text-primary dark:text-blue-300" />
              </span>
              <span>
                <strong className="block text-ink dark:text-white">Phone</strong>
                <span className="text-sm text-muted dark:text-slate-300">+92 328 1409024</span>
              </span>
            </a>
            <a
              href="https://github.com/haiderali-devpk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-navy"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft dark:bg-primary/20">
                <Github className="h-6 w-6 text-primary dark:text-blue-300" />
              </span>
              <span>
                <strong className="block text-ink dark:text-white">GitHub</strong>
                <span className="text-sm text-muted dark:text-slate-300">github.com/haiderali-devpk</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/haider-ali-ba5492331/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-navy"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft dark:bg-primary/20">
                <Linkedin className="h-6 w-6 text-primary dark:text-blue-300" />
              </span>
              <span>
                <strong className="block text-ink dark:text-white">LinkedIn</strong>
                <span className="text-sm text-muted dark:text-slate-300">linkedin.com/in/haider-ali-ba5492331</span>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="md:col-span-3">
          <form
            action={FORMSUBMIT_URL}
            method="POST"
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy md:p-8"
          >
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {status === 'sent' && (
              <p className="mb-5 flex items-start gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:bg-green-500/15 dark:text-green-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                Thank you! Your message has been sent — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mb-5 flex items-start gap-2 rounded-xl bg-coral-soft px-4 py-3 text-sm font-medium text-coral-dark dark:bg-coral/15 dark:text-coral">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                Something went wrong sending your message. Please try again, or
                email me directly at {EMAIL}.
              </p>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink dark:text-white">
                Your name
                <input name="name" placeholder="Your name" required className={inputClass} />
              </label>
              <label className="block text-sm font-semibold text-ink dark:text-white">
                Your email
                <input name="email" type="email" placeholder="you@example.com" required className={inputClass} />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Project type
              <select name="projectType" defaultValue="Business website" className={inputClass}>
                <option>Business website</option>
                <option>Landing page</option>
                <option>Web app</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Project details
              <textarea name="message" rows={5} placeholder="Tell me about your project…" required className={inputClass} />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-sm text-muted dark:text-slate-300">
              You can also reach me directly at {EMAIL}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
