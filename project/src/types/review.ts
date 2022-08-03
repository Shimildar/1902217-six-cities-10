import { User } from './offer';

export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: User
}

export type ReviewData = {
  comment: string
  rating: number | null
}
