import { Memory, Tag } from './contants';

export const TAGS: Tag[] = [
  {
    id: 1,
    name: 'Dreams',
  },
  {
    id: 2,
    name: 'Yearly goals',
  },
  {
    id: 3,
    name: 'Family',
  },
  {
    id: 4,
    name: 'Health',
  },
  {
    id: 5,
    name: 'Work',
  },
  {
    id: 6,
    name: 'Travel',
  },
  {
    id: 7,
    name: 'Education',
  },
  {
    id: 8,
    name: 'Hobbies',
  },
  {
    id: 9,
    name: 'Finance',
  },
  {
    id: 10,
    name: 'Fitness',
  },
  {
    id: 11,
    name: 'Relationships',
  },
  {
    id: 12,
    name: 'Personal Growth',
  },
  {
    id: 13,
    name: 'Spirituality',
  },
  {
    id: 14,
    name: 'Community',
  },
];

export const MEMORIES: Memory[] = [
  {
    id: '1',
    date: new Date('2024-01-15'),
    summary: ['Visited the new art gallery downtown.', 'Completed a 5k run in the park.', 'Cooked a new recipe for dinner.'],
    tags: ['1', '10', '8'],
  },
  {
    id: '2',
    date: new Date('2024-01-20'),
    summary: [
      'Had a meaningful conversation with mom about childhood memories.',
      'Started reading a book on mindfulness.',
      'Organized family photos from the holidays.',
    ],
    tags: ['3', '12', '13'],
  },
  {
    id: '3',
    date: new Date('2024-01-25'),
    summary: ['Completed quarterly financial review.', 'Set up automatic savings plan.', 'Researched investment options for retirement.'],
    tags: ['9', '2'],
  },
  {
    id: '4',
    date: new Date('2024-02-02'),
    summary: [
      'Attended team building workshop at work.',
      'Learned new project management techniques.',
      'Connected with colleagues from different departments.',
    ],
    tags: ['5', '7', '11'],
  },
  {
    id: '5',
    date: new Date('2024-02-08'),
    summary: ['Planned upcoming trip to Japan.', 'Booked flights and accommodations.', 'Started learning basic Japanese phrases.'],
    tags: ['6', '7', '1'],
  },
  {
    id: '6',
    date: new Date('2024-02-14'),
    summary: [
      "Celebrated Valentine's Day with partner.",
      'Cooked a romantic dinner together.',
      'Reflected on relationship goals for the year.',
    ],
    tags: ['11', '8', '2'],
  },
  {
    id: '7',
    date: new Date('2024-02-20'),
    summary: ['Started morning meditation routine.', 'Attended yoga class for the first time.', 'Journaled about personal growth journey.'],
    tags: ['13', '4', '12'],
  },
  {
    id: '8',
    date: new Date('2024-02-28'),
    summary: ['Volunteered at local community center.', 'Helped organize food drive.', 'Met inspiring people making a difference.'],
    tags: ['14', '12', '11'],
  },
  {
    id: '9',
    date: new Date('2024-03-05'),
    summary: ['Ran first 10k race of the year.', 'Beat personal record by 2 minutes.', 'Celebrated with healthy post-workout meal.'],
    tags: ['10', '2', '4'],
  },
  {
    id: '10',
    date: new Date('2024-03-12'),
    summary: ['Started learning guitar.', 'Practiced basic chords for an hour.', 'Watched online tutorials about music theory.'],
    tags: ['8', '7', '12'],
  },
  {
    id: '11',
    date: new Date('2024-03-18'),
    summary: ['Had deep conversation about life goals.', 'Dreamed about starting own business.', 'Sketched ideas for creative project.'],
    tags: ['1', '2', '12'],
  },
  {
    id: '12',
    date: new Date('2024-03-25'),
    summary: ['Visited childhood home with siblings.', 'Shared stories about growing up.', 'Felt grateful for family bonds.'],
    tags: ['3', '11', '13'],
  },
  {
    id: '13',
    date: new Date('2024-04-01'),
    summary: [
      'Completed online course on digital marketing.',
      'Applied new skills to work project.',
      'Received positive feedback from supervisor.',
    ],
    tags: ['7', '5', '12'],
  },
  {
    id: '14',
    date: new Date('2024-04-08'),
    summary: ['Explored new hiking trail in the mountains.', 'Took photos of beautiful landscapes.', 'Felt connected to nature.'],
    tags: ['8', '4', '13'],
  },
  {
    id: '15',
    date: new Date('2024-04-15'),
    summary: [
      'Organized financial documents for tax season.',
      'Reviewed investment portfolio performance.',
      'Planned budget for upcoming vacation.',
    ],
    tags: ['9', '6'],
  },
  {
    id: '16',
    date: new Date('2024-04-22'),
    summary: ["Attended friend's wedding ceremony.", 'Danced until late at the reception.', 'Reflected on the beauty of commitment.'],
    tags: ['11', '13', '8'],
  },
  {
    id: '17',
    date: new Date('2024-04-29'),
    summary: ['Started strength training program.', 'Learned proper form for deadlifts.', 'Set fitness goals for the summer.'],
    tags: ['10', '4', '2'],
  },
  {
    id: '18',
    date: new Date('2024-05-06'),
    summary: [
      'Visited local farmers market.',
      'Bought fresh ingredients for meal prep.',
      'Chatted with local vendors about sustainable farming.',
    ],
    tags: ['4', '14', '8'],
  },
  {
    id: '19',
    date: new Date('2024-05-13'),
    summary: [
      'Had breakthrough moment in therapy session.',
      'Understood pattern in personal relationships.',
      'Felt hopeful about future growth.',
    ],
    tags: ['12', '11', '4'],
  },
  {
    id: '20',
    date: new Date('2024-05-20'),
    summary: [
      'Completed first draft of creative writing project.',
      'Shared work with trusted friend for feedback.',
      'Felt proud of artistic accomplishment.',
    ],
    tags: ['8', '1', '12'],
  },
];
