import type {
    User as TUser,
    Donation as TDonation
} from '@prisma/client'

export const Category = [
    'FOOD',
    'CLOTHING',
    'FURNITURE',
    'BOOKS',
    'HOUSEHOLD'
] as const

export type TCategory = (typeof Category)[number]

export type {
    TUser,
    TDonation
}

