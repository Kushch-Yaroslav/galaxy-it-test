import type { Contract } from '@/types'
import { $API } from '@/http/api'

interface ContractsResponse {
    data: Contract[]
}

export default class ContractsService {
    public static async getContracts(): Promise<Contract[]> {
        const res = await $API.post<ContractsResponse>('/api/contracts')

        return res.data
    }

    public static async searchContracts(query: string): Promise<Contract[]> {
        const res = await $API.post<ContractsResponse>('/api/search', { query })

        return res.data
    }
}
