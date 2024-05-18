import gGpu1 from "../public/ggpu1.webp";
import gGpu2 from "../public/ggpu2.webp";
import gGpu3 from "../public/ggpu3.webp";
import gGpu4 from "../public/ggpu4.webp";
import gGpu5 from "../public/ggpu5.webp";
import gGpu6 from "../public/ggpu6.webp";
import pGpu1 from "../public/pgpu1.webp";
import pGpu2 from "../public/pgpu2.webp";
import dGpu1 from "../public/dgpu1.webp";

const gamingGPUs = [
  {
    id: 1,
    name: "SNSV G-Force XTX™ 4090",
    description:
      "Super OC Edition with DLSS 3 and chart-topping thermal performance.",
    price: "$1499",
    image: gGpu1,
  },
  {
    id: 2,
    name: "SNSV G-Force XTX™ 4070",
    description:
      "OC Edition with lower temps, and enhanced durability and longevity",
    price: "$649",
    image: gGpu2,
  },
  {
    id: 3,
    name: "SNSV G-Force XTX™ 4060",
    description:
      "Two powerful Axial-tech fans and a 2-slot design for broad compatibility",
    price: "$309",
    image: gGpu3,
  },
  {
    id: 4,
    name: "SNSV Radion™ XR 7900",
    description:
      "Armed to dish out frame rates and advanced cooling to keep your system's vitals in check.",
    price: "$799",
    image: gGpu4,
  },
  {
    id: 5,
    name: "SNSV Radion™ XR 7800",
    description:
      "Optimized inside and out for lower temps and maximize durability",
    price: "$499",
    image: gGpu5,
  },
  {
    id: 6,
    name: "SNSV Radion™ XR 7600",
    description:
      "Brings ultra high frame rates for today's most popular titles for immersive and seamless gaming",
    price: "$339",
    image: gGpu6,
  },
];

const professionalGPUs = [
  {
    id: 1,
    name: "SNSV ProDesign G-Force XTX™ 4070",
    description:
      "Brings elegant and minimalist style to empower creator PC builds with full-scale",
    price: "$749",
    image: pGpu1,
  },
  {
    id: 2,
    name: "SNSV LowDesign G-Force XTX™ 4060",
    description:
      "Big productivity in a compact design, offering exceptional performance and efficiency",
    price: "$349",
    image: pGpu2,
  },
];

const dataCenterGPUs = [
  {
    id: 1,
    name: "SNSV XTX™ 6000",
    description:
      "Provide what you need to succeed in today's ultra-challenging business environment.",
    price: "$9929",
    image: dGpu1,
  },
];

export default { gamingGPUs, professionalGPUs, dataCenterGPUs };
