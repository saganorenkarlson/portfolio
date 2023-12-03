import { Asset, createClient } from 'contentful';

const client = createClient({
    space: process.env.SPACE_ID ?? '',
    accessToken: process.env.CONTENT_ACCESS_TOKEN ?? '',
});

interface ContentfulTechniqueEntry {
    fields: TechniqueEntry;
    contentTypeId: string;
}

export interface TechniqueEntry {
    title: string;
    logo: Asset;
}

interface ContentfulExperienceEntry {
    fields: ExperienceEntry;
    contentTypeId: string;
}

export interface ExperienceEntry {
    period: string;
    title: string;
    company: string;
    description: string;
    techniques: ContentfulTechniqueEntry[];
}

interface ContentfulProjectEntry {
    fields: ProjectEntry;
    contentTypeId: string;
}

export interface ProjectEntry {
    title: string;        
    subtitle: string;
    description: string; 
    content: string;
    github: string;
    link: string;
    year: string;
    media: Asset[];
    thumbnail: Asset;
    video: boolean;
    techniques: ContentfulTechniqueEntry[];
}

export const fetchExperiences = async () => {
    const response = await client.getEntries<ContentfulExperienceEntry>({ content_type: 'experience' });
    return response.items.map(item => item.fields);
};

export const fetchProjects = async () => {
    const response = await client.getEntries<ContentfulProjectEntry>({ content_type: 'project' });
    return response.items.map(item => item.fields);
};

