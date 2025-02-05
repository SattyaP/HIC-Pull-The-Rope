import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        socket.timeout(5000).emit('create-something', value, () => {
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input className='form-control' onChange={e => setValue(e.target.value)} />

            <button className='btn btn-success' type="submit" disabled={isLoading}>
                Submit
            </button>
        </form>
    );
}
