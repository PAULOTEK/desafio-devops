export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'pendente' | 'concluída';
}
