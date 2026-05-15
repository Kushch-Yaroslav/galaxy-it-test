import peterAvatar from "../../../public/img/people/Peter.png";
import carolAvatar from "../../../public/img/people/Carol.png";
import marthaAvatar from "../../../public/img/people/Martha.png";
import cookAvatar from "../../../public/img/people/Cook.png";
import {Card} from "@/data/people-love-us/peopleLoveUs.types";

export const cards: Card[] = [
    {
        type: 'testimonial',
        size: 'large',
        text: 'I was impressed by how simple and intuitive the whole process was. Everything worked smoothly, and I felt supported at every step.',
        name: 'Peter Kenvod',
        company: 'Amazon',
        avatar: peterAvatar,
    },
    {
        type: 'testimonial',
        size: 'small',
        text: 'Finally, a service I can actually trust. Clear communication, fast responses, and the result was exactly what I needed.',
        name: 'Carol M.',
        company: 'Microsoft Inc.',
        avatar: carolAvatar,
    },
    {
        type: 'stats',
        size: 'small',
        value: '85%',
        label: 'Hire Rate',
        background: 'right',
    },
    {
        type: 'stats',
        size: 'small',
        value: '10,000+',
        label: 'Successful contracts',
        background: 'left',
    },
    {
        type: 'testimonial',
        size: 'small',
        text: 'I had a great experience. The onboarding was fast, and I appreciated the extra focus on security and trust.',
        name: 'Martha',
        company: 'Unicell Corporation',
        avatar: marthaAvatar,
    },
    {
        type: 'testimonial',
        size: 'large',
        text: 'Using this platform saved me so much time and effort. I didn’t have to worry about misunderstandings—the process was transparent and easy to follow.',
        name: 'Timothy Donald Cook',
        company: 'Apple',
        avatar: cookAvatar,
    },
]