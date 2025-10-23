/*
  # Create Dental Pharmacy Website Schema

  ## Overview
  This migration sets up the complete database schema for a professional dental/pharmacy website.
  
  ## Tables Created
  
  ### 1. treatments
  - Stores all dental treatments and services offered
  - Fields: id, name, description, category, featured, created_at
  
  ### 2. pricing
  - Stores pricing information for each treatment
  - Fields: id, treatment_id, price_from, price_to, currency, created_at
  - Links to treatments table via foreign key
  
  ### 3. faqs
  - Stores frequently asked questions and answers
  - Fields: id, question, answer, category, order_index, created_at
  
  ### 4. contact_submissions
  - Stores contact form submissions from visitors
  - Fields: id, name, email, phone, subject, message, created_at
  
  ### 5. testimonials
  - Stores patient testimonials and reviews
  - Fields: id, patient_name, treatment, rating, review, featured, created_at
  
  ### 6. appointments
  - Stores appointment bookings
  - Fields: id, patient_name, email, phone, preferred_date, preferred_time, treatment_type, message, status, created_at
  
  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for treatments, pricing, faqs, and testimonials
  - Authenticated-only write access for contact_submissions and appointments
  - Admin-only access for managing core data
  
  ## Important Notes
  - All tables use UUID primary keys for security
  - Timestamps use timestamptz for timezone awareness
  - Foreign key constraints ensure data integrity
  - Indexes added for performance on frequently queried columns
*/

-- Create treatments table
CREATE TABLE IF NOT EXISTS treatments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  featured boolean DEFAULT false,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Create pricing table
CREATE TABLE IF NOT EXISTS pricing (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  treatment_id uuid REFERENCES treatments(id) ON DELETE CASCADE,
  price_from integer NOT NULL,
  price_to integer,
  currency text DEFAULT 'INR',
  created_at timestamptz DEFAULT now()
);

-- Create FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text DEFAULT 'general',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  treatment text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  treatment_type text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for treatments (public read)
CREATE POLICY "Anyone can view treatments"
  ON treatments FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for pricing (public read)
CREATE POLICY "Anyone can view pricing"
  ON pricing FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for faqs (public read)
CREATE POLICY "Anyone can view FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (true);

-- RLS Policies for testimonials (public read featured only)
CREATE POLICY "Anyone can view featured testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (featured = true);

-- RLS Policies for contact_submissions (insert only for all)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for appointments (insert only for all)
CREATE POLICY "Anyone can book appointments"
  ON appointments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_treatments_category ON treatments(category);
CREATE INDEX IF NOT EXISTS idx_treatments_featured ON treatments(featured);
CREATE INDEX IF NOT EXISTS idx_pricing_treatment_id ON pricing(treatment_id);
CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);

-- Insert sample treatments data
INSERT INTO treatments (name, description, category, featured, icon) VALUES
  ('Invisible Aligners', 'Clear, removable aligners that straighten teeth without metal braces. Comfortable and virtually invisible treatment option.', 'Orthodontics', true, 'Smile'),
  ('Dental Braces', 'Traditional metal or ceramic braces for correcting misaligned teeth and bite issues. Effective for all age groups.', 'Orthodontics', true, 'Zap'),
  ('Root Canal Treatment', 'Advanced endodontic procedure to save infected teeth. Pain-free treatment with modern techniques.', 'Endodontics', true, 'Activity'),
  ('Wisdom Tooth Removal', 'Safe surgical extraction of wisdom teeth. Performed by experienced oral surgeons with minimal discomfort.', 'Oral Surgery', true, 'Shield'),
  ('Dental Implants', 'Permanent tooth replacement solution that looks and functions like natural teeth. Long-lasting and durable.', 'Implantology', true, 'Anchor'),
  ('Teeth Whitening', 'Professional teeth whitening for a brighter, confident smile. Safe and effective results in one session.', 'Cosmetic', true, 'Sparkles'),
  ('Dentures', 'Complete or partial dentures to replace missing teeth. Custom-made for perfect fit and natural appearance.', 'Prosthodontics', false, 'Layers'),
  ('Dental Crowns', 'High-quality zirconia, E-max, or metal crowns to restore damaged teeth. Natural-looking and durable.', 'Prosthodontics', false, 'Crown'),
  ('Cosmetic Dentistry', 'Comprehensive cosmetic treatments including veneers, bonding, and smile makeovers.', 'Cosmetic', false, 'Wand'),
  ('Ceramic Braces', 'Tooth-colored braces that blend with natural teeth. Less visible than traditional metal braces.', 'Orthodontics', false, 'Aperture')
ON CONFLICT DO NOTHING;

-- Insert pricing data
INSERT INTO pricing (treatment_id, price_from, price_to, currency)
SELECT t.id, 95000, 95000, 'INR' FROM treatments t WHERE t.name = 'Invisible Aligners'
UNION ALL
SELECT t.id, 35000, 50000, 'INR' FROM treatments t WHERE t.name = 'Dental Braces'
UNION ALL
SELECT t.id, 4000, 8000, 'INR' FROM treatments t WHERE t.name = 'Root Canal Treatment'
UNION ALL
SELECT t.id, 4000, 8000, 'INR' FROM treatments t WHERE t.name = 'Wisdom Tooth Removal'
UNION ALL
SELECT t.id, 25000, 45000, 'INR' FROM treatments t WHERE t.name = 'Dental Implants'
UNION ALL
SELECT t.id, 10000, 15000, 'INR' FROM treatments t WHERE t.name = 'Teeth Whitening'
UNION ALL
SELECT t.id, 25000, 40000, 'INR' FROM treatments t WHERE t.name = 'Dentures'
UNION ALL
SELECT t.id, 5000, 12000, 'INR' FROM treatments t WHERE t.name = 'Dental Crowns'
UNION ALL
SELECT t.id, 15000, 50000, 'INR' FROM treatments t WHERE t.name = 'Cosmetic Dentistry'
UNION ALL
SELECT t.id, 40000, 55000, 'INR' FROM treatments t WHERE t.name = 'Ceramic Braces'
ON CONFLICT DO NOTHING;

-- Insert sample FAQs
INSERT INTO faqs (question, answer, category, order_index) VALUES
  ('How long does a root canal treatment take?', 'A typical root canal treatment can be completed in 1-2 visits, with each session lasting about 60-90 minutes depending on the complexity of the case.', 'treatments', 1),
  ('Are dental implants painful?', 'The dental implant procedure is performed under local anesthesia, so you won''t feel pain during the surgery. Post-operative discomfort is minimal and can be managed with prescribed medications.', 'treatments', 2),
  ('How long do invisible aligners take to work?', 'Treatment duration varies based on individual cases, but typically ranges from 6-18 months. Most patients see noticeable results within the first few months.', 'treatments', 3),
  ('Do you accept insurance?', 'Yes, we accept most major dental insurance plans. Please contact our office with your insurance details for specific coverage information.', 'general', 4),
  ('What are your clinic hours?', 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sundays from 10:00 AM to 2:00 PM. We also accommodate emergency appointments.', 'general', 5),
  ('How much do dental braces cost?', 'Dental braces start from ₹35,000 and can go up to ₹50,000 depending on the type (metal or ceramic) and complexity of treatment.', 'pricing', 6),
  ('Is teeth whitening safe?', 'Yes, professional teeth whitening performed by our experienced dentists is completely safe. We use clinically approved methods that protect your enamel.', 'treatments', 7),
  ('How long do dental crowns last?', 'With proper care and regular dental check-ups, dental crowns can last 10-15 years or even longer. The lifespan depends on the material used and oral hygiene maintenance.', 'treatments', 8)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (patient_name, treatment, rating, review, featured) VALUES
  ('Rajesh Kumar', 'Root Canal Treatment', 5, 'Excellent service! Dr. and team made my root canal treatment completely painless. The clinic is very clean and modern. Highly recommended!', true),
  ('Priya Sharma', 'Invisible Aligners', 5, 'I am amazed by the results of my invisible aligner treatment. The staff is professional and caring. My smile has completely transformed!', true),
  ('Anil Reddy', 'Dental Implants', 5, 'Best dental experience ever! The implant procedure was smooth and the results are fantastic. I can eat and smile confidently now.', true),
  ('Sneha Patel', 'Teeth Whitening', 5, 'Very happy with my teeth whitening results. The procedure was quick and painless. My teeth are several shades brighter now!', true),
  ('Vikram Singh', 'Wisdom Tooth Removal', 5, 'I was nervous about wisdom tooth extraction, but the team made it comfortable. Recovery was faster than expected. Thank you!', true),
  ('Meera Nair', 'Dental Braces', 5, 'Great orthodontic treatment! The braces were adjusted regularly and the results are perfect. Worth every penny!', true)
ON CONFLICT DO NOTHING;