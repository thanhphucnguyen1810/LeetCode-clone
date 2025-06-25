export type Problem = {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  order: number;
  videoId?: string;
};

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    videoId: "GnodscC2p-A"
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Hard",
    category: "Linked List",
    order: 2,
    videoId: "8-k1c6ehKuw"
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    videoId: "8-k1c6ehKuw"
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 4,
    videoId: ""
  },
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 5,
    videoId: ""
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    videoId: "8-k1c6ehKuw"
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    videoId: ""
  },
  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth Of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    videoId: ""
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    videoId: "8-k1c6ehKuw"
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    category: "Backtracking",
    order: 10,
    videoId: "8-k1c6ehKuw"
  },
]
