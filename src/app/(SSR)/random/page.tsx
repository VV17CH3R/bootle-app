import { ImgElement } from "@/models/img-element";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
    title: 'В топе - VV17CH3R Img APP',
}

export default async function Page() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=` + process.env.API_KEY, {
        next: { revalidate: 8 }
    });
    const image: ImgElement = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <div className="flex flex-col items-center">

            <Image
                src={image.urls.raw}
                width={width}
                height={height}
                alt={image.description}
                className="rounded shadow h-full min-w-full"
            />
            изображение от пользователя
            <Link className="text-6xl hover:text-blue-500" href={"https://unsplash.com/" + image.user.username}> {image.user.username}</Link>
        </div>
    )
}