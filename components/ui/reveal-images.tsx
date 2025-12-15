import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
    const container = "absolute right-8 -top-1 z-40 h-20 w-16";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

    return (
        <div className="group relative h-fit w-fit overflow-visible py-8">
            <h1 className="text-7xl font-black text-foreground transition-all duration-500 group-hover:opacity-40">
                {text}
            </h1>
            <div className={container}>
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>
            <div
                className={cn(
                    container,
                    "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "duration-200")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

function RevealImageList() {
    const items: ShowImageListItemProps[] = [
        {
            text: "Website",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&auto=format&fit=crop&q=60",
                    alt: "Website 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=60",
                    alt: "Website 2",
                },
            ],
        },
        {
            text: "Mobile App",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&auto=format&fit=crop&q=60",
                    alt: "Mobile App 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&auto=format&fit=crop&q=60",
                    alt: "Mobile App 2",
                },
            ],
        },
        {
            text: "Web App",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=60",
                    alt: "Web App 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=200&auto=format&fit=crop&q=60",
                    alt: "Web App 2",
                },
            ],
        },
        {
            text: "E-Commerce",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&auto=format&fit=crop&q=60",
                    alt: "E-Commerce 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&auto=format&fit=crop&q=60",
                    alt: "E-Commerce 2",
                },
            ],
        },
        {
            text: "Brand Identity",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60",
                    alt: "Brand Identity 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60",
                    alt: "Brand Identity 2",
                },
            ],
        },
        {
            text: "3D & Animation",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=60",
                    alt: "3D Animation 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&auto=format&fit=crop&q=60",
                    alt: "3D Animation 2",
                },
            ],
        },
        {
            text: "Social Media Marketing",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&auto=format&fit=crop&q=60",
                    alt: "Social Media 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=200&auto=format&fit=crop&q=60",
                    alt: "Social Media 2",
                },
            ],
        },
        {
            text: "Brand Strategy & Consulting",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&auto=format&fit=crop&q=60",
                    alt: "Strategy 1",
                },
                {
                    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&auto=format&fit=crop&q=60",
                    alt: "Strategy 2",
                },
            ],
        },
    ];
    return (
        <div className="flex flex-col gap-1 rounded-sm px-8 py-4">
            <h3 className="text-sm font-black uppercase text-muted-foreground mb-4">Our services</h3>
            {items.map((item, index) => (
                <RevealImageListItem key={index} text={item.text} images={item.images} />
            ))}
        </div>
    );
}

export { RevealImageList };
