import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';

export interface ToggleButtonProps {
    state: boolean;
    callbackFn?: () => void;
}

export const ToggleECButton: FunctionComponent<ToggleButtonProps> = (props: ToggleButtonProps) => {
    return (
        <Button
            style={{ paddingTop: '1px', paddingBottom: '2px' }}
            variant="outline-secondary"
            size="sm"
            onClick={() => props.callbackFn?.()}
        >
            {props.state ? ' – ' : ' + '}
        </Button>
    );
};
