import React from 'react'

export const Final = () => {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    function confirmationNumber(length) {

        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

    }

    return (
        <div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <p>Thank you for your order!</p>
        <p>Your confirmation number is: {confirmationNumber(10)} </p>

        </div>
    )
}
