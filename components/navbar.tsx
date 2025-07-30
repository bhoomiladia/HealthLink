"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Heart, Globe, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-900">HealthLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#symptom-checker">Symptom Checker</NavLink>
            <NavLink href="#find-clinics">Find Clinics</NavLink>
            <NavLink href="#token-system">Token System</NavLink>
            <NavLink href="#features">About</NavLink>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-blue-700 hover:text-blue-900">
              <Globe className="w-4 h-4 mr-2" />
              English
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4">
              <NavLink href="#symptom-checker" mobile>
                Symptom Checker
              </NavLink>
              <NavLink href="#find-clinics" mobile>
                Find Clinics
              </NavLink>
              <NavLink href="#token-system" mobile>
                Token System
              </NavLink>
              <NavLink href="#features" mobile>
                About
              </NavLink>
              <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                <Button variant="ghost" size="sm" className="text-blue-700">
                  <Globe className="w-4 h-4 mr-2" />
                  English
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseClasses = "text-gray-700 hover:text-blue-600 transition-colors font-medium"
  const mobileClasses = mobile ? "block py-2" : ""

  return (
    <Link href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  )
}
