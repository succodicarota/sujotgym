export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: string;
  rest: string;
  warmup: {
    reps: number;
    tut: string;
    rpe: number;
  };
  workingSets: Array<{
    setNumber: number;
    tut: string;
    rpe: string;
  }>;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  day: number;
  muscleGroups: string[];
  warmup: string[];
  mobility: {
    program: string;
    duration: string;
    focus: string[];
  };
  exercises: Exercise[];
  cooldown: string[];
}

export const workouts: Workout[] = [
  {
    id: 'push',
    name: 'PUSH',
    day: 1,
    muscleGroups: ['PETTO', 'SPALLE', 'BICIPITI'],
    warmup: ['tapis roulant', 'scale mobili', 'cyclette', 'ellittica', 'plank statico'],
    mobility: {
      program: 'MOBILITA\' UPPER',
      duration: '5-10-20 minuti',
      focus: ['spalle', 'scapole', 'gomito', 'polsi']
    },
    exercises: [
      {
        id: 'push-1',
        name: 'POWER SMITH MACHINE DUAL SYSTEM PANCA 40°',
        muscleGroup: 'PETTO',
        sets: 2,
        reps: '7-10',
        rest: '2-3m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '3"', rpe: '@8.5' },
          { setNumber: 2, tut: '3"', rpe: '@8-7.5' }
        ]
      },
      {
        id: 'push-2',
        name: 'SUPER VERTICAL MULTI PRESS',
        muscleGroup: 'PETTO',
        sets: 2,
        reps: '6-8',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'push-3',
        name: 'SUPER UPPER CHEST FLIGHT MACHINE',
        muscleGroup: 'PETTO',
        sets: 2,
        reps: '8-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7' }
        ]
      },
      {
        id: 'push-4',
        name: 'PULLOVER MACHINE',
        muscleGroup: 'PETTO',
        sets: 1,
        reps: '7-10',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' }
        ]
      },
      {
        id: 'push-5',
        name: 'TIRATE AL MENTO TRAZYBAR',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '8-12',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'push-6',
        name: 'ALZATE LATERALI MANUBRI SEDUTO',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '8-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'push-7',
        name: 'ALZATA FRONTALE SINGOLA CAVO REGOLABILE CAVIGLIERA',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '8-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'push-8',
        name: 'CURLING MACHINE PRESA SUPINA',
        muscleGroup: 'BICIPITI',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7-7.5' }
        ]
      },
      {
        id: 'push-9',
        name: 'CURL MARTELLO MANUBRI PANCA SCOTT',
        muscleGroup: 'BICIPITI',
        sets: 2,
        reps: '6-9',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7-7.5' }
        ]
      }
    ],
    cooldown: ['Stretching leggero', 'cardio leggero 5 minuti']
  },
  {
    id: 'pull',
    name: 'PULL',
    day: 2,
    muscleGroups: ['G.DORSALE', 'TRAPEZIO', 'TRICIPITI', 'ADDOME'],
    warmup: ['tapis roulant', 'scale mobili', 'cyclette', 'ellittica', 'plank statico'],
    mobility: {
      program: 'RINFORZO POSTURALE',
      duration: '5-10-20 minuti',
      focus: ['spalle', 'scapole', 'gomito', 'polsi']
    },
    exercises: [
      {
        id: 'pull-1',
        name: 'T-BAR ROW PRESA PRONA',
        muscleGroup: 'DORSALI',
        sets: 2,
        reps: '6-9',
        rest: '2-2.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '3"', rpe: '@8.5-9' },
          { setNumber: 2, tut: '3"', rpe: '@8-8.5' }
        ]
      },
      {
        id: 'pull-2',
        name: 'SUPER LAT MACHINE CONVERGENT SINGOLA PRESA NEUTRA',
        muscleGroup: 'DORSALI',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'pull-3',
        name: 'ROWING MACHINE SINGOLA PRESA PRONA',
        muscleGroup: 'DORSALI',
        sets: 2,
        reps: '6-8',
        rest: '2-2.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'pull-4',
        name: 'PULLEY TIRATA ORIZZONTALE TRAZYBAR',
        muscleGroup: 'TRAPEZIO',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'pull-5',
        name: 'SHRUG MACHINE',
        muscleGroup: 'TRAPEZIO',
        sets: 2,
        reps: '6-9',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5-9' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8' }
        ]
      },
      {
        id: 'pull-6',
        name: 'FRENCH PRESS PANCA 20',
        muscleGroup: 'TRICIPITI',
        sets: 1,
        reps: '8-12',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      },
      {
        id: 'pull-7',
        name: 'SKULL CRUSHER TRAZYBAR',
        muscleGroup: 'TRICIPITI',
        sets: 2,
        reps: '8-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'pull-8',
        name: 'PUSH DOWN DOPPIA CORDA',
        muscleGroup: 'TRICIPITI',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'pull-9',
        name: 'CRUNCH MACHINE',
        muscleGroup: 'ADDOME',
        sets: 2,
        reps: '10-15',
        rest: '1.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      }
    ],
    cooldown: ['Stretching leggero', 'cardio leggero 5 minuti']
  },
  {
    id: 'lower',
    name: 'LOWER',
    day: 3,
    muscleGroups: ['QUADRICIPITI', 'FEMORALI', 'POLPACCI', 'DELT.POST', 'ADDOME'],
    warmup: ['tapis roulant', 'scale mobili', 'cyclette', 'ellittica', 'plank statico'],
    mobility: {
      program: 'MOBILITA LOWER',
      duration: '5-10-20 minuti',
      focus: ['caviglie', 'ginocchia', 'anca', 'femori']
    },
    exercises: [
      {
        id: 'lower-1',
        name: 'CALF HORIZONTAL ADJUSTABLE LEG PRESS',
        muscleGroup: 'POLPACCI',
        sets: 2,
        reps: '7-10',
        rest: '1.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '3"', rpe: '@8.5-9' },
          { setNumber: 2, tut: '3"', rpe: '@8' }
        ]
      },
      {
        id: 'lower-2',
        name: 'ADDUZIONI DUAL ADDUCTOR-ABDUCTOR MACHINE BUSTO ESTESO',
        muscleGroup: 'ADDUTTORI',
        sets: 1,
        reps: '8-12',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' }
        ]
      },
      {
        id: 'lower-3',
        name: 'SUPER HACK SQUAT',
        muscleGroup: 'QUADRICIPITI',
        sets: 2,
        reps: '7-9',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'lower-4',
        name: 'SUPER LEG EXT. SINGOLA',
        muscleGroup: 'QUADRICIPITI',
        sets: 2,
        reps: '7-10',
        rest: '2-2.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5-9' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5-8' }
        ]
      },
      {
        id: 'lower-5',
        name: 'NORDIC CURL REVERSE + SUPPORTO',
        muscleGroup: 'QUADRICIPITI',
        sets: 2,
        reps: '7-10',
        rest: '2-2.5m',
        warmup: { reps: 0, tut: '', rpe: 0 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@NOPESO' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@NOPESO' }
        ],
        notes: 'Esercizio a corpo libero'
      },
      {
        id: 'lower-6',
        name: 'KNEELING LEG CURL',
        muscleGroup: 'FEMORALI',
        sets: 2,
        reps: '7-9',
        rest: '2-2.5m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7-7.5' }
        ]
      },
      {
        id: 'lower-7',
        name: 'RDL MANUBRI',
        muscleGroup: 'FEMORALI',
        sets: 1,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' }
        ]
      },
      {
        id: 'lower-8',
        name: 'BACK DELTOID MACHINE',
        muscleGroup: 'DELT.POST.',
        sets: 2,
        reps: '8-10',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'lower-9',
        name: 'CROCI INVERSE CAVI ALTI',
        muscleGroup: 'DELT.POST.',
        sets: 1,
        reps: '8-10',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      },
      {
        id: 'lower-10',
        name: 'CRUNCH MACHINE',
        muscleGroup: 'ADDOME',
        sets: 2,
        reps: '10-15',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      }
    ],
    cooldown: ['Stretching leggero', 'cardio leggero 5 minuti']
  },
  {
    id: 'upper',
    name: 'UPPER',
    day: 4,
    muscleGroups: ['PETTO', 'SPALLE', 'G.DORSALE', 'TRAPEZIO', 'TRICIPITI', 'BICIPITI'],
    warmup: ['tapis roulant', 'scale mobili', 'cyclette', 'ellittica', 'plank statico'],
    mobility: {
      program: 'MOBILITA UPPER',
      duration: '5-10-20 minuti',
      focus: ['spalle', 'scapole', 'gomito', 'polsi']
    },
    exercises: [
      {
        id: 'upper-1',
        name: 'DELTOID PRESS CIRCULAR PRESA NEUTRA',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '3"', rpe: '@8.5' },
          { setNumber: 2, tut: '3"', rpe: '@8' }
        ]
      },
      {
        id: 'upper-2',
        name: 'ALZATE LATERALI MULTI FLIGHT MACHINE',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '8-12',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'upper-3',
        name: 'ALZATA FRONTALE SINGOLA MANUBRIO',
        muscleGroup: 'SPALLE',
        sets: 2,
        reps: '7-10',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7-7.5' }
        ]
      },
      {
        id: 'upper-4',
        name: 'PECK DECK',
        muscleGroup: 'PETTO',
        sets: 2,
        reps: '8-12',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7-7.5' }
        ]
      },
      {
        id: 'upper-5',
        name: 'CROCI IN BASSO BUSTO FLESSO MULTI FLIGHT MACHINE',
        muscleGroup: 'PETTO',
        sets: 2,
        reps: '8-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8' }
        ]
      },
      {
        id: 'upper-6',
        name: 'SUPER HIGH ROW SINGOLO PRESA NEUTRA',
        muscleGroup: 'DORSALI',
        sets: 2,
        reps: '6-9',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'upper-7',
        name: 'SUPER LOW ROW',
        muscleGroup: 'TRAPEZIO',
        sets: 2,
        reps: '6-9',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      },
      {
        id: 'upper-8',
        name: 'SUPER LAT PULLDOWN CIRCULAR PRESA PRONA',
        muscleGroup: 'TRAPEZIO',
        sets: 1,
        reps: '7-10',
        rest: '1.5-2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' }
        ]
      },
      {
        id: 'upper-9',
        name: 'CURL MANUBRI SEDUTO ALTERNATI',
        muscleGroup: 'BICIPITI',
        sets: 2,
        reps: '7-10',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8-8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@7.5' }
        ]
      },
      {
        id: 'upper-10',
        name: 'DIP PRESS',
        muscleGroup: 'TRICIPITI',
        sets: 2,
        reps: '8-12',
        rest: '2m',
        warmup: { reps: 10, tut: '1.5"', rpe: 5 },
        workingSets: [
          { setNumber: 1, tut: '2\'-3\'', rpe: '@8.5' },
          { setNumber: 2, tut: '2\'-3\'', rpe: '@8-7.5' }
        ]
      }
    ],
    cooldown: ['Stretching leggero', 'cardio leggero 5 minuti']
  }
];

export const weekSchedule = [
  { day: 1, workout: 'push', name: 'PUSH' },
  { day: 2, workout: 'pull', name: 'PULL' },
  { day: 3, workout: 'lower', name: 'LOWER' },
  { day: 4, workout: 'upper', name: 'UPPER' },
];
