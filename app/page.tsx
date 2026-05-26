"use client";

import React, { useState } from 'react';
import { Calendar, Phone, Shield, Award, Clock, Star, CheckCircle, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* HEADER / NAVIGATION */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">D</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">DENTAL<span className="text-blue-600">PREMIUM</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition">Why Us</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Reviews</a>
            <a href="#booking" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition shadow-sm shadow-blue-100">Book Appointment</a>
          </nav>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 flex flex-col gap-4 font-medium animate-fadeIn">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)}>Why Us</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#booking" className="bg-blue-600 text-white text-center py-3 rounded-xl" onClick={() => setIsMenuOpen(false)}>Book Appointment</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                <Star size={16} className="fill-current" /> Top Rated Dental Care in US
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Exclusive Smile Care for <span className="text-blue-600">Your Luxury Life</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Experience world-class dental care with high-end technology. Certified American specialists dedicated to creating perfect smiles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition group">
                  Schedule Your Visit <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </a>
                <a href="tel:+123456789" className="bg-white border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition">
                  <Phone size={20} /> (555) 019-2834
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                <div><h3 className="text-2xl font-bold text-slate-900">10k+</h3><p className="text-sm text-slate-500">Happy Patients</p></div>
                <div><h3 className="text-2xl font-bold text-slate-900">99.8%</h3><p className="text-sm text-slate-500">Success Rate</p></div>
                <div><h3 className="text-2xl font-bold text-slate-900">15+</h3><p className="text-sm text-slate-500">Years Expert</p></div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-blue-400 rounded-3xl rotate-3 opacity-10 scale-105"></div>
              <div className="relative bg-slate-900 text-white p-8 rounded-3xl shadow-2xl space-y-6 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Live Clinic Status</span>
                  <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>
                </div>
                <h3 className="text-xl font-bold">Next Available Appointment</h3>
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-400" size={24} />
                    <div><p className="font-semibold text-sm">Today, Oct 12</p><p className="text-xs text-slate-400">Slots open afternoon</p></div>
                  </div>
                  <a href="#booking" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">Select Time <ChevronRight size={14} /></a>
                </div>
                <p className="text-xs text-slate-400 text-center">★ Rated 4.9/5 stars by over 2,400+ patients in Los Angeles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Premium Treatments for Your Smile</h2>
            <p className="text-slate-600 text-lg">We offer full-service luxurious dental care using leading technologies and biocompatible materials.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cosmetic Dentistry", desc: "Premium porcelain veneers and smile design to reshape your confidence seamlessly." },
              { title: "Dental Implants", desc: "Lifetime guaranteed titanium implants to restore missing teeth comfortably." },
              { title: "Teeth Whitening", desc: "Advanced laser whitening systems giving up to 8 shades lighter smiles in an hour." }
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:bg-white transition duration-300 space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                <a href="#booking" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition pt-2">Learn details & price <ChevronRight size={16} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Why US Celebrities Choose Our Clinics</h2>
            <p className="text-slate-400">We redefine dentistry. No pain, no fear. Only elite comfort, premium standards, and unparalleled perfection.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Shield size={24} />, title: "24/7 Premium Emergency", text: "Direct line access for urgent VIP treatments anytime." },
              { icon: <Award size={24} />, title: "Board Certified Specialists", text: "Top 1% Harvard & Ivy League graduated practitioners." },
              { icon: <Clock size={24} />, title: "No Waiting Room Policy", text: "We value your schedule. Direct entry to private room." },
              { icon: <CheckCircle size={24} />, title: "Flexible Insurance Care", text: "Seamless automated premium US insurance processing." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/40 space-y-3">
                <div className="text-blue-400">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">What Our Patients Say</h2>
            <p className="text-slate-500">Real feedback from verified US business owners and local residents.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Real Estate Executive", text: "The cosmetic smile treatment changed my entire career. The luxury service felt like a 5-star hotel rather than a dental clinic. Absolutely phenomenal team!" },
              { name: "Michael Vance", role: "Tech Founder", text: "As someone who feared dentists, this clinic blew my mind. Zero pain during my implant surgery. The AI scheduling tool is incredibly fast." }
            ].map((review, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 relative">
                <div className="flex text-amber-400 gap-1"><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /><Star size={18} className="fill-current" /></div>
                <p className="text-slate-600 italic text-sm leading-relaxed">"{review.text}"</p>
                <div><h4 className="font-bold text-slate-900 text-base">{review.name}</h4><p className="text-xs text-slate-400">{review.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOKING FORM */}
      <section id="booking" className="py-20 bg-gradient-to-t from-blue-50/50 to-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Secure Your Premium Consultation</h2>
            <p className="text-slate-600">Fill the instant request below. Our client specialist will reach you within 15 minutes.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-left">
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <h4 className="font-bold text-lg">✓ Appointment Request Sent!</h4>
                <p className="text-sm">Our team is reviewing and will text/call you at your provided number within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wider">Full Name</label><input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 text-sm" placeholder="John Doe" /></div>
                  <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wider">Phone Number</label><input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 text-sm" placeholder="(555) 000-0000" /></div>
                </div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1.5 tracking-wider">Requested Treatment</label><select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50/50 text-sm"><option>Cosmetic Dentistry / Veneers</option><option>Dental Implants</option><option>Laser Teeth Whitening</option><option>General Checkup & Clean</option></select></div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md shadow-blue-100 transition text-sm uppercase tracking-wider">Request Instant Appointment</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 text-xs py-8 border-t border-slate-800 text-center">
        <p>© 2026 Premium Dental Care Inc. All Rights Reserved. Private VIP Clinic Network USA.</p>
      </footer>
    </div>
  );
}