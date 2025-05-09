import { type Application, Router } from 'express'
import * as donationController from '../domain/donation.controller'


export function defineDonationsRoutes(expressApp: Application) {
    const donationsRouter = Router()

    donationsRouter.get("/", donationController.getAllDonationsNotByUser)

    donationsRouter.get("/:userId", donationController.getAllDonationByUser)
    donationsRouter.get("/retrievals/:userId", donationController.getAllDonationRetrievals)

    donationsRouter.post("/", donationController.createDonation)
    donationsRouter.put("/", donationController.updateDonation)
    donationsRouter.delete("/:donationId", donationController.deleteDonation)

    expressApp.use('/v1/donations', donationsRouter)
}
