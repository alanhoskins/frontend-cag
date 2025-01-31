export type StageRole = 'On-Stage' | 'Off-Stage';

export type ProductionEquity = 'Union' | 'Non-Union';

export type ProductionType = 'Musical' | 'Play' | 'Other';

export type ProductionStatus =
  | 'Pre-Production'
  | 'Casting'
  | 'Casting Complete'
  | 'Rehearsal'
  | 'Now Playing'
  | 'Complete';

export type RoleStatus = 'Open' | 'Closed';

export type EnumType = { [s: string]: string };

export type StringArrayKeyValues<T> = {
  [K in keyof T]: T[K] extends string[] ? { key: K; value: T[K] } : never;
}[keyof T];
