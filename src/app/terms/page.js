import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | Oniicode',
  description: 'Terms of Service for Oniicode (Peter Onisha Peregbakumo). Terms governing engineering services, intellectual property, and client projects.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-800 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-500 font-mono">
            Last Updated: July 2026 • Oniicode (Peter Onisha Peregbakumo)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-gray-700 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website <a href="https://oniicode.com" className="text-blue-600 underline">oniicode.com</a>, engaging our engineering services, or booking a consultation with Peter Onisha Peregbakumo ("Oniicode"), you agree to be bound by these Terms of Service. If you do not agree, please do not access or use our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Services & Project Scope</h2>
            <p>
              Oniicode provides custom AI product development, SaaS MVP engineering, technical advisory, and software automation services. Specific scope of work, milestone timelines, deliverables, and payment structures are documented in formal project proposals or agreements executed between Oniicode and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise agreed upon in writing:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Client Deliverables:</strong> Upon full payment of milestone fees, 100% ownership of custom source code, repositories, and custom design assets created specifically for the client transfers directly to the client.
              </li>
              <li>
                <strong>Oniicode Assets:</strong> Oniicode retains ownership over pre-existing open-source modules, proprietary internal developer starter tools, and general technical expertise used across client projects.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. Payment Terms & Milestone Agreements</h2>
            <p>
              Engineering engagements are typically billed on a milestone or retainer basis as outlined in your project proposal. Payments must be remitted on or before agreed milestone deadlines. Work may be paused if milestone payments are past due.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Oniicode and Peter Onisha Peregbakumo shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or engineering services. Total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">6. Contact Information</h2>
            <p>
              For any legal inquiry regarding these Terms of Service, please contact:
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
          <Link href="/privacy" className="text-blue-600 hover:underline">
            View Privacy Policy →
          </Link>
        </div>

      </div>
    </div>
  )
}
