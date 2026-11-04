import { ArrowRight, BookOpenCheck, FlaskConical } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apelBench from "../assets/apel/apel-bench.jpg";
import ipecBldcDrive from "../assets/ipec/ipec-bldc-drive.jpg";
import { useStatistics } from "../hooks/useStatistics";
import AcademicProfiles from "./AcademicProfile";
import MetricCard from "./ui/MetricCard";
import PageHero from "./ui/PageHero";
import SectionHeading from "./ui/SectionHeading";

const homeStatisticKeys = new Set([
  "teaching_experience",
  "publications",
  "journal_articles",
  "conference_papers",
]);

function LaboratoryQuickLink({ abbreviation, alt, description, image, name, to }) {
  return (
    <Link className="home-lab-link" to={to}>
      <img alt={alt} className="home-lab-link__image" src={image} />
      <span aria-hidden="true" className="home-lab-link__veil" />
      <span className="home-lab-link__content">
        <span className="home-lab-link__eyebrow">Explore laboratory</span>
        <span className="home-lab-link__title">{abbreviation}</span>
        <span className="home-lab-link__name">{name}</span>
        <span className="home-lab-link__description">{description}</span>
        <span className="home-lab-link__action">
          View laboratory
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </span>
    </Link>
  );
}

function Home() {
  const statistics = useStatistics();
  const location = useLocation();
  const teachingExperience = statistics.find(
    (statistic) => statistic.key === "teaching_experience",
  )?.value;
  const highlights = statistics.filter((statistic) => homeStatisticKeys.has(statistic.key));

  useEffect(() => {
    if (location.hash !== "#contact") {
      return undefined;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    let scrollAnimationFrame;
    const animationFrame = window.requestAnimationFrame(() => {
      scrollAnimationFrame = window.requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (scrollAnimationFrame) {
        window.cancelAnimationFrame(scrollAnimationFrame);
      }
    };
  }, [location.hash]);

  return (
    <main className="site-shell" id="main-content">
      <PageHero
        className="home-hero"
        description="Associate Professor · Department of Electrical Engineering · SVNIT Surat"
        eyebrow="Electrical Engineering · SVNIT Surat"
        title="Dr. Mahmadasraf A. Mulla"
      >
        <p className="home-hero__research">Power Electronics <span>Research</span></p>

        <div className="lab-actions home-hero__actions">
          <Link className="lab-button" to="/about/academic-journey">
            Academic journey
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a className="lab-button-secondary" href="#laboratories">
            Explore laboratories
          </a>
        </div>

        <div className="home-hero__metrics">
          {highlights.map((statistic) => (
            <MetricCard
              horizontal
              key={statistic.key}
              label={statistic.label}
              value={statistic.value}
            />
          ))}
        </div>
      </PageHero>

      <section className="home-laboratories scroll-mt-24" id="laboratories">
        <div className="lab-container">
          <p className="home-laboratories__eyebrow">Teaching in action</p>
          <h2 className="sr-only">Explore the laboratories</h2>

          <div className="home-laboratories__grid">
            <LaboratoryQuickLink
              abbreviation="IPEC"
              alt="Industrial Power Electronics Lab drive equipment"
              description="Power-electronics research connected to practical engineering problems and real-world applications."
              image={ipecBldcDrive}
              name="Industrial Power Electronics Centre"
              to="/laboratories/ipec"
            />
            <LaboratoryQuickLink
              abbreviation="APEL"
              alt="Advanced Power Electronics Laboratory equipment"
              description="A hands-on environment for designing, building, testing and improving power-electronics systems."
              image={apelBench}
              name="Advanced Power Electronics Laboratory"
              to="/laboratories/apel"
            />
          </div>

          <p className="home-laboratories__note">
            With the contributions of my students, we could establish IPEC and APEL to promote R&amp;D in power electronics, from rapid prototyping to field deployment. Merging research with real-world applications, our research group works to improve the performance of power converters and renewable energy systems through a hands-on approach to learning.
          </p>
        </div>
      </section>

      <section className="lab-section lab-section--mist">
        <div className="lab-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Teaching philosophy"
            title="Teaching is always combined learning."
            description="A hands-on approach that connects foundational knowledge with practical power-electronics work."
          />

          <div className="lab-surface p-7 md:p-9">
            <div className="flex items-center gap-3 text-teal-800">
              <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.16em]">Learning with students</p>
            </div>
            <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
              “Teaching is always combined learning for me, and I am not afraid to learn from my students.”
            </blockquote>
            <p className="mt-6 leading-8 text-slate-600">
              Industrial Power Electronics (IPEC) and Advanced Power Electronics Lab (APEL) joined me with the students, who have more experience than me in dealing with many technologies. Together with my students, I grow and learn each semester, and it provides me immense satisfaction in learning. I witnessed unlocking the potential of few students and empowering them to take control of their lives. I try to foster a desire to learn, a willingness to identify and improve on weaknesses, and a desire to succeed in each student. These are habits that will allow them to grow throughout their lives.
            </p>
          </div>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="lab-tag">
              <FlaskConical aria-hidden="true" className="h-3.5 w-3.5" />
              About the professor
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Teaching, research and real-world engineering.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Dr. Mahmadasraf A. Mulla is an Associate Professor in the Department of Electrical Engineering at S. V. National Institute of Technology, Surat. With {teachingExperience} years of teaching and research experience, his work focuses on power converter design, power quality, electrical drives, renewable energy integration and DC-DC converter design.
            </p>
          </div>

          <div className="lab-surface grid grid-cols-2 gap-px overflow-hidden bg-slate-200">
            {highlights.map((statistic) => (
              <div className="home-stat-card bg-white p-5 md:p-7" key={statistic.key}>
                <p className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{statistic.value}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AcademicProfiles />
    </main>
  );
}

export default Home;
