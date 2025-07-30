"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mic, MicOff, Send, Globe, Stethoscope, Users } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isListening, setIsListening] = useState(false)
  const [symptoms, setSymptoms] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const languages = ["English", "Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati"]

  return (
    <section id="symptom-checker" className="py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Your Health,
                <span className="text-green-600"> Our Priority</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get instant AI-powered health insights and seamless clinic access. Check symptoms, find nearby
                healthcare, and manage appointments - all in your language.
              </p>
            </div>

            {/* Symptom Checker Interface */}
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-900">Start Checking Symptoms</h3>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="text-sm border border-blue-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {languages.map((lang) => (
                          <option key={lang} value={lang}>
                            {lang}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Input
                      placeholder="Describe your symptoms in your own words..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="flex-1 border-blue-200 focus:border-blue-500"
                    />
                    <Button
                      variant={isListening ? "destructive" : "outline"}
                      size="icon"
                      onClick={() => setIsListening(!isListening)}
                      className="border-blue-200 hover:bg-blue-50"
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                  {isListening && (
                    <div className="flex items-center space-x-2 text-sm text-blue-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Listening in {selectedLanguage}...</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-4 h-4 text-green-600" />
                <span>AI-Powered Diagnosis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Trusted by 10M+ Users</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=500&text=Diverse+family+receiving+healthcare+consultation+with+doctor+in+modern+clinic+setting"
                alt="Diverse family using healthcare services"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <Card className="absolute -left-4 top-1/4 bg-white shadow-lg border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Available 24/7</p>
                    <p className="text-xs text-gray-600">Instant Health Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -right-4 bottom-1/4 bg-white shadow-lg border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">7+ Languages</p>
                    <p className="text-xs text-gray-600">Regional Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
