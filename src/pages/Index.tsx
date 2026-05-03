import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import {
  Sparkles, Home, Palette, Wrench, Package, ArrowLeft, CheckCircle2,
  Phone, Mail, MapPin, Star, Compass, Hammer, ClipboardCheck, Rocket,
  Award, Clock, Shield, Users, Menu, X
} from "lucide-react";
import heroImg from "@/assets/hero-architecture.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollToTop } from "@/components/ScrollToTop";

const brands = [
  { name: "Luxury Finishing", nameAr: "التشطيبات الفاخرة", desc: "تشطيبات راقية وتصميم داخلي فاخر للمشروعات السكنية بأفضل الخامات وأعلى مستويات الإتقان.", icon: Home },
  { name: "Brand Identity", nameAr: "الهوية التجارية", desc: "تصميم وتنفيذ الهوية التجارية وتجهيز المساحات بما يعكس قوة علامتك ويمنحها حضوراً استثنائياً.", icon: Palette },
  { name: "UberFix", nameAr: "الصيانة الذكية", desc: "منصة صيانة ذكية للمنازل والمحلات والمنشآت بخدمات سريعة وموثوقة على مدار الساعة.", icon: Wrench },
  { name: "Laban Alasfour", nameAr: "توريد الخامات", desc: "متخصصون في توريد مواد البناء والخامات المعمارية بالجملة والتجزئة لمختلف أحجام المشاريع.", icon: Package },
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

const process = [
  { icon: Compass, title: "الاستشارة والتخطيط", desc: "نلتقي بك لفهم رؤيتك ودراسة الموقع ووضع تصور شامل للمشروع." },
  { icon: Palette, title: "التصميم والتصور", desc: "تصاميم ثلاثية الأبعاد ومخططات تنفيذية واضحة قبل بدء أي خطوة." },
  { icon: Hammer, title: "التنفيذ الاحترافي", desc: "تنفيذ دقيق بأيدي خبراء وإشراف هندسي على كل مرحلة." },
  { icon: ClipboardCheck, title: "التسليم والصيانة", desc: "تسليم نهائي مع ضمان شامل وخدمة صيانة دورية مستمرة." },
];

const pricing = [
  {
    name: "الباقة الأساسية", price: "ابتداءً من 25K", popular: false,
    features: ["استشارة معمارية مجانية", "تصميم 2D للمساحة", "إشراف على التنفيذ", "ضمان 6 أشهر"],
  },
  {
    name: "الباقة الاحترافية", price: "ابتداءً من 75K", popular: true,
    features: ["استشارة وتخطيط شامل", "تصميم 3D واقعي", "تنفيذ وتشطيب كامل", "خامات فاخرة مختارة", "صيانة دورية لمدة سنة", "ضمان شامل سنتين"],
  },
  {
    name: "باقة المشاريع الكبرى", price: "حسب المشروع", popular: false,
    features: ["مدير مشروع متفرغ", "تصميم وهوية متكاملة", "تنفيذ من الألف للياء", "توريدات وخامات حصرية", "صيانة دائمة على مدار الساعة"],
  },
];

const faqs = [
  { q: "كم تستغرق مدة تنفيذ المشروع؟", a: "تختلف المدة حسب حجم المشروع ونوعه، لكن نقدم جدولاً زمنياً واضحاً قبل بدء العمل ونلتزم به." },
  { q: "هل تقدمون ضماناً على الأعمال؟", a: "نعم، نقدم ضماناً شاملاً يصل إلى سنتين على جميع أعمال التنفيذ والتشطيب، مع خدمة صيانة دورية." },
  { q: "هل يمكنني متابعة المشروع عن بُعد؟", a: "بالتأكيد، نوفر تقارير دورية بالصور والفيديو ونظام متابعة رقمي يسمح لك بمتابعة كل تفصيلة." },
  { q: "ما هي مناطق عملكم؟", a: "نعمل في جميع محافظات جمهورية مصر العربية، ولدينا فروع رئيسية في القاهرة الكبرى." },
  { q: "هل تقدمون استشارة مجانية؟", a: "نعم، نقدم استشارة مجانية أولى لفهم احتياجاتك ووضع تصور مبدئي للمشروع دون أي التزام." },
];

const testimonials = [
  { name: "أحمد المنصوري", role: "صاحب مشروع تجاري", text: "تجربتي مع الـعَزَب كانت استثنائية. الجودة، الاحترافية، والالتزام بالمواعيد كانوا في أعلى المستويات." },
  { name: "سارة عبدالله", role: "صاحبة فيلا سكنية", text: "تشطيب فاخر وذوق راقٍ، فهموا رؤيتي من أول لقاء ونفذوا أكثر مما تخيلت." },
  { name: "محمد إبراهيم", role: "مدير سلسلة محلات", text: "شغل احترافي وفريق ملتزم، ساعدوني في بناء هوية موحدة لجميع فروعي." },
];

const trustItems = [
  { icon: Award, label: "جودة معتمدة" },
  { icon: Clock, label: "التزام بالمواعيد" },
  { icon: Shield, label: "ضمان شامل" },
  { icon: Users, label: "فريق خبير" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "تم استلام طلبك بنجاح ✨", description: "سيتواصل معك فريقنا في أقرب وقت ممكن." });
    (e.target as HTMLFormElement).reset();
  };

  const navLinks = [
    { href: "#about", label: "من نحن" },
    { href: "#brands", label: "علاماتنا" },
    { href: "#process", label: "كيف نعمل" },
    { href: "#pricing", label: "الباقات" },
    { href: "#faq", label: "الأسئلة" },
    { href: "#contact", label: "تواصل" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />

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
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors story-link">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="hidden md:inline-flex bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold">
              ابدأ مشروعك
            </Button>
            <Button variant="outline" size="icon" className="lg:hidden gold-border bg-transparent" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden glass border-t border-border animate-fade-in">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
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
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold text-base h-14 px-8 hover-scale">
                احجز استشارتك مجاناً
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button asChild size="lg" variant="outline" className="gold-border bg-transparent hover:bg-primary/10 h-14 px-8 text-base">
                <a href="#brands">تعرف على خدماتنا</a>
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
              <img src={heroImg} alt="تصميم معماري فاخر من الـعَزَب" width={1536} height={1024} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass gold-border rounded-2xl p-4 shadow-gold animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gradient-gold border-2 border-background" />)}
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

      {/* TRUST STRIP */}
      <section className="py-10 border-y border-border bg-card/30">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((t) => (
            <div key={t.label} className="flex items-center gap-3 justify-center hover-scale">
              <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">من نحن</div>
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

      {/* BRANDS - tabs */}
      <section id="brands" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">علاماتنا التجارية</div>
            <h2 className="text-4xl md:text-5xl font-black">
              منظومة <span className="text-gradient-gold">متكاملة</span> تحت سقف واحد
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              أربع علامات متخصصة لتغطية جميع احتياجاتك المعمارية من البداية وحتى التسليم
            </p>
          </div>
          <Tabs defaultValue={brands[0].name} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-transparent p-0 mb-8">
              {brands.map((b) => (
                <TabsTrigger
                  key={b.name}
                  value={b.name}
                  className="data-[state=active]:bg-gradient-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-gold gold-border bg-card/50 py-4 flex flex-col gap-1 h-auto"
                >
                  <b.icon className="w-5 h-5" />
                  <span className="font-bold text-xs md:text-sm">{b.nameAr}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {brands.map((b) => (
              <TabsContent key={b.name} value={b.name} className="mt-0">
                <Card className="bg-gradient-card gold-border p-8 md:p-12 shadow-elegant animate-fade-in">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                      <b.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 flex-wrap mb-3">
                        <h3 className="text-3xl font-black">{b.name}</h3>
                        <span className="text-primary font-bold">{b.nameAr}</span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">{b.desc}</p>
                      <Button variant="outline" className="gold-border bg-transparent hover:bg-primary/10">
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">كيف نعمل</div>
            <h2 className="text-4xl md:text-5xl font-black">
              رحلة من <span className="text-gradient-gold">الفكرة</span> إلى التسليم
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Card key={p.title} className="bg-gradient-card gold-border p-6 hover:-translate-y-2 hover:shadow-gold transition-all duration-500 relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-gold text-primary-foreground grid place-items-center font-black text-lg shadow-gold">
                  {i + 1}
                </div>
                <p.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
              <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">لماذا الـعَزَب؟</div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                نحن من <span className="text-gradient-gold">يفهم فكرتك</span> قبل أن تطلب شرحها
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                سواء كنت تبحث عن تنفيذ مساحة تجارية، أو تشطيب سكني راقٍ، أو صيانة موثوقة،
                أو هوية تجارية مميزة، أو توريدات معمارية متكاملة... فأنت في المكان الصحيح.
              </p>
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold h-14 px-8">
                <a href="#contact">
                  ابدأ معنا الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <Card key={f} className="bg-gradient-card gold-border p-5 hover:border-primary/40 hover:-translate-y-1 transition-all">
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

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">باقاتنا</div>
            <h2 className="text-4xl md:text-5xl font-black">
              اختر <span className="text-gradient-gold">الباقة</span> الأنسب لمشروعك
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <Card
                key={p.name}
                className={`relative bg-gradient-card p-8 transition-all duration-500 hover:-translate-y-2 ${
                  p.popular ? "gold-border shadow-gold scale-105 lg:scale-110" : "border border-border hover:border-primary/40"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 right-1/2 translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-black px-4 py-1 rounded-full shadow-gold">
                    الأكثر طلباً
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2">{p.name}</h3>
                <div className="text-3xl font-black text-gradient-gold mb-6">{p.price}</div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full font-bold h-12 ${p.popular ? "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                  اختر الباقة
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">آراء عملائنا</div>
            <h2 className="text-4xl md:text-5xl font-black">
              ثقة <span className="text-gradient-gold">عملائنا</span> هي شرفنا
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-gradient-card gold-border p-8 hover:shadow-gold transition-all duration-500 hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full glass gold-border text-sm text-primary">الأسئلة الشائعة</div>
            <h2 className="text-4xl md:text-5xl font-black">
              إجابات <span className="text-gradient-gold">واضحة</span> لكل تساؤلاتك
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-gradient-card gold-border rounded-2xl px-6 border">
                <AccordionTrigger className="text-right font-bold text-lg hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-card gold-border p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <Rocket className="w-12 h-12 text-primary" />
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  جاهز لتحويل فكرتك إلى <span className="text-gradient-gold">واقع</span>؟
                </h2>
                <p className="text-muted-foreground text-lg">
                  تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا.
                </p>
                <div className="space-y-3 pt-4">
                  <a href="tel:+201000000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span dir="ltr">+20 100 000 0000</span>
                  </a>
                  <a href="mailto:info@alazab.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span dir="ltr">info@alazab.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>القاهرة، جمهورية مصر العربية</span>
                  </div>
                </div>
              </div>
              <Card className="bg-background/60 gold-border p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input required type="text" placeholder="الاسم الكامل" className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  <input required type="email" placeholder="البريد الإلكتروني" className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  <input required type="tel" placeholder="رقم الهاتف" className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  <textarea required placeholder="أخبرنا عن مشروعك" rows={4} className="w-full bg-input border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" />
                  <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-bold h-12">
                    إرسال الطلب
                  </Button>
                </form>
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
          <p className="text-sm text-muted-foreground">© 2026 الـعَزَب. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
