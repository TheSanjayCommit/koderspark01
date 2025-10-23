import { Award, Heart, Target, Users, CheckCircle, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Care',
      description: 'Your comfort and satisfaction are our top priorities. We provide personalized treatment plans tailored to your unique needs.',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'With 15+ years of experience, our certified dentists deliver exceptional results using the latest techniques and technology.',
    },
    {
      icon: Target,
      title: 'Affordable Quality',
      description: 'We believe everyone deserves access to quality dental care. Our competitive pricing makes premium treatments accessible.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our highly skilled and compassionate team is dedicated to providing you with the best possible dental experience.',
    },
  ];

  const achievements = [
    '10,000+ Successful Treatments',
    '15+ Years of Excellence',
    '98% Patient Satisfaction',
    'State-of-the-Art Facility',
    'Certified & Experienced Team',
    'Comprehensive Treatment Options',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aurobindo Dental</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Your trusted partner in dental health and smile transformation for over 15 years
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Aurobindo Dental Hospital was founded with a simple yet powerful vision: to make
                  world-class dental care accessible and affordable to everyone. Located in the heart
                  of Madhapur, Hyderabad, we have been serving our community with dedication and
                  excellence for over 15 years.
                </p>
                <p>
                  Our state-of-the-art facility combines cutting-edge technology with compassionate
                  care, ensuring that every patient receives the highest standard of treatment in a
                  comfortable and welcoming environment. From routine check-ups to complex procedures,
                  we handle every case with precision and care.
                </p>
                <p>
                  What sets us apart is our commitment to affordable pricing without compromising on
                  quality. We believe that financial constraints should never be a barrier to excellent
                  dental care. Our transparent pricing model and flexible payment options make premium
                  dental treatments accessible to all.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-white rounded-lg hover:shadow-md transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
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
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 animate-fadeInUp">
              <p className="text-xl leading-relaxed text-center">
                To provide exceptional dental care that combines advanced technology, experienced
                expertise, and compassionate service, making quality dental treatments accessible
                and affordable for everyone. We strive to create beautiful, healthy smiles while
                ensuring every patient feels valued, comfortable, and confident in their dental journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fadeIn">
              Our Location
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg animate-fadeInUp">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Visit us at our conveniently located dental facility in Madhapur, Hyderabad.
                We're easily accessible and offer ample parking for our patients.
              </p>
              <div className="text-left space-y-2 text-gray-700">
                <p className="font-semibold text-gray-900">Address:</p>
                <p>Flat 503, 5th Floor, MVS Heights</p>
                <p>Vinayaka Nagar, Khanamet, Madhapur</p>
                <p>Hyderabad - 500081, Telangana, India</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:9866937777"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Call: 9866937777
                </a>
                <a
                  href="mailto:aurobindodental@gmail.com"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
