# Портфоліо для рекрутерів

Простий односторінковий портфоліо на Next.js (App Router), TypeScript та Tailwind CSS. Підходить для поділу з рекрутерами — Hero, Про мене, Навички, Досвід, Контакт.

## Технології

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Bun** (пакетний менеджер та runtime)

## Як запустити

```bash
# Встановити залежності (якщо ще не встановлено)
bun install

# Режим розробки
bun run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Інші команди

```bash
# Збірка для продакшену
bun run build

# Запуск продакшен-збірки
bun run start

# Перевірка коду (ESLint)
bun run lint
```

## Що змінити під себе

1. **`src/app/page.tsx`** — замініть placeholder-тексти:
   - імʼя та заголовок у Hero;
   - блок «Про мене»;
   - масиви `skills` та `experience`;
   - посилання на CV (`/cv.pdf`), email, LinkedIn, Telegram.
2. Додайте файл **`public/cv.pdf`** для кнопки «Завантажити CV».
