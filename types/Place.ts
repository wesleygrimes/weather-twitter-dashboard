import { BoundingBox } from './BoundingBox';
export interface Place {
  id?: string;
  url?: string;
  place_type?: string;
  name?: string;
  full_name?: string;
  country_code?: string;
  country?: string;
  contained_within?: any[];
  bounding_box?: BoundingBox;
  attributes?: any;
}
