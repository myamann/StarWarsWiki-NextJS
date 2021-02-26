export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = await res.json();
  
    return { props: { data } };
  }
  
  export async function getStaticPaths() {
    const res = await fetch("https://swapi.dev/api/planets");
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
  
  export default function Planets({data}){
      return(
          <div >
              <h1 className="text-center text-3xl font-semibold my-6">{data.name}</h1>
             <div className="flex flex-col items-center">
              <p><span className="font-semibold text-xl">Name:</span> {data.name}</p>
              <p><span className="font-semibold text-xl">Climate:</span> {data.climate}</p>
              <p><span className="font-semibold text-xl">Terrain:</span> {data.terrain}</p>
              <p><span className="font-semibold text-xl">Population:</span> {data.population}</p>
              <p><span className="font-semibold text-xl">Diameter:</span> {data.diameter}</p>
              </div>
  
          </div>
      )
  }