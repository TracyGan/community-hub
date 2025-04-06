import * as donationValidator from './donation.validator'
import * as donationService from './donation.service'
import type { NextFunction, Request, Response } from 'express'
import { Log } from 'debug-next'

const { log } = Log()

export const createDonation = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id
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

export const getAllDonations = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        log('Retrieving all donations')
        const donations = await donationService.getAllDonations()

        res.status(200).json({ message: 'Donation created successfully', donations: donations })
    } catch (error) {
        next(error)
    }
}

export const getAllDonationByUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id 
    try {
        log(`Retrieving all donations by user with id[${req.body}]`)

        // donationValidator.validateExistingDonation(userId)
        // check if user exists?

        const donations = await donationService.getAllDonationByUser(userId)
        res.status(200).json({ message: 'Donations retrieved successfully', donations })
    } catch (error) {
        next(error)
    }
}

export const updateDonation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const donationId = req.body
        log(`Updating the donation with id[${donationId}]`)
        const payload = donationValidator.validateCreateDonation(req.body)

        if (!payload) {
            res.status(400).json({ message: 'Invalid donation payload' })
        }

        const donation = await donationService.updateDonation(donationId, payload)

        res.status(201).json({ message: 'Donation created successfully', donation: donation })
    } catch (error) {
        next(error)
    }
}

// Soft delete
export const deleteDonation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const donationId = req.body
        log(`Deleting donation with id ${donationId}`)
        const result = await donationService.deleteDonation(donationId)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}