import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Oniicode',
  description: 'Privacy Policy for Oniicode (Peter Onisha Peregbakumo). Information on how we collect, use, and protect your data.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFB] text-gray-900 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-gray-200 pb-8 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-800 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 font-mono">
            Last Updated: July 2026 • Oniicode (Peter Onisha Peregbakumo)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-gray-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. Overview</h2>
            <p>
              Oniicode ("we", "our", or "us"), operated by Peter Onisha Peregbakumo, respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://oniicode.com" className="text-blue-600 underline">oniicode.com</a> or use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, company name, and project requirements, which you voluntarily provide when filling out contact forms or booking a strategy call.
              </li>
              <li>
                <strong>Usage & Analytics Data:</strong> Privacy-friendly, non-identifying aggregate metrics (such as pages visited, browser type, and country location) via analytics tools like GoatCounter. We do not track individual users across the web or store persistent tracking cookies for advertising.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. How We Use Your Information</h2>
            <p>We use the information collected primarily to:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>Respond to project inquiries, strategy call requests, and business communications.</li>
              <li>Deliver client engineering services, custom AI software solutions, and technical advisory.</li>
              <li>Improve site performance, user interface design, and client experience.</li>
              <li>Comply with applicable legal obligations and enforce our agreements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. Data Sharing & Confidentiality</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Confidential client project details, source code, and proprietary business ideas are handled under strict non-disclosure obligations (NDAs). We only share information with trusted third-party infrastructure providers (such as hosting, domain, or booking services like BuukMeNow) necessary to provide our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">5. Data Security</h2>
            <p>
              We implement industry-standard security measures (SSL encryption, access control, and secure cloud infrastructure) to maintain the safety of your personal information. However, no internet transmission is 100% secure, so we encourage taking standard security precautions when transmitting sensitive information online.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your data, please contact us directly:
            </p>
            <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1 font-mono text-xs text-gray-800">
              <div><strong>Name:</strong> Peter Onisha Peregbakumo</div>
              <div><strong>Brand:</strong> Oniicode AI Product Studio</div>
              <div><strong>Email:</strong> <a href="mailto:peter@buukmenow.com" className="text-blue-600 hover:underline">peter@buukmenow.com</a></div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 flex items-center justify-between text-xs text-gray-500 font-mono">
          <div>&copy; {new Date().getFullYear()} Oniicode. All rights reserved.</div>
          <Link href="/terms" className="text-blue-600 hover:underline">
            View Terms of Service →
          </Link>
        </div>

      </div>
    </div>
  )
}
