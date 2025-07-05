import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DrBlakeTherapistSite() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Dr. Serena Blake</h1>
        <p className="text-xl">Licensed Clinical Psychologist</p>
        <p className="mt-2 text-md">Compassionate therapy for personal growth and emotional healing.</p>
        <div className="mt-6 space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book a Session</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">About Dr. Blake</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Dr. Serena Blake"
            className="rounded-2xl shadow-md"
          />
          <p>
            I'm Dr. Serena Blake, a licensed clinical psychologist with over 12 years of experience in helping
            individuals and couples navigate life's challenges. I specialize in anxiety, trauma, relationships,
            and personal growth. My therapy approach is warm, evidence-based, and personalized to your unique
            journey.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Services & Fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Individual Therapy", fee: "₹1500/session" },
              { title: "Couples Counseling", fee: "₹2000/session" },
              { title: "Adolescent Therapy", fee: "₹1500/session" },
              { title: "Mindfulness & Stress Management", fee: "₹1300/session" },
              { title: "Online Video Therapy", fee: "₹1400/session" },
            ].map((service, index) => (
              <Card key={index} className="shadow-md">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.fee}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p><strong>Working Hours:</strong> Mon–Fri: 10AM–6PM | Sat: 10AM–2PM | Sun: Closed</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do you offer online sessions?",
              a: "Yes, I offer secure video therapy for clients across India."
            },
            {
              q: "How long is each session?",
              a: "Standard sessions are 50 minutes."
            },
            {
              q: "Do you accept insurance?",
              a: "I currently operate on a self-pay basis, but I provide invoices for reimbursement."
            },
            {
              q: "What if I need to cancel my appointment?",
              a: "Please provide at least 24 hours' notice to avoid cancellation fees."
            },
            {
              q: "What therapy approach do you use?",
              a: "I integrate CBT, mindfulness, and trauma-informed methods tailored to client needs."
            }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg">Q: {item.q}</h3>
              <p className="text-gray-700 mt-1">A: {item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <p className="mb-2">📞 Phone: +91-9876543210</p>
        <p className="mb-2">📧 Email: contact@drserenablake.com</p>
        <p className="mb-4">📍 Location: South Mumbai, Maharashtra, India</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
      </section>
    </div>
  );
}
