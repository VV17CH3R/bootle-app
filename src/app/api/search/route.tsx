import { UnsplashSearchResponse } from "@/models/img-element";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if(!query) {
        return NextResponse.json({ error: "Введите запрос."}, { status: 400 })
    }

    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.API_KEY}`);

    const { results }: UnsplashSearchResponse = await response.json();

    return NextResponse.json(results);
}

