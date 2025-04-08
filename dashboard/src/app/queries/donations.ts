'use client'
import { queryClient } from '../providers'
import type { TDonation, TDonationWithDonor } from '../utils/types'
import axiosInstance from '../utils/axios'
import { useQuery } from '@tanstack/react-query'

const baseUrl = '/v1/donations'


// GET request to retrieve all donations not by the user
export function useGetAllDonationsNotByUser() {
    const query = useQuery({
        queryKey: [baseUrl, 'not-user'],
        queryFn: async () => {
            const response = await axiosInstance.get<{
                donations: TDonation[];
            }>(`${baseUrl}`)
            return response.data.donations
        },
    })

    return query
}


export const invalidateGetAllDonationsNotByUser = () => {
    queryClient.invalidateQueries({ queryKey: [baseUrl, 'not-user'] })
}

// GET request to retrieve all donations created by the user
export function useGetAllDonations() {
    const query = useQuery({
        queryKey: [baseUrl, 'user'],
        queryFn: async () => {
            const userId = 'e58c53ed-8a9b-4c77-b6ac-5cfd10498d94' // hardcode for now
            const response = await axiosInstance.get<{
                donations: TDonation[];
            }>(`${baseUrl}/${userId}`)
            return response.data.donations
        },
    })

    return query
}

export const invalidateGetAllDonations = () => {
    queryClient.invalidateQueries({ queryKey: [baseUrl, 'user'] })
}

// GET request to retrieve all donations where recipient is the user
export function useGetAllUserDonationRetrievals() {
    const query = useQuery({
        queryKey: [baseUrl, 'recipient'],
        queryFn: async () => {
            const userId = 'e58c53ed-8a9b-4c77-b6ac-5cfd10498d94' // hardcode for now
            const response = await axiosInstance.get<{
                donationsWithUsers: TDonationWithDonor[];
            }>(`${baseUrl}/retrievals/${userId}`)
            return response.data.donationsWithUsers
        },
    })

    return query
}

export const invalidateGetAllUserDonationRetrievals = () => {
    queryClient.invalidateQueries({ queryKey: [baseUrl, 'recipient'] })
}

