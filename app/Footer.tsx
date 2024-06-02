import React from 'react';

function Footer(props) {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; {new Date().getFullYear()} {new Date().getFullYear()}
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with React and Next.js, Typescript, Tailwind CSS, Framer Motion, React Email and Resend.
            </p>
        </footer>
    );
}

export default Footer;