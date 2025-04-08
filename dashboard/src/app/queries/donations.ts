'use client'
import { queryClient } from '../providers'
import type { TDonation } from '../utils/types'
import axiosInstance from '../utils/axios'
import { useQuery } from '@tanstack/react-query'

const baseUrl = '/v1/donations'


// GET request to retrieve all donations not by the user
export function useGetAllDonationsNotByUser() {
    const query = useQuery({
        queryKey: [baseUrl, 'all'],
        queryFn: async () => {
            const response = await axiosInstance.get<{
                donations: TDonation[];
            }>(`${baseUrl}`)
            return response.data.donations
        },
    })

    return query
}


export const invalidateGetAllDonations = () => {
    queryClient.invalidateQueries({ queryKey: [baseUrl, 'all'] })
}

// GET request to retrieve all donations by the user
export function useGetAllUserDonations() {
    const query = useQuery({
        queryKey: [baseUrl],
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

export const invalidateGetAllUserDonations = () => {
    queryClient.invalidateQueries({ queryKey: [baseUrl] })
}

