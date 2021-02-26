export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://swapi.dev/api/vehicles/${id}`);
    const data = await res.json();
  
    return { props: { data } };
  }
  
  export async function getStaticPaths() {
    const res = await fetch("https://swapi.dev/api/vehicles");
    const data = await res.json();
  
    const paths = data.results.map((post) => {
      const urlArr = post.url.split("/");
      const id = urlArr[urlArr.length - 2];
  
      return {
        params: { id },
      };
    });
  
    return { paths, fallback: false };
  }
  
  export default function Vehicles({data}){
      return(
          <div >
              <h1 className="text-center text-3xl font-semibold my-6">{data.name}</h1>
             <div className="flex flex-col items-center">
              <p><span className="font-semibold text-xl">Model:</span> {data.model}</p>
              <p><span className="font-semibold text-xl">Crew:</span> {data.crew}</p>
              <p><span className="font-semibold text-xl">Cargo Capacity:</span> {data.cargo_capacity}</p>
              <p><span className="font-semibold text-xl">Consumables:</span> {data.consumables}</p>
              <p><span className="font-semibold text-xl">Speed:</span> {data.max_atmosphering_speed}</p>
              </div>
  
          </div>
      )
  }