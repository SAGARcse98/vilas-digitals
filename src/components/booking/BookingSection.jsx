import ContactInfo from './ContactInfo.jsx';
import BookingForm from './BookingForm.jsx';
import FooterBar from '../layout/FooterBar.jsx';

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-obsidian border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
        <FooterBar />
      </div>
    </section>
  );
}

