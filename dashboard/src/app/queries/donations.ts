'use client'
import { queryClient } from '../providers'
import type { TDonation } from '../utils/types'
import axiosInstance from '../utils/axios'
import { useQuery } from '@tanstack/react-query'

const baseUrl = '/v1/donations'

export function useGetAllDonations() {
    const query = useQuery({
        queryKey: [baseUrl],
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
    queryClient.invalidateQueries({ queryKey: [baseUrl] })
}
