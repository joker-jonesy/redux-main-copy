import {useSelector} from "react-redux";
import {useGetCharactersQuery} from "../app/api.js";
import {Link} from "react-router-dom";

function Characters(){

    const characters = useSelector(state=>state.character)
    const {isLoading} = useGetCharactersQuery();
    console.log(characters)

    return(
        <>
            {isLoading? <h1>Loading...</h1>:characters.map(itm=>
                <Link key={itm.id} to={"/character/"+itm.id}>{itm.name}</Link>
            )}
        </>
    )
}

export default Characters;