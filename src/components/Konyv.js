import konyvLista from "./konyvLista";

export default function Konyv(props) {
    function kosarba(params) {
        console.log(props.index);
        
        
    }
  return (
    <div className="card col -lg-4 col-md-6">
            <div class="card-body">
                <h5 class="card-title">{props.adat.cim}</h5>
                <p class="card-text">{props.adat.leiras}</p>
                <button class="btn btn-success" onCick={kosarba}>Kosárba</button>
            </div>
        </div>
        

  );
}
