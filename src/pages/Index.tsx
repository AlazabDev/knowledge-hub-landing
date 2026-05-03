import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Home, Palette, Wrench, Package, ArrowLeft, CheckCircle2, Phone, Mail, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-architecture.jpg";

const brands = [
  {
    name: "Luxury Finishing",
    nameAr: "التشطيبات الفاخرة",
    desc: "تشطيبات راقية وتصميم داخلي فاخر للمشروعات السكنية بأفضل الخامات وأعلى مستويات الإتقان.",
    icon: Home,
  },
  {
    name: "Brand Identity",
    nameAr: "الهوية التجارية",
    desc: "تصميم وتنفيذ الهوية التجارية وتجهيز المساحات بما يعكس قوة علامتك ويمنحها حضوراً استثنائياً.",
    icon: Palette,
  },
  {
    name: "UberFix",
    nameAr: "الصيانة الذكية",
    desc: "منصة صيانة ذكية للمنازل والمحلات والمنشآت بخدمات سريعة وموثوقة على مدار الساعة.",
    icon: Wrench,
  },
  {
    name: "Laban Alasfour",
    nameAr: "توريد الخامات",
    desc: "متخصصون في توريد مواد البناء والخامات المعمارية بالجملة والتجزئة لمختلف أحجام المشاريع.",
    icon: Package,
  },
];

const features = [
  "تصميم وتنفيذ المشاريع السكنية والتجارية",
  "تشطيبات فاخرة بأحدث المعايير العالمية",
  "صيانة فورية على مدار 24 ساعة",
  "إدارة متكاملة من الفكرة حتى التسليم",
  "خامات أصلية وضمان جودة شامل",
  "فريق هندسي متخصص ومعتمد",
];

const stats = [
  { value: "+250", label: "مشروع منجز" },
  { value: "+180", label: "عميل سعيد" },
  { value: "+15", label: "سنة خبرة" },
  { value: "4", label: "علامات متخصصة" },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold grid place-items-center shadow-gold">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tight">
              الـ<span className="text-gradient-gold">عَزَب</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">من نحن</a>
            <a href="#brands" className="hover:text-primary transition-colors">علاماتنا</a>
            <a href="#features" className="hover:text-primary transition-colors">مميزاتنا</a>
            <a href="#contact" className="hover:text-primary transition-colors">تواصل</a>
          </nav>
          <Button variant="default" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold">
            ابدأ مشروعك
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gold-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">منظومة معمارية متكاملة</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              نحوّل أفكارك إلى{" "}
              <span className="text-gradient-gold">واقع معماري</span>{" "}
              يُدار باحتراف
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              في الـعَزَب، نربط بين التصميم والتنفيذ والصيانة والتوريدات داخل نظام واحد يمنحك
              وضوحاً وسرعة في الوصول إلى الحل المناسب.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold text-base h-14 px-8">
                احجز استشارتك مجاناً
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button size="lg" variant="outline" className="gold-border bg-transparent hover:bg-primary/10 h-14 px-8 text-base">
                تعرف على خدماتنا
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-gradient-gold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden gold-border shadow-elegant">
              <img
                src={heroImg}
                alt="تصميم معماري فاخر من الـعَزَب"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass gold-border rounded-2xl p-4 shadow-gold animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-gold border-2 border-background" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-bold">+180 عميل</div>
                  <div className="text-muted-foreground">يثقون بنا</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">
              من نحن
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              لأن الفكرة العظيمة تحتاج <span className="text-gradient-gold">من يفهمها</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              مرحباً بك في <span className="text-foreground font-bold">الـعَزَب</span> للحلول المعمارية.
              نحن لا نقدّم خدمة فقط، بل نبني منظومة متكاملة لإدارة وتنفيذ وتشغيل الأعمال المعمارية باحترافية عالية.
              نهتم بأدق التفاصيل، ونلتزم بأعلى معايير الجودة، ونحوّل كل فكرة إلى تجربة منظمة، سهلة المتابعة، وناجحة التنفيذ.
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">
              علاماتنا التجارية
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              منظومة <span className="text-gradient-gold">متكاملة</span> تحت سقف واحد
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              أربع علامات متخصصة لتغطية جميع احتياجاتك المعمارية من البداية وحتى التسليم
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((b, i) => (
              <Card
                key={b.name}
                className="bg-gradient-card gold-border p-8 hover:shadow-gold transition-all duration-500 group hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold grid place-items-center shadow-gold shrink-0 group-hover:scale-110 transition-transform">
                    <b.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-2xl font-black">{b.name}</h3>
                      <span className="text-sm text-primary">{b.nameAr}</span>
                    </div>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">
                لماذا الـعَزَب؟
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                نحن من <span className="text-gradient-gold">يفهم فكرتك</span> قبل أن تطلب شرحها
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                سواء كنت تبحث عن تنفيذ مساحة تجارية، أو تشطيب سكني راقٍ، أو صيانة موثوقة،
                أو هوية تجارية مميزة، أو توريدات معمارية متكاملة... فأنت في المكان الصحيح.
              </p>
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold h-14 px-8">
                ابدأ معنا الآن
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <Card key={f} className="bg-gradient-card gold-border p-5 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24">
        <div className="container">
          <Card className="bg-gradient-card gold-border p-10 md:p-16 max-w-4xl mx-auto text-center shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer pointer-events-none" />
            <div className="relative space-y-6">
              <div className="flex justify-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                "تجربتي مع الـعَزَب كانت استثنائية. من اللحظة الأولى وجدت من يفهم رؤيتي
                وينفذها بدقة عالية. الجودة، الاحترافية، والالتزام بالمواعيد كانوا في أعلى المستويات."
              </p>
              <div>
                <div className="font-bold text-lg">أحمد المنصوري</div>
                <div className="text-sm text-muted-foreground">صاحب مشروع تجاري</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-card gold-border p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  جاهز لتحويل فكرتك إلى <span className="text-gradient-gold">واقع</span>؟
                </h2>
                <p className="text-muted-foreground text-lg">
                  تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span dir="ltr">+20 100 000 0000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span dir="ltr">info@alazab.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>القاهرة، جمهورية مصر العربية</span>
                  </div>
                </div>
              </div>
              <Card className="bg-background/60 gold-border p-6 space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="أخبرنا عن مشروعك"
                  rows={4}
                  className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                />
                <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold h-12">
                  إرسال الطلب
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">الـعَزَب للحلول المعمارية</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 الـعَزَب. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
