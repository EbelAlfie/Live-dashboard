
type BadgeProps = {
    isLive: boolean,
    participants: number
}

const LiveBadge: React.FC<BadgeProps> = (props) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <p>{props.participants}</p>
                </div>
                <div className="col">
                    <h4>Live</h4>
                </div>
            </div>
        </>
    )
}

export { LiveBadge }