import Container from "react-bootstrap/Container";
import ProjectCard from "../../components/ProjectCard";
// import { researchProjects } from "../../data/research";
import { researchProjects } from "@/data/research";

export default function ResearchPage() {

  // const sortedProjects = [...researchProjects].sort((a, b) => b.year - a.year);
  const grouped = researchProjects.reduce((acc, project) => {
  const year = project.year;
  if (!acc[year]) acc[year] = [];
  acc[year].push(project);
  return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <main className="page-content container" style={{ paddingTop: "120px", maxWidth: "900px", margin: "0 auto"}}>
    <Container className="py-4">
        {/* <h1 className="text-3xl mb-4">Research Project</h1> */}

      <p className="research-note">
      *For full research publications, please visit my{" "}
      <a
        href="https://scholar.google.com/citations?user=TAFiQBMAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Scholar page
      </a>.
    </p>


        {/* section by year */}
        {years.map((year) => (
          <section key={year} className="mb-5">

            {/* year */}
            <h4 className="text-2xl font-semibold mb-4">{year}</h4>

            {/* projects list */}
            <div className="row g-4">
              {grouped[year].map((item) => (
                <div key={item.slug}>
                  <ProjectCard
                    item={{
                      title: item.title,
                      image: item.thumbnail,
                      slug: item.slug,
                      conference: item.conference,
                      type: "research",
                      pdf: item.pdf,
                      description: item.description,
                      year: item.year,
                    }}/>
                </div>
              ))}
            </div>
          </section>
        ))}

      </Container>
    </main>
  );
}