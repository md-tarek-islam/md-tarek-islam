import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "../ui/card";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tarekbd597@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 17361 89308" },
  { icon: MapPin, label: "Location", value: "Available Worldwide (Remote)" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
]

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
    botcheck: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🛑 spam protection
    if (formData.botcheck) {
      toast.error("Spam detected!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          budget: formData.budget,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
        botcheck: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="border-b border-border bg-linear-to-br from-primary/5 to-transparent py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Me</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your next project? Send me a message and let&apos;s make it happen.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              {contactInfo.map((info) => (
                <Card key={info.label}>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="lg:col-span-3 p-5">
              <form onSubmit={handleSubmit} className="space-y-4">

      {/* 🛑 honeypot spam field */}
      <input
        type="text"
        name="botcheck"
        value={formData.botcheck}
        onChange={handleChange}
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Subject</Label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project inquiry"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Budget Range</Label>
        <Input
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="e.g. $500 - $1000"
        />
      </div>

      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project in detail..."
          className="min-h-40"
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={loading}>
        <Send className="h-4 w-4 mr-2" />
        {loading
          ? "Sending..."
          : submitted
          ? "Message Sent!"
          : "Send Message"}
      </Button>
    </form>             
            </Card>
          </div>
        </div>
      </section>    
    </>
  );
}