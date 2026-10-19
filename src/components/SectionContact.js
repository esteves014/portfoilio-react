import React, { forwardRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import contact from './../data/Contact.json'

const emptyForm = { name: '', email: '', subject: '', message: '' }

const mapQuery = encodeURIComponent(contact.location)

const SectionContact = forwardRef((props, ref) => {
    const [form, setForm] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        if (errors[name]) setErrors({ ...errors, [name]: undefined })
    }

    const validate = () => {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = 'Informe seu nome.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Informe um e-mail válido.'
        if (form.message.trim().length < 10) newErrors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        if (contact.formspreeId) {
            setStatus('sending')
            try {
                const response = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(form),
                })
                if (!response.ok) throw new Error('Falha no envio')
                setStatus('success')
                setForm(emptyForm)
            } catch {
                setStatus('error')
            }
            return
        }

        if (contact.email) {
            const subject = encodeURIComponent(form.subject || `Contato pelo portfólio - ${form.name}`)
            const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
            window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
            setStatus('mailto')
            return
        }

        setStatus('unconfigured')
    }

    return (
        <section id="contact" ref={ref} className="container hidden section-contact">
            <SectionTitle title="Vamos conversar?" subtitle="Tem um projeto, uma vaga ou uma ideia? Mande uma mensagem que eu respondo o quanto antes." />

            <div className="row g-4">
                <div className="col-12 col-lg-7">
                    <form className="contact-card h-100" onSubmit={handleSubmit} noValidate>
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="contact-name" className="contact-label">Nome</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    className={`contact-input ${errors.name ? 'invalid' : ''}`}
                                    placeholder="Seu nome"
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                />
                                {errors.name && <span id="contact-name-error" className="contact-error">{errors.name}</span>}
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="contact-email" className="contact-label">E-mail</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    className={`contact-input ${errors.email ? 'invalid' : ''}`}
                                    placeholder="voce@email.com"
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                />
                                {errors.email && <span id="contact-email-error" className="contact-error">{errors.email}</span>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="contact-subject" className="contact-label">Assunto <span className="contact-optional">(opcional)</span></label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    className="contact-input"
                                    placeholder="Sobre o que você quer falar?"
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="contact-message" className="contact-label">Mensagem</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    className={`contact-input ${errors.message ? 'invalid' : ''}`}
                                    placeholder="Conte um pouco sobre o que você precisa..."
                                    value={form.message}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                ></textarea>
                                {errors.message && <span id="contact-message-error" className="contact-error">{errors.message}</span>}
                            </div>
                        </div>

                        <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                            <button type="submit" className="btn-gradient" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Enviando...' : <>Enviar mensagem <i className="bi bi-send ms-1"></i></>}
                            </button>

                            <span className={`contact-status ${status}`} role="status" aria-live="polite">
                                {status === 'success' && 'Mensagem enviada! Obrigado pelo contato.'}
                                {status === 'error' && 'Não foi possível enviar agora. Tente novamente em instantes.'}
                                {status === 'mailto' && 'Abrimos seu aplicativo de e-mail com a mensagem pronta.'}
                                {status === 'unconfigured' && 'O envio de mensagens ainda não foi configurado.'}
                            </span>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-lg-5">
                    <div className="contact-card contact-map-card h-100 d-flex flex-column">
                        <div className="contact-map">
                            <iframe
                                title="Mapa da Fatec Lins"
                                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-4 d-flex align-items-start gap-3">
                            <span className="contact-icon"><i className="bi bi-geo-alt"></i></span>
                            <div>
                                <h3 className="h6 mb-1">Onde estudo</h3>
                                <p className="contact-muted mb-2">{contact.locationLabel}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    Abrir no Google Maps <i className="bi bi-box-arrow-up-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default SectionContact
