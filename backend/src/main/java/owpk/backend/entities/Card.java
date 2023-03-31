package owpk.backend.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Card {
    Long id;
    Group group;
    String title;
    Boolean toggleState;
}
