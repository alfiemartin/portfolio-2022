import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section >
      <h1>Projects</h1>
      <h3>Click a card to expand details</h3>
      <div className="mt-4 mb-8 flex flex-col gap-8">
        <ProjectCard
          title="Socially Distant"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="Pressure Precision"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <div className="mt-8">
          <h3>&apos;Older Projects&apos;</h3>
          <h6>Basically not impressive</h6>
        </div>
        <ProjectCard
          title="Previous Portfolios"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="RDM Technology"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
        <ProjectCard
          title="TapFlash"
          description="At the height on the COVID lockdown, me and my brother lauched a
            social media campain to promote a mental health app."
          content={<div></div>}
        />
      </div>
    </section>
  );
};
