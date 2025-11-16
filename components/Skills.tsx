interface SkillsProps {
  proficient: string[];
  intermediate: string[];
  learning: string[];
}

type SkillLevel = 'expert' | 'intermediate' | 'learning';

interface SkillItem {
  name: string;
  level: SkillLevel;
  percentage: number;
}

export function Skills({ proficient, intermediate, learning }: SkillsProps) {
  // Combine all skills into a single array with their proficiency levels
  const allSkills: SkillItem[] = [
    ...proficient.map(skill => ({ name: skill, level: 'expert' as SkillLevel, percentage: 100 })),
    ...intermediate.map(skill => ({ name: skill, level: 'intermediate' as SkillLevel, percentage: 100 })),
    ...learning.map(skill => ({ name: skill, level: 'learning' as SkillLevel, percentage: 100 })),
  ];

  return (
    <div className="skills-list">
      {allSkills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <span className="skill-name">{skill.name}</span>
          <span className={`skill-circle skill-circle--${skill.level}`}></span>
        </div>
      ))}
    </div>
  );
}
