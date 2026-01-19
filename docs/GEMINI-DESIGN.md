Here is the comprehensive implementation prompt you can use with an AI coding assistant (like ChatGPT, Claude, or GitHub Copilot) to build this website.

***

**Prompt:**

You are an expert Frontend Developer and UI/UX Designer. I need you to build a responsive Single Page Application (SPA) based on a political polling report PDF.

**Tech Stack:**
*   **HTML5**
*   **CSS3** (Use **Tailwind CSS** via CDN for styling)
*   **JavaScript** (Next.js app)
*   **Chart.js** (via CDN) for data visualization.

**Language:** The content must be in **Ukrainian**, exactly as it appears in the source text provided below.

### 1. Design System & Visual Identity
Replicate the exact look and feel of the PDF slides:
*   **Background:** A deep petrol/teal gradient.
    *   Start (Top): Dark Cyan/Teal (`#0f4c5c`)
    *   End (Bottom): Darker Navy/Teal (`#052025`)
    *   Text Color: Pure White (`#ffffff`) for headings, slightly off-white (`#e0e0e0`) for body text.
*   **Typography:** Use a clean, modern sans-serif font that supports Cyrillic (e.g., 'Inter', 'Roboto', or 'Open Sans').
*   **Chart Colors:**
    *   **Current Month (Dec 2025):** Teal (`#1a7a85`)
    *   **Previous Month (Nov 2025):** Red/Pink (`#d6334b`)
    *   **Line Chart (Right Direction):** Teal (`#2a919c`)
    *   **Line Chart (Wrong Direction):** Red (`#c12745`)
    *   **Line Chart (Hard to say):** Grey (`#a8a8a8`)
*   **Layout:**
    *   The site should be a vertical scrolling page divided into "Slides" (sections).
    *   Each section should take up at least `min-h-screen` (100vh) or have ample padding to feel like a presentation.
    *   Include a sticky top navigation bar with anchor links to sections.

### 2. Content & Data Structure

**Header/Navigation:**
*   Left: Logo text "PPDO | Public policy development office" & "IS InfoSapiens"
*   Links: Головна (Home), Методологія (Methodology), Вектор руху (Country Path), Президент (President), Парламент (Parliament).

**Section 1: Hero (Cover)**
*   **Headline:** "Результати дослідження електоральних настроїв в рамках U electoral data project"
*   **Sub-text:** "Підготовлено Info Sapiens на замовлення Public policy development office"
*   **Date:** "26 грудня 2025"
*   **Style:** Large, bold typography, centered or left-aligned with plenty of whitespace.

**Section 2: Methodology**
*   **Title:** "Методологія"
*   **Cards/List Items (Use Icons):**
    1.  **Method:** "Метод: Телефонне інтерв′ю CATI (Computer Assisted Telephone Interviewing). Омнібус, 17-26 грудня 2025 року. Електоральний Омнібус проводиться з 2007 року щомісячно."
    2.  **Audience:** "Цільова аудиторія: Чоловіки/жінки віком 18+ років."
    3.  **Sample:** "Вибірка: 1000 респондентів. Вибірка репрезентативна для населення (віком 18 років і старше) за статтю, віком, розміром населеного пункту, областю (згідно даним Державної служби статистики станом на 1.01.2022)."
    4.  **Error Margin:** "Теоретична похибка вибірки не перевищує 3,1% з вірогідністю 0.95%."

**Section 3: Country Direction (Line Chart)**
*   **Title:** "Вектор руху країни"
*   **Subtitle:** "Як ви думаєте, справи в Україні в цілому розвиваються у правильному напрямку чи вам здається, що країна рухається неправильним шляхом?"
*   **Chart Type:** Line Chart (Chart.js).
*   **X-Axis:** Months from 03'2022 to 12'2025.
*   **Data Points (Approximate based on image, but ensure end values are exact):**
    *   *Series 1 (Wrong Path - Red):* Starts low ~10%, rises gradually, crossing the other line around late 2023/early 2024. **Final Value (Dec 2025): 49.0%**.
    *   *Series 2 (Right Direction - Teal):* Starts high ~80%, dips, recovers, then trends downward. **Final Value (Dec 2025): 35.8%**.
    *   *Series 3 (Hard to say - Grey):* Hovers between 10-20%. **Final Value (Dec 2025): 15.3%**.

**Section 4: Presidential Election (Horizontal Bar Chart)**
*   **Title:** "Голосування на президентських виборах"
*   **Question:** "Скажіть, будь ласка, за кого б ви проголосували на майбутніх президентських виборах?"
*   **Chart Type:** Horizontal Bar Chart (Grouped).
*   **Legend:** Teal = Грудень 2025, Pink = Листопад 2025.
*   **Data:**
    *   Володимир Зеленський: 23.9% (Dec), 20.2% (Nov)
    *   Валерій Залужний: 17.1% (Dec), 19.4% (Nov)
    *   Петро Порошенко: 4.3% (Dec), 4.6% (Nov)
    *   Кирило Буданов: 4.2% (Dec), 5.2% (Nov)
    *   Дмитро Разумков: 3.6% (Dec), 2.6% (Nov)
    *   Андрій Білецький: 3.3% (Dec), 3.3% (Nov)
    *   Юлія Тимошенко: 2.9% (Dec), 1.5% (Nov)
    *   *Include remaining candidates down to "Важко сказати / Відмова" (21.2% / 23.4%) based on the OCR provided.*

**Section 5: Parliamentary Election (Horizontal Bar Chart)**
*   **Title:** "Голосування на виборах до Верховної ради"
*   **Question:** "За яку партію з цього списку ви б проголосували на майбутніх парламентських виборах?"
*   **Chart Type:** Horizontal Bar Chart (Grouped).
*   **Data:**
    *   Партія Валерія Залужного: 18.4% (Dec), 22.1% (Nov)
    *   Партія Володимира Зеленського: 16.1% (Dec), 11.6% (Nov)
    *   Європейська Солідарність: 6.1% (Dec), 6.9% (Nov)
    *   Партія Кирила Буданова: 6.0% (Dec), 7.3% (Nov)
    *   Азов (Денис Прокопенко): 5.5% (Dec), 5.7% (Nov)
    *   *Include remaining parties down to "Важко сказати / Відмова" (13.0% / 16.1%) based on the OCR provided.*

**Section 6: Footer**
*   Text: "Дякуємо! Результати дослідження електоральних настроїв в рамках U electoral data project"

### 3. Implementation Instructions
1.  Create a single `index.html` file containing the structure and the Tailwind script tag.
2.  Add a `<script>` block at the bottom. Initialize the Chart.js instances there.
3.  Ensure the charts are responsive (maintain aspect ratio but fit mobile screens).
4.  Add subtle animations (fade-in) for the text elements using Tailwind classes or simple CSS keyframes.
5.  **Crucial:** Use the specific hex codes provided for the chart datasets to match the "Teal" and "Pink" aesthetic of the PDF.

Please write the full code.