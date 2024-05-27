import pets from "@/pets";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Select a Survival Pet</h1>
      </div>
      <section>
        <ul className="petList">
          {pets.map((pet) => {
            return <li key={pet.id}>{pet.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
