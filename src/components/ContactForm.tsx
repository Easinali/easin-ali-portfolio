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
    <div className="bg-navyBlue/90 rounded-2xl border border-borderNavy p-6 sm:p-8 shadow-card relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">{t.contact.formTitle}</h3>
          <p className="text-xs text-secondaryText/80 mt-1">
            {profileData.email}
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-electricBlue/10 border border-electricBlue/30 flex items-center justify-center text-highlightBlue">
          <Send className="w-5 h-5" />
        </div>
      </div>

      {submittedStatus === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-200">
            <p className="font-semibold">{t.contact.successMsg}</p>
            <p className="mt-1 text-emerald-300/80">
              If your email client didn't launch automatically, you can write directly to{' '}
              <a href={`mailto:${profileData.email}`} className="underline font-bold text-white">
                {profileData.email}
              </a>.
            </p>
          </div>
        </div>
      )}

      {/* Quick Topic Chips */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-secondaryText/80 mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-highlightBlue" />
          <span>{t.contact.quickTopicsTitle}</span>
        </label>
        <div className="flex flex-wrap gap-1.5">
          {t.contact.quickTopics.map((topic, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleQuickTopicSelect(topic)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                formData.subject === topic
                  ? 'bg-electricBlue text-white border-electricBlue shadow-sm'
                  : 'bg-darkNavy text-slate-300 border-borderNavy hover:border-electricBlue/50'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-secondaryText mb-1.5">
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
            className={`w-full px-4 py-2.5 rounded-lg bg-darkNavy/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all ${
              errors.name ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-secondaryText mb-1.5">
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
            className={`w-full px-4 py-2.5 rounded-lg bg-darkNavy/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all ${
              errors.email ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-secondaryText mb-1.5">
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
            className={`w-full px-4 py-2.5 rounded-lg bg-darkNavy/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all ${
              errors.subject ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
            }`}
          />
          {errors.subject && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-secondaryText mb-1.5">
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
            className={`w-full px-4 py-2.5 rounded-lg bg-darkNavy/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electricBlue transition-all resize-y ${
              errors.message ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-borderNavy'
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-electricBlue hover:bg-blue-600 disabled:opacity-50 text-white font-semibold text-sm shadow-md hover:shadow-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electricBlue"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}</span>
        </button>

        {/* Authenticity notice */}
        <div className="pt-2 flex items-start gap-2 text-[11px] text-secondaryText/70">
          <Info className="w-3.5 h-3.5 shrink-0 text-highlightBlue mt-0.5" />
          <span>{t.contact.noticeText}</span>
        </div>
      </form>
    </div>
  );
};
