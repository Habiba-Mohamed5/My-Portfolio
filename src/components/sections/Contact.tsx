import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/habiba-mohamed-88901328a/",
    color: "#0A66C2",
    description: "Let's connect professionally",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Habiba-Mohamed5",
    color: "#fff",
    description: "Check out my code",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:habiba5143m@gmail.com",
    color: "#EA4335",
    description: "Send me a message",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-30" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form 
              action="https://formspree.io/f/mqeezadw" 
              method="POST" 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <input 
                  name="subject" 
                  placeholder="What's this about?" 
                  required 
                  className="flex h-10 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  name="message" 
                  placeholder="Tell me about your project..." 
                  required 
                  rows={5}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 glow-effect"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Other Ways to Reach Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${link.color}20` }}
                    >
                      <link.icon className="w-5 h-5" style={{ color: link.color }} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Available For</h3>
              <ul className="space-y-3">
                {[
                  "Full-time opportunities",
                  "Freelance projects",
                  "Technical consulting",
                  "Collaboration & mentorship",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
