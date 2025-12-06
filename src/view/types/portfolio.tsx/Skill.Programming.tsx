export interface Skill {
    language: string;
    width: string;
    height: string;
}

export interface PortfolioSkills {
    'programming-languages': Skill[]
}

export interface PortfolioData {
    portfolio: {
        skills: PortfolioSkills[]
    }
}

export const getLanguages =
    (data: PortfolioData): Skill[] =>
    data.portfolio.skills[0]['programming-languages']
