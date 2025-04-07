import z from 'zod'
import { Category, DonationStatus }  from '@prisma/client';
import { prisma } from '../../prisma';

const createDonationSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category : z.enum([Category.FOOD, Category.CLOTHING, Category.FURNITURE, Category.BOOKS, Category.HOUSEHOLD]),
    location: z.string().min(1),
    time: z.string(),
    status: z.enum([DonationStatus.ACCEPTED, DonationStatus.CANCELLED, DonationStatus.PENDING, DonationStatus.RETRIEVED, DonationStatus.NEW])
})

export type TDonationPayload = z.infer<typeof createDonationSchema>

export function validateCreateDonation(payload: unknown) {
    try {
        const validated = createDonationSchema.parse(payload)
        return validated
    } catch (error) {
        console.error("Validation error when creating donation:", error)
        throw error  // This ensures the error gets handled later.
    }
}

const updateDonationSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1),
    description: z.string().min(1),
    category : z.enum([Category.FOOD, Category.CLOTHING, Category.FURNITURE, Category.BOOKS, Category.HOUSEHOLD]),
    location: z.string().min(1),
    time: z.string(),
    status: z.enum([DonationStatus.ACCEPTED, DonationStatus.CANCELLED, DonationStatus.PENDING, DonationStatus.RETRIEVED, DonationStatus.NEW]),
    donorId: z.string().uuid(),
})


export function validateUpdateDonation(payload: unknown) {
    try {
        const validated = updateDonationSchema.parse(payload)
        return validated
    } catch (error) {
        console.error("Validation error when updating donation:", error)
        throw error  // This ensures the error gets handled later.
    }
}

const donationIdSchema = z.object({
    donationId: z.string().uuid()
})

// TOOD: check if donation exists
export async function validateExistingDonation(donationId: string) {
    try {
        const donation = await prisma.donation.findUnique({
            where: {
                id: donationId
            }
        })

        if (!donation) {
            throw new Error("Donation not found")
        }

        return donation
    } catch (error) {

    }
}

export function validateDonationId(payload: unknown) {
    try {
        const {donationId} = donationIdSchema.parse(payload)
        return donationId
    } catch (error) {

    }
}

