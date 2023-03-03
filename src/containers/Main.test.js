import { render, screen } from "@testing-library/react";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Main from './Main';

describe("Times reducer testing", ()=>{
    test('Init times values', () => {
        window.history.pushState({}, 'Test page', "/booking");
        render(
            <BrowserRouter initialEntries={"booking"}>
                <Main />
            </BrowserRouter>
        );
        const options = document.querySelectorAll('#res-time>option')
        const options_int = Array.from(options, option => parseInt(option.firstChild.data));
        console.log(options_int);
        expect(options_int).toStrictEqual([17,18,19,20,21]);
    });

})
