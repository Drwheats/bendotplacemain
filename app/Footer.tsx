import React from 'react';

function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; Ben dot Place {new Date().getFullYear()}
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built with React and Next.js, Typescript, Tailwind CSS, Framer Motion, React Email and Resend.
            </p>
        </footer>
    );
}

export default Footer;