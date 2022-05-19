import { Country } from './country';
import { Representative } from './representative';

export interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  activity: number;
  representative: Representative;
}
