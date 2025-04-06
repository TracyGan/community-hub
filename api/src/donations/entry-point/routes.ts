import { type Application, Router } from 'express'
import * as donationController from '../domain/donation.controller'


export function defineDonationsRoutes(expressApp: Application) {
    const donationsRouter = Router()

    donationsRouter.get("/", donationController.getAllDonations)

    donationsRouter.get("/:userId", donationController.getAllDonationByUser)
    donationsRouter.get("/:userId", donationController.createDonation)
    donationsRouter.get("/", donationController.updateDonation)
    donationsRouter.get("/", donationController.deleteDonation)

    expressApp.use('/v1/donations', donationsRouter)
}
