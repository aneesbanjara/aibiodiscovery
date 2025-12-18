"use client";

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import SectionText from "@/components/SectionText";
import Button from "@/components/Button";
import { Building, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <SectionHeader title="Get in Touch" />
        <SectionText text="Reach out to AI BioDiscovery LLC. We’re here to answer your questions, discuss collaboration opportunities, or provide more information about our research." />

        {/* Info + Form Grid */}
        <div className="mt-16 relative lg:grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 flex flex-col items-start text-left space-y-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#0A84FF] pb-2 inline-block">
              Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#5AC8FA] flex items-center justify-center text-white">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Company:</p>
                <p className="text-gray-800 font-semibold">
                  AI BioDiscovery LLC
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#5AC8FA] flex items-center justify-center text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Address:</p>
                <p className="text-gray-800 font-semibold">
                  18 Alden Place
                  <br />
                  Bronxville, New York 10708
                  <br />
                  United States of America
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#5AC8FA] flex items-center justify-center text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Email:</p>
                <p className="text-gray-800 font-semibold">
                  info@aibiodiscovery.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#5AC8FA] flex items-center justify-center text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-600 font-medium">Phone:</p>
                <p className="text-gray-800 font-semibold">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] transition resize-none"
              />
              <Button text="Send Message" />
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <iframe
            className="w-full h-96 rounded-3xl border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300"
            src="https://www.google.com/maps?q=18+Alden+Place,+Bronxville,+New+York+10708,+USA&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
