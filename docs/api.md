# Entites:
```json
CardViewDto {
    CardDto card
    NoteDto note
}
```

```json
CardDto {
    id: 123
    group: { 
        id: 2
        color: red
        name: java
    }
    content: "asd"
    toggleState: true
}
```
```json
NoteDto {
    id: 11
    cardId: 123
    content: "Hello world!"
}
```

# REST Api

GET     cards                               -> CardDto[]
POST    cards:                  (CardDto)   -> CardDto
DELETE  cards/{id}                          -> Boolean
PUT     cards/{id}:             (CardDto)   -> CardDto

## create 'note' record and bind it to specific card 
POST    cards/notes/{id}        (byte[])    -> CardDto

## change content for card with id 
PUT     cards/notes/{id}        (byte[])    -> CardDto

## create draft note for card with id
POST    cards/notes/draft/{id}  (byte[])    -> CardDto

## set content for specific card with id from history
POST    cards/history/{id}                  -> CardDto

## get notes list for specific card with id sorted by timestamp
GET     cards/history/{id}                  -> NoteDto[]

> WS Api !TODO

-- user login and connect to 'notes receiver' web socket

## create card lifecycle:
```
1. create card (POST cards)
    - creates empty card with no group 
    - creates empty draft note record
    - return card id to client
```

# put note to card lifecycle
```
1. set card content with click/tap to 'note input field'
    - create websocket room with 'card id'
    - save ws user events to local cache
```

```
1.1 user decides to leave 'note input field' without saving
    - get draft body
    - append ws user events to draft body
    - update draft to database
```

```
1.2 user decides to save card
    - get draft body
    - append ws user events to draft body
    - create new note as no draft with current timestamp

```

# restore note from history lifecycle
```
1. request history for card
    - returns all notes by card id with 'draft false' sorted by timestamp asc
```

```
2. select note to restore
    - save current draft as new note
    - set restored note as draft
    - put restored note data to note input field
```
