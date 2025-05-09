import * as donationValidator from './donation.validator'
import * as donationService from './donation.service'
import type { NextFunction, Request, Response } from 'express'
import { Log } from 'debug-next'

const { log } = Log()

export const createDonation = async (req: Request, res: Response, next: NextFunction) => {
    const userId = "e58c53ed-8a9b-4c77-b6ac-5cfd10498d94"
    try {
        log('Creating a donation with payload', req.body)
        const payload = donationValidator.validateCreateDonation(req.body)

        if (!payload) {
            res.status(400).json({ message: 'Invalid donation payload' })
        }

        const donation = await donationService.createDonation(userId, payload)

        res.status(201).json({ message: 'Donation created successfully', donation: donation })
    } catch (error) {
        next(error)
    }
}

export const getAllDonationsNotByUser = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const userId = "e58c53ed-8a9b-4c77-b6ac-5cfd10498d94"
        log('Retrieving all donations not by the user')
        const donations = await donationService.getAllDonationsNotByUser(userId)

        res.status(200).json({ message: 'All donations are retrieved successfully', donations: donations })
    } catch (error) {
        next(error)
    }
}

export const getAllDonationByUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params
    try {
        console.log(`Retrieving all donations by user with id[${userId}]`)

        const donations = await donationService.getAllDonationByUser(userId)
        res.status(200).json({ message: 'All donations by user are retrieved successfully', donations })
    } catch (error) {
        next(error)
    }
}

export const getAllDonationRetrievals = async (req: Request, res: Response, next: NextFunction) => {
    const { userId }  = req.params
    try {
        console.log(`Retrieving all donations retrievals by user with id[${userId}]`)

        const donationsWithUsers = await donationService.getAllDonationRetrievals(userId)
        res.status(200).json({ message: 'All donations retrievals by user are fetched successfully', donationsWithUsers })
    } catch (error) {
        next(error)
    }
}

export const updateDonation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const donationId = req.body.id
        log(`Updating the donation with id[${donationId}]`)
        const payload = donationValidator.validateUpdateDonation(req.body)

        if (!payload) {
            res.status(400).json({ message: 'Invalid donation payload' })
        }

        const donation = await donationService.updateDonation(donationId, payload)

        res.status(201).json({ message: 'Donation updated successfully', donation: donation })
    } catch (error) {
        next(error)
    }
}

// Hard delete
export const deleteDonation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {donationId} = req.params
        console.log(`Deleting donation with id ${donationId}`)

        const donation = await donationService.deleteDonation(donationId)
        res.status(200).json({ message: 'Donation deleted successfully', donation: donation })
    } catch (error) {
        next(error)
    }
}