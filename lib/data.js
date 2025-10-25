// This file holds all your static data, just like in your original script tag.
// Later, you can replace this with calls to a real database like Firebase.

export const eventsData = [
  { id: 1, city: 'Mumbai', name: 'Mumbai Mayhem', date: '2025-10-25', category: 'solo', price: 120, venue: 'Jio World Centre', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, city: 'Delhi', name: 'Capital Punishment', date: '2025-11-15', category: 'team', price: 220, venue: 'JLN Stadium', image: 'https://images.unsplash.com/photo-1557090495-246a402d825c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, city: 'Bangalore', name: 'Silicon Valley Slam', date: '2025-12-06', category: 'elite', price: 150, venue: 'Kanteerava Stadium', image: 'https://images.unsplash.com/photo-1596238295802-4752b36a8779?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, city: 'Pune', name: 'Deccan Dominance', date: '2026-01-17', category: 'solo', price: 120, venue: 'Balewadi Stadium', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e93e0?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, city: 'Hyderabad', name: 'Nizam\'s Challenge', date: '2026-02-07', category: 'team', price: 220, venue: 'Gachibowli Stadium', image: 'https://images.unsplash.com/photo-1592478411213-3a7b97355181?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, city: 'Mumbai', name: 'Mumbai Mayhem II', date: '2026-03-21', category: 'elite', price: 150, venue: 'Jio World Centre', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export const pastEventsData = [
  {
    id: 1,
    name: "CWC Chennai Conquest 2024",
    date: "August 15, 2024",
    report: "Over 2,000 athletes battled the humidity and a challenging course. The event was a massive success, with record-breaking times in the Elite division.",
    leaderboard: [
      { rank: 1, name: "Arjun Verma", time: "58:34" },
      { rank: 2, name: "Priya Singh", time: "1:02:11" },
      { rank: 3, name: "Rohan Desai", time: "1:03:56" },
    ],
    gallery: [
      'https://placehold.co/400x300/1a1a1a/f5f5f5?text=Gallery+1',
      'https://placehold.co/400x300/1a1a1a/f5f5f5?text=Gallery+2',
      'https://placehold.co/400x300/1a1a1a/f5f5f5?text=Gallery+3',
    ]
  },
  {
    id: 2,
    name: "CWC Goa Monsoon Race 2024",
    date: "June 22, 2024",
    report: "A muddy, gritty race that tested every athlete's resolve. The team division saw fierce competition, with 'Goa Grind' taking the top spot.",
    leaderboard: [
      { rank: 1, name: "Team Goa Grind", time: "55:12" },
      { rank: 2, name: "Mumbai Muscle", time: "56:45" },
      { rank: 3, name: "Bangalore Beasts", time: "57:01" },
    ],
    gallery: [
      'https://placehold.co/400x300/1a1a1a/f5f5f5?text=Gallery+4',
      'https://placehold.co/400x300/1a1a1a/f5f5f5?text=Gallery+5',
    ]
  }
];

export const faqs = [
  { q: "What is the CWC race format?", a: "The format is 8 x 1km runs. After each 1km run, you complete one functional workout station. This repeats 8 times." },
  { q: "Can I register as a team?", a: "Yes! We have team divisions for pairs. You run together and complete the workouts together, splitting the reps as you see fit." },
  { q: "What is the minimum age to participate?", a: "The minimum age to participate in a CWC event is 16 years old on the day of the event." },
  { q: "What should I bring on race day?", a: "Bring your ID, a water bottle, and appropriate athletic attire. We will provide a bag drop area for your other belongings." },
];
