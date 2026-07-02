import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  LineChart,
  Smartphone,
  Sparkles,
  Target,
} from 'lucide-react';

const toeicLevels = [
  {
    level: 'TOEIC Foundation',
    goal: '0-250',
    fit: 'Người mất gốc',
    focus: 'Từ vựng căn bản, phát âm, câu giao tiếp đơn giản.',
  },
  {
    level: 'TOEIC Beginner',
    goal: '250-450',
    fit: 'Người mới học',
    focus: 'Từ vựng công sở, email, lịch hẹn, mô tả tranh.',
  },
  {
    level: 'TOEIC Elementary',
    goal: '450-600',
    fit: 'Chuẩn đầu ra nhiều trường cao đẳng, đại học',
    focus: 'Collocation thường gặp, ngữ pháp nền và nghe hiểu ý chính.',
  },
  {
    level: 'TOEIC Intermediate',
    goal: '600-750',
    fit: 'Xin việc ở nhiều công ty',
    focus: 'Từ vựng kinh doanh, báo cáo, cuộc họp, đọc nhanh.',
  },
  {
    level: 'TOEIC Advanced',
    goal: '750-990',
    fit: 'Làm việc trong môi trường quốc tế',
    focus: 'Từ vựng học thuật, sắc thái nghĩa, chiến thuật đề khó.',
  },
];

const ieltsLevels = [
  {
    level: 'Foundation',
    goal: '0-3.0',
    fit: 'Người mất gốc',
    focus: 'Core vocabulary, câu đơn, phát âm và chủ đề đời sống.',
  },
  {
    level: 'Beginner',
    goal: '3.0-4.5',
    fit: 'Mới bắt đầu học IELTS',
    focus: 'Từ vựng theo topic, paraphrase cơ bản, nghe ý chính.',
  },
  {
    level: 'Elementary',
    goal: '4.5-5.5',
    fit: 'Có nền tảng cơ bản',
    focus: 'Academic words, mô tả số liệu, mở rộng câu trả lời Speaking.',
  },
  {
    level: 'Intermediate',
    goal: '5.5-6.5',
    fit: 'Mức phổ biến để du học và tốt nghiệp',
    focus: 'Topic vocabulary, collocation, lập luận Writing Task 2.',
  },
  {
    level: 'Upper-Intermediate',
    goal: '6.5-7.5',
    fit: 'Du học, học bổng, môi trường quốc tế',
    focus: 'Từ vựng học thuật sâu, idiomatic language, precision.',
  },
  {
    level: 'Advanced',
    goal: '7.5-9.0',
    fit: 'Học thuật và nghề nghiệp yêu cầu tiếng Anh cao',
    focus: 'Nuance, style, discourse markers và lexical resource cao.',
  },
];

const efSetScoreBands = [
  {
    min: 0,
    max: 30,
    level: 'A1',
    title: 'Basic User',
    advice: 'Bắt đầu với từ vựng sinh hoạt, câu mẫu rất ngắn, phát âm và phản xạ hỏi đáp cơ bản.',
  },
  {
    min: 31,
    max: 40,
    level: 'A2',
    title: 'Basic User',
    advice: 'Tập trung cụm từ thường gặp về bản thân, mua sắm, công việc đơn giản và giao tiếp routine.',
  },
  {
    min: 41,
    max: 50,
    level: 'B1',
    title: 'Independent User',
    advice: 'Mở rộng topic vocabulary, collocation và luyện diễn đạt ý kiến trong bối cảnh quen thuộc.',
  },
  {
    min: 51,
    max: 60,
    level: 'B2',
    title: 'Independent User',
    advice: 'Ưu tiên từ vựng học thuật/công việc, paraphrase và khả năng giải thích quan điểm rõ ràng.',
  },
  {
    min: 61,
    max: 70,
    level: 'C1',
    title: 'Proficient User',
    advice: 'Rèn sắc thái nghĩa, register, discourse markers và cách dùng từ linh hoạt trong học thuật/nghề nghiệp.',
  },
  {
    min: 71,
    max: 100,
    level: 'C2',
    title: 'Proficient User',
    advice: 'Duy trì độ chính xác cao, idiomatic language và khả năng tóm tắt/diễn đạt tinh tế ở chủ đề phức tạp.',
  },
];

const efSetSections = [
  {
    id: 'reading',
    label: 'Reading',
    minutes: 25,
    description: '20 câu về ngữ pháp, từ vựng và đọc hiểu theo cấu trúc EF SET-style.',
    tasks: [
      {
        title: 'Grammar: Core Structures',
        passage:
          'Choose the best answer to complete each sentence. These questions cover common grammar areas often tested in placement exams.',
        questions: [
          {
            id: 'r1',
            prompt: 'She _____ English every morning before work.',
            options: ['study', 'studies', 'studying', 'studied'],
            answer: 'studies',
          },
          {
            id: 'r2',
            prompt: 'The report _____ by the finance team yesterday.',
            options: ['completed', 'was completed', 'has completing', 'is complete'],
            answer: 'was completed',
          },
          {
            id: 'r3',
            prompt: 'If I _____ enough time, I would join the online class.',
            options: ['have', 'had', 'will have', 'am having'],
            answer: 'had',
          },
          {
            id: 'r4',
            prompt: 'The employee _____ prepared the slides is from the marketing team.',
            options: ['who', 'which', 'where', 'when'],
            answer: 'who',
          },
          {
            id: 'r5',
            prompt: 'Please send the file _____ email before noon.',
            options: ['in', 'on', 'by', 'at'],
            answer: 'by',
          },
          {
            id: 'r6',
            prompt: 'I bought _____ umbrella because it was raining.',
            options: ['a', 'an', 'the', 'no article'],
            answer: 'an',
          },
          {
            id: 'r7',
            prompt: 'The new system works more _____ than the old one.',
            options: ['efficient', 'efficiency', 'efficiently', 'efficiencies'],
            answer: 'efficiently',
          },
          {
            id: 'r8',
            prompt: 'The manager was tired, _____ she continued answering questions.',
            options: ['because', 'although', 'so', 'but'],
            answer: 'but',
          },
        ],
      },
      {
        title: 'Vocabulary: Topic Words and Idioms',
        passage:
          'Choose the word or phrase closest in meaning. Idioms appear only lightly, similar to many general English placement tests.',
        questions: [
          {
            id: 'r9',
            prompt: 'The word "annual" is closest in meaning to _____.',
            options: ['daily', 'weekly', 'yearly', 'temporary'],
            answer: 'yearly',
          },
          {
            id: 'r10',
            prompt: 'A "refund" is money that is _____.',
            options: ['borrowed from a bank', 'paid back to a customer', 'spent on advertising', 'kept as profit'],
            answer: 'paid back to a customer',
          },
          {
            id: 'r11',
            prompt: 'If a project is "delayed", it is _____.',
            options: ['finished early', 'made cheaper', 'done later than planned', 'shared publicly'],
            answer: 'done later than planned',
          },
          {
            id: 'r12',
            prompt: 'The phrase "keep an eye on" means _____.',
            options: [
              'watch or monitor something',
              'forget something quickly',
              'write something carefully',
              'avoid looking at something',
            ],
            answer: 'watch or monitor something',
          },
          {
            id: 'r13',
            prompt: 'Which word best completes the sentence: The company will _____ a new product next month.',
            options: ['launch', 'lend', 'repair', 'cancelled'],
            answer: 'launch',
          },
        ],
      },
      {
        title: 'Reading: Notice',
        passage:
          'The city library will open one hour later on Friday because the staff will attend safety training. The children\'s reading club will still take place at 4 p.m., but the morning newspaper room will be closed. Visitors who need to return books can use the outside drop box at any time.',
        questions: [
          {
            id: 'r14',
            prompt: 'Why will the library open later on Friday?',
            options: [
              'The staff will attend training.',
              'The reading club was cancelled.',
              'The newspaper room is being repaired.',
              'The drop box is not working.',
            ],
            answer: 'The staff will attend training.',
          },
          {
            id: 'r15',
            prompt: 'What can visitors do at any time?',
            options: ['Join the reading club', 'Read morning newspapers', 'Return books using the drop box', 'Enter the main library'],
            answer: 'Return books using the drop box',
          },
        ],
      },
      {
        title: 'Reading: Email',
        passage:
          'Hi Maya, the design team has finished the first version of the mobile app screens. We found two usability issues during testing: the sign-up button was difficult to find, and several users expected the vocabulary review to appear before the grammar lesson. Please review the updated prototype before Thursday so we can prepare the client presentation.',
        questions: [
          {
            id: 'r16',
            prompt: 'What is the main purpose of the email?',
            options: [
              'To ask Maya to review a prototype',
              'To cancel a client presentation',
              'To introduce a new grammar lesson',
              'To report a problem with payment',
            ],
            answer: 'To ask Maya to review a prototype',
          },
          {
            id: 'r17',
            prompt: 'Which problem did users have?',
            options: [
              'They could not hear the audio.',
              'They could not find the sign-up button easily.',
              'They disliked all vocabulary reviews.',
              'They wanted fewer mobile screens.',
            ],
            answer: 'They could not find the sign-up button easily.',
          },
        ],
      },
      {
        title: 'Reading: Article',
        passage:
          'Remote work has changed how many adults study languages. Instead of attending evening classes after commuting, learners often use short breaks to complete focused activities on their phones. This flexibility can increase consistency, but it also requires stronger self-management. Without a clear schedule, short study sessions may become irregular and less effective.',
        questions: [
          {
            id: 'r18',
            prompt: 'According to the article, what is one benefit of mobile learning?',
            options: [
              'It removes the need for goals.',
              'It can help learners study more consistently.',
              'It replaces all speaking practice.',
              'It makes commuting longer.',
            ],
            answer: 'It can help learners study more consistently.',
          },
          {
            id: 'r19',
            prompt: 'What does the article imply about short study sessions?',
            options: [
              'They work best when learners manage their schedule.',
              'They are always less effective than long classes.',
              'They should only include grammar.',
              'They are useful only for advanced learners.',
            ],
            answer: 'They work best when learners manage their schedule.',
          },
          {
            id: 'r20',
            prompt: 'What is the best title for the article?',
            options: [
              'How Flexible Study Can Help and Challenge Learners',
              'Why Evening Classes Are Always Better',
              'The End of Language Learning',
              'How to Stop Using Mobile Phones',
            ],
            answer: 'How Flexible Study Can Help and Challenge Learners',
          },
        ],
      },
    ],
  },
  {
    id: 'listening',
    label: 'Listening',
    minutes: 25,
    description: '20 câu nghe từ, câu, hội thoại và bài nói ngắn theo EF SET-style.',
    tasks: [
      {
        title: 'Listening: Words and Short Phrases',
        audioText:
          'Number one: annual. Number two: refund. Number three: delayed. Number four: keep an eye on the budget.',
        questions: [
          {
            id: 'l1',
            prompt: 'Which word means "happening once every year"?',
            options: ['annual', 'casual', 'manual', 'visual'],
            answer: 'annual',
          },
          {
            id: 'l2',
            prompt: 'Which word refers to money paid back to a customer?',
            options: ['refund', 'profit', 'salary', 'invoice'],
            answer: 'refund',
          },
          {
            id: 'l3',
            prompt: 'Which word means "later than planned"?',
            options: ['delayed', 'confirmed', 'optional', 'local'],
            answer: 'delayed',
          },
          {
            id: 'l4',
            prompt: 'What does "keep an eye on the budget" mean?',
            options: ['Monitor the budget', 'Increase the budget', 'Hide the budget', 'Cancel the budget'],
            answer: 'Monitor the budget',
          },
        ],
      },
      {
        title: 'Listening: Sentences',
        audioText:
          'Number five: The train has been delayed because of heavy rain. Number six: Please submit your application by Friday. Number seven: If the price is too high, we will choose another supplier. Number eight: The report was written by an external consultant.',
        questions: [
          {
            id: 'l5',
            prompt: 'Why has the train been delayed?',
            options: ['Because of heavy rain', 'Because of a staff meeting', 'Because of a new supplier', 'Because of a written report'],
            answer: 'Because of heavy rain',
          },
          {
            id: 'l6',
            prompt: 'When should the application be submitted?',
            options: ['By Friday', 'On Sunday', 'Next month', 'After the interview'],
            answer: 'By Friday',
          },
          {
            id: 'l7',
            prompt: 'What will happen if the price is too high?',
            options: ['They will choose another supplier', 'They will submit an application', 'They will delay the train', 'They will write a report'],
            answer: 'They will choose another supplier',
          },
          {
            id: 'l8',
            prompt: 'Who wrote the report?',
            options: ['An external consultant', 'A train driver', 'A supplier', 'A job applicant'],
            answer: 'An external consultant',
          },
        ],
      },
      {
        title: 'Listening: Appointment Message',
        audioText:
          'Good morning, this is Green Dental Clinic. Your appointment with Doctor Lewis has been moved from Tuesday at ten thirty to Wednesday at two fifteen. Please call us before five today if the new time is not convenient.',
        questions: [
          {
            id: 'l9',
            prompt: 'What is the message mainly about?',
            options: [
              'A changed appointment time',
              'A new doctor joining the clinic',
              'A payment reminder',
              'A cancelled clinic service',
            ],
            answer: 'A changed appointment time',
          },
          {
            id: 'l10',
            prompt: 'When should the listener call if there is a problem?',
            options: ['Before five today', 'On Tuesday morning', 'After Wednesday', 'At ten thirty'],
            answer: 'Before five today',
          },
        ],
      },
      {
        title: 'Listening: Workplace Conversation',
        audioText:
          'Manager: The client liked the report, but they want clearer charts. Analyst: I can update the charts this afternoon. Manager: Great. Please highlight the sales trend and send the new version before tomorrow morning.',
        questions: [
          {
            id: 'l11',
            prompt: 'What does the client want?',
            options: [
              'Clearer charts',
              'A shorter meeting',
              'Lower sales targets',
              'A different analyst',
            ],
            answer: 'Clearer charts',
          },
          {
            id: 'l12',
            prompt: 'What should be highlighted in the new version?',
            options: ['The sales trend', 'The meeting agenda', 'The office location', 'The hiring plan'],
            answer: 'The sales trend',
          },
          {
            id: 'l13',
            prompt: 'When will the analyst update the charts?',
            options: ['This afternoon', 'Tomorrow afternoon', 'Next Monday', 'After the client presentation'],
            answer: 'This afternoon',
          },
        ],
      },
      {
        title: 'Listening: Campus Conversation',
        audioText:
          'Student: I signed up for the business English course, but I cannot attend on Mondays. Advisor: There is another group on Wednesday evenings. It uses the same textbook, but the teacher gives more speaking practice. Student: That sounds better for me.',
        questions: [
          {
            id: 'l14',
            prompt: 'What problem does the student have?',
            options: ['He cannot attend on Mondays', 'He lost his textbook', 'He missed the final test', 'He dislikes speaking practice'],
            answer: 'He cannot attend on Mondays',
          },
          {
            id: 'l15',
            prompt: 'What is different about the Wednesday group?',
            options: ['It gives more speaking practice', 'It has no teacher', 'It is cheaper', 'It uses a different textbook'],
            answer: 'It gives more speaking practice',
          },
        ],
      },
      {
        title: 'Listening: Short Talk',
        audioText:
          'Many language learners believe that memorizing long word lists is the fastest method. However, research and classroom experience suggest that vocabulary is easier to remember when learners meet words in meaningful contexts, review them regularly, and use them in speaking or writing.',
        questions: [
          {
            id: 'l16',
            prompt: 'What is the speaker\'s main point?',
            options: [
              'Context and repeated use help vocabulary learning.',
              'Long word lists are always the best method.',
              'Speaking practice should be avoided.',
              'Vocabulary is not important for language learning.',
            ],
            answer: 'Context and repeated use help vocabulary learning.',
          },
          {
            id: 'l17',
            prompt: 'Which activity does the speaker recommend?',
            options: [
              'Using new words in speaking or writing',
              'Studying only before exams',
              'Avoiding regular review',
              'Learning words without examples',
            ],
            answer: 'Using new words in speaking or writing',
          },
          {
            id: 'l18',
            prompt: 'What method does the speaker question?',
            options: ['Memorizing long word lists only', 'Reviewing words regularly', 'Learning in context', 'Using words in writing'],
            answer: 'Memorizing long word lists only',
          },
        ],
      },
      {
        title: 'Listening: Academic Mini Lecture',
        audioText:
          'In many cities, public transportation reduces traffic, but only when it is reliable and easy to use. If buses arrive late or stations are difficult to reach, people often return to private cars. For that reason, planners need to consider not only ticket prices, but also frequency, comfort, and connections between routes.',
        questions: [
          {
            id: 'l19',
            prompt: 'According to the speaker, when can public transportation reduce traffic?',
            options: [
              'When it is reliable and easy to use',
              'When ticket prices are the only concern',
              'When buses arrive late',
              'When stations are hard to reach',
            ],
            answer: 'When it is reliable and easy to use',
          },
          {
            id: 'l20',
            prompt: 'What should planners consider besides ticket prices?',
            options: [
              'Frequency, comfort, and route connections',
              'Only private car sales',
              'The color of buses',
              'The number of advertisements',
            ],
            answer: 'Frequency, comfort, and route connections',
          },
        ],
      },
    ],
  },
];

const cefrSources = [
  {
    name: 'EF SET - 50-minute 2-skill English test',
    url: 'https://www.efset.org/ef-set-50/',
  },
  {
    name: 'EF - EF SET English Certificate structure',
    url: 'https://www.ef.edu/english-tests/efset/english-certificate/',
  },
  {
    name: 'Council of Europe - CEFR Global scale',
    url: 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale',
  },
];

const knowledgeGroups = [
  '12 thì cơ bản',
  'Chủ ngữ - động từ',
  'Danh từ',
  'Đại từ',
  'Tính từ',
  'Trạng từ',
  'Giới từ',
  'Mạo từ',
  'Liên từ',
  'Câu bị động',
  'Mệnh đề quan hệ',
  'Câu điều kiện',
  'Từ vựng theo chủ đề',
  'Đọc hiểu',
  'Nghe hiểu',
];

const dailyStudyPlan = [
  { skill: 'Spaced Review', time: '15 phút', focus: 'Ôn hôm qua, D+3, D+7, D+14, D+30 và lỗi từng mắc.' },
  { skill: 'Từ vựng', time: '25 phút', focus: '15 từ/ngày: IPA, nghĩa, loại từ, collocation, ví dụ TOEIC.' },
  { skill: 'Ngữ pháp', time: '25 phút', focus: 'Theo English Grammar in Use: lý thuyết, ví dụ, 10 câu TOEIC.' },
  { skill: 'Listening', time: '25 phút', focus: 'Nghe không transcript, ghi keyword, đọc transcript, shadowing.' },
  { skill: 'Reading', time: '20 phút', focus: 'Skimming 30 giây, scanning date/name/number/time/place, trả lời câu hỏi.' },
  { skill: 'Mini TOEIC', time: '10 phút', focus: '5 câu Listening + 5 câu Reading, giới hạn thời gian và phân tích lỗi.' },
];

const lessonTemplate = [
  { part: 'Warm-up', content: 'Ôn bài cũ, 3-5 phút, kiểm tra nhanh flashcards.' },
  { part: 'Learn', content: 'Kiến thức mới: từ vựng, phát âm hoặc ngữ pháp trọng tâm.' },
  { part: 'Examples', content: '5-10 ví dụ có audio, nghĩa tiếng Việt và ngữ cảnh TOEIC/A1.' },
  { part: 'Practice', content: 'Trắc nghiệm, điền từ, sửa lỗi câu đơn giản.' },
  { part: 'Speaking', content: 'Shadowing, đọc theo mẫu và ghi âm tự kiểm tra.' },
  { part: 'Listening', content: 'Nghe hội thoại ngắn, chọn ý chính và thông tin chi tiết.' },
  { part: 'Reading', content: 'Đọc đoạn văn ngắn trình độ A1, trả lời 2-4 câu hỏi.' },
  { part: 'TOEIC Mini', content: '5-10 câu theo dạng TOEIC Part 1, 2, 5 hoặc đoạn đọc ngắn.' },
  { part: 'Review', content: 'Flashcards và lịch ôn cách quãng D+1, D+3, D+7, D+30.' },
];

const courseDataModel = [
  { entity: 'Course', fields: 'id, title, levelRange, goalScore, durationDays, outcomes' },
  { entity: 'Module', fields: 'week, theme, objectives, lessons' },
  { entity: 'Lesson', fields: 'day, title, focus, template, estimatedMinutes' },
  { entity: 'Vocabulary', fields: 'word, ipa, meaning, example, audio, image, tags' },
  { entity: 'Grammar', fields: 'topic, explanation, examples, exercises' },
  { entity: 'Dialogue', fields: 'title, audio, transcript, roles, questions' },
  { entity: 'Reading', fields: 'passage, level, questions, vocabulary' },
  { entity: 'Quiz', fields: 'question, options, answer, difficulty, skill' },
  { entity: 'ReviewSchedule', fields: 'itemId, dueDate, interval, ease, status' },
  { entity: 'Progress', fields: 'completedLessons, score, streak, accuracy, weakSkills' },
];

function getToeic350Stage(week) {
  if (week <= 8) {
    return {
      phase: 'Giai đoạn 1',
      theme: 'Xây nền tảng',
      goal: '600 từ TOEIC cơ bản, ngữ pháp nền tảng, Part 1, Part 2 và Reading cơ bản.',
      materials: 'English Grammar in Use, 600 từ TOEIC căn bản, TOEIC Starter',
      dayTopics: [
        'am / is / are và giới thiệu bản thân',
        'Present Simple và thói quen hằng ngày',
        'Present Continuous và mô tả tranh',
        'Articles, pronouns và danh từ cơ bản',
        'Prepositions, time, place và lịch hẹn',
        'TOEIC Part 1 + Part 2 nền tảng',
        'Weekly review + mini test',
      ],
    };
  }

  if (week <= 12) {
    return {
      phase: 'Giai đoạn 2',
      theme: 'Làm quen đề TOEIC',
      goal: 'Nghe hội thoại ngắn, làm Part 3/4 cơ bản, đọc Part 5/6.',
      materials: 'Very Easy TOEIC, Big Step 1',
      dayTopics: [
        'Short conversations và keyword listening',
        'Part 3: people, place, purpose',
        'Part 4: announcement, schedule, message',
        'Part 5: word form và subject-verb agreement',
        'Part 6: sentence insertion và context',
        'Mixed listening-reading practice',
        'Weekly review + mini test',
      ],
    };
  }

  if (week <= 16) {
    return {
      phase: 'Giai đoạn 3',
      theme: 'Phát triển kỹ năng',
      goal: 'Đọc Part 7, làm mini test, đạt khoảng 300 điểm.',
      materials: 'Big Step 1, Big Step 2',
      dayTopics: [
        'Part 7 notices and emails',
        'Part 7 forms, ads and messages',
        'Listening numbers, dates, time',
        'Part 2 question-response traps',
        'Part 5 grammar review under time pressure',
        'Mini test 30-40 questions',
        'Weekly report + weak skill repair',
      ],
    };
  }

  return {
    phase: 'Giai đoạn 4',
    theme: 'Luyện đề',
    goal: 'Làm full test, hoàn thành trong thời gian quy định, đạt 350+ TOEIC.',
    materials: 'Big Step 2, TOEIC practice tests',
    dayTopics: [
      'Timed Part 1 + Part 2',
      'Timed Part 3 + Part 4',
      'Timed Part 5 + Part 6',
      'Timed Part 7 single passages',
      'Full test strategy and pacing',
      'Full test simulation',
      'Error log + next-week adjustment',
    ],
  };
}

function createToeic350Modules() {
  return Array.from({ length: 20 }, (_, weekIndex) => {
    const week = weekIndex + 1;
    const stage = getToeic350Stage(week);

    return {
      week: `Tuần ${week}`,
      theme: `${stage.phase}: ${stage.theme}`,
      goal: stage.goal,
      materials: stage.materials,
      lessons: stage.dayTopics.map((topic, dayIndex) => {
        const day = weekIndex * 7 + dayIndex + 1;

        return {
          day,
          title: topic,
          focus: `${stage.materials}. ${topic}.`,
        };
      }),
    };
  });
}

const toeicFoundationCourse = {
  title: 'TOEIC 0 -> 350 trong 20 tuần',
  duration: '20 tuần, khoảng 4-6 tháng',
  target: 'TOEIC Foundation 0-350',
  dailyMinutes: '2 giờ/ngày, tương đương khoảng 240-360 giờ học',
  vocabularyGoal: '600+ từ TOEIC cơ bản trong 8 tuần đầu, mở rộng dần đến 900-1200 từ',
  outcomes: [
    'Nắm toàn bộ ngữ pháp nền tảng theo English Grammar in Use.',
    'Làm được Part 1, Part 2 và Reading cơ bản trong 8 tuần đầu.',
    'Làm quen Part 3, Part 4, Part 5 và Part 6 từ tuần 9-12.',
    'Đọc Part 7 cơ bản, làm mini test và đạt khoảng 300 điểm ở tuần 13-16.',
    'Làm full test theo thời gian quy định và hướng đến 350+ TOEIC ở tuần 17-20.',
  ],
  modules: createToeic350Modules(),
};

const practiceFlow = [
  'Nghe',
  'Nhìn',
  'Đọc to',
  'Nói theo',
  'Ghi âm',
  'Làm bài tập',
  'Ôn D+1/D+3/D+7/D+30',
];

const lessonContentPacks = [
  {
    vocabulary: [
      ['hello', '/həˈloʊ/', 'xin chào', 'Hello, my name is An.'],
      ['number', '/ˈnʌm.bər/', 'con số', 'My phone number is 0901.'],
      ['name', '/neɪm/', 'tên', 'What is your name?'],
      ['goodbye', '/ˌɡʊdˈbaɪ/', 'tạm biệt', 'Goodbye. See you tomorrow.'],
    ],
    grammar: ['To be: I am, you are, he/she is', 'Dùng to be để giới thiệu tên, nghề nghiệp, tình trạng.'],
    dialogue: ['A: Hello. I am Minh.', 'B: Hi Minh. My name is Anna.', 'A: Nice to meet you.', 'B: Nice to meet you too.'],
    reading: 'My name is Minh. I am a student. I am from Vietnam. I study English every day.',
  },
  {
    vocabulary: [
      ['student', '/ˈstuː.dənt/', 'học sinh/sinh viên', 'I am a student.'],
      ['teacher', '/ˈtiː.tʃər/', 'giáo viên', 'She is a teacher.'],
      ['country', '/ˈkʌn.tri/', 'quốc gia', 'What country are you from?'],
      ['job', '/dʒɑːb/', 'công việc', 'My job is assistant.'],
    ],
    grammar: ['Subject pronouns: I, you, he, she, we, they', 'Đại từ đứng trước động từ để nói ai làm gì.'],
    dialogue: ['A: Where are you from?', 'B: I am from Vietnam.', 'A: What is your job?', 'B: I am an office assistant.'],
    reading: 'Anna is from Canada. She is a teacher. Her students are friendly.',
  },
  {
    vocabulary: [
      ['mother', '/ˈmʌð.ər/', 'mẹ', 'My mother is kind.'],
      ['father', '/ˈfɑː.ðər/', 'bố', 'His father is a driver.'],
      ['sister', '/ˈsɪs.tər/', 'chị/em gái', 'I have one sister.'],
      ['people', '/ˈpiː.pəl/', 'người', 'There are four people in my family.'],
    ],
    grammar: ['Singular and plural nouns', 'Thêm -s/-es cho danh từ số nhiều: book -> books.'],
    dialogue: ['A: How many people are in your family?', 'B: There are four people.', 'A: Do you have a sister?', 'B: Yes, I do.'],
    reading: 'There are four people in my family. My father is a driver and my mother is a nurse.',
  },
  {
    vocabulary: [
      ['table', '/ˈteɪ.bəl/', 'cái bàn', 'The book is on the table.'],
      ['chair', '/tʃer/', 'cái ghế', 'This chair is new.'],
      ['phone', '/foʊn/', 'điện thoại', 'My phone is on the desk.'],
      ['bag', '/bæɡ/', 'cái túi', 'That is my bag.'],
    ],
    grammar: ['Articles: a, an, the', 'Dùng a/an khi nói một vật chưa xác định, the khi đã xác định.'],
    dialogue: ['A: Is this your bag?', 'B: Yes, it is.', 'A: Where is your phone?', 'B: It is on the table.'],
    reading: 'This is my desk. There is a phone, a notebook, and a pen on the desk.',
  },
  {
    vocabulary: [
      ['morning', '/ˈmɔːr.nɪŋ/', 'buổi sáng', 'I study in the morning.'],
      ['schedule', '/ˈskedʒ.uːl/', 'lịch trình', 'My schedule is busy.'],
      ['today', '/təˈdeɪ/', 'hôm nay', 'Today is Monday.'],
      ['meeting', '/ˈmiː.t̬ɪŋ/', 'cuộc họp', 'The meeting is at nine.'],
    ],
    grammar: ['Prepositions of time: at, on, in', 'at + giờ, on + ngày, in + tháng/buổi.'],
    dialogue: ['A: What time is the meeting?', 'B: It is at nine.', 'A: Is it today?', 'B: Yes, it is on Monday.'],
    reading: 'The meeting is at 9 a.m. It is in the morning. The team is ready.',
  },
  {
    vocabulary: [
      ['wake up', '/weɪk ʌp/', 'thức dậy', 'I wake up at six.'],
      ['work', '/wɝːk/', 'làm việc', 'She works in an office.'],
      ['usually', '/ˈjuː.ʒu.ə.li/', 'thường xuyên', 'I usually drink coffee.'],
      ['evening', '/ˈiːv.nɪŋ/', 'buổi tối', 'He studies in the evening.'],
    ],
    grammar: ['Present simple', 'Dùng hiện tại đơn cho thói quen: I work, she works.'],
    dialogue: ['A: What time do you wake up?', 'B: I wake up at six.', 'A: Do you study English every day?', 'B: Yes, I do.'],
    reading: 'Lan works in an office. She usually studies English in the evening.',
  },
  {
    vocabulary: [
      ['review', '/rɪˈvjuː/', 'ôn tập', 'Review the words every day.'],
      ['listen', '/ˈlɪs.ən/', 'nghe', 'Listen and repeat.'],
      ['answer', '/ˈæn.sɚ/', 'trả lời', 'Choose the correct answer.'],
      ['picture', '/ˈpɪk.tʃɚ/', 'bức tranh', 'Look at the picture.'],
    ],
    grammar: ['Week 1 review', 'Ôn to be, danh từ số nhiều, mạo từ, giới từ thời gian.'],
    dialogue: ['A: Look at the picture.', 'B: I see a table and two chairs.', 'A: Where is the phone?', 'B: It is on the table.'],
    reading: 'This week, Minh learns greetings, family words, objects, time, and daily routines.',
  },
  {
    vocabulary: [
      ['water', '/ˈwɔː.t̬ɚ/', 'nước', 'I would like some water.'],
      ['rice', '/raɪs/', 'cơm/gạo', 'Rice is popular in Vietnam.'],
      ['coffee', '/ˈkɑː.fi/', 'cà phê', 'She drinks coffee every morning.'],
      ['menu', '/ˈmen.juː/', 'thực đơn', 'Can I see the menu?'],
    ],
    grammar: ['Some and any', 'Dùng some trong câu khẳng định/lời mời, any trong câu hỏi/phủ định.'],
    dialogue: ['A: Can I see the menu?', 'B: Sure. What would you like?', 'A: I would like some rice and water.', 'B: Here you are.'],
    reading: 'Tom is at a cafe. He orders coffee and a sandwich. The waiter is friendly.',
  },
  {
    vocabulary: [
      ['price', '/praɪs/', 'giá', 'What is the price?'],
      ['cheap', '/tʃiːp/', 'rẻ', 'This bag is cheap.'],
      ['expensive', '/ɪkˈspen.sɪv/', 'đắt', 'That phone is expensive.'],
      ['receipt', '/rɪˈsiːt/', 'hóa đơn', 'Please keep the receipt.'],
    ],
    grammar: ['How much + be?', 'Dùng để hỏi giá: How much is this shirt?'],
    dialogue: ['A: How much is this bag?', 'B: It is ten dollars.', 'A: Do you have a receipt?', 'B: Yes, here you are.'],
    reading: 'Sara buys a small bag. It is cheap. She pays ten dollars and gets a receipt.',
  },
  {
    vocabulary: [
      ['left', '/left/', 'bên trái', 'Turn left at the bank.'],
      ['right', '/raɪt/', 'bên phải', 'Turn right at the corner.'],
      ['near', '/nɪr/', 'gần', 'The hotel is near the station.'],
      ['station', '/ˈsteɪ.ʃən/', 'nhà ga', 'The station is on King Street.'],
    ],
    grammar: ['Imperatives', 'Dùng động từ nguyên mẫu để hướng dẫn: Turn left, go straight.'],
    dialogue: ['A: Excuse me. Where is the station?', 'B: Go straight and turn left.', 'A: Is it near?', 'B: Yes, it is near the bank.'],
    reading: 'The station is near the hotel. Go straight for two minutes and turn right.',
  },
];

const fallbackPacks = [
  ['ticket', 'train', 'bus', 'airport'],
  ['hotel', 'room', 'passport', 'reservation'],
  ['doctor', 'appointment', 'health', 'medicine'],
  ['office', 'computer', 'print', 'copy'],
  ['meeting', 'agenda', 'team', 'invite'],
  ['email', 'message', 'subject', 'send'],
  ['department', 'manager', 'staff', 'company'],
  ['request', 'offer', 'help', 'please'],
  ['report', 'simple', 'clear', 'detail'],
  ['yesterday', 'visited', 'called', 'worked'],
  ['plan', 'tomorrow', 'travel', 'future'],
  ['better', 'cheaper', 'larger', 'smaller'],
  ['notice', 'sign', 'open', 'closed'],
  ['announcement', 'date', 'location', 'number'],
  ['introduce', 'order', 'direction', 'shopping'],
  ['mini test', 'picture', 'question', 'answer'],
  ['mistake', 'fix', 'review', 'score'],
  ['final', 'checkpoint', 'next', 'goal'],
];

const toeicVocabularyBank = [
  ['appointment', '/əˈpɔɪnt.mənt/', 'cuộc hẹn', 'I have an appointment with my manager tomorrow.'],
  ['schedule', '/ˈskedʒ.uːl/', 'lịch trình', 'The meeting schedule is on the board.'],
  ['confirm', '/kənˈfɝːm/', 'xác nhận', 'Please confirm your reservation by email.'],
  ['cancel', '/ˈkæn.səl/', 'hủy', 'The client canceled the appointment.'],
  ['department', '/dɪˈpɑːrt.mənt/', 'phòng ban', 'She works in the sales department.'],
  ['manager', '/ˈmæn.ə.dʒɚ/', 'quản lý', 'The manager will review the report.'],
  ['employee', '/ɪmˈplɔɪ.iː/', 'nhân viên', 'Every employee must wear an ID card.'],
  ['customer', '/ˈkʌs.tə.mɚ/', 'khách hàng', 'The customer asked for a receipt.'],
  ['receipt', '/rɪˈsiːt/', 'hóa đơn', 'Please keep your receipt.'],
  ['invoice', '/ˈɪn.vɔɪs/', 'hóa đơn thanh toán', 'The invoice was sent yesterday.'],
  ['deadline', '/ˈded.laɪn/', 'hạn chót', 'The deadline is Friday afternoon.'],
  ['submit', '/səbˈmɪt/', 'nộp', 'Please submit the form online.'],
  ['report', '/rɪˈpɔːrt/', 'báo cáo', 'The report is ready for the meeting.'],
  ['document', '/ˈdɑː.kjə.mənt/', 'tài liệu', 'Please print this document.'],
  ['copy', '/ˈkɑː.pi/', 'bản sao/sao chép', 'Make a copy of the contract.'],
  ['contract', '/ˈkɑːn.trækt/', 'hợp đồng', 'They signed the contract today.'],
  ['supplier', '/səˈplaɪ.ɚ/', 'nhà cung cấp', 'We need a reliable supplier.'],
  ['product', '/ˈprɑː.dʌkt/', 'sản phẩm', 'This product is popular with customers.'],
  ['price', '/praɪs/', 'giá', 'The price is too high.'],
  ['discount', '/ˈdɪs.kaʊnt/', 'giảm giá', 'The store offers a ten percent discount.'],
  ['refund', '/ˈriː.fʌnd/', 'hoàn tiền', 'The customer requested a refund.'],
  ['purchase', '/ˈpɝː.tʃəs/', 'mua hàng', 'We need to purchase new chairs.'],
  ['order', '/ˈɔːr.dɚ/', 'đơn hàng/đặt hàng', 'The order will arrive tomorrow.'],
  ['deliver', '/dɪˈlɪv.ɚ/', 'giao hàng', 'They deliver packages every morning.'],
  ['package', '/ˈpæk.ɪdʒ/', 'gói hàng', 'The package is on the front desk.'],
  ['available', '/əˈveɪ.lə.bəl/', 'có sẵn', 'The room is available after two.'],
  ['reserve', '/rɪˈzɝːv/', 'đặt trước', 'I would like to reserve a table.'],
  ['location', '/loʊˈkeɪ.ʃən/', 'địa điểm', 'The location is near the station.'],
  ['address', '/ˈæd.res/', 'địa chỉ', 'Please write your address here.'],
  ['direction', '/dəˈrek.ʃən/', 'chỉ dẫn/hướng', 'Can you give me directions to the office?'],
  ['entrance', '/ˈen.trəns/', 'lối vào', 'The entrance is on the left.'],
  ['exit', '/ˈeɡ.zɪt/', 'lối ra', 'Use the emergency exit.'],
  ['meeting', '/ˈmiː.t̬ɪŋ/', 'cuộc họp', 'The meeting starts at nine.'],
  ['agenda', '/əˈdʒen.də/', 'chương trình họp', 'The agenda has five items.'],
  ['presentation', '/ˌprez.ənˈteɪ.ʃən/', 'bài thuyết trình', 'Her presentation was very clear.'],
  ['project', '/ˈprɑː.dʒekt/', 'dự án', 'The project will finish next month.'],
  ['budget', '/ˈbʌdʒ.ɪt/', 'ngân sách', 'We need to check the budget.'],
  ['increase', '/ɪnˈkriːs/', 'tăng', 'Sales increased last quarter.'],
  ['decrease', '/dɪˈkriːs/', 'giảm', 'Costs decreased this year.'],
  ['profit', '/ˈprɑː.fɪt/', 'lợi nhuận', 'The company made a profit.'],
  ['expense', '/ɪkˈspens/', 'chi phí', 'Travel expenses are high.'],
  ['hire', '/haɪr/', 'tuyển dụng', 'The company will hire two assistants.'],
  ['training', '/ˈtreɪ.nɪŋ/', 'đào tạo', 'Staff training begins on Monday.'],
  ['position', '/pəˈzɪʃ.ən/', 'vị trí công việc', 'She applied for a new position.'],
  ['application', '/ˌæp.ləˈkeɪ.ʃən/', 'đơn ứng tuyển', 'Submit your application by Friday.'],
  ['interview', '/ˈɪn.t̬ɚ.vjuː/', 'phỏng vấn', 'The interview is at ten o’clock.'],
  ['salary', '/ˈsæl.ɚ.i/', 'lương', 'The salary is paid monthly.'],
  ['benefit', '/ˈben.ə.fɪt/', 'phúc lợi/lợi ích', 'The job has good benefits.'],
  ['assistant', '/əˈsɪs.tənt/', 'trợ lý', 'The assistant answered the phone.'],
  ['receptionist', '/rɪˈsep.ʃən.ɪst/', 'lễ tân', 'The receptionist greeted the visitor.'],
  ['visitor', '/ˈvɪz.ɪ.t̬ɚ/', 'khách thăm', 'All visitors must sign in.'],
  ['equipment', '/ɪˈkwɪp.mənt/', 'thiết bị', 'The office equipment is new.'],
  ['repair', '/rɪˈper/', 'sửa chữa', 'The technician will repair the printer.'],
  ['printer', '/ˈprɪn.t̬ɚ/', 'máy in', 'The printer is out of paper.'],
  ['computer', '/kəmˈpjuː.t̬ɚ/', 'máy tính', 'My computer is not working.'],
  ['file', '/faɪl/', 'tệp/hồ sơ', 'Save the file before you leave.'],
  ['attach', '/əˈtætʃ/', 'đính kèm', 'Please attach the document to the email.'],
  ['message', '/ˈmes.ɪdʒ/', 'tin nhắn', 'I left a message for the manager.'],
  ['notify', '/ˈnoʊ.t̬ə.faɪ/', 'thông báo', 'Please notify us of any changes.'],
  ['delay', '/dɪˈleɪ/', 'trì hoãn', 'The flight was delayed.'],
  ['arrive', '/əˈraɪv/', 'đến', 'The train will arrive at noon.'],
  ['depart', '/dɪˈpɑːrt/', 'khởi hành', 'The bus departs at seven.'],
  ['passenger', '/ˈpæs.ən.dʒɚ/', 'hành khách', 'Passengers should wait at gate five.'],
  ['ticket', '/ˈtɪk.ɪt/', 'vé', 'I bought a train ticket.'],
  ['luggage', '/ˈlʌɡ.ɪdʒ/', 'hành lý', 'Her luggage is very heavy.'],
  ['reservation', '/ˌrez.ɚˈveɪ.ʃən/', 'sự đặt chỗ', 'I made a hotel reservation.'],
  ['accommodation', '/əˌkɑː.məˈdeɪ.ʃən/', 'chỗ ở', 'The company pays for accommodation.'],
  ['menu', '/ˈmen.juː/', 'thực đơn', 'Can I see the menu?'],
  ['meal', '/miːl/', 'bữa ăn', 'The meal is included in the price.'],
  ['beverage', '/ˈbev.ɚ.ɪdʒ/', 'đồ uống', 'Coffee is a popular beverage.'],
  ['recommend', '/ˌrek.əˈmend/', 'gợi ý/đề xuất', 'Can you recommend a good restaurant?'],
  ['responsible', '/rɪˈspɑːn.sə.bəl/', 'chịu trách nhiệm', 'She is responsible for the schedule.'],
  ['prepare', '/prɪˈper/', 'chuẩn bị', 'Please prepare the meeting room.'],
  ['organize', '/ˈɔːr.ɡən.aɪz/', 'tổ chức/sắp xếp', 'We need to organize the files.'],
  ['improve', '/ɪmˈpruːv/', 'cải thiện', 'The team wants to improve customer service.'],
];

function buildDailyVocabulary(baseVocabulary, day) {
  const vocabulary = [...baseVocabulary];
  const existingWords = new Set(vocabulary.map(([word]) => word.toLowerCase()));
  let cursor = (day - 1) * 15;

  while (vocabulary.length < 15) {
    const nextWord = toeicVocabularyBank[cursor % toeicVocabularyBank.length];
    const normalizedWord = nextWord[0].toLowerCase();

    if (!existingWords.has(normalizedWord)) {
      vocabulary.push(nextWord);
      existingWords.add(normalizedWord);
    }

    cursor += 1;
  }

  return vocabulary.slice(0, 15);
}

function buildShadowingScript(vocabulary) {
  const words = vocabulary.slice(0, 10).map(([word]) => word);
  const [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10] = words;

  return [
    `Today I have an English practice plan with ${word1}, ${word2}, ${word3}, ${word4}, and ${word5}.`,
    `I listen, look, read aloud, and say sentences with ${word6}, ${word7}, and ${word8}.`,
    `After that, I record my voice and review ${word9} and ${word10} again.`,
    `This short shadowing paragraph helps me remember at least ten new TOEIC words.`,
  ];
}

const collocationBank = {
  appointment: ['make an appointment', 'do an appointment', 'go an appointment', 'take an appointment'],
  schedule: ['follow the schedule', 'do the schedule', 'eat the schedule', 'make schedulely'],
  confirm: ['confirm a reservation', 'confirm to a chair', 'confirm by a table', 'confirm at a coffee'],
  cancel: ['cancel an appointment', 'cancel a coffee', 'cancel to office', 'cancel by report'],
  department: ['sales department', 'department salesly', 'go department', 'department a meeting'],
  manager: ['general manager', 'manager reportly', 'do manager', 'manager a price'],
  employee: ['new employee', 'employee a meeting', 'do employee', 'employee quickly a report'],
  customer: ['regular customer', 'customer a schedule', 'do customer', 'customer by invoice'],
  receipt: ['keep a receipt', 'do a receipt', 'go a receipt', 'make receiptly'],
  invoice: ['send an invoice', 'go an invoice', 'eat an invoice', 'do invoice to'],
  deadline: ['meet a deadline', 'do a deadline', 'go deadline', 'make deadline to'],
  submit: ['submit a form', 'submit to a chair', 'submit an office', 'submit with a price'],
  report: ['write a report', 'do reportly', 'go a report', 'make to report'],
  document: ['attach a document', 'document a manager', 'go document', 'do documently'],
  copy: ['make a copy', 'go a copy', 'copy a deadline', 'do copyly'],
  contract: ['sign a contract', 'go a contract', 'contract a customer', 'do contractly'],
  supplier: ['reliable supplier', 'supplier a report', 'do supplier', 'supplier to meeting'],
  product: ['launch a product', 'product a manager', 'do product', 'go productly'],
  price: ['reduce the price', 'do the price', 'price a meeting', 'go the price'],
  discount: ['offer a discount', 'discount a train', 'do discountly', 'go a discount'],
  refund: ['request a refund', 'refund a meeting', 'go refund', 'do refundly'],
  purchase: ['make a purchase', 'purchase a deadline', 'go purchase', 'do purchasely'],
  order: ['place an order', 'order a deadline', 'go an order', 'do orderly'],
  deliver: ['deliver a package', 'deliver a meeting', 'go deliver', 'do deliverly'],
  package: ['track a package', 'package a manager', 'do package', 'go packagely'],
  available: ['available room', 'available a report', 'do available', 'go available'],
  reserve: ['reserve a table', 'reserve a report', 'go reserve', 'do reservely'],
  location: ['convenient location', 'location a meeting', 'do location', 'go location'],
  address: ['home address', 'address a price', 'do addressly', 'go address'],
  direction: ['give directions', 'do directions', 'directions a report', 'go directions'],
  entrance: ['main entrance', 'entrance a report', 'do entrance', 'go entrance'],
  exit: ['emergency exit', 'exit a manager', 'do exit', 'go exitly'],
  meeting: ['attend a meeting', 'do a meeting', 'go a meeting report', 'meeting a price'],
  agenda: ['meeting agenda', 'agenda a customer', 'do agenda', 'go agendaly'],
  presentation: ['give a presentation', 'presentation a customer', 'go presentation', 'do presentationly'],
  project: ['finish a project', 'project a customer', 'go project', 'do projectly'],
  budget: ['check the budget', 'budget a customer', 'go budget', 'do budgetly'],
  hello: ['say hello', 'make hello', 'do hello', 'go hello'],
  number: ['phone number', 'make number', 'do number', 'go number'],
  name: ['first name', 'do name', 'go name', 'make name to'],
  goodbye: ['say goodbye', 'do goodbye', 'make goodbye report', 'go goodbye'],
};

function rotateOptions(options, seed) {
  const rotation = seed % options.length;

  return [...options.slice(rotation), ...options.slice(0, rotation)];
}

function buildMeaningQuestions(vocabulary) {
  return vocabulary.map(([word, ipa, meaning, example], index) => {
    const distractors = [1, 2, 3].map((offset) => vocabulary[(index + offset) % vocabulary.length][2]);

    return {
      prompt: `What does "${word}" mean in this lesson?`,
      options: rotateOptions([meaning, ...distractors], index),
      answer: meaning,
      skill: 'Vocabulary',
      errorType: 'Thiếu từ vựng',
      explanation: `Bạn cần nhớ nghĩa, IPA ${ipa} và ví dụ TOEIC của "${word}".`,
      reviewFocus: [word, example],
    };
  });
}

function buildCollocationQuestions(vocabulary) {
  return vocabulary.map(([word], index) => {
    const fallbackOptions = [
      `use ${word} correctly`,
      `go ${word} quickly`,
      `do ${word} to`,
      `make ${word}ly`,
    ];
    const options = collocationBank[word.toLowerCase()] || fallbackOptions;

    return {
      prompt: `Choose the correct collocation: "${word}"`,
      options: rotateOptions(options, index + 1),
      answer: options[0],
      skill: 'Vocabulary',
      errorType: 'Nhầm collocation',
      explanation: `Bạn đã biết từ "${word}", nhưng cần nhớ cụm từ tự nhiên đi kèm với nó.`,
      reviewFocus: [options[0], word],
    };
  });
}

function createFallbackPack(lesson, index) {
  const words = fallbackPacks[index - lessonContentPacks.length - 1] || fallbackPacks[0];
  const vocabulary = words.map((word) => [
    word,
    '/practice/',
    `từ chủ đề ${lesson.title}`,
    `I can use "${word}" in a simple sentence.`,
  ]);

  return {
    vocabulary,
    grammar: [lesson.focus.split(',')[0], `Học mẫu câu nền tảng trong bài: ${lesson.focus}`],
    dialogue: [
      `A: Let's practice ${lesson.title.toLowerCase()}.`,
      `B: Okay. I can say simple sentences.`,
      `A: Please listen and repeat.`,
      `B: I am ready.`,
    ],
    reading: `Today is day ${lesson.day}. The lesson is about ${lesson.title.toLowerCase()}. Read the short text, listen, repeat, and review the new words.`,
  };
}

const foundationPracticeLessons = toeicFoundationCourse.modules
  .flatMap((module) => module.lessons.map((lesson) => ({ ...lesson, week: module.week, theme: module.theme })))
  .map((lesson, index) => {
    const content = lessonContentPacks[index] || createFallbackPack(lesson, index);
    const vocabulary = buildDailyVocabulary(content.vocabulary, lesson.day);

    return {
      ...lesson,
      ...content,
      vocabulary,
      examples: vocabulary.map((item) => item[3]),
      shadowing: buildShadowingScript(vocabulary),
      quiz: [
        ...buildMeaningQuestions(vocabulary),
        ...buildCollocationQuestions(vocabulary),
        {
          prompt: `Grammar focus today: ${content.grammar[0]}. What should you do after reading examples?`,
          options: ['Tự đặt 5 câu', 'Bỏ qua bài tập', 'Chỉ dịch tiếng Việt', 'Không ôn lại'],
          answer: 'Tự đặt 5 câu',
          skill: 'Grammar',
          errorType: 'Thiếu luyện đặt câu',
          explanation: 'English Grammar in Use hiệu quả hơn khi bạn tự tạo câu sau phần ví dụ.',
          reviewFocus: [content.grammar[0], 'make 5 simple sentences'],
        },
        {
          prompt: 'Listening method: What should you do in lần 2?',
          options: ['Ghi từ khóa', 'Nhìn transcript ngay', 'Dừng bài học', 'Dịch từng chữ'],
          answer: 'Ghi từ khóa',
          skill: 'Listening',
          errorType: 'Không bắt keyword',
          explanation: 'Lần nghe thứ hai nên ghi keyword để luyện bắt ý chính trước khi xem transcript.',
          reviewFocus: ['keyword listening', 'date/name/number/time/place'],
        },
        {
          prompt: 'Reading method: What should you do first?',
          options: ['Skimming 30 giây', 'Đọc từng chữ ngay', 'Tra mọi từ mới', 'Xem đáp án trước'],
          answer: 'Skimming 30 giây',
          skill: 'Reading',
          errorType: 'Đọc chậm',
          explanation: 'Nếu đọc từng chữ ngay từ đầu, bạn dễ mất thời gian ở Part 7.',
          reviewFocus: ['skimming', 'main idea', '30 seconds'],
        },
        {
          prompt: 'Scanning means looking quickly for _____.',
          options: ['date, name, number, time, place', 'every grammar rule', 'only difficult words', 'the answer key'],
          answer: 'date, name, number, time, place',
          skill: 'Reading',
          errorType: 'Sai kỹ thuật scanning',
          explanation: 'Scanning dùng để tìm dữ kiện cụ thể, không phải đọc toàn bộ văn bản.',
          reviewFocus: ['date', 'name', 'number', 'time', 'place'],
        },
        {
          prompt: 'TOEIC Part 2 mainly tests _____.',
          options: ['question-response', 'long reading', 'essay writing', 'photo description only'],
          answer: 'question-response',
          skill: 'TOEIC Part 2',
          errorType: 'Chưa nắm format TOEIC',
          explanation: 'Part 2 yêu cầu nghe câu hỏi/câu nói và chọn phản hồi phù hợp.',
          reviewFocus: ['who/where/when questions', 'question-response traps'],
        },
        {
          prompt: 'If you hear "fifty", which number is correct?',
          options: ['50', '15', '5', '55'],
          answer: '50',
          skill: 'Listening',
          errorType: 'Nghe nhầm âm teen/ty',
          explanation: 'Người mới hay nhầm fifteen và fifty. Cần luyện trọng âm teen/ty.',
          reviewFocus: ['fifteen vs fifty', 'teen vs ty'],
        },
        {
          prompt: 'After today, when should this lesson be reviewed?',
          options: ['D+1, D+3, D+7, D+30', 'Only after 1 year', 'Never', 'Only before sleeping'],
          answer: 'D+1, D+3, D+7, D+30',
          skill: 'Review',
          errorType: 'Không dùng spaced repetition',
          explanation: 'Ôn cách quãng giúp chuyển kiến thức sang trí nhớ dài hạn.',
          reviewFocus: ['D+1', 'D+3', 'D+7', 'D+30'],
        },
      ],
    };
  });

const TEST_DURATION_SECONDS = 50 * 60;
const RESULT_HISTORY_KEY = 'vocabulary-boost-test-history';
const LESSON_PROGRESS_KEY = 'vocabulary-boost-lesson-progress';

const testQuestions = efSetSections.flatMap((section) =>
  section.tasks.flatMap((task) =>
    task.questions.map((question) => ({
      ...question,
      taskTitle: task.title,
      sectionId: section.id,
      sectionLabel: section.label,
    })),
  ),
);

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getWeakSkills(readingPercent, listeningPercent) {
  if (readingPercent === listeningPercent) {
    return ['Reading', 'Listening'];
  }

  return readingPercent < listeningPercent ? ['Reading'] : ['Listening'];
}

function createEmptyLessonProgress() {
  return { completedDays: [], reviews: [], reports: [], errorStats: {} };
}

const featuredWords = [
  {
    word: 'deadline',
    type: 'TOEIC',
    meaning: 'hạn chót',
    example: 'Please submit the report before the deadline.',
  },
  {
    word: 'significant',
    type: 'IELTS',
    meaning: 'đáng kể, quan trọng',
    example: 'There was a significant increase in online learning.',
  },
  {
    word: 'negotiate',
    type: 'TOEIC',
    meaning: 'đàm phán',
    example: 'The manager will negotiate the new contract.',
  },
];

function App() {
  const savedAttemptRef = useRef(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [attemptSaved, setAttemptSaved] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION_SECONDS);
  const [selectedLessonDay, setSelectedLessonDay] = useState(1);
  const [lessonAnswers, setLessonAnswers] = useState({});
  const [lessonChecked, setLessonChecked] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [lessonProgress, setLessonProgress] = useState(() => {
    try {
      const savedProgress = window.localStorage.getItem(LESSON_PROGRESS_KEY);

      return savedProgress ? { ...createEmptyLessonProgress(), ...JSON.parse(savedProgress) } : createEmptyLessonProgress();
    } catch {
      return createEmptyLessonProgress();
    }
  });
  const [attemptHistory, setAttemptHistory] = useState(() => {
    try {
      const savedHistory = window.localStorage.getItem(RESULT_HISTORY_KEY);

      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch {
      return [];
    }
  });

  const completedCount = Object.keys(answers).length;
  const progress = Math.round((completedCount / testQuestions.length) * 100);
  const selectedLesson = useMemo(
    () => foundationPracticeLessons.find((lesson) => lesson.day === selectedLessonDay),
    [selectedLessonDay],
  );
  const completedLessonCount = lessonProgress.completedDays.length;
  const lessonCompletionPercent = Math.round(
    (completedLessonCount / foundationPracticeLessons.length) * 100,
  );
  const lessonReviewDates = useMemo(() => {
    const now = new Date();

    return [1, 3, 7, 30].map((interval) => {
      const dueDate = new Date(now);
      dueDate.setDate(now.getDate() + interval);

      return {
        interval,
        label: `D+${interval}`,
        date: dueDate.toLocaleDateString('vi-VN'),
      };
    });
  }, [selectedLessonDay]);

  const lessonReport = useMemo(() => {
    if (!lessonChecked) {
      return null;
    }

    const items = selectedLesson.quiz.map((question, index) => {
      const selectedAnswer = lessonAnswers[index] || 'Chưa trả lời';

      return {
        ...question,
        number: index + 1,
        selectedAnswer,
        isCorrect: selectedAnswer === question.answer,
      };
    });
    const correctItems = items.filter((item) => item.isCorrect);
    const mistakes = items.filter((item) => !item.isCorrect);
    const score = Math.round((correctItems.length / items.length) * 100);
    const skillStats = items.reduce((stats, item) => {
      const current = stats[item.skill] || { total: 0, correct: 0 };
      current.total += 1;
      current.correct += item.isCorrect ? 1 : 0;
      stats[item.skill] = current;

      return stats;
    }, {});
    const topError = mistakes[0]?.errorType || 'Chưa có lỗi nổi bật';
    const recommendation =
      mistakes.length === 0
        ? 'Ngày mai tăng nhẹ tốc độ làm Mini TOEIC và giữ lịch ôn D+1.'
        : `Ngày mai thêm 10 câu về "${topError}" và ôn lại: ${mistakes
            .flatMap((item) => item.reviewFocus)
            .slice(0, 4)
            .join(', ')}.`;

    return {
      score,
      correct: correctItems.length,
      total: items.length,
      skillStats,
      mistakes,
      recommendation,
    };
  }, [lessonAnswers, lessonChecked, selectedLesson]);

  const result = useMemo(() => {
    if (!submitted) {
      return null;
    }

    const correctAnswers = testQuestions.filter((question) => answers[question.id] === question.answer);
    const score = Math.round((correctAnswers.length / testQuestions.length) * 100);
    const level = efSetScoreBands.find((item) => score >= item.min && score <= item.max);
    const readingCorrect = correctAnswers.filter((question) => question.sectionId === 'reading').length;
    const listeningCorrect = correctAnswers.filter((question) => question.sectionId === 'listening').length;
    const readingTotal = testQuestions.filter((question) => question.sectionId === 'reading').length;
    const listeningTotal = testQuestions.filter((question) => question.sectionId === 'listening').length;
    const readingPercent = Math.round((readingCorrect / readingTotal) * 100);
    const listeningPercent = Math.round((listeningCorrect / listeningTotal) * 100);
    const weakSkills = getWeakSkills(readingPercent, listeningPercent);

    return {
      ...level,
      score,
      correct: correctAnswers.length,
      readingCorrect,
      listeningCorrect,
      readingTotal,
      listeningTotal,
      readingPercent,
      listeningPercent,
      weakSkills,
    };
  }, [answers, submitted]);

  const progressStats = useMemo(() => {
    if (attemptHistory.length === 0) {
      return null;
    }

    const latestAttempt = attemptHistory[0];
    const bestScore = Math.max(...attemptHistory.map((attempt) => attempt.score));
    const averageScore = Math.round(
      attemptHistory.reduce((total, attempt) => total + attempt.score, 0) / attemptHistory.length,
    );
    const averageReading = Math.round(
      attemptHistory.reduce((total, attempt) => total + attempt.readingPercent, 0) /
        attemptHistory.length,
    );
    const averageListening = Math.round(
      attemptHistory.reduce((total, attempt) => total + attempt.listeningPercent, 0) /
        attemptHistory.length,
    );
    const weakSkillCounts = attemptHistory.reduce(
      (counts, attempt) => {
        attempt.weakSkills.forEach((skill) => {
          counts[skill] += 1;
        });

        return counts;
      },
      { Reading: 0, Listening: 0 },
    );
    const skillToImprove =
      weakSkillCounts.Reading === weakSkillCounts.Listening
        ? 'Reading & Listening'
        : weakSkillCounts.Reading > weakSkillCounts.Listening
          ? 'Reading'
          : 'Listening';

    return {
      latestAttempt,
      bestScore,
      averageScore,
      averageReading,
      averageListening,
      skillToImprove,
    };
  }, [attemptHistory]);

  const reviewItems = useMemo(() => {
    if (!submitted) {
      return [];
    }

    return testQuestions.map((question, index) => {
      const selectedAnswer = answers[question.id] || 'Chưa trả lời';

      return {
        ...question,
        number: index + 1,
        selectedAnswer,
        isCorrect: selectedAnswer === question.answer,
      };
    });
  }, [answers, submitted]);

  useEffect(() => {
    if (!started || submitted) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeRemaining((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setSubmitted(true);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, submitted]);

  useEffect(() => {
    if (!submitted || !result || attemptSaved || savedAttemptRef.current) {
      return;
    }

    savedAttemptRef.current = true;
    const newAttempt = {
      id: window.crypto?.randomUUID?.() || `${Date.now()}`,
      completedAt: new Date().toLocaleString('vi-VN'),
      score: result.score,
      level: result.level,
      correct: result.correct,
      total: testQuestions.length,
      readingCorrect: result.readingCorrect,
      readingTotal: result.readingTotal,
      listeningCorrect: result.listeningCorrect,
      listeningTotal: result.listeningTotal,
      readingPercent: result.readingPercent,
      listeningPercent: result.listeningPercent,
      weakSkills: result.weakSkills,
    };

    setAttemptHistory((currentHistory) => {
      const nextHistory = [newAttempt, ...currentHistory].slice(0, 20);
      window.localStorage.setItem(RESULT_HISTORY_KEY, JSON.stringify(nextHistory));

      return nextHistory;
    });
    setAttemptSaved(true);
  }, [attemptSaved, result, submitted]);

  const handleStart = () => {
    savedAttemptRef.current = false;
    setStarted(true);
    setSubmitted(false);
    setAttemptSaved(false);
    setTimeRemaining(TEST_DURATION_SECONDS);
    setAnswers({});
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClearHistory = () => {
    setAttemptHistory([]);
    window.localStorage.removeItem(RESULT_HISTORY_KEY);
  };

  const playAudio = (text) => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const handleLessonAnswer = (questionIndex, option) => {
    setLessonAnswers((current) => ({ ...current, [questionIndex]: option }));
    setLessonChecked(false);
  };

  const handleLessonChange = (day) => {
    setSelectedLessonDay(day);
    setLessonAnswers({});
    setLessonChecked(false);
    setRecordingUrl('');
  };

  const handleLessonComplete = () => {
    if (!lessonChecked) {
      setLessonChecked(true);
      return;
    }

    const reviewItems = lessonReviewDates.map((review) => ({
      day: selectedLesson.day,
      title: selectedLesson.title,
      interval: review.label,
      dueDate: review.date,
    }));

    setLessonProgress((current) => {
      const completedDays = current.completedDays.includes(selectedLesson.day)
        ? current.completedDays
        : [...current.completedDays, selectedLesson.day].sort((a, b) => a - b);
      const reviews = [
        ...current.reviews.filter((review) => review.day !== selectedLesson.day),
        ...reviewItems,
      ];
      const nextErrorStats = { ...current.errorStats };
      lessonReport.mistakes.forEach((mistake) => {
        nextErrorStats[mistake.errorType] = (nextErrorStats[mistake.errorType] || 0) + 1;
      });
      const reports = [
        {
          day: selectedLesson.day,
          title: selectedLesson.title,
          completedAt: new Date().toLocaleString('vi-VN'),
          score: lessonReport.score,
          correct: lessonReport.correct,
          total: lessonReport.total,
          mistakes: lessonReport.mistakes.map((mistake) => ({
            number: mistake.number,
            skill: mistake.skill,
            errorType: mistake.errorType,
          })),
          recommendation: lessonReport.recommendation,
        },
        ...current.reports.filter((report) => report.day !== selectedLesson.day),
      ].slice(0, 30);
      const nextProgress = { completedDays, reviews, reports, errorStats: nextErrorStats };

      window.localStorage.setItem(LESSON_PROGRESS_KEY, JSON.stringify(nextProgress));

      return nextProgress;
    });
  };

  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    recordedChunksRef.current = [];
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    recorder.onstop = () => {
      const audioBlob = new Blob(recordedChunksRef.current, { type: 'audio/webm' });
      setRecordingUrl(URL.createObjectURL(audioBlob));
      stream.getTracks().forEach((track) => track.stop());
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">VB</span>
            <span>Vocabulary Boost</span>
          </div>
          <a className="nav-link" href="#placement-test">
            Làm test
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={16} />
              TOEIC & IELTS Vocabulary App
            </span>
            <h1>Học từ vựng tiếng Anh theo đúng trình độ và mục tiêu điểm số.</h1>
            <p>
              Một giao diện dùng tốt trên điện thoại và web, có bài test đầu vào,
              lộ trình TOEIC/IELTS rõ ràng và thẻ từ vựng theo ngữ cảnh.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#placement-test">
                Bắt đầu kiểm tra
                <ChevronRight size={18} />
              </a>
              <a className="button ghost" href="#roadmaps">
                Xem lộ trình
              </a>
            </div>
          </div>

          <div className="phone-preview" aria-label="Mobile app preview">
            <div className="phone-top" />
            <div className="phone-card active-card">
              <BookOpen size={20} />
              <div>
                <strong>Daily vocabulary</strong>
                <span>12 từ mới hôm nay</span>
              </div>
            </div>
            <div className="mini-stats">
              <div>
                <strong>84%</strong>
                <span>Accuracy</span>
              </div>
              <div>
                <strong>B1</strong>
                <span>Level</span>
              </div>
            </div>
            <div className="word-card">
              <span>IELTS</span>
              <h3>significant</h3>
              <p>đáng kể, quan trọng</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" aria-label="Core features">
        <Feature icon={<Brain />} title="EF SET style" text="Bài test 50 phút gồm Reading và Listening." />
        <Feature icon={<Target />} title="Theo mục tiêu" text="Chọn TOEIC hoặc IELTS theo band điểm mong muốn." />
        <Feature icon={<Smartphone />} title="Mobile first" text="Thiết kế responsive, sẵn sàng mở rộng thành app." />
      </section>

      <section id="placement-test" className="section test-section">
        <div className="section-heading">
          <span className="section-kicker">Phần 1</span>
          <h2>Test trình độ tiếng Anh</h2>
          <p>
            Bài practice theo định dạng EF SET 50 phút: Reading 25 phút và Listening
            25 phút, bao gồm Grammar, Vocabulary, Reading và Listening.
          </p>
        </div>

        <div className="test-layout">
          <div className="quiz-card">
            <div className="quiz-progress">
              <span>
                {started ? `Thời gian còn lại ${formatTime(timeRemaining)}` : 'Sẵn sàng làm bài'}
              </span>
              <div className="progress-track">
                <div className="progress-bar" style={{ width: `${progress}%` }} />
              </div>
              <small>
                Đã trả lời {completedCount}/{testQuestions.length} câu ({progress}%)
              </small>
            </div>

            <div className="source-note">
              <strong>Theo EF SET:</strong> EF SET Certificate là bài test online 50
              phút, kiểm tra Reading và Listening, điểm 0-100 tương ứng CEFR. Bài thật
              có tính adaptive nên số câu không cố định; bản practice này dùng 40 câu tự
              biên để mô phỏng cấu trúc, không phải đề chính thức của EF.
            </div>

            {!started ? (
              <div className="start-panel">
                <h3>Cấu trúc bài test</h3>
                <div className="test-metrics">
                  <div>
                    <strong>50 phút</strong>
                    <span>Tổng thời gian</span>
                  </div>
                  <div>
                    <strong>25 + 25</strong>
                    <span>Reading + Listening</span>
                  </div>
                  <div>
                    <strong>40 câu</strong>
                    <span>Practice trong khoảng 40-60</span>
                  </div>
                  <div>
                    <strong>0-100</strong>
                    <span>Điểm EF SET style</span>
                  </div>
                </div>
                <div className="knowledge-panel">
                  <h4>15 nhóm kiến thức được đánh giá</h4>
                  <div className="knowledge-list">
                    {knowledgeGroups.map((group) => (
                      <span key={group}>{group}</span>
                    ))}
                  </div>
                </div>
                <button className="button primary full-width" type="button" onClick={handleStart}>
                  Bắt đầu bài test 50 phút
                </button>
              </div>
            ) : (
              efSetSections.map((section) => (
                <div className="test-section-block" key={section.id}>
                  <div className="test-section-header">
                    <span>{section.minutes} phút</span>
                    <div>
                      <h3>{section.label}</h3>
                      <p>{section.description}</p>
                    </div>
                  </div>

                  {section.tasks.map((task) => (
                    <article className="task-card" key={task.title}>
                      <div className="task-heading">
                        <h4>{task.title}</h4>
                        {task.audioText ? (
                          <button
                            className="audio-button"
                            type="button"
                            onClick={() => playAudio(task.audioText)}
                          >
                            Phát audio
                          </button>
                        ) : null}
                      </div>

                      {task.passage ? <p className="passage">{task.passage}</p> : null}
                      {task.audioText ? (
                        <p className="passage muted">
                          Nhấn "Phát audio" để nghe. Nếu trình duyệt không hỗ trợ giọng đọc,
                          hãy thử Chrome/Edge hoặc làm phần Reading trước.
                        </p>
                      ) : null}

                      {task.questions.map((question) => (
                        <fieldset className="question" key={question.id}>
                          <legend>{question.prompt}</legend>
                          <div className="options">
                            {question.options.map((option) => (
                              <label
                                className={`option ${answers[question.id] === option ? 'selected' : ''}`}
                                key={option}
                              >
                                <input
                                  type="radio"
                                  name={question.id}
                                  value={option}
                                  checked={answers[question.id] === option}
                                  disabled={submitted}
                                  onChange={() => {
                                    setAnswers((current) => ({ ...current, [question.id]: option }));
                                    setSubmitted(false);
                                  }}
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </fieldset>
                      ))}
                    </article>
                  ))}
                </div>
              ))
            )}

            <button
              className="button primary full-width"
              type="button"
              onClick={handleSubmit}
              disabled={!started || submitted}
            >
              Nộp bài và xem kết quả
            </button>

            {submitted ? (
              <section className="answer-review" aria-label="Answer review">
                <div className="review-heading">
                  <div>
                    <span className="section-kicker">Review</span>
                    <h3>Chi tiết câu trả lời</h3>
                  </div>
                  <span className="review-score">
                    Sai {testQuestions.length - result.correct}/{testQuestions.length}
                  </span>
                </div>

                <div className="review-list">
                  {reviewItems.map((item) => (
                    <article
                      className={`review-item ${item.isCorrect ? 'correct' : 'incorrect'}`}
                      key={item.id}
                    >
                      <div className="review-item-heading">
                        <span>{item.sectionLabel}</span>
                        <strong>
                          Câu {item.number}. {item.taskTitle}
                        </strong>
                      </div>
                      <p>{item.prompt}</p>
                      <div className="answer-line">
                        <span>Câu trả lời của bạn:</span>
                        <strong className={item.isCorrect ? 'answer-correct' : 'answer-incorrect'}>
                          {item.selectedAnswer}
                        </strong>
                      </div>
                      <div className="answer-line">
                        <span>Đáp án đúng:</span>
                        <strong className="answer-correct">{item.answer}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="source-links" aria-label="CEFR sources">
              {cefrSources.map((source) => (
                <a href={source.url} key={source.url} rel="noreferrer" target="_blank">
                  {source.name}
                </a>
              ))}
            </div>
          </div>

          <aside className="result-card">
            <LineChart size={28} />
            <span className="result-label">Kết quả EF SET style</span>
            {submitted ? (
              <>
                <h3>
                  {result.score}/100 - {result.level}
                </h3>
                <p>
                  Đúng {result.correct}/{testQuestions.length} câu. Reading:{' '}
                  {result.readingCorrect}/{result.readingTotal}. Listening:{' '}
                  {result.listeningCorrect}/{result.listeningTotal}. {result.advice}
                </p>
                <div className="weak-skill-box">
                  <strong>Kỹ năng cần cải thiện</strong>
                  <span>{result.weakSkills.join(' & ')}</span>
                </div>
              </>
            ) : (
              <>
                <h3>{started ? formatTime(timeRemaining) : '50:00'}</h3>
                <p>
                  Làm bài trong môi trường yên tĩnh. Kết quả chỉ dùng để định hướng
                  học trong app, không thay thế chứng chỉ EF SET chính thức.
                </p>
              </>
            )}
          </aside>
        </div>

        <section className="progress-dashboard" aria-label="Learning progress dashboard">
          <div className="dashboard-heading">
            <div>
              <span className="section-kicker">Tiến độ</span>
              <h2>Bảng theo dõi kết quả</h2>
              <p>Lịch sử được lưu trên trình duyệt của bạn sau mỗi lần nộp bài.</p>
            </div>
            {attemptHistory.length > 0 ? (
              <button className="button ghost compact-button" type="button" onClick={handleClearHistory}>
                Xoá lịch sử
              </button>
            ) : null}
          </div>

          {progressStats ? (
            <>
              <div className="progress-summary">
                <div>
                  <strong>{attemptHistory.length}</strong>
                  <span>Số lần làm</span>
                </div>
                <div>
                  <strong>{progressStats.bestScore}/100</strong>
                  <span>Điểm cao nhất</span>
                </div>
                <div>
                  <strong>{progressStats.averageScore}/100</strong>
                  <span>Điểm trung bình</span>
                </div>
                <div>
                  <strong>{progressStats.skillToImprove}</strong>
                  <span>Cần cải thiện</span>
                </div>
              </div>

              <div className="skill-stat-grid">
                <div>
                  <span>Reading trung bình</span>
                  <strong>{progressStats.averageReading}%</strong>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${progressStats.averageReading}%` }} />
                  </div>
                </div>
                <div>
                  <span>Listening trung bình</span>
                  <strong>{progressStats.averageListening}%</strong>
                  <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${progressStats.averageListening}%` }} />
                  </div>
                </div>
              </div>

              <div className="history-table-wrap">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Lần làm</th>
                      <th>Điểm</th>
                      <th>CEFR</th>
                      <th>Reading</th>
                      <th>Listening</th>
                      <th>Kỹ năng yếu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attemptHistory.map((attempt, index) => (
                      <tr key={attempt.id}>
                        <td>
                          <strong>#{attemptHistory.length - index}</strong>
                          <span>{attempt.completedAt}</span>
                        </td>
                        <td>{attempt.score}/100</td>
                        <td>{attempt.level}</td>
                        <td>
                          {attempt.readingCorrect}/{attempt.readingTotal} ({attempt.readingPercent}%)
                        </td>
                        <td>
                          {attempt.listeningCorrect}/{attempt.listeningTotal} ({attempt.listeningPercent}%)
                        </td>
                        <td className="weak-cell">{attempt.weakSkills.join(' & ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="empty-dashboard">
              Chưa có dữ liệu. Hãy hoàn thành bài test đầu tiên để tạo bảng theo dõi.
            </div>
          )}
        </section>
      </section>

      <section id="foundation-course" className="section course-section">
        <div className="section-heading">
          <span className="section-kicker">Lộ trình học</span>
          <h2>{toeicFoundationCourse.title}</h2>
          <p>
            Khóa học dành cho người mất gốc, học 2 giờ/ngày trong 20 tuần để hướng
            đến TOEIC 350+ và sẵn sàng học tiếp mốc 350 {'->'} 550.
          </p>
        </div>

        <div className="course-overview">
          <div className="course-card highlight">
            <span>Mục tiêu</span>
            <h3>{toeicFoundationCourse.target}</h3>
            <p>{toeicFoundationCourse.vocabularyGoal}</p>
          </div>
          <div className="course-card">
            <span>Thời lượng</span>
            <h3>{toeicFoundationCourse.duration}</h3>
            <p>{toeicFoundationCourse.dailyMinutes}</p>
          </div>
          <div className="course-card">
            <span>Đầu ra</span>
            <h3>TOEIC 350+</h3>
            <p>Nền tảng A1-A2, làm được TOEIC cơ bản và quản lý thời gian tốt hơn.</p>
          </div>
        </div>

        <article className="daily-lesson-player">
          <div className="daily-player-header">
            <div>
              <span className="section-kicker">Học ngay hôm nay</span>
              <h3>
                Ngày {selectedLesson.day}: {selectedLesson.title}
              </h3>
              <p>{selectedLesson.focus}</p>
            </div>
            <div className="lesson-progress-pill">
              {completedLessonCount}/{foundationPracticeLessons.length} ngày hoàn thành
            </div>
          </div>

          <div className="day-picker" aria-label="Choose lesson day">
            {foundationPracticeLessons.map((lesson) => (
              <button
                className={`day-button ${
                  selectedLesson.day === lesson.day ? 'active' : ''
                } ${lessonProgress.completedDays.includes(lesson.day) ? 'done' : ''}`}
                key={lesson.day}
                type="button"
                onClick={() => handleLessonChange(lesson.day)}
              >
                {lesson.day}
              </button>
            ))}
          </div>

          <div className="progress-track lesson-progress-track">
            <div className="progress-bar" style={{ width: `${lessonCompletionPercent}%` }} />
          </div>

          <div className="practice-flow">
            {practiceFlow.map((step, index) => (
              <div className="flow-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className="lesson-practice-grid">
            <section className="practice-panel">
              <div className="panel-heading">
                <h3>1. Nghe {'->'} Nhìn</h3>
                <p>Học đúng 15 từ hôm nay: nghe trước, sau đó nhìn IPA, nghĩa và ví dụ TOEIC.</p>
              </div>
              <div className="audio-actions">
                <button
                  className="audio-button"
                  type="button"
                  onClick={() =>
                    playAudio(selectedLesson.vocabulary.map((item) => `${item[0]}. ${item[3]}`).join(' '))
                  }
                >
                  Nghe từ vựng
                </button>
                <button
                  className="audio-button"
                  type="button"
                  onClick={() => playAudio(selectedLesson.dialogue.join(' '))}
                >
                  Nghe hội thoại
                </button>
              </div>
              <div className="vocab-table">
                {selectedLesson.vocabulary.map(([word, ipa, meaning, example]) => (
                  <div className="vocab-row" key={word}>
                    <strong>{word}</strong>
                    <span>{ipa}</span>
                    <p>{meaning}</p>
                    <small>{example}</small>
                  </div>
                ))}
              </div>
            </section>

            <section className="practice-panel">
              <div className="panel-heading">
                <h3>2. Đọc to {'->'} Nói theo</h3>
                <p>Đoạn shadowing chứa ít nhất 10/15 từ mới trong phần Nghe {'->'} Nhìn.</p>
              </div>
              <div className="sentence-list">
                {selectedLesson.examples.map((sentence) => (
                  <button className="sentence-card" key={sentence} type="button" onClick={() => playAudio(sentence)}>
                    {sentence}
                  </button>
                ))}
              </div>
              <div className="shadow-box">
                <strong>Shadowing script</strong>
                {selectedLesson.shadowing.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <button
                  className="audio-button"
                  type="button"
                  onClick={() => playAudio(selectedLesson.shadowing.join(' '))}
                >
                  Nghe shadowing
                </button>
              </div>
            </section>

            <section className="practice-panel">
              <div className="panel-heading">
                <h3>3. Ghi âm</h3>
                <p>Ghi âm phần shadowing, nghe lại và tự so sánh với audio mẫu.</p>
              </div>
              <div className="recording-box">
                <button
                  className={`button ${isRecording ? 'ghost' : 'primary'}`}
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? 'Dừng ghi âm' : 'Bắt đầu ghi âm'}
                </button>
                {recordingUrl ? <audio controls src={recordingUrl}>Your browser does not support audio.</audio> : null}
              </div>
            </section>

            <section className="practice-panel">
              <div className="panel-heading">
                <h3>4. Learn + Reading</h3>
                <p>Học ngữ pháp trọng tâm và đọc đoạn ngắn trình độ A1.</p>
              </div>
              <div className="grammar-box">
                <strong>{selectedLesson.grammar[0]}</strong>
                <p>{selectedLesson.grammar[1]}</p>
              </div>
              <div className="passage">
                <strong>Reading</strong>
                <p>{selectedLesson.reading}</p>
                <button className="audio-button" type="button" onClick={() => playAudio(selectedLesson.reading)}>
                  Nghe đoạn đọc
                </button>
              </div>
            </section>

            <section className="practice-panel wide-panel">
              <div className="panel-heading">
                <h3>5. Làm bài tập + TOEIC Mini</h3>
                <p>Làm quiz nhanh, kiểm tra đáp án, sau đó bấm hoàn thành để tạo lịch ôn.</p>
              </div>
              <div className="lesson-quiz-list">
                {selectedLesson.quiz.map((question, index) => (
                  <fieldset className="question" key={question.prompt}>
                    <legend>{question.prompt}</legend>
                    <div className="options">
                      {question.options.map((option) => {
                        const isSelected = lessonAnswers[index] === option;
                        const isCorrect = question.answer === option;
                        const optionClass =
                          lessonChecked && isCorrect
                            ? 'correct-option'
                            : lessonChecked && isSelected && !isCorrect
                              ? 'incorrect-option'
                              : '';

                        return (
                          <label className={`option ${isSelected ? 'selected' : ''} ${optionClass}`} key={option}>
                            <input
                              type="radio"
                              name={`lesson-${selectedLesson.day}-${index}`}
                              checked={isSelected}
                              onChange={() => handleLessonAnswer(index, option)}
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                ))}
              </div>
              <div className="lesson-actions">
                <button className="button ghost" type="button" onClick={() => setLessonChecked(true)}>
                  Kiểm tra đáp án
                </button>
                <button className="button primary" type="button" onClick={handleLessonComplete}>
                  Hoàn thành ngày {selectedLesson.day}
                </button>
              </div>

              {lessonReport ? (
                <div className="learning-report">
                  <div className="report-header">
                    <div>
                      <span className="section-kicker">Learning Report</span>
                      <h3>Kết quả buổi học</h3>
                    </div>
                    <strong>{lessonReport.score}%</strong>
                  </div>

                  <div className="report-skill-grid">
                    {Object.entries(lessonReport.skillStats).map(([skill, stat]) => (
                      <div key={skill}>
                        <span>{skill}</span>
                        <strong>
                          {stat.correct}/{stat.total}
                        </strong>
                      </div>
                    ))}
                  </div>

                  {lessonReport.mistakes.length > 0 ? (
                    <div className="mistake-analysis">
                      <h4>Phân tích lỗi</h4>
                      {lessonReport.mistakes.map((mistake) => (
                        <article className="mistake-card" key={mistake.number}>
                          <div className="mistake-title">
                            <span>Câu {mistake.number}</span>
                            <strong>{mistake.skill}</strong>
                          </div>
                          <p>{mistake.prompt}</p>
                          <div className="answer-line">
                            <span>Bạn chọn:</span>
                            <strong className="answer-incorrect">{mistake.selectedAnswer}</strong>
                          </div>
                          <div className="answer-line">
                            <span>Đáp án:</span>
                            <strong className="answer-correct">{mistake.answer}</strong>
                          </div>
                          <div className="root-cause">
                            <strong>Nguyên nhân gốc rễ: {mistake.errorType}</strong>
                            <p>{mistake.explanation}</p>
                            <small>Ôn lại: {mistake.reviewFocus.join(', ')}</small>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="empty-dashboard">Không có câu sai. Có thể tăng nhẹ độ khó ngày mai.</div>
                  )}

                  <div className="ai-recommendation">
                    <strong>AI Recommendation</strong>
                    <p>{lessonReport.recommendation}</p>
                  </div>
                </div>
              ) : null}
            </section>

            <section className="practice-panel wide-panel">
              <div className="panel-heading">
                <h3>6. Lịch ôn cách quãng</h3>
                <p>Sau khi hoàn thành bài, app lưu lịch ôn D+1, D+3, D+7 và D+30.</p>
              </div>
              <div className="review-schedule-grid">
                {lessonReviewDates.map((review) => (
                  <div className="review-schedule-card" key={review.label}>
                    <strong>{review.label}</strong>
                    <span>{review.date}</span>
                  </div>
                ))}
              </div>
              {lessonProgress.reviews.length > 0 ? (
                <div className="saved-review-list">
                  <strong>Lịch ôn đã lưu</strong>
                  {lessonProgress.reviews.slice(0, 8).map((review) => (
                    <span key={`${review.day}-${review.interval}`}>
                      Ngày {review.day} - {review.interval}: {review.dueDate}
                    </span>
                  ))}
                </div>
              ) : null}
              {Object.keys(lessonProgress.errorStats).length > 0 ? (
                <div className="error-stats-panel">
                  <strong>Thống kê lỗi tích lũy</strong>
                  {Object.entries(lessonProgress.errorStats)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 8)
                    .map(([errorType, count]) => (
                      <div className="error-stat-row" key={errorType}>
                        <span>{errorType}</span>
                        <strong>{count} lỗi</strong>
                      </div>
                    ))}
                </div>
              ) : null}
            </section>
          </div>
        </article>

        <div className="course-grid">
          <article className="course-panel">
            <div className="panel-heading">
              <h3>Lịch học mỗi ngày</h3>
              <p>Các block có thể rút gọn để phù hợp khung 90-120 phút.</p>
            </div>
            <div className="study-plan-list">
              {dailyStudyPlan.map((item) => (
                <div className="study-plan-item" key={item.skill}>
                  <strong>{item.skill}</strong>
                  <span>{item.time}</span>
                  <p>{item.focus}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="course-panel">
            <div className="panel-heading">
              <h3>Mục tiêu theo 4 giai đoạn</h3>
              <p>Outcome dùng để đo tiến độ theo từng giai đoạn 4-8 tuần.</p>
            </div>
            <div className="outcome-list">
              {toeicFoundationCourse.outcomes.map((outcome) => (
                <div className="outcome-item" key={outcome}>
                  <CheckCircle2 size={16} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="course-panel">
          <div className="panel-heading">
            <h3>Mẫu cấu trúc mỗi bài học</h3>
            <p>Một template thống nhất để mở rộng lên TOEIC 350 {'->'} 550 và 550 {'->'} 750.</p>
          </div>
          <div className="lesson-template-grid">
            {lessonTemplate.map((item) => (
              <div className="template-step" key={item.part}>
                <strong>{item.part}</strong>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="module-list">
          {toeicFoundationCourse.modules.map((module) => (
            <article className="module-card" key={module.week}>
              <div className="module-header">
                <span>{module.week}</span>
                <div>
                  <h3>{module.theme}</h3>
                  <p>{module.goal}</p>
                </div>
              </div>
              <div className="lesson-list">
                {module.lessons.map((lesson) => (
                  <div className="lesson-row" key={lesson.day}>
                    <span>Ngày {lesson.day}</span>
                    <div>
                      <strong>{lesson.title}</strong>
                      <p>{lesson.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="course-panel data-model-panel">
          <div className="panel-heading">
            <h3>JSON/Data model để mở rộng</h3>
            <p>Các entity chính nên giữ ổn định khi thêm cấp TOEIC cao hơn.</p>
          </div>
          <div className="data-model-grid">
            {courseDataModel.map((item) => (
              <div className="data-model-item" key={item.entity}>
                <strong>{item.entity}</strong>
                <code>{item.fields}</code>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section id="roadmaps" className="section">
        <div className="section-heading">
          <span className="section-kicker">Phần 2 & 3</span>
          <h2>Lộ trình TOEIC và IELTS</h2>
          <p>Chọn mục tiêu điểm để học đúng nhóm từ vựng, ngữ cảnh và kỹ năng cần ưu tiên.</p>
        </div>

        <div className="roadmap-grid">
          <Roadmap title="TOEIC" subtitle="Từ mất gốc đến môi trường quốc tế" levels={toeicLevels} />
          <Roadmap title="IELTS" subtitle="Từ foundation đến band 9.0" levels={ieltsLevels} />
        </div>
      </section>

      <section className="section vocab-section">
        <div className="section-heading">
          <span className="section-kicker">Học mỗi ngày</span>
          <h2>Thẻ từ vựng theo ngữ cảnh</h2>
          <p>Mỗi từ có nghĩa tiếng Việt, loại bài thi và ví dụ để ghi nhớ tự nhiên hơn.</p>
        </div>

        <div className="vocab-grid">
          {featuredWords.map((item) => (
            <article className="vocab-card" key={item.word}>
              <span>{item.type}</span>
              <h3>{item.word}</h3>
              <p className="meaning">{item.meaning}</p>
              <p>{item.example}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Roadmap({ title, subtitle, levels }) {
  return (
    <article className="roadmap-card">
      <div className="roadmap-header">
        <GraduationCap size={24} />
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="level-list">
        {levels.map((item) => (
          <div className="level-item" key={item.level}>
            <div className="level-title">
              <strong>{item.level}</strong>
              <span>{item.goal}</span>
            </div>
            <p>{item.fit}</p>
            <small>
              <CheckCircle2 size={14} />
              {item.focus}
            </small>
          </div>
        ))}
      </div>
    </article>
  );
}

export default App;
