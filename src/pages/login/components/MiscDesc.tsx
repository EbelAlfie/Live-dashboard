import { TitleText } from "../../../component/Text";

export function WelcomeBanner() {
    return(
        <>
            <div className="col d-flex justify-content-center align-items-center">
                <TitleText className="text-default" text="This is live dash board, oke?" />
            </div>
        </>
    )
}