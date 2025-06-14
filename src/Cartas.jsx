import './cartas.css'
function Cartas(proms)
{
    return(
        <div className='PrinCartas'>
        <div className="carta">
            <div className="imCarta">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiO6750aWeY1dAT6bGRNQ9fgByA-eVEPhbQ&s" alt="" />
            </div>
            <div className="titCarta">
                <h1></h1>
                <h3>Milton Cortez</h3>
            </div>
        </div>

        <div className="carta">
            <div className="imCarta">
                <img src="https://estaticos-television.unitel.bo/binrepository/853x480/217c0/420d480/none/160810533/TXKJ/claudia-arce_101-9927942_20240911180419.jpg" alt="" />
               
            </div>
            <div className="titCarta">
                <h1></h1>
                <h3>Claudia Arce</h3>
            </div>
        </div>

        <div className="carta">
            <div className="imCarta">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oPUU9BHpauGDXrZQAu1CBAedPS5R-9hviw&s" alt="" />
            </div>
            <div className="titCarta">
                <h1></h1>
                <h3>Carla Ortiz</h3>
            </div>
        </div>
        </div>
    );
}
export default Cartas;