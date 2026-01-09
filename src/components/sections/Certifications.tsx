import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const certifications = [
  {
    id: 1,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    year: "2025",
    category: "Technical",
    verificationUrl: "https://www.credly.com/go/7QH7wbNz",
    color: "#FF9900",
  },
  {
    id: 2,
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    year: "2025",
    category: "Technical",
    verificationUrl: "https://www.credly.com/badges/1c51ceeb-4fc3-4e06-a213-c3ae3bab4df4",
    color: "#EE0000",
  },
  {
    id: 3,
    title: "NASA Space Apps Challenge - Galactic Problem Solver",
    issuer: "NASA",
    year: "2025",
    category: "Technical",
    verificationUrl: "#",
    color: "#0B3D91",
  },
  {
    id: 4,
    title: "HCIA-AI V4.0 Certification",
    issuer: "Huawei ICT Academy",
    year: "2025",
    category: "Data & AI",
    verificationUrl: "#",
    color: "#CF102D",
  },
  {
    id: 5,
    title: "Delivering Quality Work with Agility",
    issuer: "IBM",
    year: "2025",
    category: "Technical",
    verificationUrl: "https://coursera.org/verify/N2RJ6SI4NSGV",
    color: "#052FAD",
  },
  {
    id: 6,
    title: "Software Development - Frontend Developer",
    issuer: "Digital Egypt Pioneers Program (DEPI)",
    year: "2024",
    category: "Technical",
    verificationUrl: "#",
    color: "#00a79d",
  },
  {
    id: 7,
    title: "Introduction to DevOps",
    issuer: "IBM",
    year: "2024",
    category: "Technical",
    verificationUrl: "https://coursera.org/verify/AMGVEYQ4WC15",
    color: "#052FAD",
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2024",
    category: "Cybersecurity",
    verificationUrl: "#",
    color: "#3776AB",
  },
  {
    id: 9,
    title: "Virtual Assistance Skills in the Digital Age",
    issuer: "ALX Africa",
    year: "2024",
    category: "Technical",
    verificationUrl: "https://intranet.alxswe.com/certificates/98MS5yCPx7",
    color: "#0011FF",
  },
  {
    id: 10,
    title: "Data Analysis Training Course",
    issuer: "Microsoft & MCIT",
    year: "2024",
    category: "Data & AI",
    verificationUrl: "#",
    color: "#F25022",
  },
  {
    id: 11,
    title: "Python Programming Basics",
    issuer: "Mahara-Tech (ITI)",
    year: "2024",
    category: "Technical",
    verificationUrl: "#",
    color: "#3776AB",
  },
  {
    id: 12,
    title: "Introduction to SQL",
    issuer: "Sololearn",
    year: "2024",
    category: "Technical",
    verificationUrl: "#",
    color: "#A435F0",
  },
  {
    id: 13,
    title: "Introduction to R",
    issuer: "Alison",
    year: "2024",
    category: "Data & AI",
    verificationUrl: "#",
    color: "#2761B9",
  },
  {
    id: 14,
    title: "The Web Front End Learning Guide",
    issuer: "Udemy",
    year: "2024",
    category: "Technical",
    verificationUrl: "https://www.udemy.com/certificate/UC-49e448df-c8a7-423a-b0ae-75e1903ffea7/",
    color: "#A435F0",
  },
  {
    id: 15,
    title: "Digitopia Competition Achievement",
    issuer: "Ministry of Communications (MCIT)",
    year: "2025",
    category: "Leadership",
    verificationUrl: "#",
    color: "#1e3a8a",
  },
  {
    id: 16,
    title: "Outstanding Leadership - Team Leader",
    issuer: "DEPI Program",
    year: "2024",
    category: "Leadership",
    verificationUrl: "#",
    color: "#00D4AA",
  },
  {
    id: 17,
    title: "Organizing Robot Sumo Competition V.2",
    issuer: "Huawei Academy & ERU",
    year: "2024",
    category: "Leadership",
    verificationUrl: "#",
    color: "#FFD700",
  },
  {
    id: 18,
    title: "Business English Track Round (1)",
    issuer: "SYE & DEPI",
    year: "2024",
    category: "Leadership",
    verificationUrl: "#",
    color: "#2761B9",
  },
  {
    id: 19,
    title: "Python Fundamental Course",
    issuer: "Egyptian Russian University (ERU)",
    year: "2023",
    category: "Technical",
    verificationUrl: "#",
    color: "#1e3a8a",
  },
  {
    id: 20,
    title: "SkillsBuild Cybersecurity Track",
    issuer: "IBM & EFE-Egypt",
    year: "2024",
    category: "Cybersecurity",
    verificationUrl: "#",
    color: "#3776AB",
  },
  {
    id: 21,
    title: "Wushu Kung-Fu Championship - 3rd Place",
    issuer: "Egyptian Federation",
    year: "2022",
    category: "Leadership",
    verificationUrl: "#",
    color: "#C0C0C0",
  },
  {
    id: 22,
    title: "Space & Aquarium Science Attendance",
    issuer: "FAO Model SCU & SZU",
    year: "2024",
    category: "Leadership",
    verificationUrl: "#",
    color: "#4CAF50",
  }
];

const categories = ["All", "Technical", "Data & AI", "Cybersecurity", "Leadership"];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  const filteredCerts = selectedCategory === "All"
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">CREDENTIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Continuous learning validated by industry leaders
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-card-foreground hover:bg-card/80'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card p-5 rounded-xl cursor-pointer hover-lift group"
              style={{
                borderTop: `3px solid ${cert.color}`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Award className="w-5 h-5" style={{ color: cert.color }} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
              </div>
              
              <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building2 className="w-3 h-3" />
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="glass-card border-border">
          <DialogHeader>
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${selectedCert?.color}20` }}
            >
              <Award className="w-7 h-7" style={{ color: selectedCert?.color }} />
            </div>
            <DialogTitle className="text-xl">{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{selectedCert?.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Issued {selectedCert?.year}</span>
            </div>
            <span 
              className="inline-block px-3 py-1 rounded-full text-sm"
              style={{ 
                backgroundColor: `${selectedCert?.color}20`,
                color: selectedCert?.color 
              }}
            >
              {selectedCert?.category}
            </span>
            
            {selectedCert?.verificationUrl && selectedCert.verificationUrl !== "#" && (
              <a 
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
