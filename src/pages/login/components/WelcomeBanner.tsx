import { TitleText } from "../../../component/Text";

export function WelcomeBanner() {
    return(
        <>
            <section className="col d-flex justify-content-center align-items-center m-2">
                <TitleText className="text-default" text="This is live dash board, oke?" />
            </section>
        </>
    )
}