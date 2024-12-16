import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00'
];

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Get minimum date (today) and maximum date (30 days from now)
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === serviceId);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Service not found</h2>
          <p className="text-gray-600 mt-2">The requested service does not exist.</p>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    const message = encodeURIComponent(
      `Hi, I would like to book a ${service.title} for ${selectedDate} at ${selectedTime}.\n\n` +
      `Service Details:\n` +
      `- Service: ${service.title}\n` +
      `- Price: Rp ${service.price}\n` +
      `- Date: ${selectedDate}\n` +
      `- Time: ${selectedTime}`
    );

    window.location.href = `https://wa.me/+6285775380162?text=${message}`;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="mb-8">
            <service.icon className="w-16 h-16 text-gray-800 mb-4" />
            <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
            <p className="text-2xl font-bold text-gray-800 mb-4">Rp {service.price}</p>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="space-y-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Select Date
              </label>
              <input
                type="date"
                min={today}
                max={maxDateStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                <Clock className="inline-block w-5 h-5 mr-2" />
                Select Time
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-gray-800 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Book via WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}