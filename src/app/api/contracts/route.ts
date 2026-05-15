import { NextResponse } from 'next/server'
import contracts from '@/data/contacts/contacts.json'

export async function POST() {
    return NextResponse.json({ data: contracts })
}
