import GlobalStyle from "../styles";
import { nanoid } from "nanoid";
import Toast from "@/components/Toast";
import StyledToastContainer from "@/components/Styles/StyledToastContainer";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [selectedPet, setSelectedPet] = useLocalStorageState("selectedPet", {
    defaultValue: {},
  });
  const [mode, setMode] = useLocalStorageState("mode", {
    defaultValue: "select",
  });
  const [deceasedPets, setDeceasedPets] = useLocalStorageState(
    "deceasedPets",
    {}
  );

  const [timeAlive, setTimeAlive] = useState(0);

  const isDead = selectedPet.health === 0;

  // _________________HANDLE STATES FUNCTIONS___________________________

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
    setToastShown({
      energy: false,
      satiety: false,
      happiness: false,
      health: false,
    });
  }
  function handleMode(mode) {
    setMode(mode);
  }

  function handleEliminate() {
    // store pets age
    setTimeAlive(Math.floor(Date.now() / 1000 - selectedPet.createdAt));

    const eliminatedPet = {
      ...selectedPet,
      health: 0,
      energy: 0,
      satiety: 0,
      happiness: 0,
    };
    setSelectedPet(eliminatedPet);
    setMode("livingroom");
  }

  function handleDeletePet() {
    setMode("select");
    if (isDead && !deceasedPets) {
      setDeceasedPets([{ key: uid(), ...selectedPet }]);
    } else if (isDead && deceasedPets) {
      setDeceasedPets([{ ...selectedPet, id: uid() }, ...deceasedPets]);
    }
    setSelectedPet("");
  }

  function handleIncreaseStats(attribute, steps) {
    setSelectedPet((prevPet) => {
      const newValue = Math.min(prevPet[attribute] + steps, 100);
      return {
        ...prevPet,
        [attribute]: newValue,
      };
    });
  }
  // __________________________________________________________________

  // _______________HANDLE SUBMIT _____________________________________

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.nameInput.trim() === "") {
      alert(
        "Wer das hier findet, hat richtig getestet! Danke von den SurvivalPets - Please insert a Name!"
      );
      return;
    }

    const currentTime =
      mode === "select" ? Date.now() / 1000 : selectedPet.createdAt;

    const updatedPet = {
      ...selectedPet,
      name: data.nameInput,
      lastUpdated: Date.now() / 1000,
      createdAt: currentTime,
    };
    setSelectedPet(updatedPet);

    setMode("livingroom");
  }
  // ___________________________________________________________________

  // __________________________TIME LOGIC_______________________________

  useEffect(() => {
    if (selectedPet) {
      const interval = setInterval(() => {
        setSelectedPet((prevPet) => {
          // calculate reduction based on elapsed time
          const currentTime = Date.now() / 1000;
          const elapsedTime = currentTime - prevPet.lastUpdated;
          const reduction = Math.floor(elapsedTime) * 5; // --> parameter for stat reduction

          // decrease stats over time

          if (reduction > 0) {
            if (prevPet.health === 0) {
              return prevPet;
            }
            const newEnergy = Math.min(
              Math.max(prevPet.energy - reduction, 0),
              100
            );
            const newSatiety = Math.min(
              Math.max(prevPet.satiety - reduction, 0),
              100
            );
            const newHappiness = Math.min(
              Math.max(prevPet.happiness - reduction, 0),
              100
            );

            // decrease health based on how many stats are at zero

            const stats = [newEnergy, newSatiety, newHappiness];
            const statsAtZero = stats.filter((value) => value === 0).length;
            const healthReduction = statsAtZero * 2; // --> Parameter for health reduction
            const newHealth =
              statsAtZero > 0
                ? Math.min(Math.max(prevPet.health - healthReduction, 0), 100)
                : prevPet.health;

            if (newHealth === 0) {
              setTimeAlive(Math.floor(currentTime - prevPet.createdAt));
            }
            return {
              ...prevPet,
              energy: newEnergy,
              satiety: newSatiety,
              happiness: newHappiness,
              lastUpdated: currentTime,
              health: newHealth,
            };
          }

          return prevPet;
        });
      }, 100); // Check every 10th of a second
      return () => clearInterval(interval);
    }
  }, [selectedPet, setSelectedPet]);

  const ageInSeconds =
    selectedPet && !isDead
      ? Math.floor(Date.now() / 1000 - selectedPet.createdAt)
      : timeAlive;

  // ____________________________Snackbar_______________________________________

  const [toasts, setToasts] = useState([]);

  const statThreshold = 40;
  const healthThreshold = 50;

  const [toastShown, setToastShown] = useState({
    energy: false,
    satiety: false,
    happiness: false,
    health: false,
  });
  // setToastShown is called inside handleSelectPet

  function handleAddToast(message, variant = "success") {
    const id = nanoid();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, visible: true, message, variant },
    ]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, visible: false } : toast
        )
      );
    }, 4500);

    setTimeout(() => {
      handleDeleteToast(id);
    }, 5000);
  }

  function handleDeleteToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  useEffect(() => {
    if (selectedPet) {
      if (selectedPet.energy < statThreshold && !toastShown.energy) {
        handleAddToast(
          `Energy is below 40! Let ${selectedPet.name} sleep!`,
          "sleep"
        );
        setToastShown((prev) => ({ ...prev, energy: true }));
      } else if (selectedPet.energy >= statThreshold && toastShown.energy) {
        setToastShown((prev) => ({ ...prev, energy: false }));
      }
      if (selectedPet.satiety < statThreshold && !toastShown.satiety) {
        handleAddToast(`Satiety is below 40! Feed ${selectedPet.name}`, "feed");
        setToastShown((prev) => ({ ...prev, satiety: true }));
      } else if (selectedPet.satiety >= statThreshold && toastShown.satiety) {
        setToastShown((prev) => ({ ...prev, satiety: false }));
      }
      if (selectedPet.happiness < statThreshold && !toastShown.happiness) {
        handleAddToast(
          `Happiness is below 40! Play with ${selectedPet.name}!`,
          "play"
        );
        setToastShown((prev) => ({ ...prev, happiness: true }));
      } else if (
        selectedPet.happiness >= statThreshold &&
        toastShown.happiness
      ) {
        setToastShown((prev) => ({ ...prev, happiness: false }));
      }
      if (selectedPet.health < healthThreshold && !toastShown.health) {
        handleAddToast(
          `Health is below 50! Take care of ${selectedPet.name}!`,
          "health"
        );
        setToastShown((prev) => ({ ...prev, health: true }));
      } else if (selectedPet.health >= healthThreshold && toastShown.health) {
        setToastShown((prev) => ({ ...prev, health: false }));
      }
    }
  }, [selectedPet, toastShown, handleAddToast]);

  return (
    <>
      <GlobalStyle />

      <StyledToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onToastClose={handleDeleteToast}
          />
        ))}
      </StyledToastContainer>

      <Component
        {...pageProps}
        onSelectPet={handleSelectPet}
        selectedPet={selectedPet}
        onSubmit={handleSubmit}
        onIncreaseStats={handleIncreaseStats}
        onMode={handleMode}
        onDeletePet={handleDeletePet}
        isDead={isDead}
        mode={mode}
        onEliminate={handleEliminate}
        ageInSeconds={ageInSeconds}
        deceasedPets={deceasedPets}
        onAddToast={handleAddToast}
      />
    </>
  );
}
