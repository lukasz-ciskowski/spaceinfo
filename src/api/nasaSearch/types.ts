export interface SearchResponse {
  collection: {
    items: SingleSearchItem[];
    links: Array<LinkItem>;
  };
}

export interface SingleSearchItem {
  data: Array<{
    center: string;
    date_created: string;
    description: string;
    photographer: string;
    description_508: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    secondary_creator: string;
    title: string;
  }>;
  links: Array<LinkItem>;
}

interface LinkItem {
  href: string;
  rel: string;
}
