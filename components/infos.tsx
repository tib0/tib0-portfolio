import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import InfosContent from "./infos-content";
import { CONFIG_HERO_PARTICLES } from "@/lib/constants";

const Infos = ({ isDarkState }: any) => {
  const [init, setInit] = useState(false);

  const options: ISourceOptions = useMemo(
    () => ({
      ...CONFIG_HERO_PARTICLES,
      particles: {
        color: {
          value: isDarkState ? "#ffffff" : "#000000",
          opacity: 0.9,
        },
        links: {
          color: isDarkState ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        ...CONFIG_HERO_PARTICLES.particles
      },
      
    }),
    [isDarkState],
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-300 tsparticles-full">
      {init ?
        <>
          <Particles
            id="tsparticles-infos-hero"
            options={options}
            className="min-h-screen"
          />

          <InfosContent />
        </> :
        <>
          <span className="loading loading-infinity loading-lg" />
        </>
      }
    </div>
  )
}

export default Infos
