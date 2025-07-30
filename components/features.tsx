import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquare, MapPin, Clock, Shield, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Symptom Checker",
      description: "Advanced AI analyzes your symptoms and provides preliminary health insights with high accuracy.",
      color: "text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Voice & Text Input",
      description: "Describe symptoms naturally using voice or text in your preferred regional language.",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Find Nearby Clinics",
      description: "Locate healthcare facilities near you with real-time availability and ratings.",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Smart Queue System",
      description: "Skip waiting rooms with our intelligent token management and appointment scheduling.",
      color: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your health data is encrypted and secure, following international privacy standards.",
      color: "text-red-600",
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Manage health records and appointments for your entire family from one account.",
      color: "text-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Comprehensive Healthcare Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From symptom checking to appointment management, we provide end-to-end healthcare support designed for
            Indian families and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
