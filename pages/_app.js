import GlobalStyle from "../styles";
import { nanoid } from "nanoid";
import Toast from "@/components/Toast";
import StyledToastContainer from "@/components/Styles/StyledToastContainer";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState, useCallback } from "react";
import { uid } from "uid";
import BackgroundAudio from "@/components/BackgroundAudio";
import { formatDate } from "@/utils";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

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
  const [wasDead, setWasDead] = useLocalStorageState("wasDead", {
    defaultValue: false,
  });

  const [timeAlive, setTimeAlive] = useLocalStorageState("timeAlive", {
    defaultValue: 0,
  });

  const [snackbars, setSnackbars] = useState([]);

  const isDead = selectedPet.health === 0;

  // _________________HANDLE STATES FUNCTIONS___________________________

  function handleSelectPet(selectedPetData) {
    setSelectedPet(selectedPetData);
    setSnackbarShown({
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
      setDeceasedPets([
        {
          ...selectedPet,
          id: uid(),
          deathDate: formatDate(new Date()),
          timeAlive,
        },
      ]);
    } else if (isDead && deceasedPets) {
      setDeceasedPets([
        {
          ...selectedPet,
          id: uid(),
          deathDate: formatDate(new Date()),
          timeAlive,
        },
        ...deceasedPets,
      ]);
    }
    setSelectedPet("");
  }

  function handleIncreaseStats(attribute, steps) {
    setSelectedPet((prevPet) => {
      if (prevPet.type === "sloth") {
        const newSatietyValue = Math.min(prevPet.satiety + steps, 120);
        const newEnergyValue = Math.min(prevPet.energy + steps, 60);
        const newHappinessValue = Math.min(prevPet.happiness + steps, 120);
        return {
          ...prevPet,
          satiety: newSatietyValue,
          energy: newEnergyValue,
          happiness: newHappinessValue,
        };
      }
      if (prevPet.type === "cheetah") {
        const newSatietyValue = Math.min(prevPet.satiety + steps, 60);
        const newEnergyValue = Math.min(prevPet.energy + steps, 120);
        const newHappinessValue = Math.min(prevPet.happiness + steps, 120);
        return {
          ...prevPet,
          satiety: newSatietyValue,
          energy: newEnergyValue,
          happiness: newHappinessValue,
        };
      }
      if (prevPet.type === "racoon") {
        const newSatietyValue = Math.min(prevPet.satiety + steps, 120);
        const newEnergyValue = Math.min(prevPet.energy + steps, 120);
        const newHappinessValue = Math.min(prevPet.happiness + steps, 60);
        return {
          ...prevPet,
          satiety: newSatietyValue,
          energy: newEnergyValue,
          happiness: newHappinessValue,
        };
      }
      if (prevPet.type === "dragon") {
        const newSatietyValue = Math.min(prevPet.satiety + steps, 50);
        const newEnergyValue = Math.min(prevPet.energy + steps, 125);
        const newHappinessValue = Math.min(prevPet.happiness + steps, 125);
        return {
          ...prevPet,
          satiety: newSatietyValue,
          energy: newEnergyValue,
          happiness: newHappinessValue,
        };
      }
      if (prevPet.type === "broccoli") {
        const newValue = Math.min(prevPet[attribute] + steps, 100);
        return {
          ...prevPet,
          [attribute]: newValue,
        };
      }
    });
  }
  // __________________________________________________________________

  // _______________HANDLE SUBMIT _____________________________________

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.nameInput.trim() === "") {
      alert("Please insert a Name!");
      return;
    }

    const currentTime =
      mode === "select" ? Date.now() / 1000 : selectedPet.createdAt;

    let updatedPet = {
      ...selectedPet,
      name: data.nameInput,
      lastUpdated: Date.now() / 1000,
      createdAt: currentTime,
      birthday: formatDate(new Date()),
    };
    if (mode === "select" && data.nameInput.trim() === "Doemser") {
      updatedPet = {
        ...updatedPet,
        type: "broccoli",
        health: 100,
        satiety: 100,
        happiness: 100,
        energy: 100,
      };
      handleAddSnackbar("You magically discovered the Doemser!", "special");
    }
    setSelectedPet(updatedPet);

    setMode("livingroom");
  }

  // ___________________________________________________________________

  // __________________________TIME LOGIC_______________________________

  useEffect(() => {
    let interval;
    if (mode !== "select" && selectedPet.health > 0) {
      interval = setInterval(() => {
        setSelectedPet((prevPet) => {
          // calculate reduction based on elapsed time

          const currentTime = Math.floor(Date.now() / 1000);
          const elapsedTime = currentTime - Math.floor(prevPet.lastUpdated);

          const decreaseRate = 1; // value to change stat ticks
          let health = prevPet.health;
          let satiety = prevPet.satiety;
          let energy = prevPet.energy;
          let happiness = prevPet.happiness;

          for (let t = 0; t < elapsedTime; t++) {
            if (satiety > 0) satiety = Math.max(0, satiety - decreaseRate);
            if (energy > 0) energy = Math.max(0, energy - decreaseRate);
            if (happiness > 0)
              happiness = Math.max(0, happiness - decreaseRate);

            const zeroCount =
              (satiety === 0) + (energy === 0) + (happiness === 0);
            const healthDecreaseRate = zeroCount * 2;

            health = Math.max(0, health - healthDecreaseRate);
          }

          if (health === 0 && prevPet.health > 0) {
            setWasDead(true);
            setTimeAlive(Math.floor(currentTime - prevPet.createdAt));
          }

          return {
            ...prevPet,
            energy: energy,
            satiety: satiety,
            happiness: happiness,
            lastUpdated: currentTime,
            health: health,
          };
        });
      }, 100); // Check every 10th of a second
      return () => clearInterval(interval);
    }
  }, [selectedPet, setSelectedPet, setTimeAlive, mode, setWasDead]);

  const ageInSeconds =
    selectedPet && !isDead
      ? Math.floor(Date.now() / 1000 - selectedPet.createdAt)
      : timeAlive;

  // ____________________________Snackbar_______________________________________

  const statThreshold = 40;
  const healthThreshold = 50;

  const [snackbarShown, setSnackbarShown] = useState({
    energy: false,
    satiety: false,
    happiness: false,
    health: false,
  });

  // setSnackbarShown is called inside handleSelectPet

  const handleAddSnackbar = useCallback((message, variant = "success") => {
    const id = nanoid();
    setSnackbars((prevSnackbar) => [
      ...prevSnackbar,
      { id, visible: true, message, variant },
    ]);

    setTimeout(() => {
      setSnackbars((prevSnackbar) =>
        prevSnackbar.map((snackbar) =>
          snackbar.id === id ? { ...snackbar, visible: false } : snackbar
        )
      );
    }, 4500);

    setTimeout(() => {
      handleDeleteSnackbar(id);
    }, 5000);
  }, []);

  function handleDeleteSnackbar(id) {
    setSnackbars((prevSnackbar) =>
      prevSnackbar.filter((snackbar) => snackbar.id !== id)
    );
  }

  useEffect(() => {
    if (selectedPet && !isDead) {
      if (selectedPet.energy < statThreshold && !snackbarShown.energy) {
        handleAddSnackbar(
          `Energy is below 40! Let ${selectedPet.name} sleep!`,
          "sleep"
        );
        setSnackbarShown((prev) => ({ ...prev, energy: true }));
      } else if (selectedPet.energy >= statThreshold && snackbarShown.energy) {
        setSnackbarShown((prev) => ({ ...prev, energy: false }));
      }
      if (selectedPet.satiety < statThreshold && !snackbarShown.satiety) {
        handleAddSnackbar(
          `Satiety is below 40! Feed ${selectedPet.name}`,
          "feed"
        );
        setSnackbarShown((prev) => ({ ...prev, satiety: true }));
      } else if (
        selectedPet.satiety >= statThreshold &&
        snackbarShown.satiety
      ) {
        setSnackbarShown((prev) => ({ ...prev, satiety: false }));
      }
      if (selectedPet.happiness < statThreshold && !snackbarShown.happiness) {
        handleAddSnackbar(
          `Happiness is below 40! Play with ${selectedPet.name}!`,
          "play"
        );
        setSnackbarShown((prev) => ({ ...prev, happiness: true }));
      } else if (
        selectedPet.happiness >= statThreshold &&
        snackbarShown.happiness
      ) {
        setSnackbarShown((prev) => ({ ...prev, happiness: false }));
      }
      if (selectedPet.health < healthThreshold && !snackbarShown.health) {
        handleAddSnackbar(
          `Health is below 50! Take care of ${selectedPet.name}!`,
          "health"
        );
        setSnackbarShown((prev) => ({ ...prev, health: true }));
      } else if (
        selectedPet.health >= healthThreshold &&
        snackbarShown.health
      ) {
        setSnackbarShown((prev) => ({ ...prev, health: false }));
      }
    }
  }, [selectedPet, isDead, snackbarShown, handleAddSnackbar]);
  //_____________________Prevents drag and drop_________________________
  useEffect(() => {
    function preventDragHandler(event) {
      event.preventDefault();
    }

    document.addEventListener("dragstart", preventDragHandler);

    return () => {
      document.removeEventListener("dragstart", preventDragHandler);
    };
  }, []);
  //____________________________________________________________________
  return (
    <>
      <BackgroundAudio />
      <GlobalStyle />

      <StyledToastContainer>
        {snackbars.map((snackbar) => (
          <Toast
            key={snackbar.id}
            snackbar={snackbar}
            onSnackbarClose={handleDeleteSnackbar}
          />
        ))}
      </StyledToastContainer>
      <SWRConfig value={{ fetcher }}>
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
          onAddSnackbar={handleAddSnackbar}
          timeAlive={timeAlive}
        />
      </SWRConfig>
    </>
  );
}
