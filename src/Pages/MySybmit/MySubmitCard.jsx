

const MySubmitCard = ({ value }) => {
    const {link,name, message,email,status,giveMark,feedback,title,level,marks,photo} = value
    return (
        <div>
            <div className="card  card-side bg-base-100 shadow-xl">
                <figure><img className="h-full w-[250px]" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">Assignment Marks : {marks}</h2>
                    <h2 className="card-title">Obtain marks : {giveMark}</h2>
                    <h2 className="card-title">Feedback : {feedback}</h2>

                    <h2 className="card-title">Status : {status}</h2>
                   
                    
                </div>
            </div>
        </div>

    );
};

export default MySubmitCard;