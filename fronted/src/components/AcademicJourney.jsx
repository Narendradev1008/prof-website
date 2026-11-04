import { useState } from "react";
import { Link } from "react-router-dom";
import { useStatistics } from "../hooks/useStatistics";
import MetricCard from "./ui/MetricCard";
import PageHero from "./ui/PageHero";
import LabSectionHeading from "./ui/SectionHeading";

const education = [
  {
    period: "1989",
    title: "Secondary School Certificate (S.S.C.)",
    institution: "D. S. & B. B. Government High School, Abrama",
    board: "Gujarat Secondary Education Board, Gandhinagar",
    result: "80.86%",
  },
  {
    period: "1991",
    title: "Higher Secondary Certificate (H.S.C.)",
    institution: "Sir C. J. N. Z. Madresa High School, Navsari",
    board: "Gujarat Secondary Education Board, Gandhinagar",
    result: "70.38%",
  },
  {
    period: "1991 – 1995",
    title: "Bachelor of Engineering – Electrical Engineering",
    institution:
      "S. V. National Institute of Technology (formerly SVRCET), Surat",
    thesis: "Conversion of Solar Energy for Domestic Application",
    result: "First Class / Distinction",
    marks: [
      ["B.E. – I", "1992", "64.72%", "First Class"],
      ["B.E. – II", "1993", "60.25%", "First Class"],
      ["B.E. – III", "1994", "68.91%", "Distinction"],
      ["B.E. – IV", "1995", "75.31%", "Distinction"],
    ],
  },
  {
    period: "1995 – 1997",
    title: "Master of Engineering – Electrical Engineering",
    specialization: "Specialisation: Industrial Electronics",
    institution:
      "Faculty of Technology, M. S. University, Vadodara, Gujarat",
    thesis: "A Shunt Active Power Filter - Realisation",
    result: "74.50% — Distinction",
    marks: [
      ["M.E. – Part I", "371 / 550", "67.45%", "Distinction"],
      ["M.E. – Part II", "407 / 550", "74.00%", "Distinction"],
      ["M.E. – Part III", "265 / 300", "88.33%", "Distinction"],
      ["Total", "1043 / 1400", "74.50%", "Distinction"],
    ],
  },
  {
    period: "2002 – 2003",
    title: "Post Graduate Diploma in Information Technology (PGDIT)",
    institution: "Manipal Academy of Higher Education, Manipal, India",
    result: "77.38% — Grade A in both semesters",
    marks: [
      ["Semester I", "664 / 800", "83.00%", "Grade A"],
      ["Semester II", "574 / 800", "71.75%", "Grade A"],
      ["Total", "1238 / 1600", "77.38%", "Grade A"],
    ],
  },
  {
    period: "2010 – 2014",
    title: "Doctor of Philosophy (Ph.D.) – Electrical Engineering",
    institution:
      "Sardar Vallabhbhai National Institute of Technology, Surat",
    thesis:
      "Studies on Control Algorithms for Series Hybrid Active Power Filter",
    defence: "Defence: 23 January 2015",
    supervisors: "Dr. R. Chudamani and Dr. A. Chowdhury",
  },
];

const career = [
  {
    period: "06 Aug 1996 – 21 Jun 1997",
    role: "Lecturer (Adhoc)",
    department: "Electrical Engineering Department",
    institution: "S. V. National Institute of Technology, Surat",
  },
  {
    period: "04 Aug 1997 – 15 Sep 1997",
    role: "Lecturer (Adhoc)",
    department: "Electrical Engineering Department",
    institution: "S. V. National Institute of Technology, Surat",
  },
  {
    period: "16 Sep 1997 – 15 Sep 2010",
    role: "Lecturer",
    department: "Electrical Engineering Department",
    institution: "S. V. National Institute of Technology, Surat",
  },
  {
    period: "Since 16 Sep 2010",
    role: "Associate Professor",
    department: "Electrical Engineering Department",
    institution: "S. V. National Institute of Technology, Surat",
  },
];

const teachingSubjects = [
  "Power Electronics",
  "Advanced Power Electronics",
  "Electrical Drives",
  "Basic Electrical Engineering",
  "Electrical Circuit Analysis",
];

const researchAreas = [
  "Power Converters Designing",
  "Power Quality",
  "Electrical Drives",
  "Renewable Energy Integration",
  "DC-DC Converter Design",
];

function AcademicJourney() {
  const [showAbstract, setShowAbstract] = useState(false);
  const statistics = useStatistics();

  return (
    <main className="site-shell" id="main-content">
      <PageHero
        eyebrow="Academic journey"
        title={<>A journey of learning, teaching &amp; <em>research.</em></>}
        description="Academic qualifications, professional experience, teaching contributions and research interests of Prof. Mahmadasraf A. Mulla."
      >
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {statistics.map((statistic) => (
            <MetricCard key={statistic.key} label={statistic.label} value={statistic.value} />
          ))}
        </div>
      </PageHero>

      {/* Courses taught during teaching career */}
      <section className="lab-section lab-section--mist">
        <div className="lab-container">
          <LabSectionHeading
            eyebrow="Teaching"
            title="Courses Taught"
            description="Core electrical engineering subjects taught throughout the academic career."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teachingSubjects.map((subject, index) => (
              <div key={subject} className="lab-surface flex items-center gap-4 p-4 shadow-none">
                <span className="text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-slate-800">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Career */}
      <section className="lab-section bg-white">
        <div className="lab-container">

          <LabSectionHeading
            eyebrow="Professional Experience"
            title="Teaching Career"
            description="28 years of teaching experience in electrical engineering at SVNIT Surat."
          />

          <div className="lab-timeline mt-10 grid gap-5">

            {[...career].reverse().map((item) => (
              <CareerCard
                key={`${item.period}-${item.role}`}
                item={item}
              />
            ))}

          </div>
        </div>
      </section>

      {/* PhD Research */}
      <section className="lab-section lab-section--mist">
        <div className="lab-container">

          <LabSectionHeading
            eyebrow="Doctoral Research"
            title="Ph.D. Research"
            description="Research focused on power quality improvement and advanced control of hybrid active power filters."
          />

          <div className="lab-surface mt-10 overflow-hidden">

            <div className="h-1.5 bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-300" />

            <div className="p-8 md:p-10">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                2010 – 2014
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Studies on Control Algorithms for Series Hybrid Active Power Filter
              </h3>

              <p className="mt-4 text-slate-600">
                Sardar Vallabhbhai National Institute of Technology, Surat
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <InfoBox
                  title="Supervisors"
                  text="Dr. R. Chudamani and Dr. A. Chowdhury"
                />

                <InfoBox
                  title="Defence Date"
                  text="23 January 2015"
                />

              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">

                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Research Abstract
                </h4>

                <div className="mt-4 text-[15px] leading-8 text-slate-600">

                  <p className="mt-4">
                    This research work includes the study and experimental validation of series hybrid
active power filter (SHAPF) with a novel control algorithm, to compensate source current
harmonics and source voltage unbalances simultaneously. The control algorithm derives
reference voltage for compensating source unbalance from the sequence components and a
reference voltage for compensating harmonic compensation by decomposing source voltage
vector into quantities that represent different components of power. In the proposed method,
the instantaneous power multivector is defined using generalised instantaneous power theory.
                  </p>

                  {showAbstract && (
                    <>
                      <p className="mt-4">
                        This instantaneous power multivector is composed of an average component and oscillating
component. Using vector algebra, it is possible to obtain the voltage vectors corresponding to
these components of power multivector. The separated components of voltage vector
corresponding to oscillating components of instantaneous powers are useful for generating the
reference voltage for SHAPF. The power multivector is expressed in three-phase coordinates
and hence gives a simplified direct formula for the reference voltage generation of SHAPF,
which is computationally less intensive as compared with existing methods of control for
SHAPF.
                      </p>

                      <p className="mt-4">
                        Simulation studies for the more commonly used control algorithm of SHAPF have been carried
out and presented to highlight their advantages and disadvantages. In order to evaluate the
performance of the proposed control algorithm, simulation studies of SHAPF using proposed
control algorithm for various conditions of the source voltage (balanced and unbalanced) and
with different types of harmonic generating loads (current harmonics generating load and
voltage harmonics generating load) have been carried out and the results are presented.
Simulation studies show that the performance of the SHAPF with the proposed algorithm is
better compared with existing methods reported in the literature.
                      </p>

                      <p className="mt-4">
                        Experimental investigations have been carried out for evaluating the performance of the
proposed algorithm with SHAPF. In the experimental prototype the control circuit is developed
using ARM Cortex-M4 STM32F407VGT6 microcontroller. The filtering performance of SHAPF
is tested and the results indicate the effectiveness of the proposed algorithm. The operation of
voltage harmonics generating load (three-phase diode rectifiers with capacitive filter at the DC
side) under unbalanced source conditions draws highly nonlinear and unbalanced currents.
Operation of this configuration under different unbalance conditions is analysed further and
four distinct modes of operation of this configuration are identified. The compensation in all four
distinct modes of operation is done using SHAPF working with the proposed algorithm. Overall,
it has been observed that the THD of source currents is lower than 5 % in all test cases, which
meets the regulations of IEEE 519 standard and the load voltages unbalance is lower than 2
% which meets the regulations of EN 50160 standard. The experimental results confirm the
effectiveness of the proposed control algorithm and also validate the simulation results.
                      </p>

                      <p className="mt-4">
                       Keywords - Active power filter, generalised instantaneous power theory, geometric algebra,
passive filter, power multivector, series hybrid active power filter, voltage vector decomposition.
                      </p>
                    </>
                  )}

                </div>

                <button
                  onClick={() => setShowAbstract(!showAbstract)}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0a3858] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0c4b6d]"
                >
                  {showAbstract ? "Show Less" : "Read More"}

                  <span className="text-lg">
                    {showAbstract ? "↑" : "→"}
                  </span>
                </button>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                <Highlight text="Active Power Filters" />
                <Highlight text="Power Quality" />
                <Highlight text="Harmonic Compensation" />
                <Highlight text="Control Algorithms" />

              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  Areas of Research
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {researchAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="lab-section bg-white">
        <div className="lab-container">

          <LabSectionHeading
            eyebrow="Education"
            title="Academic Qualifications"
            description="A progression from school education to advanced studies and doctoral research in electrical engineering."
          />

          <div className="lab-timeline mt-10 space-y-7">

              {[...education].reverse().map((item) => (
                <EducationCard
                key={`${item.period}-${item.title}`}
                item={item}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Publications & Patent */}
      <section className="lab-section lab-section--mist">

        <div className="lab-container">

          <LabSectionHeading
            eyebrow="Academic Highlights"
            title="Publications & Patent"
            description="A snapshot of major academic contributions."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="lab-surface p-8">

              <p className="text-5xl font-bold tracking-tight text-[#0a3858]">
                100
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Total Publications
              </h3>

              <div className="mt-6 space-y-3 text-slate-600">
                <p>10 — Books / Book Chapters</p>
                <p>52 — Journal Articles</p>
                <p>38 — Conference Articles</p>
              </div>

            </div>

            <div className="lab-surface p-8">

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                Indian Patent
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Multipurpose battery-assisted solar-powered water pumping system
              </h3>

              <p className="mt-4 text-slate-600">
                Indian Patent No. 533999
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-500">
                <p>Filed: 28 May 2020</p>
                <p>Granted: 22 April 2024</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="lab-section lab-section--dark">

        <div className="lab-container max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Explore Further
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Discover the research and academic contributions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore publications, projects, thesis supervision, laboratories
            and other academic activities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link to="/research/publications" className="lab-button">
              Explore Publications
            </Link>

            <Link to="/activities/organized" className="lab-button-secondary">
              Academic Activities
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}


function EducationCard({ item }) {
  return (
    <div className="lab-timeline-item">
      <div className="lab-surface p-7 transition hover:-translate-y-0.5 hover:border-teal-300 md:p-8">

        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
              {item.period}
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
              {item.title}
            </h3>

          </div>

          {item.result && (
            <span className="w-fit rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800">
              {item.result}
            </span>
          )}

        </div>

        <p className="mt-4 font-medium text-slate-700">
          {item.institution}
        </p>

        {item.board && (
          <p className="mt-2 text-sm text-slate-500">
            {item.board}
          </p>
        )}

        {item.specialization && (
          <p className="mt-2 text-slate-600">
            {item.specialization}
          </p>
        )}

        {/* Marks Table */}
        {item.marks && (
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <div aria-label="Academic marks table" className="overflow-x-auto" role="region" tabIndex={0}>

              <table className="w-full min-w-[600px] text-left text-sm">

                <thead className="bg-[#e8f4f7] text-[#082640]">
                  <tr>
                    <th className="px-5 py-3 font-semibold">
                      Examination
                    </th>

                    <th className="px-5 py-3 font-semibold">
                      Years/Marks
                    </th>

                    <th className="px-5 py-3 font-semibold">
                      Percentage
                    </th>

                    <th className="px-5 py-3 font-semibold">
                      Result
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {item.marks.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`border-t border-slate-100 ${
                        index === item.marks.length - 1
                          ? "bg-teal-50 font-semibold"
                          : ""
                      }`}
                    >
                      <td className="px-5 py-3">
                        {row[0]}
                      </td>

                      <td className="px-5 py-3 text-slate-600">
                        {row[1]}
                      </td>

                      <td className="px-5 py-3 text-[#0a3858]">
                        {row[2]}
                      </td>

                      <td className="px-5 py-3 text-teal-700">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        )}

        {item.thesis && (
          <div className="mt-5 rounded-xl border border-teal-100 bg-[#f0f9fa] p-4">

            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
              Thesis / Project
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              {item.thesis}
            </p>

          </div>
        )}

        {item.defence && (
          <p className="mt-4 text-sm text-slate-500">
            {item.defence}
          </p>
        )}

        {item.supervisors && (
          <p className="mt-2 text-sm text-slate-500">
            Supervisors: {item.supervisors}
          </p>
        )}

      </div>
    </div>
  );
}


function CareerCard({ item }) {
  return (
    <div className="lab-timeline-item lab-surface grid gap-4 p-7 transition hover:-translate-y-0.5 hover:border-teal-300 md:grid-cols-[220px_1fr] md:p-8">

      <div>
        <p className="text-sm font-bold leading-6 text-teal-700">
          {item.period}
        </p>
      </div>

      <div>

        <h3 className="text-xl font-bold tracking-tight">
          {item.role}
        </h3>

        <p className="mt-2 font-medium text-slate-700">
          {item.department}
        </p>

        <p className="mt-1 text-slate-500">
          {item.institution}
        </p>

      </div>
    </div>
  );
}


function InfoBox({ title, text }) {
  return (
    <div className="rounded-2xl border border-teal-100 bg-[#f0f9fa] p-5">

      <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
        {title}
      </p>

      <p className="mt-2 font-medium text-slate-800">
        {text}
      </p>

    </div>
  );
}


function Highlight({ text }) {
  return (
    <div className="lab-tag rounded-xl px-4 py-3 text-sm">
      {text}
    </div>
  );
}

export default AcademicJourney;
