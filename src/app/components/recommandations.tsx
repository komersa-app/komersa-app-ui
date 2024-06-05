import Skeleton from "./skeleton/skeleton";

export default function Recommandation() {
    return(
        <div className="flex flex-col items-center ">
            <h1 className="text-center text-5xl font-[700]">Recommandations</h1>
            <ul className="flex gap-5 flex-row flex-wrap">
                { Array.from({ length: 3 }).map((_,i) =>{
                    return <li key={i}><Skeleton /></li>
                })}
            </ul>
        </div>
    );
}