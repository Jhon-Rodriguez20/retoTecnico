import policyLinks from './copyrightSectionLinks';
import { Link } from '@mui/material';

const privatePolicyLinks = ()=> {
    return (
        <>
            {policyLinks.map((link, index) => (
                <Link key={index} to="/" className="ms-auto mx-auto mt-1 text-decoration-none privacy-links">
                    {link.text}
                </Link>
            ))}
        </>
    )
}

export default privatePolicyLinks;