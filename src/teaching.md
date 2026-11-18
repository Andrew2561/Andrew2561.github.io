---
layout: teaching.njk
title: Teaching
permalink: /teaching/
statement_title: Teaching Statement
statement_open: false
statement: |-
  ### Context Statement

  I am a third-year Ph.D. student in Environmental Policy (Economics track) in the Nicholas School of the Environment at Duke University, where my research focuses on the social costs (returns) of biodiversity losses (gains). In Fall 2025 I was the TA and primary lab facilitator for ENV 710, Applied Statistical Modeling for Environmental Management, a graduate course of about 15 professional master's students. I led its R lab sections, designed and taught two review sessions, wrote feedback on final group projects, and held office hours. My classroom has been a computer lab, where students work through R tutorials on real datasets while I walk through the code and help individuals debug. My students were applied users of statistics and they arrived with mixed quantitative preparation. Two commitments shape how I teach. I present statistics as a series of decisions an analyst makes with real data. And I pace each session so the whole room keeps up, not only the fastest students.

  ### Designing and Planning for Learning Activities [A1]

  The ENV 710 instructor assigned me two review topics; I designed both sessions and their materials. I built [Spatial Autocorrelation and Instrumental Variables](https://drive.google.com/file/d/1ow1DAvpShycEhtiZDIttD22LH3BsqFta/view?usp=sharing) around the published study behind the students' Lab 4 dataset, which they already knew from lab. The study is a national analysis of COVID-19 case rates, greenness and park access across U.S. urban areas. Instead of stating the conditions for a valid instrument abstractly, we tested the study's own candidates, built-up intensity and aridity, against relevance, exogeneity and exclusion [K1]. Because these students will apply such methods rather than derive them, I organized a comparison of six spatial models around when an analyst would choose each [K2]. The dataset also kept an environmental justice question in view: unequal access to green space by income and race [V4].

  For [Multivariate Linear Models II](https://drive.google.com/file/d/1l4MJxFCH9L8qD6J9st228JyYOZi94zlV/view?usp=sharing), I expected log transformations to be the sticking point, so I built a side-by-side table interpreting β₁ under four functional forms. For the log-linear case, I gave the familiar approximation, 100β₁%, before the exact expression, 100(exp(β₁) − 1)%. That order gave students with less math background a usable rule before the correction [V1]. My two Teaching Triangle observers, one at each session, pointed to the clear structure of both.

  ### Teaching and Supporting Student Learning [A2]

  Most of my teaching took place in ENV 710's R lab sections. Each session worked through one of the course's [R Markdown tutorials](https://duke.app.box.com/folder/337709690044), from data wrangling and comparisons of means to logistic regression with survey data, panel fixed effects and spatial mapping. Because the cohort's quantitative preparation was mixed, I used a guided walkthrough rather than lecture or derivation. I ran the code live, posed questions as we went, and pitched explanations at applied users of statistics [K2]. During work time I circulated to help students fix errors in their own consoles. The questions and the circulating both aim to keep the whole room moving rather than letting the fastest students set the pace [V2].

  Before every lab I ran the full tutorial in RStudio against the current data files and package versions. One broken code chunk can stall a whole session, and each test run showed me in advance where students were likely to hit errors [K4]. What I have learned about how students engage here is that the statistics and the software cannot be taught separately. A student stuck on an error message has stopped following the statistics, so helping them fix it is part of teaching the method.

  ### Assessing and Giving Feedback for Learning [A3]

  In November 2025, six ENV 710 groups presented their final analyses in lab, and I wrote feedback for each. I used the same five headings for every group: presentation and research question, variable selection, model interpretation, residual-versus-fitted assumptions, and next steps. Comparable problems therefore received comparable comments across groups [K5]. Rather than justify a score, each comment named something the group could do next with its analysis.

  The most useful comments were diagnostic [K3]. One group asked whether historically disadvantaged North Carolina counties have fewer solar installations per capita. Their residual plot fanned out and contained one extreme outlier. I named the heteroskedasticity and suggested refitting without the outlier to test whether their result for race still held. Another group regressed an environmental health hazard index on poverty and census variables. I noted that if the index was itself built from census data, they would be regressing a variable on itself, and suggested a direct measure such as PM2.5 concentrations. In both cases I tried to model checks students can reuse on any future analysis: read the residuals before interpreting coefficients, and ask how each variable was constructed.

  ### Supporting and Guiding Learners [A4]

  Outside the lab, I held regular office hours for individual and small-group help, which gave students a second, lower-stakes route to support [V1]. The questions that recurred there showed me where students were consistently stuck, and I changed a later session in response [K1]. My Teaching Triangle observers also noted a room in which students felt comfortable asking questions.

  I also guided groups while they built their final projects, leaving suggestions in their shared Google Docs. One group asked whether governance quality affects marine fish harvests in developing countries, using total catch as the outcome. Because raw totals are biased by country size, I suggested controlling for the area of each country's exclusive economic zone. When they presented without that control, I raised it again in my final feedback and suggested normalizing the outcome as catch per capita or per kilometer of coastline. Tracking whether groups had acted on my earlier suggestions let me pick up where our conversation had stopped rather than start over.

  ### Engaging in Professional Development as a Teacher [A5]

  As part of Duke's Certificate in College Teaching, I joined a four-person Teaching Triangle in Fall 2025 with colleagues from Mathematics and Psychology & Neuroscience [V5]. I observed two colleagues' classes and wrote narrative observation forms. In a calculus session on Taylor series, the most effective move was an explanation followed immediately by a similar problem, with the instructor circulating to give hints. My main suggestion was brief comprehension checks during long derivations, which later became one of my own goals. Two partners observed my review sessions, and the course instructor sent written feedback on one of them. They pointed out habits I had not noticed: I stayed close to my laptop and slides, moved quickly, and did not always pause for questions. In my next session I projected my voice and stopped explicitly to ask for questions, since silence is not the same as understanding [K3]. My written reflection commits me to further changes: treating slides as a guide rather than a script, adding quick comprehension checks before students start work, and moving around the room during group work [V3].

  ### Integrate & Reflect

  *In Elizabeth Newton's 1990 tapping experiment at Stanford, one person tapped out the rhythm of a well-known song and another tried to name it. Tappers predicted that listeners would get about half the songs; however, listeners only named 3 of 120. The tapper hears the melody in their head, while the listener hears only a string of disconnected knocks.* This curse of knowledge is the risk I watch for most as a teacher. To me, a regression table reads like a melody, with every coefficient, standard error and diagnostic part of one story. To a student seeing it for the first time, it can be a column of unrelated numbers.

  I try to remember what not knowing feels like, and I build my teaching around helping students connect the dots. I teach methods as decisions an analyst makes with real data, so each technique has a reason to exist. I pace for the whole room, offering intuition before formal precision, and I treat a quiet room as a question rather than an answer. Beyond the methods, I want students to leave able to connect the dots on their own: asking how each number was produced, checking assumptions before believing a result, and claiming no more than the evidence supports.

  ### Looking Ahead

  I want to design and teach environmental and resource economics at both the undergraduate and graduate levels. An introductory course would build from the theory of public goods, externalities, common-property resources and property rights to the main policy instruments: direct regulation, Pigouvian taxes, cap-and-trade and Coasean bargaining. A graduate field course would add the empirical tools: non-market valuation through hedonic, travel-cost, discrete-choice and averting-behavior models; climate impacts and adaptation; the design and enforcement of environmental regulation; and energy markets and the transition to renewables. Into that course I would build a unit drawn from my research on the social costs of biodiversity losses and the returns to biodiversity gains. It would apply the valuation tools to species and ecosystems, asking where those numbers fall short and whether conservation offsets and auctions deliver the gains they promise. Students would also present published papers and develop research proposals of their own.

  I also want to keep growing as a teacher. I plan to build more structured active learning into lectures, such as brief comprehension checks and paired problem-solving, and to learn tools that let students explore economic models interactively.
experience:
  - institution: Duke University
    courses:
      - "ENV 710: Applied Statistical Modeling for Environmental Management
        (Fall 2025)"
      - "PUBPOL 813: Quantitative Evaluation Methods (Spring 2027)"
  - institution: Renmin University of China
    courses:
      - "Rural Sociology (Head TA, Spring 2023, Credit: 2, Class Size: 33
        postgraduates)"
      - "Social Science Research Methods (Head TA, Spring 2022, Credit: 2, Class
        Size: 15 undergraduates)"
---
