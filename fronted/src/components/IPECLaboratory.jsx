import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ipecBldcDrive from "../assets/ipec/ipec-bldc-drive.jpg";
import PageHero from "./ui/PageHero";
import SectionHeading from "./ui/SectionHeading";

const btechCourses = [
  {
    year: "B.Tech. III Year",
    course: "Lab Course: Power Electronic Converters (EE-306)",
    blocks: [
      {
        title: "Lab Exercises — Experimentation — [I] SET - I",
        items: [
          "Study of SCR characteristics and measurement of Latching and Holding current.",
          "Study of IGBT, MOSFET characteristics.",
          "Study of SCR Triggering Circuit Trainer – DC, R, R-C, UJT..",
          "Study of single phase half and fully controlled converter with R, R-L Load.",
          "Study of Fabricate The Following OP-AMP Circuits And Record Their Input / Output Voltage Waveforms & Transfer Characteristics: (i) Active Positive Clipper (ii) Active Negative Clipper (iii) Active Clamper (iv) Active Rectifier.",
        ],
      },
      {
        title: "[II] SET - II",
        items: [
          "Study of single phase SCR full bridge Inverter circuit.",
          "Study of DC chopper using thyristors.",
          "Study of single phase AC Voltage controller using SCR.",
          "Study of three phase inverter with 120° conduction mode.",
        ],
      },
      {
        title: "Simulation Study",
        items: [
          "Simulation of various Power Electronic converter system using PSIM software.",
        ],
      },
    ],
  },
  {
    year: "B.Tech. IV Year",
    course: "Lab Course: Electrical Drives Lab (EE-403)",
    blocks: [
      {
        title: "[I] SET – I",
        items: [
          "To control the speed of DC motor using dual converter without circulating current.",
          "To control the speed of DC motor using chopper.",
          "To control the speed of DC motor using 1-Φ full convertor.",
          "To control the speed of DC motor using 3-Φ full convertor.",
        ],
      },
      {
        title: "[II] SET – II",
        items: [
          "To study induction motor variable frequency drive.",
          "To control the speed of switched reluctance motor (SRM).",
          "To study BLDC motor speed control using PWM technique.",
          "To study speed control of permanent magnet synchronous motor (PMSM) using DSP based trainer kit.",
        ],
      },
      {
        title: "Simulation Study",
        items: [
          "Simulation of various Power Electronic converter system using PSIM software.",
        ],
      },
    ],
  },
];

const mtechCourses = [
  {
    course: "Power Electronics I (EL-601)",
    blocks: [
      {
        title: "[I] SET - I",
        items: [
          "Study of MOSFET IGBT Characteristics.",
          "Study of single phase controlled rectifiers with R and R-L load.",
          "Study of single phase AC voltage controller using SCR as well as using TRIAC with R and R-L load.",
          "Study of single phase SCR full bridge inverter circuit.",
          "Study of three phase SPWM inverter.",
          "Study of three phase fully controlled rectifier with R and R-L load.",
          "Study of three phase AC voltage Regulator.",
          "Study of single phase IGBT based full bridge inverter circuit.",
        ],
      },
      {
        title: "[II] SET – II",
        items: [
          "Simulation of DC - DC Converter: (i) Buck Converter; (ii) Boost Converter; and (iii) Buck-Boost Converter.",
          "Simulation of single phase controlled rectifier different configurations with R, R-L, R-L-E load.",
          "Simulation of three phase controlled rectifier different configurations with R, R-L, R-L-E load.",
          "Simulation of single phase AC voltage controlled rectifier different configurations.",
          "Simulation of three phase AC voltage controlled rectifier different configurations.",
          "Simulation of single phase inverter: (i) Square wave; (ii) Quasi square wave; (iii) Selective harmonic elimination and (iv) sine PWM.",
          "Simulation of three phase inverter: (i) 120 degree mode; (ii) 180 degree mode; (iii) Selective harmonic elimination and (iv) sine PWM.",
        ],
      },
      {
        title: "Simulation Study",
        items: [
          "I continuous evaluation.",
          "II continuous evaluation and at the end of the semester.",
        ],
      },
      {
        title: "Other Setup",
        items: [
          "Study of three phase inverter with 180° conduction mode.",
          "Study of DC-DC Converters.",
        ],
      },
    ],
  },
  {
    course: "Modeling of Electrical Machines and DC Drives (EL-603)",
    blocks: [
      {
        title: "[I] SET - I",
        items: [
          "Speed control of DC motor using single phase full bridge converter.",
          "Speed control of DC motor using three phase full bridge converter.",
          "Speed control of DC motor DC/DC converter.",
          "Speed control of DC motor using Dual converter.",
        ],
      },
      {
        title: "[II] SET – II",
        items: [
          "Speed control of PMSM motor using IPM.",
          "Speed control of SPWM and SVM based inverter fed induction motor drives.",
          "Speed control of SRM drives.",
          "Speed control of BLDC drives.",
        ],
      },
      {
        title: "Simulation Study",
        items: [
          "Close loop control of DC motor drives.",
          "Modeling of DC motor drives.",
          "Modeling of induction machines.",
          "V/F control of induction motor drives.",
          "Vector control of Induction motor drives.",
          "Vector control of synchronous motor drives.",
        ],
      },
    ],
  },
  {
    course: "Power Electronics II (EL-602)",
    blocks: [
      {
        title: "[I] SET - I",
        items: [
          "Study of single phase boost active power factor correction.",
          "Study of 3-level Diode Clamped multi-level Inverter circuit.",
          "Study of Series Resonant Converter.",
          "Study of 12 pulse controlled and uncontrolled rectifier.",
          "Study of Thyristorised APFC [Active Power Factor Correction] circuit.",
          "Study of Dynamic Voltage Regulator.",
          "Study of Push-Pull converter.",
          "Study of open loop and closed loop response of DC-DC flyback converter.",
        ],
      },
      {
        title: "[II] SET – II",
        items: [
          "Simulation of Boost Converter based PFC circuit using control method: (i) Average Current Control; (ii) Peak Current Control; and (iii) Hysteresis Current Control.",
          "Simulation of Resonant Converter Circuits: Series, Parallel.",
          "Simulation of Multi Pulse Converter: (i) 12 pulse; (ii) 18 pulse; and (iii) 24 pulse.",
          "Simulation of Multi-level Inverter: (i) 3-level; and (ii) 5 level.",
          "Simulation of PWM rectifier.",
          "Simulation of PWM AC Chopper circuit.",
        ],
      },
      {
        title: "[III] SET – III",
        items: ["Mini Project"],
      },
      {
        title: "Simulation Study",
        items: [
          "I continuous evaluation.",
          "II during Mid-semester examination.",
          "III continuous evaluation and at the end of the semester.",
        ],
      },
      {
        title: "Extra",
        items: ["Study of PWM Inverter circuit. (SPWM/SVM)"],
      },
    ],
  },
  {
    course: "AC Drives (EL-604)",
    blocks: [
      {
        title: "[I] SET - I",
        items: [
          "Speed control of PMSM motor using IPM.",
          "Speed control of SPWM and SVM based inverter fed induction motor drives.",
          "Speed control of SRM drives.",
          "Speed control of BLDC drives.",
        ],
      },
      {
        title: "[II] SET – II",
        items: [],
      },
      {
        title: "Simulation Study",
        items: [
          "Modeling of induction machines.",
          "V/F control of induction motor drives.",
          "Vector control of Induction motor drives.",
          "Vector control of synchronous motor drives.",
        ],
      },
    ],
  },
];

function IPECLaboratory() {
  return (
    <main className="site-shell" id="main-content">
      <PageHero
        id="home"
        eyebrow="SVNIT Surat · Research Laboratory"
        title={<>Industrial Power Electronics <em>Lab</em> (IPEC)</>}
        description="A state-of-the-art research and teaching facility for practical industrial applications of power electronics."
        actions={(
          <>
            <a className="lab-button" href="#experiments">Experiment list</a>
            <a className="lab-button-secondary" href="#facility">Major facility</a>
          </>
        )}
        media={(
          <figure className="lab-media-frame">
            <img alt="Brushless permanent magnet DC motor drive trainer in IPEC" src={ipecBldcDrive} />
          </figure>
        )}
      />

      <section className="lab-section bg-white">
        <div className="lab-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading eyebrow="Home" title="Industrial power electronics in practice." />

          <div className="lab-surface space-y-5 p-7 text-[15px] leading-8 text-slate-600 md:p-9">
            <p>
              The Industrial Power Electronics Laboratory is a state-of-the-art research
              and teaching facility on the SVNIT campus in Surat, Gujarat, India. The lab
              is equipped with a wide range of power electronics experiment kits
              specifically designed to demonstrate the operation of industrial circuits.
              These kits enable students and researchers to gain practical experience with
              real-world industrial applications of power electronics and to explore the
              latest technologies in the field.
            </p>
            <p>
              The Industrial Power Electronics Laboratory is staffed by highly skilled
              professionals dedicated to advancing the state of the art in industrial power
              electronics through research and education. With its advanced equipment and
              expert staff, the Industrial Power Electronics Laboratory is a crucial
              resource for students, researchers, and industry professionals looking to
              better understand the field and its applications.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-section lab-section--mist scroll-mt-20" id="experiments">
        <div className="lab-container">
          <SectionHeading eyebrow="Experiment list" title="Laboratory courses and exercises." />

          <div className="mt-10 space-y-5">
            {btechCourses.map((course) => (
              <ExperimentCourse course={course} key={course.course} />
            ))}
          </div>

          <div className="mt-14">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              M. Tech. I (Power Electronics and Electrical Drives)
            </p>
            <div className="mt-5 space-y-5">
              {mtechCourses.map((course) => (
                <ExperimentCourse course={course} key={course.course} />
              ))}
            </div>
          </div>

          <Link className="lab-button mt-10" to="/about/academic-journey">
            Explore academic journey
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="lab-section lab-section--dark scroll-mt-20" id="facility">
        <div className="lab-container">
          <SectionHeading eyebrow="Major facility" title="Major Facility" />
          <div className="lab-surface-dark mt-8 p-8">
            <p className="text-lg font-medium text-slate-700">Site under construction....</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExperimentCourse({ course, open = false }) {
  return (
    <details className="group lab-surface overflow-hidden" open={open}>
      <summary className="lab-detail-summary cursor-pointer list-none px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            {course.year && <p className="text-sm font-bold text-teal-700">{course.year}</p>}
            <h3 className="mt-1 text-xl font-bold text-slate-900">{course.course}</h3>
          </div>
          <span className="text-2xl font-light text-teal-700 transition group-open:rotate-45">+</span>
        </div>
      </summary>

      <div className="border-t border-slate-200 bg-white p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {course.blocks.map((block) => (
            <div key={block.title}>
              <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
                {block.title}
              </h4>
              <ol className="mt-4 space-y-3 pl-5 text-sm leading-6 text-slate-600 marker:font-semibold marker:text-teal-700">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
}

export default IPECLaboratory;
