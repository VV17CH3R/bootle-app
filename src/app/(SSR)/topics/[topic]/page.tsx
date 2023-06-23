import { ImgElement } from "@/models/img-element";
import Image from "next/image";
import styles from "./TopicPage.module.css";
import { Metadata } from "next";

const revalidate = 0;

interface PageProps {
    params: { topic: string },
    // searchParams: { [key: string]: string | string | undefined },
}

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
    return {
        title: topic + " - VV17CH3R Img APP"
    }
}

export function generateStaticParams() {
    return ["space", "coding"].map((el) => ({ topic: el }))
};

export default async function Page({ params: { topic } }: PageProps) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.API_KEY}`)

    const images: ImgElement[] = await response.json();

    return (
        <div>


            <h1>{`Результаты по запросу: "${topic}"`}</h1>

            
                <div className=" my-4">
                {images.map((el) => {
                    return (
                    <Image
                        src={el.urls.raw}
                        width={el.width}
                        height={el.height}
                        alt={el.description}
                        key={el.urls.raw}
                        className={styles.image}
                    />
                    )
                })}
                </div>
            
        </div>
    )
}