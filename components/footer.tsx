import { Heart, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold">HealthLink</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Connecting communities with quality healthcare through technology and compassion.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1800-HEALTH (1800-432584)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@healthlink.in</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/symptom-checker" className="hover:text-white transition-colors">
                  AI Symptom Checker
                </Link>
              </li>
              <li>
                <Link href="/find-clinics" className="hover:text-white transition-colors">
                  Find Clinics
                </Link>
              </li>
              <li>
                <Link href="/token-system" className="hover:text-white transition-colors">
                  Token Management
                </Link>
              </li>
              <li>
                <Link href="/telemedicine" className="hover:text-white transition-colors">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/health-records" className="hover:text-white transition-colors">
                  Health Records
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/partners/government" className="hover:text-white transition-colors">
                  Ministry of Health
                </Link>
              </li>
              <li>
                <Link href="/partners/aiims" className="hover:text-white transition-colors">
                  AIIMS Network
                </Link>
              </li>
              <li>
                <Link href="/partners/state-health" className="hover:text-white transition-colors">
                  State Health Departments
                </Link>
              </li>
              <li>
                <Link href="/partners/ngos" className="hover:text-white transition-colors">
                  Healthcare NGOs
                </Link>
              </li>
              <li>
                <Link href="/partners/rural" className="hover:text-white transition-colors">
                  Rural Health Centers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2024 HealthLink. All rights reserved. | Registered with Ministry of Health & Family Welfare
            </p>
            <div className="flex items-center space-x-4 text-sm text-blue-200">
              <span>Available in:</span>
              <div className="flex space-x-2">
                <span className="bg-blue-800 px-2 py-1 rounded">Hindi</span>
                <span className="bg-blue-800 px-2 py-1 rounded">Bengali</span>
                <span className="bg-blue-800 px-2 py-1 rounded">Tamil</span>
                <span className="bg-blue-800 px-2 py-1 rounded">+4 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
