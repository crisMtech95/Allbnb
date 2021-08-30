import ReactStars from 'react-rating-stars-component';


export default function Stars({ avg }) {
    // console.log("THIS IS THE AVE FROM sTARS", avg)

    return (
        <div className="Stars__container">
            <ReactStars
                count={5}
                size={30}
                edit={false}
                value={avg}
            />
        </div>
    )
}
