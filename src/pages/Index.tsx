import { useState } from 'react';
import Icon from '@/components/ui/icon';
import QuizSection from '@/components/QuizSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/b8f49a6b-46f5-4fa7-8bd3-e4fb0feff6b7/files/8e237d1f-6b64-485a-ae3f-003e1d80f99b.jpg';

const NAV = [
  { id: 'first', label: 'Голосую впервые' },
  { id: 'law', label: 'Правовой минимум' },
  { id: 'quiz', label: 'Игры и тесты' },
  { id: 'faq', label: 'Вопросы' },
  { id: 'about', label: 'О проекте' },
];

const STEPS = [
  { icon: 'IdCard', title: 'Возьми паспорт', text: 'Это единственный документ, который нужен на участке.' },
  { icon: 'MapPin', title: 'Найди свой участок', text: 'По прописке или через «Мобильный избиратель».' },
  { icon: 'UserCheck', title: 'Получи бюллетень', text: 'Назови адрес, распишись в списке избирателей.' },
  { icon: 'PenLine', title: 'Сделай выбор', text: 'Поставь любой знак в квадрате напротив одного варианта.' },
  { icon: 'Vote', title: 'Опусти бюллетень', text: 'В урну или через КОИБ. Готово — твой голос учтён!' },
];

const LAWS = [
  {
    icon: 'Scale',
    tag: 'Конституция, ст. 32',
    title: 'Право избирать и быть избранным',
    text: 'Граждане РФ имеют право участвовать в управлении делами государства — лично и через представителей.',
  },
  {
    icon: 'ShieldCheck',
    tag: 'Принцип выборов',
    title: 'Тайное голосование',
    text: 'Никто не вправе узнать, за кого ты проголосовал. Выбор делается в закрытой кабинке.',
  },
  {
    icon: 'Users',
    tag: 'Принцип выборов',
    title: 'Всеобщее и равное',
    text: 'У каждого избирателя один голос. Все голоса имеют одинаковый вес.',
  },
  {
    icon: 'Smartphone',
    tag: 'Новый формат',
    title: 'ДЭГ',
    text: 'Дистанционное электронное голосование — проголосовать можно онлайн через Госуслуги.',
  },
];

const FAQ = [
  {
    q: 'Я учусь в другом городе. Как проголосовать?',
    a: 'Подай заявление через сервис «Мобильный избиратель» на Госуслугах или в МФЦ — и голосуй на удобном участке, не по прописке.',
  },
  {
    q: 'Что делать, если я ошибся в бюллетене?',
    a: 'Обратись к члену комиссии — испорченный бюллетень заберут, а тебе выдадут новый.',
  },
  {
    q: 'Правда ли, что «мой голос ничего не решает»?',
    a: 'Нет. Итог складывается из миллионов голосов, и каждый из них меняет результат. Особенно на местных выборах, где разница бывает в десятки голосов.',
  },
  {
    q: 'Как отличить фейк о выборах от правды?',
    a: 'Проверяй источник. Достоверная информация публикуется на официальных сайтах ЦИК России и избирательных комиссий, а не в анонимных каналах.',
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-body text-ink overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b-4 border-ink">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-coral border-2 border-ink flex items-center justify-center shadow-pop">
              <Icon name="Vote" size={20} className="text-cream" />
            </span>
            <span className="font-display uppercase tracking-tight text-lg leading-none hidden sm:block">
              Учимся быть<br />избирателями
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="px-3 py-2 rounded-lg font-medium hover:bg-ink hover:text-cream transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t-2 border-ink bg-cream animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="block w-full text-left px-6 py-3 font-medium border-b border-ink/10"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative grain">
        <div className="container grid lg:grid-cols-2 gap-10 items-center py-14 lg:py-20">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-mint border-2 border-ink rounded-full px-4 py-1.5 font-display uppercase text-sm tracking-wide shadow-pop">
              <Icon name="Sparkles" size={16} /> Поколение, которое выбирает
            </span>
            <h1 className="font-display uppercase mt-5 leading-[0.92] text-5xl sm:text-6xl lg:text-7xl">
              Учимся быть
              <br />
              <span className="text-coral">избирателями</span>
            </h1>
            <p className="font-hand text-3xl text-ink/80 mt-4">
              Не откладывай своё будущее —
              <br />учись быть избирателем уже сегодня
            </p>
            <p className="mt-5 text-lg text-ink/70 max-w-md">
              Всё о выборах за 5 минут: понятные алгоритмы, правовой минимум и интерактивный тест с
              именным сертификатом.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <button
                onClick={() => scrollTo('quiz')}
                className="group inline-flex items-center gap-2 bg-coral text-cream font-display uppercase tracking-wide px-7 py-4 rounded-2xl shadow-pop hover-pop"
              >
                Пройти тест
                <Icon name="ArrowRight" size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('first')}
                className="inline-flex items-center gap-2 bg-cream border-2 border-ink font-display uppercase tracking-wide px-7 py-4 rounded-2xl hover-pop"
              >
                <Icon name="Footprints" size={20} /> Я голосую впервые
              </button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-3 bg-sun rounded-[2rem] border-4 border-ink rotate-3" />
            <img
              src={HERO_IMG}
              alt="Молодой избиратель опускает бюллетень в урну"
              className="relative rounded-[2rem] border-4 border-ink w-full object-cover aspect-square shadow-pop"
            />
            <div className="absolute -bottom-5 -left-5 bg-mint border-4 border-ink rounded-2xl px-4 py-3 font-display uppercase text-center shadow-pop animate-float">
              <div className="text-3xl leading-none">5 мин</div>
              <div className="text-xs">и ты готов</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-ink text-cream py-3 border-y-4 border-ink overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0">
              {['ДЭГ', 'Мобильный избиратель', 'Тайное голосование', 'Один голос решает', 'Медиаграмотность', 'Бюллетень'].map(
                (w, i) => (
                  <span key={i} className="font-display uppercase tracking-widest text-lg mx-6 flex items-center gap-6">
                    {w} <Icon name="Star" size={16} className="text-coral" />
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FIRST TIME */}
      <section id="first" className="container py-16 lg:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="font-hand text-2xl text-coral">5 простых шагов</span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-none">Я голосую впервые</h2>
          </div>
          <p className="max-w-sm text-ink/70">Путь избирателя от входа на участок до опускания бюллетеня.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="bg-cream border-4 border-ink rounded-3xl p-5 hover-pop relative"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-stroke text-6xl absolute top-2 right-4 select-none">
                {i + 1}
              </span>
              <span className="w-12 h-12 rounded-xl bg-mint border-2 border-ink flex items-center justify-center mb-4">
                <Icon name={s.icon} size={24} className="text-ink" />
              </span>
              <h3 className="font-display uppercase text-xl leading-tight">{s.title}</h3>
              <p className="text-ink/70 mt-2 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAW */}
      <section id="law" className="bg-ink text-cream py-16 lg:py-24 grain">
        <div className="container">
          <div className="mb-10">
            <span className="font-hand text-2xl text-mint">Простыми словами</span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-none">Правовой минимум</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {LAWS.map((l, i) => (
              <div
                key={i}
                className="bg-cream/5 border-2 border-cream/20 rounded-3xl p-6 hover:border-mint transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 rounded-xl bg-coral flex items-center justify-center shrink-0">
                    <Icon name={l.icon} size={22} className="text-cream" />
                  </span>
                  <span className="font-display uppercase text-xs tracking-widest text-mint">{l.tag}</span>
                </div>
                <h3 className="font-display uppercase text-2xl">{l.title}</h3>
                <p className="text-cream/70 mt-2">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="container py-16 lg:py-24">
        <div className="text-center mb-10">
          <span className="font-hand text-2xl text-coral">Игры и тесты</span>
          <h2 className="font-display uppercase text-4xl sm:text-5xl leading-none">
            Насколько ты готов к выборам?
          </h2>
          <p className="text-ink/70 mt-3 max-w-lg mx-auto">
            6 вопросов, мгновенная оценка и именной электронный сертификат в конце.
          </p>
        </div>
        <div className="flex justify-center">
          <QuizSection />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-sun/40 py-16 lg:py-24 border-y-4 border-ink">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <span className="font-hand text-2xl text-coral">Спроси эксперта</span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-none">Вопросы и ответы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-cream border-4 border-ink rounded-2xl px-5 overflow-hidden"
              >
                <AccordionTrigger className="font-display uppercase text-left text-lg hover:no-underline py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/75 text-base pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ABOUT + CONTACTS */}
      <section id="about" className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-cream border-4 border-ink rounded-3xl p-8 shadow-pop">
            <span className="font-hand text-2xl text-coral">О проекте</span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-none mb-4">
              Зачем мы это делаем
            </h2>
            <p className="text-ink/75">
              Проект «Учимся быть избирателями» переводит сложную правовую информацию на язык поколения
              Z и миллениалов. Минимум текста, максимум смысла — чтобы за 5–10 минут понять
              избирательный процесс и уверенно действовать в день выборов.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { n: '14–17', l: 'школьники' },
                { n: '18–25', l: 'студенты' },
                { n: '<25', l: 'работающие' },
              ].map((s, i) => (
                <div key={i} className="bg-mint border-2 border-ink rounded-2xl p-3 text-center">
                  <div className="font-display text-2xl">{s.n}</div>
                  <div className="text-xs text-ink/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink text-cream border-4 border-ink rounded-3xl p-8 shadow-pop-coral grain">
            <span className="font-hand text-2xl text-mint">Контакты</span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl leading-none mb-4">
              Будь на связи
            </h2>
            <p className="text-cream/70 mb-6">
              Задай анонимный вопрос в рубрике «Спроси эксперта» или следи за карточками и короткими
              видео в наших каналах.
            </p>
            <div className="grid gap-3">
              <a className="flex items-center gap-3 bg-cream/5 border-2 border-cream/20 rounded-2xl px-5 py-4 hover:border-mint transition-colors">
                <Icon name="MessageCircle" size={22} className="text-mint" />
                <span className="font-display uppercase">Сообщество VK</span>
                <Icon name="ArrowUpRight" size={20} className="ml-auto" />
              </a>
              <a className="flex items-center gap-3 bg-cream/5 border-2 border-cream/20 rounded-2xl px-5 py-4 hover:border-mint transition-colors">
                <Icon name="Send" size={22} className="text-mint" />
                <span className="font-display uppercase">Мессенджер МАХ</span>
                <Icon name="ArrowUpRight" size={20} className="ml-auto" />
              </a>
              <a className="flex items-center gap-3 bg-cream/5 border-2 border-cream/20 rounded-2xl px-5 py-4 hover:border-mint transition-colors">
                <Icon name="Mail" size={22} className="text-mint" />
                <span className="font-display uppercase">Написать нам</span>
                <Icon name="ArrowUpRight" size={20} className="ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream py-8 border-t-4 border-ink">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/60 text-sm">
          <span className="font-display uppercase tracking-wide text-cream">
            Учимся быть избирателями
          </span>
          <span>© {new Date().getFullYear()} · Просветительский проект</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
