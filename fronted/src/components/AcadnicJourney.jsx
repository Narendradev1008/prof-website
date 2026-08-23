import { useState } from "react";

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

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-teal-900 px-6 py-24 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Academic Journey
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            A Journey of Learning,
            <span className="block text-blue-200">
              Teaching & Research
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Academic qualifications, professional experience, teaching
            contributions and research interests of Prof. Mahmadasrasf A. Mulla.
          </p>
        </div>
      </section>

      {/* Academic Stats */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard number="28" label="Years of Teaching Experience" />
            <StatCard number="100" label="Total Publications" />
            <StatCard number="5" label="Core Teaching Areas" />
            <StatCard number="1" label="Granted Indian Patent" />

          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="Education"
            title="Academic Qualifications"
            description="A progression from school education to advanced studies and doctoral research in electrical engineering."
          />

          <div className="relative mt-14">

            <div className="absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-400 via-teal-400 to-slate-200 md:block" />

            <div className="space-y-10">

              {education.map((item) => (
                <EducationCard
                  key={`${item.period}-${item.title}`}
                  item={item}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* PhD Research */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="Doctoral Research"
            title="Ph.D. Research"
            description="Research focused on power quality improvement and advanced control of hybrid active power filters."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">

            <div className="h-2 bg-gradient-to-r from-blue-600 to-teal-500" />

            <div className="p-8 md:p-10">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                2010 – 2014
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
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

                <h4 className="text-xl font-bold text-slate-900">
                  Research Abstract
                </h4>

                <div className="mt-4 text-[15px] leading-8 text-slate-600">

                  <p>
                    
                  </p>

                  <p className="mt-4">
                    This research work includes the study and experimental validation of series hybrid
active power filter (SHAPF) with a novel control algorithm, to compensate source current
harmonics and source voltage unbalances simultaneously. The control algorithm derives
reference voltage for compensating source unbalance from the sequence components and a
reference voltage for compensating harmonic compensation by decomposing source voltage
vector into quantities that represent different components of poweINR In the proposed method,
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
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
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

            </div>
          </div>
        </div>
      </section>

      {/* Teaching Career */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="Professional Experience"
            title="Teaching Career"
            description="28 years of teaching experience in electrical engineering at SVNIT Surat."
          />

          <div className="mt-14 grid gap-5">

            {career.map((item) => (
              <CareerCard
                key={`${item.period}-${item.role}`}
                item={item}
              />
            ))}

          </div>
        </div>
      </section>

      {/* Teaching + Research */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Teaching
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Courses Taught
            </h2>

            <div className="mt-8 space-y-3">

              {teachingSubjects.map((subject, index) => (
                <div
                  key={subject}
                  className="flex items-center gap-4 rounded-xl bg-blue-50/60 p-4 transition hover:bg-blue-100"
                >
                  <span className="text-sm font-semibold text-blue-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-medium text-slate-800">
                    {subject}
                  </span>
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Research
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Areas of Research
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              {researchAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm text-teal-800"
                >
                  {area}
                </span>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* Publications & Patent */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="Academic Highlights"
            title="Publications & Patent"
            description="A snapshot of major academic contributions."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8">

              <p className="text-5xl font-bold text-blue-700">
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

            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
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
      <section className="bg-gradient-to-r from-slate-950 to-blue-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Explore Further
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Discover the research and academic contributions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Explore publications, projects, thesis supervision, laboratories
            and other academic activities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/research"
              className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-400"
            >
              Explore Research
            </a>

            <a
              href="/activities"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Academic Activities
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}


/* -------------------------------- */
/* Reusable Components               */
/* -------------------------------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        {description}
      </p>

    </div>
  );
}


function StatCard({ number, label }) {
  return (
    <div className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <p className="text-4xl font-bold text-blue-700">
        {number}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}


function EducationCard({ item }) {
  return (
    <div className="relative md:pl-12">

      <div className="absolute left-[9px] top-6 hidden h-3 w-3 rounded-full bg-teal-500 ring-4 ring-teal-100 md:block" />

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-8">

        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {item.period}
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
              {item.title}
            </h3>

          </div>

          {item.result && (
            <span className="w-fit rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">
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

            <div className="overflow-x-auto">

              <table className="w-full min-w-[600px] text-left text-sm">

                <thead className="bg-blue-50 text-blue-900">
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

                      <td className="px-5 py-3 text-blue-700">
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
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
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
    <div className="grid gap-4 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-md md:grid-cols-[220px_1fr] md:p-8">

      <div>
        <p className="text-sm font-semibold leading-6 text-blue-600">
          {item.period}
        </p>
      </div>

      <div>

        <h3 className="text-xl font-bold">
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
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

      <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
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
    <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-medium text-teal-800">
      {text}
    </div>
  );
}

export default AcademicJourney;