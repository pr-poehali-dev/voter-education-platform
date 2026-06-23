import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface Question {
  q: string;
  options: string[];
  correct: number;
}

const QUESTIONS: Question[] = [
  {
    q: 'Со скольки лет гражданин РФ имеет право голосовать на выборах?',
    options: ['С 16 лет', 'С 18 лет', 'С 21 года', 'С 14 лет'],
    correct: 1,
  },
  {
    q: 'Что такое ДЭГ?',
    options: [
      'Документ единого голосования',
      'Дистанционное электронное голосование',
      'Дополнительная электоральная группа',
      'Дневник электронного гражданина',
    ],
    correct: 1,
  },
  {
    q: 'Что нужно взять с собой на избирательный участок?',
    options: ['Только хорошее настроение', 'Паспорт', 'Студенческий билет', 'Загранпаспорт'],
    correct: 1,
  },
  {
    q: 'Сервис «Мобильный избиратель» позволяет:',
    options: [
      'Голосовать по телефону голосом',
      'Проголосовать на удобном участке не по прописке',
      'Следить за кандидатами в соцсетях',
      'Заказать наблюдателя на дом',
    ],
    correct: 1,
  },
  {
    q: 'Как правильно отметить выбор в бумажном бюллетене?',
    options: [
      'Зачеркнуть всех, кроме одного',
      'Поставить любой знак в квадрате напротив одного кандидата',
      'Написать имя кандидата ручкой',
      'Обвести фамилию кружком',
    ],
    correct: 1,
  },
  {
    q: 'Как распознать фейк о выборах?',
    options: [
      'Поверить, если много репостов',
      'Проверить информацию на официальных сайтах ЦИК',
      'Спросить у друзей в чате',
      'Поверить, если есть яркое фото',
    ],
    correct: 1,
  },
];

const QuizSection = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [name, setName] = useState('');
  const certRef = useRef<HTMLDivElement>(null);

  const score = answers.filter((a, i) => a === QUESTIONS[i].correct).length;

  const start = () => {
    setStarted(true);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
  };

  const pick = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const newAnswers = [...answers, i];
    setTimeout(() => {
      if (current + 1 < QUESTIONS.length) {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setAnswers(newAnswers);
        setFinished(true);
      }
    }, 700);
  };

  const verdict = () => {
    const pct = (score / QUESTIONS.length) * 100;
    if (pct >= 80) return { title: 'Готов на 100%!', sub: 'Ты уверенный избиратель. Иди и голосуй!', emoji: '🏆', color: 'bg-mint' };
    if (pct >= 50) return { title: 'Почти готов', sub: 'Хорошая база! Загляни в «Правовой минимум».', emoji: '💪', color: 'bg-sun' };
    return { title: 'Время подучиться', sub: 'Пройди разделы сайта и попробуй снова!', emoji: '📚', color: 'bg-coral' };
  };

  if (!started) {
    return (
      <button
        onClick={start}
        className="group relative inline-flex items-center gap-3 bg-coral text-cream font-display uppercase tracking-wide text-xl px-9 py-5 rounded-2xl shadow-pop hover-pop"
      >
        <Icon name="Gamepad2" size={26} />
        Начать тест
        <Icon name="ArrowRight" size={24} className="transition-transform group-hover:translate-x-1" />
      </button>
    );
  }

  if (finished) {
    const v = verdict();
    return (
      <div className="w-full max-w-2xl mx-auto animate-scale-in">
        <div className={`${v.color} rounded-3xl border-4 border-ink p-8 text-center shadow-pop`}>
          <div className="text-6xl mb-3">{v.emoji}</div>
          <div className="font-display text-4xl uppercase text-ink">{v.title}</div>
          <p className="text-ink/80 mt-2 text-lg">{v.sub}</p>
          <div className="mt-4 font-display text-2xl text-ink">
            Результат: {score} / {QUESTIONS.length}
          </div>
        </div>

        <div className="mt-8 bg-cream rounded-3xl border-4 border-ink p-6 shadow-pop">
          <label className="font-display uppercase text-ink tracking-wide flex items-center gap-2 mb-2">
            <Icon name="Award" size={20} /> Получи именной сертификат
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Впиши своё имя"
              className="flex-1 rounded-xl border-2 border-ink bg-white px-4 py-3 text-ink outline-none focus:border-coral"
            />
            <button
              onClick={start}
              className="rounded-xl border-2 border-ink bg-white px-5 py-3 font-display uppercase tracking-wide text-ink hover-pop"
            >
              Пройти ещё раз
            </button>
          </div>

          {name.trim() && (
            <div
              ref={certRef}
              className="mt-6 relative overflow-hidden rounded-2xl border-4 border-ink bg-ink text-cream p-8 animate-fade-in grain"
            >
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-coral/30 blur-xl" />
              <div className="absolute right-6 top-6 rotate-[-8deg] animate-stamp border-4 border-mint rounded-xl px-4 py-1 font-display uppercase text-mint text-sm tracking-widest">
                Готов
              </div>
              <div className="font-hand text-3xl text-mint">Сертификат</div>
              <div className="font-display uppercase text-3xl sm:text-4xl mt-1 leading-tight">
                {name.trim()}
              </div>
              <p className="text-cream/70 mt-3 max-w-md">
                успешно прошёл(ла) тест «Насколько ты готов к выборам?» и подтвердил(а) знания
                избирательного процесса.
              </p>
              <div className="flex items-center justify-between mt-6 text-cream/60 text-sm">
                <span>Проект «Учимся быть избирателями»</span>
                <span className="font-display text-mint text-lg">{score}/{QUESTIONS.length}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const question = QUESTIONS[current];
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-3 rounded-full bg-ink/10 overflow-hidden border-2 border-ink">
          <div
            className="h-full bg-mint transition-all duration-500"
            style={{ width: `${(current / QUESTIONS.length) * 100}%` }}
          />
        </div>
        <span className="font-display text-ink text-lg whitespace-nowrap">
          {current + 1} / {QUESTIONS.length}
        </span>
      </div>

      <div key={current} className="bg-cream rounded-3xl border-4 border-ink p-6 sm:p-8 shadow-pop animate-fade-in">
        <h3 className="font-display uppercase text-2xl sm:text-3xl text-ink leading-tight mb-6">
          {question.q}
        </h3>
        <div className="grid gap-3">
          {question.options.map((opt, i) => {
            const isCorrect = i === question.correct;
            const show = selected !== null;
            let cls = 'bg-white border-ink hover:bg-ink hover:text-cream';
            if (show && isCorrect) cls = 'bg-mint border-ink text-ink';
            else if (show && i === selected && !isCorrect) cls = 'bg-coral border-ink text-cream';
            else if (show) cls = 'bg-white border-ink/30 text-ink/50';
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                className={`text-left rounded-2xl border-2 px-5 py-4 font-medium transition-all flex items-center gap-3 ${cls}`}
              >
                <span className="font-display text-lg w-7 h-7 flex items-center justify-center rounded-full border-2 border-current shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                {show && isCorrect && <Icon name="Check" size={20} className="ml-auto" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
