import { RiGraduationCapFill } from "react-icons/ri";
import { MdHealthAndSafety, MdPsychologyAlt } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { SiElectronbuilder } from "react-icons/si";
import { PiStrategyBold } from "react-icons/pi";

const secondaryFeatures = [
  {
    name: "Education",
    description:
      "Nurturing education from Kindergarten to university, we provide uniforms, materials, fees, tutorials, supporting holistic learning for children.",
    href: "#",
    icon: RiGraduationCapFill,
  },
  {
    name: "Health",
    description:
      "Tackling HIV/AIDS, we prioritize awareness, tests, care referrals. Education, peers, primary care, reproductive health nurture overall wellness.",
    href: "#",
    icon: MdHealthAndSafety,
  },
  {
    name: "Psychosocial Care and Support",
    description:
      "Our Psychosocial program attends to children's and families' needs through counseling, social support, homes, education, sports, and awareness creation.",
    href: "#",
    icon: MdPsychologyAlt,
  },
  {
    name: "Livelihood",
    description:
      "Empowering youth with skills, education support, startup funds, entrepreneurship. Hope for Children Organization fosters self-reliance and growth.",
    href: "#",
    icon: IoIosPeople,
  },
  {
    name: "Capacity Building",
    description:
      "Empowering communities through groups and Anti-AIDS clubs, advancing rights, governance, peace, and promoting environment protection.",
    href: "#",
    icon: SiElectronbuilder,
  },
  {
    name: "Strategies",
    description:
      "Hope for Children's initiatives encompass education, care, homes, peer education, awareness, capacity building, savings, and income generation.",
    href: "#",
    icon: PiStrategyBold,
  },
];

const ThematicSample = () => {
  return (
    <div className="mx-auto mt-4 grid max-w-[90rem] grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3">
      {secondaryFeatures.map((feature) => (
        <div
          key={feature.name}
          className="flex flex-col  shadow-md p-4 rounded-md bg-white"
        >
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
            <feature.icon
              className="h-5 w-5 flex-none text-primaryColor"
              aria-hidden="true"
            />
            {feature.name}
          </dt>
          <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
            <p className="flex-auto">{feature.description}</p>
            <p className="mt-6">
              <a
                href={feature.href}
                className="text-sm font-semibold leading-6 text-primaryColor"
              >
                Read more <span aria-hidden="true">→</span>
              </a>
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
};

export default ThematicSample;
