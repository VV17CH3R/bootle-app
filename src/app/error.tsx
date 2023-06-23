"use client"

import { Button } from "react-bootstrap"

interface ErrorProps {
    error: Error,
    reset: () => void,
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <>
            <h1> Ошибка </h1>
            <Button className="bg-slate-500 hover:bg-slate-700" onClick={reset}>Обновить страницу</Button>
        </>
    )
}