export interface User {
  _id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Exercise {
  _id: string;
  user: User;
  description: string;
  duration: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
