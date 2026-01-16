// NASA EONET API Types
export interface EventGeometry {
  date: string;
  type: string;
  coordinates: [number, number]; // [lng, lat]
}

export interface EventCategory {
  id: number;
  title: string;
}

export interface NaturalEvent {
  id: string;
  title: string;
  description: string | null;
  link: string;
  categories: EventCategory[];
  geometries: EventGeometry[];
}

export interface LocationInfo {
  id: string;
  title: string;
}
