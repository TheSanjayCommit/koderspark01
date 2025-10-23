import { useEffect, useState } from 'react';
import { Check, IndianRupee } from 'lucide-react';
import { supabase, Treatment, Pricing as PricingType } from '../lib/supabase';

interface TreatmentWithPricing extends Treatment {
  pricing: PricingType[];
}

export default function Pricing() {
  const [treatments, setTreatments] = useState<TreatmentWithPricing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPricing() {
      const { data: treatmentsData } = await supabase
        .from('treatments')
        .select(`
          *,
          pricing (*)
        `)
        .order('featured', { ascending: false });

      if (treatmentsData) {
        setTreatments(treatmentsData as TreatmentWithPricing[]);
      }
      setLoading(false);
    }

    fetchPricing();
  }, []);

  const formatPrice = (pricing: PricingType) => {
    if (pricing.price_to && pricing.price_to !== pricing.price_from) {
      return `₹${pricing.price_from.toLocaleString()} - ₹${pricing.price_to.toLocaleString()}`;
    }
    return `₹${pricing.price_from.toLocaleString()}`;
  };

  const benefits = [
    'Transparent Pricing',
    'No Hidden Costs',
    'Flexible Payment Options',
    'Insurance Accepted',
    'Quality Guaranteed',
    'Expert Care',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Treatment Pricing</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Affordable, transparent pricing for world-class dental care
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-white rounded-lg animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {treatments.map((treatment, index) => {
                  const pricing = treatment.pricing[0];
                  return (
                    <div
                      key={treatment.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 animate-fadeInUp"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            {treatment.featured && (
                              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-2">
                                Popular
                              </span>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                              {treatment.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{treatment.category}</p>
                          </div>
                        </div>

                        {pricing && (
                          <div className="bg-gradient-to-br from-teal-50 to-white p-4 rounded-lg mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <IndianRupee className="w-5 h-5 text-teal-600" />
                              <span className="text-sm text-gray-600 font-medium">Starting from</span>
                            </div>
                            <p className="text-2xl font-bold text-teal-600">
                              {formatPrice(pricing)}
                            </p>
                          </div>
                        )}

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p>
                  <strong>Transparent Pricing:</strong> All prices are clearly communicated before
                  treatment begins with no hidden costs.
                </p>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p>
                  <strong>Flexible Payment:</strong> We offer convenient payment plans and accept
                  most major insurance providers.
                </p>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p>
                  <strong>Price Range:</strong> Final costs may vary based on individual case
                  complexity and specific treatment requirements.
                </p>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <p>
                  <strong>Free Consultation:</strong> Schedule a consultation to get a personalized
                  treatment plan and accurate cost estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            Get a Personalized Quote
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Contact us for a detailed treatment plan and accurate pricing tailored to your needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-fadeInUp"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
