import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Hero() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    brandName: '',
    website: '',

    // Step 2
    servicesNeeded: [] as string[],
    currentAdsStatus: '',
    monthlyRevenue: '',
    skusCount: '',

    // Step 3
    startDate: '',
    adBudget: '',
    biggestChallenge: '',
    additionalInfo: '',
  });

  const [step1Error, setStep1Error] = useState('');

  // Handlers for inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (step1Error) setStep1Error('');
  };

  // Handler for multi-select chips
  const toggleMultiSelect = (field: 'servicesNeeded', option: string) => {
    setFormData((prev) => {
      const current = prev[field];
      const exists = current.includes(option);
      return {
        ...prev,
        [field]: exists
          ? current.filter((item) => item !== option)
          : [...current, option],
      };
    });
  };

  // Handler for single-select chips
  const handleSingleSelect = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Step 1 Validation
  const handleNextStep1 = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.brandName.trim()) {
      setStep1Error('Please fill out all required fields.');
      return;
    }
    setStep1Error('');
    setStep(2);
  };

  // Form Submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center bg-background overflow-hidden font-body pt-28 sm:pt-36 md:pt-40 pb-6 sm:pb-8">
      {/* Background Video (100% full clarity, zero overlay filter) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center justify-center">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight text-foreground max-w-3xl mx-auto drop-shadow-md"
        >
          Scale with{' '}
          <span className="font-display italic font-normal text-accent">
            Profitable
          </span>{' '}
          Meta Ads
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2.5 sm:mt-4 text-center text-xs sm:text-base md:text-lg text-foreground max-w-md sm:max-w-lg leading-relaxed font-body mx-auto font-semibold drop-shadow-sm"
        >
          Turn your ad spend into predictable, scalable revenue.
        </motion.p>

        {/* 3-Step Lead Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 sm:mt-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 backdrop-blur-xl transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.88)',
              border: '1.5px solid rgba(15, 23, 42, 0.12)',
              boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
            }}
          >
            {!isSubmitted ? (
              <>
                {/* Step Indicator & Progress Bar */}
                <div className="mb-3.5 sm:mb-5">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    <span>
                      {step === 1 && "Step 1/3 — The Basics"}
                      {step === 2 && 'Step 2/3 — Brand Overview'}
                      {step === 3 && 'Step 3/3 — Timeline & Budget'}
                    </span>
                    <span className="font-bold text-foreground">{step}/3</span>
                  </div>
                  <div className="w-full bg-border/50 h-1 sm:h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-accent h-full rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Animated Form Steps */}
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleNextStep1}
                      className="space-y-2.5 sm:space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] sm:text-xs font-medium text-foreground/90 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] sm:text-xs font-medium text-foreground/90 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        <div>
                          <label className="block text-[11px] sm:text-xs font-medium text-foreground/90 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] sm:text-xs font-medium text-foreground/90 mb-1">
                            Brand Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Brand Name"
                            value={formData.brandName}
                            onChange={(e) => handleInputChange('brandName', e.target.value)}
                            className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-medium text-foreground/90 mb-1">
                          Website / Instagram <span className="text-muted-foreground font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Website or @instagram"
                          value={formData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full"
                        />
                      </div>

                      {step1Error && (
                        <p className="text-xs text-red-500 font-medium">{step1Error}</p>
                      )}

                      <button
                        type="submit"
                        className="w-full mt-1 sm:mt-2 rounded-xl bg-primary text-primary-foreground py-2.5 sm:py-3 px-5 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </motion.form>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2.5 sm:space-y-4"
                    >
                      {/* What do you need help with? */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          What do you need help with? <span className="text-muted-foreground font-normal">(Multi-select)</span>
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {[
                            'Meta Ads Management',
                            'Creative & Ad Design',
                            'Full Funnel Setup',
                            'Scaling Existing Campaigns',
                            'Not Sure Yet',
                          ].map((option) => {
                            const selected = formData.servicesNeeded.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleMultiSelect('servicesNeeded', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* What are you currently doing for ads? */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          What are you currently doing for ads?
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {[
                            'Running ads myself',
                            'Working with another agency',
                            'Running ads but not seeing results',
                            'Never run paid ads before',
                          ].map((option) => {
                            const selected = formData.currentAdsStatus === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSingleSelect('currentAdsStatus', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Current monthly revenue */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          Current monthly revenue
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {['Under ₹5L', '₹5L–₹20L', '₹20L–₹50L', '₹50L+'].map((option) => {
                            const selected = formData.monthlyRevenue === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSingleSelect('monthlyRevenue', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* How many products do you sell? */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          How many products do you sell?
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {['1–5 SKUs', '6–20 SKUs', '20+ SKUs'].map((option) => {
                            const selected = formData.skusCount === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSingleSelect('skusCount', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex items-center gap-2 sm:gap-3 pt-1.5 sm:pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="rounded-xl py-2 sm:py-2.5 px-3.5 sm:px-5 text-xs sm:text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 rounded-xl bg-primary text-primary-foreground py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <span>Next Step</span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.form
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-2.5 sm:space-y-4"
                    >
                      {/* When are you looking to get started? */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          When are you looking to get started?
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {['Immediately', 'Within 2 weeks', 'Within a month', 'Just exploring'].map((option) => {
                            const selected = formData.startDate === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSingleSelect('startDate', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* What's your monthly ad spend budget? */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1.5">
                          What's your monthly ad spend budget?
                        </label>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {['Under ₹50K', '₹50K–₹2L', '₹2L–₹5L', '₹5L+'].map((option) => {
                            const selected = formData.adBudget === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSingleSelect('adBudget', option)}
                                className={`rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs border transition-all cursor-pointer select-none ${
                                  selected
                                    ? 'bg-accent text-accent-foreground border-accent font-medium shadow-xs'
                                    : 'bg-white/80 text-foreground border-border/80 hover:border-foreground/30'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Biggest challenge */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
                          What's your biggest challenge right now?
                        </label>
                        <textarea
                          rows={2}
                          placeholder="High CAC, unoptimized creatives, scaling issues..."
                          value={formData.biggestChallenge}
                          onChange={(e) => handleInputChange('biggestChallenge', e.target.value)}
                          className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full resize-none"
                        />
                      </div>

                      {/* Anything else */}
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-foreground mb-1">
                          Anything else we should know? <span className="text-muted-foreground font-normal">(Optional)</span>
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Any specific goals or questions..."
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          className="rounded-xl border border-border/80 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-body bg-white/90 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all w-full resize-none"
                        />
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex items-center gap-2 sm:gap-3 pt-1.5 sm:pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="rounded-xl py-2 sm:py-2.5 px-3.5 sm:px-5 text-xs sm:text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="flex-1 rounded-xl bg-primary text-primary-foreground py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <span>Submit Audit Request</span>
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-2">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-display text-3xl text-foreground">
                  Audit Request Received!
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-body">
                  Thanks for getting in touch, <strong className="text-foreground">{formData.fullName || 'there'}</strong>! Our team will review your brand details and reach out within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="rounded-full border border-border text-foreground px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-secondary transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
