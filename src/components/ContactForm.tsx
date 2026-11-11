import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { profileData } from '../data/profileData';
import { Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.errors.nameRequired;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = t.contact.errors.emailRequired;
    }
    if (!formData.subject.trim()) {
      errs.subject = t.contact.errors.subjectRequired;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = t.contact.errors.messageRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleQuickTopicSelect = (topic: string) => {
    setFormData((prev) => ({ ...prev, subject: topic }));
    if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build verified mailto link with encoded payload
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from Easin Ali Portfolio Website`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmittedStatus('success');
    }, 600);
  };

  return (
    <div className="editorial-card corner-bracket p-6 sm:p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-borderNavy">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-electricBlue animate-pulse" />
            <span className="mono-label text-electricBlue">PROTOCOL // TRANSMIT</span>
          </div>
          <h3 className="text-xl font-bold text-warmWhite tracking-tight">{t.contact.formTitle}</h3>
          <p className="mono-label text-secondaryText/60 mt-1">
            DESTINATION: {profileData.email}
          </p>
        </div>
        <div className="w-10 h-10 border border-electricBlue/40 flex items-center justify-center text-electricBlue bg-darkNavy">
          <Send className="w-4 h-4" />
        </div>
      </div>

      {submittedStatus === 'success' && (
        <div className="mb-6 p-4 border border-crtGreen/40 bg-darkNavy flex items-start gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-crtGreen shrink-0 mt-0.5" />
          <div className="text-xs text-crtGreen">
            <p className="font-mono font-bold uppercase tracking-wider">{t.contact.successMsg}</p>
            <p className="mt-1 text-secondaryText">
              If your email client didn't launch automatically, please write directly to{' '}
              <a href={`mailto:${profileData.email}`} className="underline font-bold text-warmWhite">
                {profileData.email}
              </a>.
            </p>
          </div>
        </div>
      )}

      {/* Quick Topic Chips */}
      <div className="mb-6">
        <label className="block mono-label text-secondaryText/70 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-electricBlue" />
          <span>{t.contact.quickTopicsTitle}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {t.contact.quickTopics.map((topic, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleQuickTopicSelect(topic)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wider uppercase border transition-all duration-200 ${formData.subject === topic
                  ? 'bg-electricBlue text-darkNavy border-electricBlue font-bold'
                  : 'bg-darkNavy text-secondaryText border-borderNavy hover:border-electricBlue/50 hover:text-warmWhite'
                }`}
            >
              <span className="text-secondaryText/40 mr-1">&gt;</span>
              {topic}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block mono-label text-secondaryText/80 mb-1.5">
            {t.contact.namePlaceholder} <span className="text-electricBlue">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder={t.contact.namePlaceholder}
            className={`w-full px-4 py-3 bg-darkNavy border text-sm text-warmWhite font-mono placeholder-secondaryText/40 focus:outline-none focus:border-electricBlue transition-all ${errors.name ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
              }`}
          />
          {errors.name && (
            <p className="mono-label text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block mono-label text-secondaryText/80 mb-1.5">
            {t.contact.emailPlaceholder} <span className="text-electricBlue">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder={t.contact.emailPlaceholder}
            className={`w-full px-4 py-3 bg-darkNavy border text-sm text-warmWhite font-mono placeholder-secondaryText/40 focus:outline-none focus:border-electricBlue transition-all ${errors.email ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
              }`}
          />
          {errors.email && (
            <p className="mono-label text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block mono-label text-secondaryText/80 mb-1.5">
            {t.contact.subjectPlaceholder} <span className="text-electricBlue">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            placeholder={t.contact.subjectPlaceholder}
            className={`w-full px-4 py-3 bg-darkNavy border text-sm text-warmWhite font-mono placeholder-secondaryText/40 focus:outline-none focus:border-electricBlue transition-all ${errors.subject ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
              }`}
          />
          {errors.subject && (
            <p className="mono-label text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block mono-label text-secondaryText/80 mb-1.5">
            {t.contact.messagePlaceholder} <span className="text-electricBlue">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder={t.contact.messagePlaceholder}
            className={`w-full px-4 py-3 bg-darkNavy border text-sm text-warmWhite font-mono placeholder-secondaryText/40 focus:outline-none focus:border-electricBlue transition-all resize-y ${errors.message ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
              }`}
          />
          {errors.message && (
            <p className="mono-label text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-electricBlue hover:bg-highlightBlue disabled:opacity-50 text-darkNavy font-mono font-bold text-xs tracking-widest uppercase transition-all duration-200 focus:outline-none shadow-glow"
          data-magnetic
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}</span>
        </button>

        {/* Authenticity notice */}
        <div className="pt-2 flex items-start gap-2 mono-label text-secondaryText/50">
          <Info className="w-3.5 h-3.5 shrink-0 text-electricBlue mt-0.5" />
          <span>{t.contact.noticeText}</span>
        </div>
      </form>
    </div>
  );
};
