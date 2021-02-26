export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();

  return { props: { data } };
}

export async function getStaticPaths() {
  const res = await fetch("https://swapi.dev/api/people");
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

export default function People({data}){
    return(
        <div >
            <h1 className="text-center text-3xl font-semibold my-6">{data.name}</h1>
           <div className="flex flex-col items-center">
            <p><span className="font-semibold text-xl">Name:</span> {data.name}</p>
            <p><span className="font-semibold text-xl">Gender:</span> {data.gender}</p>
            <p><span className="font-semibold text-xl">Hair Color:</span> {data.hair_color}</p>
            <p><span className="font-semibold text-xl">Height:</span> {data.height}</p>
            <p><span className="font-semibold text-xl">Mass:</span> {data.mass}</p>
            </div>

        </div>
    )
}