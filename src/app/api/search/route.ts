import { NextResponse } from 'next/server'
import contracts from '@/data/contacts/contacts.json'
import type { Contract } from '@/types'

type SearchRequestBody = {
    query?: string
}

function matchesQuery(contract: Contract, normalizedQuery: string) {
    return (
        contract.title.toLowerCase().includes(normalizedQuery) ||
        contract.description.toLowerCase().includes(normalizedQuery) ||
        contract.company.toLowerCase().includes(normalizedQuery) ||
        contract.category.toLowerCase().includes(normalizedQuery)
    )
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => ({}))) as SearchRequestBody
    const query = body.query ?? ''
    const normalizedQuery = query.toLowerCase().trim()

    if (!normalizedQuery) {
        return NextResponse.json({ data: [] })
    }

    const filteredContracts = (contracts as Contract[]).filter((contract) =>
        matchesQuery(contract, normalizedQuery)
    )

    return NextResponse.json({ data: filteredContracts })
}
