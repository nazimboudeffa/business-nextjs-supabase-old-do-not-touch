import Link from "next/link"
import { CheckCircle2, Coffee, Heart, CircleDollarSign } from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/Header"

export default function PricingPage() {
    const pricingPlans = [
        {
            name: "Free",
            price: "$0",
            href: "/auth/sign-up",
            subtitle: "enjoy basic features",
            highlight: false,
            callToAction: "Get Started",
            features: [
                "Free access to most of the services",
            ],
        },
        {
            name: "Premium",
            upcomingPrice: "$99",
            price: "$0",
            href: "/auth/sign-up",
            subtitle: "donate what you want",
            highlight: true,
            callToAction: "Get Started",
            features: [
                "Access to premium services and features",
                "Support the development",
            ],
        },
    ]

    return (
        <>
        <Header />
            <div className="mt-10 flex flex-col items-center gap-10 text-center">
                <h1
                    className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ${fontHeading.variable}`}
                >
                    Donate what you want.
                </h1>
                <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    Start for free and get premium access with your donations.
                </p>
            </div>
            <div className="mt-10 flex flex-row flex-wrap gap-5 px-20 justify-center">
                {pricingPlans.map((p, idx) => (
                    <div
                        className={`shadow dark:border dark:border-slate-800 rounded-3xl flex flex-col items-center p-5 min-w-[350px] ${p.highlight && "shadow-lg"}`}
                        key={idx}
                    >
                        <div className="text-sm flex flex-row gap-2 items-center">
                            {p.name.toLowerCase() == "premium" ? (
                                <CircleDollarSign className="w-5 h-5 text-red-500 dark:text-red-700" />
                            ) : (
                                <Coffee className="w-5 h-5 text-green-500 dark:text-green-700" />
                            )}
                            {p.name}
                        </div>
                        <div className="mt-5 text-3xl font-bold tracking-tight flex flex-row gap-2">
                            {p.upcomingPrice && (
                                <span className="line-through text-muted-foreground">
                                    {p.upcomingPrice}
                                </span>
                            )}
                            <span>{p.price}</span>
                        </div>
                        {p.subtitle && (
                            <div className="mt-2 text-muted-foreground">
                                {p.subtitle}
                            </div>
                        )}
                        <div className="mt-5 w-full">
                            <Link
                                href={p.href}
                                className={`${buttonVariants({
                                    variant: "default",
                                })} w-full`}
                            >
                                {p.callToAction}
                            </Link>
                        </div>
                        {p.features.length > 0 && (
                            <div className="mt-5 w-full text-sm flex flex-col gap-2">
                                {p.features.map((f, idx) => (
                                    <div key="idx">
                                    <div className="flex flex-row gap-2 items-center">
                                        {f.startsWith("Support") ? (
                                            <Heart className="text-red-500 dark:text-red-700 w-5 h-5" />
                                        ) : (
                                            <CheckCircle2 className="text-green-400 dark:text-green-800 w-5 h-5" />
                                        )}
                                        <span>{f}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-10 text-center">
                <h1
                    className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ${fontHeading.variable}`}
                >
                    Donation methods and rules.
                </h1>
                <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    Actually you can donate with <Link href="https://fr.tipeee.com/nazimboudeffa"><u>Tipeee</u></Link>, Paypal, BuyMeACoffee, Ko-fi, DogeCoin.
                </p>
                <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    You have to notice that donations are not refundable and the service can stop at anytime.
                </p>
                <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                    I am free you are free and we love free softwares. 
                </p>
            </div>
        </>
    )
}