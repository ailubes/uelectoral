"use client";

import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";

export function AboutSection() {
  const { locale } = useI18n();

  const ukrainianContent = `Підбиваємо електоральні підсумки 2025 року з U electoral data Project

Скандал в Овальному кабінеті, відновлення незалежності антикорупційних органів та звільнення Єрмака були головними політичними подіями 2025 року.

Крива оцінки вірності напрямку руху Україні цього року була подібною до американських гірок. Зустрічало суспільство 2025 рік з підтримки вектору руху, ставши на бік Зеленського в конфлікті в Овальному кабінеті.

Далі в режимі кардіограми оцінки коливалися від місяця до місяця. Здавалось, що картонковий протест обвалить оптимістичні оцінки, але відновлення незалежності антикорупційних органів призвело до миттєвої корекції оцінки вірності напрямку руху. Це був другий момент в році, коли кількість респондентів, які висловились про правильність напрямку руху країни, перевищувала кількість тих, які говорили про неправильний вектор.

Добре виражений тренд на падіння оцінки вірності напрямку руху країни запустив «Міндічґейт». Корупційний скандал змусив більше половини опитаних в листопаді респондентів говорити про те, що вектор руху України помилковий.

Але в грудні, після звільнення Єрмака, оптимізм знову почав зростати, разом з рейтингом Зеленського.

Електорально, як і після карткового майдану, рейтинг Володимира Олександровича знову відновився. В грудні рівень його підтримки повернувся до жовтневих показників, повністю нівелювавши листопадове падіння, яке було спричинене «Міндічґейтом».

Після медійного розголосу змісту записів НАБУ, рейтинг Зеленського просів у листопаді до 20,2%. Після звільнення Єрмака, рейтинг зріс у грудні до 23,9%.

При цьому слід зазначити, що оцінка напрямку руху держави хоч покращилась, але не зазнала повної корекції.

Після корупційного скандалу в листопаді 53,2% респондентів оцінювали напрям руху держави як неправильний, і лише 31,17 % — як правильний. В результаті звільнення Єрмака, чому передували обшуки у нього, оцінка шляху, яким рухається Україна, в грудні покращилась: вже 49% респондентів вказували на неправильності напрямку руху держави, а про правильність говорили — 35,8%.

Таким був 2025 рік за оцінками респондентів, які відповідали на питання в телефонних соціологічних опитуваннях компанії Info Sapiens.

Детальніше про зміни в динаміці зміни оцінок правильності напрямку, а також про волотильність електоральних оцінок Ви довідаєтесь з аналізу грудневих результатів U electoral data Project.

Нагадую, що U electoral data Project є спільною дослідницькою ініціативою з оприлюднення обʼєктивної електоральної оцінки суспільних настроїв в рамках Омнібусу компанії Info Sapiens та Public Policy Development Office - PPDO.

Місією U electoral data Project є надан суспільству, науково-експертному середовищу та журналістам доступу до достовірних даних електоральних настроїв в Україні.

Для цього, в рамках даного проекту, Public policy development office публікує частину результатів щомісячного Омнібусу, який на регулярній основі здійснює компанія Info Sapiens.

«Варто розуміти, що опитування проводяться в умовах війни, тому електоральні настрої слід розцінювати як потенціал окремих особистостей та їх команд, а не ті результати, які вони отримають, коли будуть зупинені бойові дії і безпекова ситуація дозволить провести вибори.

Також варто зазначити, що від участі одних та відмови від політичного проявлення інших будуть змінюватись і результати.», - зауважує Руслан Рохов, співзасновник Public policy development office, координатор U electoral data Project.

В майбутньому буде запущено сайт проекту, на якому в публічному доступі будуть розміщені всі дані 📊 за період широкомасштабного вторгнення. Доступ до них буде вільний. Додаткові відомості щодо інших питань соціологічних досліджень та аналітика до них будуть доступні для партнерів проекту на комерційній основі.

P.S. Варто зауважити, що в грудневому досліджені ми змінили цільову аудиторію, вилучивши з аналізу 16-17 річних, які враховувались в результатах у попередній презентації.

Для коректного аналізу електоральної динаміки, в цій презентації також вилучили неповнолітніх з результатів опитування за попередній місяць.`;

  const englishContent = `Summarizing the 2025 Electoral Results with U electoral data Project

The scandal in the Oval Office, restoration of independence for anti-corruption agencies, and the dismissal of Yermak were the main political events of 2025.

The curve of assessments regarding Ukraine's direction this year resembled a roller coaster. Society entered 2025 supporting the country's direction, siding with Zelensky in the Oval Office conflict.

Subsequently, assessments fluctuated month by month like a cardiogram. It seemed that the cardboard protest would collapse optimistic assessments, but the restoration of independence for anti-corruption agencies led to an immediate correction in the assessment of the country's direction. This was the second moment in the year when the number of respondents who expressed support for the country's direction exceeded those who spoke of the wrong vector.

A well-defined downward trend in assessments of the country's direction was triggered by "Mindichgate." The corruption scandal forced more than half of respondents surveyed in November to say that Ukraine's vector was wrong.

But in December, after Yermak's dismissal, optimism began to grow again, along with Zelensky's rating.

Electorally, just as after the cardboard Maidan, Volodymyr Oleksandrovych's rating recovered again. In December, his support level returned to October indicators, completely negating the November decline caused by "Mindichgate."

After media coverage of NABU recordings, Zelensky's rating dropped to 20.2% in November. After Yermak's dismissal, the rating increased to 23.9% in December.

It should be noted, however, that while the assessment of the state's direction improved, it did not undergo a complete correction.

After the corruption scandal in November, 53.2% of respondents assessed the state's direction as wrong, and only 31.17% as correct. Following Yermak's dismissal, which was preceded by searches at his premises, the assessment of Ukraine's path improved in December: 49% of respondents indicated the state's direction was wrong, while 35.8% said it was correct.

Such was 2025 according to respondents who answered questions in telephone sociological surveys conducted by Info Sapiens.

You will learn more about changes in the dynamics of directional assessments, as well as the volatility of electoral ratings, from the analysis of December results of the U electoral data Project.

As a reminder, the U electoral data Project is a joint research initiative for publishing objective electoral assessments of public sentiment within the framework of Info Sapiens' Omnibus and the Public Policy Development Office - PPDO.

The mission of the U electoral data Project is to provide society, the scientific-expert community, and journalists with access to reliable data on electoral sentiments in Ukraine.

To this end, within this project, the Public policy development office publishes part of the results of the monthly Omnibus regularly conducted by Info Sapiens.

"It is important to understand that surveys are conducted during wartime, so electoral sentiments should be viewed as the potential of individual personalities and their teams, not the results they will receive when hostilities cease and the security situation allows elections to be held.

It should also be noted that results will change depending on the participation of some and the refusal of political expression by others," notes Ruslan Rokhov, co-founder of the Public policy development office, coordinator of the U electoral data Project.

In the future, a project website will be launched where all data 📊 from the period of full-scale invasion will be publicly available. Access to them will be free. Additional information on other survey questions and analytics will be available to project partners on a commercial basis.

P.S. It should be noted that in the December study we changed the target audience, removing 16-17 year-olds from the analysis, who were included in the results in the previous presentation.

For correct analysis of electoral dynamics, in this presentation we also removed minors from the previous month's survey results.`;

  const content = locale === "uk" ? ukrainianContent : englishContent;

  // Split content into paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  // Split paragraphs into two columns
  const midPoint = Math.ceil(paragraphs.length / 2);
  const leftColumn = paragraphs.slice(0, midPoint);
  const rightColumn = paragraphs.slice(midPoint);

  return (
    <Section id="about" minHeight="auto" background="default">
      <Card>
        <CardContent className="py-8 sm:py-12">
          {/* 2-column layout on desktop, stacks on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((paragraph, index) => (
                <p key={`left-${index}`} className="text-sm sm:text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((paragraph, index) => (
                <p key={`right-${index}`} className="text-sm sm:text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
