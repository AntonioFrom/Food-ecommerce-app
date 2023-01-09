import React, { FC, PropsWithChildren } from 'react'

interface FooterLinkProps {
    href: string
}

const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({href, children}) => {
    return (

        <li>
            <a href={href}
                className='font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline'>{children}</a>
        </li>

    )
}

export default FooterLink