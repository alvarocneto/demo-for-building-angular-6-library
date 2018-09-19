// first define an interface for our configuration
export interface TestLibConfig {
  title: string;
  teams: {
    country: string;
    trophies: number;
  }[];
  sport: string;
}