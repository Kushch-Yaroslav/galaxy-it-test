import {StaticImageData} from "next/image";

type TestimonialCard = {
    type: 'testimonial'
    size: 'large' | 'small'
    text: string
    name: string
    company: string
    avatar?: StaticImageData
}

type StatsCard = {
    type: 'stats'
    size: 'small'
    value: string
    label: string
    background: 'left' | 'right'
}

export type Card = TestimonialCard | StatsCard