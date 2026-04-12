"use client";

import { Phone, MailIcon, PrinterIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left */}
      <div className="bg-gray-900 text-white px-16 py-32 flex flex-col justify-center">
        <h1 className="text-5xl font-semibold leading-tight">Get in Touch.</h1>

        <p className="mt-8 text-gray-300 max-w-md">
          Reach out to AI BioDiscovery INC. We’re here to answer your questions,
          discuss collaboration opportunities, or provide more information about
          our research.
        </p>
      </div>

      {/* Right */}
      <div className="px-16 py-32 flex flex-col justify-center">
        <div className="space-y-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Organization
            </p>
            <p className="text-2xl font-medium mt-2">AI BioDiscovery INC</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Phone
            </p>
            <p className="text-2xl font-medium mt-2 flex items-center gap-3">
              <Phone />
              <a href="tel:+1 914 523 1729">+1 914 523 1729</a>
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Email
            </p>
            <p className="text-2xl font-medium mt-2 flex items-center gap-3">
              <MailIcon />
              <a href="mailto:management@aibiodiscovery.us">
                management@aibiodiscovery.us
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Fax
            </p>
            <p className="text-2xl font-medium mt-2 flex items-center gap-3">
              <PrinterIcon />
              (833) 937-1861
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
