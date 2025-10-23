import { Plane, Hotel, Stethoscope, MapPin, Clock, DollarSign, Users, Shield, Award, CheckCircle } from 'lucide-react';

export default function DentalTourism() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Save up to 60% on dental treatments compared to Western countries while receiving world-class care.',
    },
    {
      icon: Award,
      title: 'Expert Care',
      description: 'Our experienced dentists with 15+ years of expertise ensure the highest quality treatment.',
    },
    {
      icon: Stethoscope,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and latest techniques for optimal treatment outcomes.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Efficient scheduling and treatment plans designed to minimize your travel time.',
    },
    {
      icon: Hotel,
      title: 'Travel Assistance',
      description: 'Help with travel arrangements, accommodation, and local transportation.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'International standards of hygiene and sterilization with guaranteed results.',
    },
  ];

  const packages = [
    {
      title: 'Smile Makeover',
      duration: '7-10 Days',
      treatments: ['Teeth Whitening', 'Dental Veneers', 'Cosmetic Bonding', 'Follow-up Care'],
      ideal: 'Perfect for complete smile transformation',
    },
    {
      title: 'Implant Package',
      duration: '10-14 Days',
      treatments: ['Dental Implants', 'Crown Placement', 'Bone Grafting (if needed)', 'Post-op Care'],
      ideal: 'Comprehensive implant solution',
    },
    {
      title: 'Orthodontic Care',
      duration: 'Multiple Visits',
      treatments: ['Braces/Aligners Setup', 'Progress Monitoring', 'Adjustment Sessions', 'Final Retainers'],
      ideal: 'Long-term teeth alignment',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Contact us with your dental needs. Share X-rays and photos for preliminary assessment.',
    },
    {
      step: 2,
      title: 'Treatment Plan',
      description: 'Receive detailed treatment plan, timeline, and cost estimate tailored to your needs.',
    },
    {
      step: 3,
      title: 'Travel Arrangements',
      description: 'We assist with visa information, flight bookings, and accommodation arrangements.',
    },
    {
      step: 4,
      title: 'Treatment Phase',
      description: 'Undergo your dental treatment in our modern facility with expert care.',
    },
    {
      step: 5,
      title: 'Recovery & Tourism',
      description: 'Recover comfortably while exploring Hyderabad\'s rich culture and attractions.',
    },
    {
      step: 6,
      title: 'Follow-up Care',
      description: 'Receive post-treatment guidance and ongoing support even after returning home.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <Plane className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Tourism</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Combine world-class dental care with an unforgettable travel experience in Hyderabad
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose India for Dental Care?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              India has become a leading destination for dental tourism, offering world-class
              treatments at a fraction of the cost. Hyderabad, known as the "City of Pearls,"
              combines excellent healthcare infrastructure with rich cultural heritage, making it
              an ideal destination for dental tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Treatment Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customized packages designed for international patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-teal-100">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 italic">{pkg.ideal}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.treatments.map((treatment, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to your dental transformation journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fadeIn">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Hyderabad
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 animate-fadeInUp">
              <p className="text-lg leading-relaxed mb-6">
                While recovering from your dental treatment, explore Hyderabad's magnificent
                attractions including the historic Charminar, the stunning Golconda Fort, and the
                world-famous Ramoji Film City. Experience the city's rich Mughlai cuisine, vibrant
                culture, and warm hospitality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Friendly Locals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Rich Heritage</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Hotel className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Comfortable Stay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Start Your Dental Tourism Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Contact us today for a personalized treatment plan and travel consultation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="tel:9866937777"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call: 9866937777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
