const Card = ({user}) => {

    return (
        <div>
            <img className='Quote' src="/quote2.jpg" alt="" />
            <p>{user.phrase}</p>
            <p>{user.author}</p>
        </div>
    );
};

export default Card;