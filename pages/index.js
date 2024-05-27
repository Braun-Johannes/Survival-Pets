import pets from "@/pets";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Select a Survival Pet</h1>
      </div>
      <div>
        <ul className="petList">
          {pets.map((pet) => {
            return (
              <li className="petListItem" key={pet.id}>
                {pet.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
