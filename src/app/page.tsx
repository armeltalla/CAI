import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

const clients = [
    ['Phobia', logoPhobiaLight],
    ['Family Fund', logoFamilyFund],
    ['Unseal', logoUnseal],
    ['Mail Smirk', logoMailSmirk],
    // ['Home Work', logoHomeWork],
    // ['Green Life', logoGreenLife],
    // ['Bright Path', logoBrightPath],
    // ['North Adventures', logoNorthAdventures],
]

function Clients() {
    return (
        <div
            className="mt-24 rounded-4xl bg-neutral-950
            py-20 sm:mt-32 sm:py-32 lg:mt-56"
        >
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2
                        className="text-center font-display text-sm font-semibold
                        tracking-wider text-white sm:text-left"
                    >
                        We’ve worked with hundreds of amazing people
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800" />
                </FadeIn>
                <FadeInStagger faster>
                    <ul
                        role="list"
                        className="mt-10 grid grid-cols-2
                        gap-x-8 gap-y-10 lg:grid-cols-4"
                    >
                        {clients.map(([client, logo]) => (
                            <li key={client}>
                                <FadeIn>
                                    <Image src={logo} alt={client} unoptimized />
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
    )
}

function Services() {
    return (
        <>
            <SectionIntro
                eyebrow="Features"
                title="The opinionated, framework agnostic library that helps you deploy faster."
                className="mt-24 sm:mt-32 lg:mt-40"
            />
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Automated Optimization">
                            Automate model optimization for TensorRT for optimal
                            performance without manual effort
                        </ListItem>
                        <ListItem title="Comprehensive Documentation">
                            Clear and concise documentation to guide you through setup,
                            integration, and deployment.
                        </ListItem>
                        <ListItem title="Framework Agnostic">
                            Work with your preferred machine learning frameworks without
                            having to worry about conversion.
                        </ListItem>
                        
                        <ListItem title="Opinionated Design">
                            We take an opinionated approach for edge deployment, saving
                            you time on complexities.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )
}

export const metadata: Metadata = {
    description:
        'Miru is the model deployment infrastructure for robotics.',
}

export default async function Home() {
    return (
        <>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                {/* <FadeIn className="max-w-3</FadeIn>xl"> */}
                    <h1
                        className="font-display text-5xl font-medium tracking-tight
                        text-neutral-950 [text-wrap:balance] sm:text-7xl"
                    >
                        Model Deployment Infrastructure for Robotics
                    </h1>
                    <p className="mt-6 max-w-[56rem] text-xl text-neutral-600">
                        Combat data drift and save hours of manual work. Miru&apos;s pipeline
                        helps you automatically collect data on the edge, re-train your
                        models, and quickly deploy them back to the real world.
                    </p>
                {/* </FadeIn> */}
            </Container>
            {/* <Clients />
            <Services />
            <ContactSection /> */}
        </>
    )
}
