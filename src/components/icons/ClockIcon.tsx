import type { IconProps } from './types'

export default function ClockIcon({
    width = 20,
    height = 20,
    className = '',
    color = 'currentColor',
}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ color }}
            aria-hidden="true"
        >
            <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
            <path
                d="M10 5.75V10L13 11.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
