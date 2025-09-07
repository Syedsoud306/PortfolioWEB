import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}
