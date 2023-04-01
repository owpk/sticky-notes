import { CardDto } from '../rest/rest-types'
import { addCard } from '../rest/RestClient'

export const createNote = (content: string): CardDto => {
    const cardData: CardDto = {
        toggleState: true,
        content: content,
    }
    return addCard(cardData).then(r => r);
}   
