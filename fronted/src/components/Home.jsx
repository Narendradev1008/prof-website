import profimage from "../assets/profimage.png";
import AcademicProfiles from './Acadmicprofile'

function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero / Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-10">
        <div className="flex flex-col items-center gap-12 md:flex-row">

          {/* Professor Photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={profimage}
              alt="Dr. Mahmadasraf A. Mulla"
              className="h-105 w-full max-w-md rounded-2xl object-cover shadow-sm"
            />
          </div>

          {/* Introduction */}
          <div>
            <p className="mb-3 mt-10 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Electrical Engineering · SVNIT Surat
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Dr. Mahmadasraf A. Mulla
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Associate Professor
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Teaching, learning and research come together through
              hands-on experiences in power electronics, electrical drives,
              power quality and renewable energy systems.
            </p>
          </div>

        </div>
      </section>


      {/* Teaching Philosophy */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center md:px-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Teaching Philosophy
          </p>

          <p className="mt-8 text-3xl font-medium leading-relaxed tracking-tight text-slate-900 md:text-4xl">
            "Teaching is always combined learning for me,
            and I am not afraid to learn from my students."
          </p>

          <p className="mx-auto mt-8 max-w-5xl text-base leading-8 text-slate-600">
          Industrial Power Electronics (IPEC) and Advanced Power Electronics Lab (APEL) joined me with the students, who have more experience than me in dealing with many technologies. Together with my students, I grow and learn each semester, and it provides me immense satisfaction in learning. I witnessed unlocking the potential of few students and empowering them to take control of their lives. I try to foster a desire to learn, a willingness to identify and improve on weaknesses, and a desire to succeed in each student. These are habits that will allow them to grow throughout their lives.
          </p>
        </div>
      </section>


      {/* Teaching in Action */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">

        <div className="">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Teaching in Action
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Learning beyond the classroom
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            With the contributions of my students, we could establish IPEC and APEL to promote R&D in power electronics facilitating realizing idea to rapid prototyping to filed deployment. Merging research with real-world applications, our research group attempts to improve the performance of power converters and renewable
            energy systems. We are also recognized for our unique initiative of teaching and learning with hands-on approach for a better understanding of power electronics.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row">

          <div className="rounded-2xl border border-slate-200 p-8 transition hover:border-slate-800">
            <h3 className="text-xl font-semibold text-slate-900">
              Industrial Power Electronics Centre
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              A platform connecting power electronics research with
              practical engineering problems and real-world applications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 transition hover:border-slate-800">
            <h3 className="text-xl font-semibold text-slate-900">
              Advanced Power Electronics Laboratory
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              A hands-on environment where students learn by designing,
              building, testing and improving power electronics systems.
            </p>
          </div>

        </div>

    </section>
    {/* About the Professor */}
    <section className="border-t border-slate-200">
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">

    <div className="flex flex-col gap-12 md:flex-row md:items-center">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          About the Professor
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Teaching, research and real-world engineering
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Dr. Mahmadasraf A. Mulla is an Associate Professor in the
          Department of Electrical Engineering at S. V. National
          Institute of Technology, Surat. With over 28 years of teaching
          and research experience, his work focuses on power converter
          design, power quality, electrical drives, renewable energy
          integration and DC-DC converter design.
        </p>

        <button className="mt-8 rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
          Explore Biography →
        </button>
      </div>

      {/* Academic Highlights */}
      <div className="flex flex-wrap gap-4">

        <div className="rounded-2xl w-[calc(50%-0.5rem)] border border-slate-200 p-6 transition hover:border-slate-800">
          <p className="text-3xl font-bold text-slate-900">28+</p>
          <p className="mt-2 text-sm text-slate-500">
            Years of Teaching Experience
          </p>
        </div>

        <div className="rounded-2xl w-[calc(50%-0.5rem)] border border-slate-200 p-6 transition hover:border-slate-800">
          <p className="text-3xl font-bold text-slate-900">100</p>
          <p className="mt-2 text-sm text-slate-500">
            Publications
          </p>
        </div>

        <div className="rounded-2xl w-[calc(50%-0.5rem)] border border-slate-200 p-6 transition hover:border-slate-800">
          <p className="text-3xl font-bold text-slate-900">52</p>
          <p className="mt-2 text-sm text-slate-500">
            Journal Articles
          </p>
        </div>

        <div className="rounded-2xl w-[calc(50%-0.5rem)] border border-slate-200 p-6 transition hover:border-slate-800">
          <p className="text-3xl font-bold text-slate-900">38</p>
          <p className="mt-2 text-sm text-slate-500">
            Conference Papers
          </p>
        </div>
      </div>
    </div>
    </div>
    </section>
    <AcademicProfiles/>
    </main>
  );
}

export default Home;