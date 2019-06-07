export enum CurrentPage {
  FIRST = 'first',
  SECOND = 'second',
  TV_CHANNELS = 'tv-channels'
}

export interface TvChannelsFilter {
  label: string;
  id: string;
}

export enum TvChannelsOrder {
  DEFAULT = '',
  ASC = 'asc',
  DESC = 'desc'
}
