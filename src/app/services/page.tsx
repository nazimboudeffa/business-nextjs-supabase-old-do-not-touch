import Header from "@/components/Header"
import Link from "next/link"

const Services = function () {

    const allServices = [
        {
            name: "Affiliation",
            description:
                "Create affiliation campaings.",
            link: "/",
        },
        {
            name: "Marketing",
            description:
                "Create marketing campaings.",
            link: "/",
        },
        {
            name: "Crypto",
            description:
                "Manage your cryptos.",
            link: "/",
        },
        {
            name: "Trading",
            description:
                "Manage your trading.",
            link: "/",
        }
    ]
    
    return (
        <>
        <Header />
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {allServices.map((service, idx) => (
                <div
                    key={idx}
                    className="p-5 shadow rounded-[12px] dark:shadow-slate-900"
                >
                    <Link
                        href={service.link}
                        className="flex flex-row items-center gap-2 text-2xl font-bold tracking-tight"
                    >
                        <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
                            {service.name}
                        </div>
                    </Link>
                    <p className="ml-8 mt-2 text-muted-foreground">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
        </>
    )
}

export default Services