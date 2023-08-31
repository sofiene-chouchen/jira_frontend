export const IssueType = {
  TASK: 'TASK',
  BUG: 'BUG',
  STORY: 'STORY',
};

export const IssueStatus = {
  BACKLOG: 'BACKLOG',
  SELECTED: 'SELECTED',
  INPROGRESS: 'INPROGRESS',
  DONE: 'DONE',
};

export const IssuePriority = {
  HIGHEST: '4',
  HIGH: '3',
  MEDIUM: '2',
  LOW: '1',
  LOWEST: '0',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: 'task',
  [IssueType.BUG]: 'bug',
  [IssueType.STORY]: 'story',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: 'Backlog',
  [IssueStatus.SELECTED]: 'Selected for development',
  [IssueStatus.INPROGRESS]: 'In progress',
  [IssueStatus.DONE]: 'Done',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'highest',
  [IssuePriority.HIGH]: 'high',
  [IssuePriority.MEDIUM]: 'medium',
  [IssuePriority.LOW]: 'low',
  [IssuePriority.LOWEST]: 'lowest',
};
