import { Spinner } from "@/components/bootstrap"

export default function Loadaer() {
    return (
        <>
            <div className=" m-auto flex flex-row content-center ">
                <Spinner className="" animation="border" />
                <div>Загрузка...</div>
            </div>
        </>
    )
}