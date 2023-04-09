import { CardDto } from '../rest/rest-types'
import { addCard, removeCard } from '../rest/RestClient'

export const createNote = (content: string): CardDto => {
    let cardData: CardDto = {
        toggleState: true,
        content: content,
    }
    addCard(cardData).then((result) => (cardData = result))
    if (cardData.id == null) throw new Error('Card id is null')
    return cardData
}

export const removeNote = (id: number) => {
    removeCard(id).then((resp) => {
        if (!resp) throw new Error('Cannot delete note')
    })
}
