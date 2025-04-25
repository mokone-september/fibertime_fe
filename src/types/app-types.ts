// Define app-specific types here

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppState {
  isAuthenticated: boolean;
  user?: User;
}