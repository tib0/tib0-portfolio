import { ISourceOptions } from "@tsparticles/engine"

export const EXAMPLE_PATH = 'Hey !'
export const NAME = 'tib0 martin'

const enum MoveDirection {
    bottom = "bottom",
    bottomLeft = "bottom-left",
    bottomRight = "bottom-right",
    left = "left",
    none = "none",
    right = "right",
    top = "top",
    topLeft = "top-left",
    topRight = "top-right",
    outside = "outside",
    inside = "inside"
}

const enum OutMode {
  bounce = "bounce",
  none = "none",
  out = "out",
  destroy = "destroy",
  split = "split"
}

export const CONFIG_HERO_PARTICLES: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "bg-transparent",
      },
    },
    fpsLimit: 42,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.8,
        },
      },
    },
    particles: {
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: OutMode.out,
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 60,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
      },
    },
    detectRetina: true,
  }