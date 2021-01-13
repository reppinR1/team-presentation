export interface TeamMembersResponse {
  data: TeamMembersResponseData[];
}

export interface TeamMembersResponseData {
  id: string;
  attributes: Attributes;
  type: string;
}

export interface MemberCards {
  first: MemberCard;
  second: MemberCard;
  third: MemberCard;
}

export interface MemberCard {
  imageUrl: ImageUrl;
  block: Block;
}

export interface ImageUrl {
  w200: string;
  w400: string;
  w1080: string;
  w1920: string;
  w2560: string;
}

interface Attributes {
  title: string;
  memberCards: MemberCards;
}

interface Block {
  title: string;
  description: string;
  link: string;
  text: string;
}
