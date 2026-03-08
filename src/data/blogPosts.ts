export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
};

export const blogCategories = [
  "All",
  "Tips & Tricks",
  "User Stories",
  "Insights",
  "Features",
  "Updates"
];

export const allBlogPosts: BlogPost[] = [
  {
    title: "5 Tips for Fair Bill Splitting with Friends",
    excerpt: "Learn how to avoid awkward money situations with friends by following these simple bill-splitting etiquette tips.",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Tips & Tricks",
    slug: "tips-for-fair-bill-splitting"
  },
  {
    title: "How FLICK2SPLIT Saved My Friendship",
    excerpt: "A real story from one of our users about how our app helped preserve a friendship that was strained by money issues.",
    date: "April 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "User Stories",
    slug: "saved-my-friendship"
  },
  {
    title: "The Psychology of Money Between Friends",
    excerpt: "Explore the complex dynamics of money in friendships and why clear financial boundaries matter.",
    date: "April 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "psychology-of-money"
  },
  {
    title: "New Feature: Split by Percentage",
    excerpt: "We're excited to announce our new feature that allows you to split bills by custom percentages. Perfect for roommates with different sized rooms!",
    date: "March 22, 2023",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Features",
    slug: "split-by-percentage"
  },
  {
    title: "Restaurant Etiquette: Who Pays the Bill?",
    excerpt: "Navigate the sometimes complex social norms around paying restaurant bills in different cultures and social settings.",
    date: "March 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "restaurant-etiquette"
  },
  {
    title: "App Update: Improved OCR for Better Receipt Reading",
    excerpt: "Our latest update includes major improvements to our optical character recognition system for more accurate bill scanning.",
    date: "February 19, 2023",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Updates",
    slug: "improved-ocr"
  },
  {
    title: "How to Handle the Friend Who Never Pays You Back",
    excerpt: "We've all been there - that one friend who always 'forgets' to pay you back. Here's how to handle it without losing the friendship.",
    date: "February 5, 2023",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Tips & Tricks",
    slug: "friend-never-pays"
  },
  {
    title: "From Chaos to Clarity: My Group Vacation Expenses Story",
    excerpt: "A user shares how FLICK2SPLIT transformed their group vacation from a financial nightmare into a smooth experience.",
    date: "January 21, 2023",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "User Stories",
    slug: "vacation-expenses-story"
  },
  {
    title: "The Hidden Costs of Not Splitting Bills Properly",
    excerpt: "Explore how improper bill splitting can actually cost you money and strain relationships over time.",
    date: "January 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "hidden-costs"
  }
];
