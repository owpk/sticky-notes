export interface NoteDto {
    id: number
    cardId: number
    contetn: string
}

export interface CardDto {
    id?: number
    group?: GroupDto
    toggleState: boolean
    content: string
}

export interface GroupDto {
    id: number
    color: string
    name: string
}
