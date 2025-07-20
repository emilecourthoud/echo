export type Tag = {
  id: number;
  name: string;
};

export type Memory = {
  id: string;
  date: Date;
  summary: string[];
  tags: string[];
};
