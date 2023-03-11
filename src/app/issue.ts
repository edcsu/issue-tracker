export interface Issue {
    issueNo: number;
    title: string;
    description: string;
    priority: 'low' | 'high';
    type: 'Feature' | 'Bug' | 'Documentation';
    created: Date;
    completed?: Date;
}
