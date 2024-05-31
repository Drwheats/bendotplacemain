import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text} from '@react-email/components'
import { Tailwind} from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    emailSender: string
}

export default function ContactFormEmail({
    message, emailSender
}: ContactFormEmailProps) {
    return ( <Html>
            <Head>
                <Preview>
                    New Message from your portfolio site
                </Preview>
                <Tailwind>
                    <body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">You received the following message from the contact form:

                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is : {emailSender}</Text>
                        </Section>
                    </Container>
                    </body>
                </Tailwind>
            </Head>

        </Html>
    )
}