
import axiosInstance from '../utils/axios'
import { useMutation } from '@tanstack/react-query'
import type { TDonation } from '../utils/types'

const url = '/v1/donations'

type TResponse = { donation: TDonation }

export function useCreateDonation({
    onSuccess,
    onError,
}: {
    onSuccess?: (data: TResponse) => void
    onError?: () => void
} = {}) {
    const mutation = useMutation({
        mutationKey: [url, 'create-donation'],
        mutationFn: async (data: Omit<TDonation, 'id'| 'createdAt' | 'updatedAt' | 'recipientId' | 'donorId' | 'deletedAt'>) => {
            console.log('this is the payload given to the backend', data)
            const response = await axiosInstance.post<TResponse>(url, data)
            return response.data
        },
        onSuccess,
        onError,
    })

    return mutation
}

export function useUpdateDonation({
    onSuccess,
    onError,
}: {
    onSuccess?: (data: TResponse) => void
    onError?: () => void
} = {}) {
    const mutation = useMutation({
        mutationKey: [url, 'update-donation'],
        mutationFn: async (data: Omit<TDonation, "createdAt" | "updatedAt" | 'deletedAt'>) => {
            const response = await axiosInstance.put<TResponse>(url, data)
            return response.data
        },
        onSuccess,
        onError,
    })

    return mutation
}


export function useDeleteDonation({
    onSuccess,
    onError,
}: {
    onSuccess?: (data: TResponse) => void
    onError?: () => void
} = {}) {
    const mutation = useMutation({
        mutationKey: [url, 'delete-donation'],
        mutationFn: async (donationId: string) => {
            console.log(donationId)
            const response = await axiosInstance.delete<TResponse>(`${url}/${donationId}`)
            return response.data
        },
        onSuccess,
        onError,
    })

    return mutation
}

