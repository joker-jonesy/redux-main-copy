import {useParams} from "react-router-dom";
import {useGetCharacterQuery} from "../app/api.js";

function Character(){
    const params = useParams();
    const {data, isLoading}= useGetCharacterQuery(params.id);

    console.log(data);

    return(
        <div>
            {isLoading?<h1>Loading...</h1>:<h1>{data.name}</h1>}
        </div>
    )
}

export default Character;