import { prisma } from "../../prisma";
import type { TDonationPayload } from "./donation.validator";
import {DonationStatus}  from '@prisma/client';

export async function createDonation(userId: string, payload: TDonationPayload) {
   try {
        const donation = await prisma.donation.create({
            data: {
                ...payload,
                donorId: userId,
                status: DonationStatus.PENDING,
                updatedAt: new Date()
            }
        })

        return donation
   } catch (error) {

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

    }
}

// Soft delete
export async function deleteDonation(donationId: string) {
    try {
        const deletedDonation = await prisma.donation.update({
            where: {
                id: donationId,
            },
            data: {deletedAt: new Date()}
        })
    
        return deletedDonation
    } catch (error) {

    }
}

export async function getAllDonations() {
   try {
        const donations = await prisma.donation.findMany({
            where: {
                deletedAt: null
            }
        })

        return donations
   } catch (error) {

   }
}

export async function getAllDonationByUser(userId: string) {
    try {
        const donations = await prisma.donation.findMany({
            where: {
                deletedAt: null,
                donorId: userId
            }
        })

        return donations
    } catch (error) {

    }
}
