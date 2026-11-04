import { Cpu, Gauge, Zap } from "lucide-react";
import apelBench from "../assets/apel/apel-bench.jpg";
import apelLogo from "../assets/apel/apel-logo.jpg";
import apelTestRig from "../assets/apel/apel-test-rig.jpg";
import PageHero from "./ui/PageHero";
import SectionHeading from "./ui/SectionHeading";

const facilities = [
  "High-performance computers",
  "Power analyzers",
  "Oscilloscopes",
  "Power supplies",
];

const researchAreas = [
  {
    title: "Renewable Energy Systems",
    text: "Power electronics for renewable energy systems.",
  },
  {
    title: "Electric Vehicle Charging",
    text: "Electric vehicle charging technologies.",
  },
  {
    title: "Industrial Applications",
    text: "High-power electronics for industrial applications.",
  },
];

function APELLaboratory() {
  return (
    <main className="site-shell" id="main-content">
      <PageHero
        eyebrow={(
          <span className="flex items-center gap-3">
            <img alt="APEL logo" className="h-8 w-8 rounded-md bg-white object-contain p-0.5" src={apelLogo} />
            SVNIT Surat · Research Laboratory
          </span>
        )}
        title={<>Advanced Power Electronics <em>Laboratory</em> (APEL)</>}
        description="A premier research facility focused on the development of advanced power-electronics technologies and their applications in various fields."
        actions={(
          <>
            <a className="lab-button" href="#facilities">Research facilities</a>
            <a className="lab-button-secondary" href="#projects">Ongoing projects</a>
            <a className="lab-button-secondary" href="#scholars">Research scholars</a>
          </>
        )}
        media={(
          <figure className="lab-media-frame">
            <img alt="APEL laboratory test and control equipment" src={apelTestRig} />
          </figure>
        )}
      />

      <section className="lab-section lab-section--mist scroll-mt-20" id="facilities">
        <div className="lab-container">
          <SectionHeading
            eyebrow="Research facilities"
            title="Equipment for experimentation and analysis."
            description="APEL is equipped with cutting-edge equipment and facilities for research and development activities."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => {
              const Icon = index === 0 ? Cpu : index === 1 ? Gauge : Zap;

              return (
                <div className="lab-surface p-6" key={facility}>
                  <Icon aria-hidden="true" className="h-6 w-6 text-teal-700" />
                  <p className="mt-6 font-semibold text-slate-900">{facility}</p>
                </div>
              );
            })}
          </div>

          <div className="apel-facility-image lab-media-frame mt-10">
            <img
              alt="Power-electronics boards and instruments in APEL"
              className="h-full w-full object-cover object-center"
              src={apelBench}
            />
          </div>
        </div>
      </section>

      <section className="lab-section bg-white">
        <div className="lab-container">
          <SectionHeading eyebrow="Research focus" title="Key areas of APEL research." />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchAreas.map((area) => (
              <article className="lab-surface p-7" key={area.title}>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                  APEL Research
                </p>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lab-section lab-section--mist scroll-mt-20" id="about">
        <div className="lab-container">
          <SectionHeading eyebrow="About APEL" title="Advanced Power Electronics Laboratory" />

          <div className="lab-surface mt-8 space-y-6 p-7 text-[15px] leading-8 text-slate-600 md:p-9">
            <p>
              The <strong>Advanced Power Electronics Laboratory (APEL)</strong> is a
              premier research facility located on the SVNIT campus in Surat, Gujarat,
              India. The lab is focused on the development of advanced power electronics
              technologies and their applications in various fields. APEL is equipped with
              cutting-edge equipment and facilities, including high-performance computers,
              power analyzers, oscilloscopes, power supplies, and more. These resources
              allow researchers to conduct experiments, analyze data, and design new
              technologies that are at the forefront of the field.
            </p>

            <p>
              <strong>APEL&apos;s</strong> research is centered on several key areas,
              including power electronics for renewable energy systems, electric vehicle
              charging technologies, high-power electronics for industrial applications,
              and more. One of the key strengths of APEL is its team of highly skilled
              researchers and engineers. The lab&apos;s staff includes experts in power
              electronics, electrical engineering, computer science, and related fields.
              These professionals bring a wealth of knowledge and experience to the lab&apos;s
              research projects, and are committed to advancing the field through
              innovative research and development.
            </p>

            <p>
              <strong>APEL</strong> has made significant contributions to the field of
              power electronics through its research and development activities. For
              example, the lab has developed novel techniques for high-power conversion and
              control, which are essential for the efficient operation of renewable energy
              systems. Overall, the Advanced Power Electronics Laboratory is a leading
              research facility in the field of power electronics. Its world-class
              equipment, talented team, and innovative research activities are helping to
              advance the state of the art in this important field, and to drive progress
              in areas such as renewable energy, electric vehicles, and more
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default APELLaboratory;
