import { prisma } from "../../prisma";
import type { TDonationPayload } from "./donation.validator";
import {DonationStatus}  from '@prisma/client';

export async function createDonation(userId: string, payload: TDonationPayload) {
   try {
        const donation = await prisma.donation.create({
            data: {
                ...payload,
                time: new Date(payload.time),
                donorId: userId,
            }
        })
        console.log("Donation created:", donation)
        return donation
   } catch (error) {
        console.error("Error creating donation:", error);
   }
}


export async function updateDonation(donationId: string, payload: TDonationPayload) {
    try {
        const donation = await prisma.donation.update({
            data: {
                ...payload,
            },
            where: {
                id: donationId
            }
        })
        return donation
    } catch (error) {
        console.error("Error updating donation:", error);
    }
}

// Soft delete
export async function deleteDonation(donationId: string) {
    try {
        const deletedDonation = await prisma.donation.delete({
            where: {
                id: donationId,
            },
        })

        return deletedDonation
    } catch (error) {
        console.error("Error deleting donation:", error);
    }
}

export async function getAllDonationsNotByUser(userId: string) {
   try {
        const donations = await prisma.donation.findMany({
            where: {
                NOT: {
                    donorId: userId
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return donations
   } catch (error) {
        console.error("Error retrieving all donations:", error);
   }
}

export async function getAllDonationByUser(userId: string) {
    try {
        const donations = await prisma.donation.findMany({
            where: {
                donorId: userId
            }
        })
        return donations
    } catch (error) {
        console.error("Error retrieving donation by user:", error);
    }
}

export async function getAllDonationRetrievals(userId: string) {
    try {
        const donationsWithUsers = await prisma.donation.findMany({
            where: {
                recipientId: userId
            },
            include: {
                donor: true  
            }
        })
        return donationsWithUsers
    } catch (error) {
        console.error("Error fetching donation retrievals by user:", error);
    }
}
