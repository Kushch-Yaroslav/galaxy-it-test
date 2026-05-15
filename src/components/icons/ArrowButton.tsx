import type {IconProps} from './types'

export default function ArrowButton({
                                        width = 110,
                                        height = 110,
                                        className = '',
                                        color = 'currentColor',
                                    }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{color}}
        >
            <circle cx="55" cy="55" r="27.5" fill="url(#paint0_linear_0_897)"/>
            <path
                d="M59.0568 45.9366C58.3972 45.6919 57.7749 46.277 57.977 46.9525L58.0302 47.1227L61.7986 50.9071L65.5697 54.6888L53.9879 54.6914C43.2678 54.6941 42.4008 54.6994 42.2599 54.7818C41.6987 55.1089 41.6987 55.8908 42.2599 56.2179C42.4008 56.3004 43.2678 56.3057 53.9879 56.3083L65.5697 56.311L61.7986 60.0927L58.0302 63.877L57.977 64.0473C57.8467 64.4807 58.0834 64.9568 58.4956 65.0871C58.6605 65.1403 58.9291 65.1217 59.0913 65.0499C59.2243 64.9913 59.7455 64.4754 63.7719 60.4384L68.3009 55.8935L68.3514 55.6834C68.3887 55.5238 68.3833 55.4174 68.3328 55.2552L68.2583 55.0371L63.7373 50.5161C59.4051 46.1839 59.2057 45.9898 59.0568 45.9366Z"
                fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_0_897" x1="59.1573" y1="114.908" x2="-62.346" y2="-3.75281"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0935FE"/>
                    <stop offset="1" stop-color="#98EEFF"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
