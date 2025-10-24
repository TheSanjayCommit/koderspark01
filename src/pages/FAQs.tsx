import { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { supabase, FAQ } from '../lib/supabase';

export default function FAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchFAQs() {
      const { data } = await supabase
        .from('faqs')
        .select('*')
        .order('order_index', { ascending: true });

      if (data) setFaqs(data);
      setLoading(false);
    }

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Find answers to common questions about our dental treatments and services
            </p>
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
            <div className="max-w-4xl mx-auto">
              {categories.map((category) => {
                const categoryFaqs = faqs.filter((faq) => faq.category === category);
                return (
                  <div key={category} className="mb-12 animate-fadeInUp">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                      {category} Questions
                    </h2>
                    <div className="space-y-4">
                      {categoryFaqs.map((faq) => {
                        const globalIndex = faqs.indexOf(faq);
                        const isOpen = openIndex === globalIndex;
                        return (
                          <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                          >
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isOpen ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4 animate-fadeIn">Still Have Questions?</h2>
            <p className="text-xl text-teal-50 mb-8 animate-fadeIn">
              Our friendly team is here to help you with any queries
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a
                href="tel:9866937777"
                className="px-8 py-4 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Call: 9866937777
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
