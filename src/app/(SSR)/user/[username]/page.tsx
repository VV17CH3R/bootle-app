
import { UserElement } from "@/models/user-element";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface PageProps {
    params: { username: string },
}

async function getUser(username: string):Promise<UserElement> {
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.API_KEY}`)
    
    if(response.status === 404) notFound(); 
    
    return await response.json();
}

export async function generateMetadata({ params: { username }}: PageProps): Promise<Metadata> {

    const user = await getUser(username);

    return {
        title: ([user.first_name, user.last_name].filter(Boolean).join(" ") || user.username) + " - VV17CH3R Img APP",
    }
}

export default async function Page({ params: { username } }: PageProps) {
    
    const user = await getUser(username);

    return (
            <div>
                <h1>{user.username}</h1>
                <p>Имя: {user.first_name}</p>
                <p>Фамилия: {user.last_name}</p>
                <a href={"https://unsplash.com/" + user.username}>{`Профиль "Unsplash.com"`}</a>
            </div>
    )
};


