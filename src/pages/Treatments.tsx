import { useEffect, useState } from 'react';
import { supabase, Treatment } from '../lib/supabase';
import * as Icons from 'lucide-react';

export default function Treatments() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    async function fetchTreatments() {
      const { data } = await supabase
        .from('treatments')
        .select('*')
        .order('featured', { ascending: false });

      if (data) setTreatments(data);
      setLoading(false);
    }

    fetchTreatments();
  }, []);

  const categories = ['all', ...Array.from(new Set(treatments.map((t) => t.category)))];

  const filteredTreatments =
    selectedCategory === 'all'
      ? treatments
      : treatments.filter((t) => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    type IconsType = typeof Icons;
    const IconComponent = (Icons as IconsType)[iconName as keyof IconsType] as React.ComponentType<{ className?: string }>;
    return IconComponent || Icons.Activity;
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Treatments</h1>
            <p className="text-xl text-teal-50 leading-relaxed">
              Comprehensive dental solutions using the latest technology and techniques
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fadeIn">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => {
                const IconComponent = getIcon(treatment.icon);
                return (
                  <div
                    key={treatment.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {treatment.featured && (
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-3">
                          Popular
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-500 font-medium">
                          {treatment.category}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No treatments found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Schedule a consultation with our experienced dentists to find the perfect treatment plan
            for you
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-fadeInUp"
          >
            Book Consultation
            <Icons.ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
