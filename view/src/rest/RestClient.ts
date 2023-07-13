import * as rm from 'typed-rest-client/RestClient'
import { CardDto, NoteDto } from './rest-types'

const baseUrl = 'http://localhost:8080'

const client = new rm.RestClient(baseUrl)

export const listCards = async (): Promise<CardDto[]> => {
    let resp: rm.IRestResponse<CardDto[]> = await client.get<CardDto[]>('')
    return resp.result!
}

export const addCard = async (card: CardDto): Promise<CardDto> => {
    let resp: rm.IRestResponse<CardDto> = await client.create<CardDto>('', card)
    return resp.result!
}

export const removeCard = async (id: number): Promise<boolean> => {
    let resp: rm.IRestResponse<boolean> = await client.del<boolean>(`${id}`)
    return resp.result!
}

export const updateCard = async (id: number, card: CardDto): Promise<CardDto> => {
    let resp: rm.IRestResponse<CardDto> = await client.update<CardDto>(`${id}`, card)
    return resp.result!
}

export const createNote = async (id: number, note: NoteDto): Promise<CardDto> => {
    let resp: rm.IRestResponse<CardDto> = await client.create<CardDto>(`${id}`, note)
    return resp.result!
}
